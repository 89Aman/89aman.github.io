import React, { useEffect, useRef } from 'react';

type V3 = [number, number, number];

interface Curve {
  pts: V3[];
  kind: 0 | 1 | 2;
  w: number;
  t: number;
  lat: V3;
  twist: number;
  phase: number;
  base: V3;
}

const add = (a: V3, b: V3): V3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a: V3, s: number): V3 => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a: V3, b: V3): V3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];
const norm = (a: V3): V3 => {
  const l = Math.hypot(a[0], a[1], a[2]) || 1;
  return [a[0] / l, a[1] / l, a[2] / l];
};

const HEART: V3 = [0, 0.25, 0];

const buildCurves = (florets = 6) => {
  const F = florets;
  const curves: Curve[] = [];
  const up: V3 = [0, 1, 0];

  for (let i = 0; i < F; i++) {
    const phi = (i / F) * Math.PI * 2;
    const tilt = 1.05;
    const radial: V3 = [Math.cos(phi), 0, Math.sin(phi)];
    const u = norm([Math.sin(tilt) * radial[0], Math.cos(tilt), Math.sin(tilt) * radial[2]]);
    const base: V3 = [radial[0] * 0.13, 0.07, radial[2] * 0.13];
    const e1 = norm(cross(u, Math.abs(u[1]) > 0.9 ? [1, 0, 0] : up));
    const e2 = cross(u, e1);

    for (let j = 0; j < 6; j++) {
      const th = (j / 6) * Math.PI * 2 + i * 0.7;
      const d = add(mul(e1, Math.cos(th)), mul(e2, Math.sin(th)));
      const lat = norm(cross(d, u));
      const phase = (i * 6 + j) * 0.5;

      const L = 1.4;
      const pts: V3[] = [base];
      let p = base;
      const steps = 36;
      for (let k = 1; k <= steps; k++) {
        const s = k / steps;
        const b = 0.45 + 2.3 * Math.pow(s, 1.2);
        p = add(p, mul(add(mul(d, Math.sin(b)), mul(u, Math.cos(b))), L / steps));
        pts.push(p);
      }
      for (let k = 1; k <= steps; k++) {
        const s = k / steps;
        pts[k] = add(pts[k], mul(lat, Math.sin(s * Math.PI * 2.4 + phase) * 0.04 * s));
      }
      curves.push({ pts, kind: 0, w: 0.07, t: 0.015, lat, twist: 0.3, phase, base });

      // Stamen
      const d2 = add(mul(e1, Math.cos(th + 0.5)), mul(e2, Math.sin(th + 0.5)));
      const dh = norm([d2[0], 0, d2[2]]);
      const start = norm(add(u, mul(d2, 0.25)));
      const end = norm(add(add(mul(radial, 0.8), mul(dh, 0.5)), [0, -0.9, 0]));
      const Ls = 1.8;
      const sp: V3[] = [base];
      p = base;
      for (let k = 1; k <= 32; k++) {
        const s = k / 32;
        const m = Math.pow(s, 1.15);
        p = add(p, mul(norm(add(mul(start, 1 - m), mul(end, m))), Ls / 32));
        sp.push(p);
      }
      curves.push({ pts: sp, kind: 1, w: 0.012, t: 0, lat, twist: 0, phase: phase + 1.2, base });
    }
  }

  // Scape / stem
  const stem: V3[] = [];
  for (let k = 0; k <= 30; k++) {
    const s = k / 30;
    stem.push([Math.sin(s * 2) * 0.05, 0.04 - s * 4.2, Math.sin(s * 1.2) * 0.02]);
  }
  curves.push({ pts: stem, kind: 2, w: 0.045, t: 0, lat: [1, 0, 0], twist: 0, phase: 0, base: [0, 0, 0] });

  let radius = 0;
  for (const c of curves) {
    for (const q of c.pts) {
      radius = Math.max(radius, Math.hypot(q[0] - HEART[0], q[1] - HEART[1], q[2] - HEART[2]));
    }
  }
  return { curves, radius };
};

const STRIDE = 13;
const buildMesh = (curves: Curve[]) => {
  const v: number[] = [];
  const idx: number[] = [];
  let count = 0;
  const push = (p: V3, n: V3, s: number, c: Curve) => {
    v.push(p[0], p[1], p[2], n[0], n[1], n[2], s, c.phase, c.kind, 0, c.base[0], c.base[1], c.base[2]);
    return count++;
  };
  const tangent = (pts: V3[], i: number) =>
    norm(sub(pts[Math.min(i + 1, pts.length - 1)], pts[Math.max(i - 1, 0)]));

  for (const c of curves) {
    const n = c.pts.length;
    if (c.kind === 0) {
      const rings: number[][] = [];
      for (let i = 0; i < n; i++) {
        const s = i / (n - 1);
        const T = tangent(c.pts, i);
        let N = norm(cross(T, c.lat));
        let W = cross(N, T);
        const a = c.twist * Math.sin(Math.PI * s);
        const ca = Math.cos(a);
        const sa = Math.sin(a);
        const W2 = add(mul(W, ca), mul(N, sa));
        N = sub(mul(N, ca), mul(W, sa));
        W = W2;
        const hw = c.w * (0.4 + 0.6 * Math.sin(Math.PI * s));
        const p = c.pts[i];
        const k0 = add(add(p, mul(W, hw)), mul(N, c.t));
        const k1 = add(sub(p, mul(W, hw)), mul(N, c.t));
        const k2 = sub(sub(p, mul(W, hw)), mul(N, c.t));
        const k3 = sub(add(p, mul(W, hw)), mul(N, c.t));
        rings.push([
          push(k0, N, s, c), push(k1, N, s, c),
          push(k1, mul(W, -1), s, c), push(k2, mul(W, -1), s, c),
          push(k2, mul(N, -1), s, c), push(k3, mul(N, -1), s, c),
          push(k3, W, s, c), push(k0, W, s, c),
        ]);
      }
      for (let i = 0; i < n - 1; i++) {
        const a = rings[i];
        const b = rings[i + 1];
        for (let f = 0; f < 4; f++) {
          const x = f * 2;
          idx.push(a[x], a[x + 1], b[x], a[x + 1], b[x + 1], b[x]);
        }
      }
    } else {
      const seg = 6;
      let N = norm(cross(tangent(c.pts, 0), c.kind === 2 ? [0, 0, 1] : c.lat));
      const rings: number[] = [];
      for (let i = 0; i < n; i++) {
        const s = i / (n - 1);
        const T = tangent(c.pts, i);
        N = norm(sub(N, mul(T, dot(N, T))));
        const B = cross(T, N);
        const rad = c.w * (c.kind === 1 ? 1 - 0.3 * s : 1);
        rings.push(count);
        for (let k = 0; k <= seg; k++) {
          const a = (k / seg) * Math.PI * 2;
          const nr = add(mul(N, Math.cos(a)), mul(B, Math.sin(a)));
          push(add(c.pts[i], mul(nr, rad)), nr, s, c);
        }
      }
      for (let i = 0; i < n - 1; i++) {
        for (let k = 0; k < seg; k++) {
          const a = rings[i] + k;
          const b = rings[i + 1] + k;
          idx.push(a, a + 1, b, a + 1, b + 1, b);
        }
      }
    }
  }
  return { data: new Float32Array(v), index: new Uint16Array(idx) };
};

const VERT = `
attribute vec3 a_pos;
attribute vec3 a_nrm;
attribute vec4 a_aux;
attribute vec3 a_base;
uniform mat4 u_vp;
uniform mat4 u_model;
uniform vec2 u_offset;
uniform float u_time;
varying vec3 v_n;
varying vec3 v_w;
varying float v_s;
void main() {
  vec3 p = a_pos;
  float k = a_aux.z;
  if (k < 1.5) {
    float amp = (k < 0.5 ? 0.025 : 0.05) * a_aux.x * a_aux.x;
    p += amp * vec3(sin(u_time * 0.9 + a_aux.y), 0.5 * sin(u_time * 1.3 + a_aux.y * 1.7), cos(u_time * 0.7 + a_aux.y * 1.3));
  }
  vec4 w = u_model * vec4(p, 1.0);
  v_w = w.xyz;
  v_n = (u_model * vec4(a_nrm, 0.0)).xyz;
  v_s = a_aux.x;
  gl_Position = u_vp * w;
  gl_Position.xy += u_offset * gl_Position.w;
}
`;

const FRAG = `
precision highp float;
uniform vec3 u_eye;
uniform vec3 u_color;
uniform vec3 u_teal;
uniform float u_alpha;
varying vec3 v_n;
varying vec3 v_w;
varying float v_s;

void main() {
  vec3 n = normalize(v_n);
  vec3 v = normalize(u_eye - v_w);
  if (dot(n, v) < 0.0) n = -n;
  vec3 r = reflect(-v, n);
  
  float key = pow(max(dot(r, normalize(vec3(-0.4, 0.8, 0.4))), 0.0), 12.0) * 2.2;
  float rim = pow(1.0 - max(dot(n, v), 0.0), 2.5) * 1.2;
  float dif = max(dot(n, normalize(vec3(0.3, 0.7, 0.6))), 0.0);

  vec3 col = u_color * (0.05 + 0.25 * dif) + u_teal * key * 0.8 + vec3(1.0, 0.9, 0.9) * pow(key, 3.0) * 0.35 + u_color * rim;
  col = col / (1.0 + col);
  col = pow(col, vec3(1.0 / 2.2));
  gl_FragColor = vec4(col * u_alpha, u_alpha);
}
`;

const perspective = (fovy: number, aspect: number, near: number, far: number): Float32Array => {
  const f = 1 / Math.tan(fovy / 2);
  const m = new Float32Array(16);
  m[0] = f / aspect;
  m[5] = f;
  m[10] = (far + near) / (near - far);
  m[11] = -1;
  m[14] = (2 * far * near) / (near - far);
  return m;
};

const lookAt = (eye: V3, at: V3): Float32Array => {
  const z = norm(sub(eye, at));
  const x = norm(cross([0, 1, 0], z));
  const y = cross(z, x);
  const m = new Float32Array(16);
  m[0] = x[0]; m[4] = x[1]; m[8] = x[2];
  m[1] = y[0]; m[5] = y[1]; m[9] = y[2];
  m[2] = z[0]; m[6] = z[1]; m[10] = z[2];
  m[12] = -dot(x, eye); m[13] = -dot(y, eye); m[14] = -dot(z, eye); m[15] = 1;
  return m;
};

const multiply = (a: Float32Array, b: Float32Array): Float32Array => {
  const o = new Float32Array(16);
  for (let c = 0; c < 4; c++)
    for (let r = 0; r < 4; r++)
      o[c * 4 + r] =
        a[r] * b[c * 4] +
        a[4 + r] * b[c * 4 + 1] +
        a[8 + r] * b[c * 4 + 2] +
        a[12 + r] * b[c * 4 + 3];
  return o;
};

const rotY = (t: number): Float32Array => {
  const c = Math.cos(t);
  const s = Math.sin(t);
  return new Float32Array([c, 0, -s, 0, 0, 1, 0, 0, s, 0, c, 0, 0, 0, 0, 1]);
};

const rotX = (t: number): Float32Array => {
  const c = Math.cos(t);
  const s = Math.sin(t);
  return new Float32Array([1, 0, 0, 0, 0, c, s, 0, 0, -s, c, 0, 0, 0, 0, 1]);
};

export function Interactive3DBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { curves, radius } = buildCurves(6);
    const mesh = buildMesh(curves);

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const sh = gl.createShader(type)!;
      gl.shaderSource(sh, src);
      gl.compileShader(sh);
      return gl.getShaderParameter(sh, gl.COMPILE_STATUS) ? sh : null;
    };

    const vs = compile(gl.VERTEX_SHADER, VERT);
    const fs = compile(gl.FRAGMENT_SHADER, FRAG);
    if (!vs || !fs) return;

    const prog = gl.createProgram()!;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, mesh.data, gl.STATIC_DRAW);

    const ibo = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, mesh.index, gl.STATIC_DRAW);

    const attr = (n: string, size: number, off: number) => {
      const a = gl.getAttribLocation(prog, n);
      if (a < 0) return;
      gl.enableVertexAttribArray(a);
      gl.vertexAttribPointer(a, size, gl.FLOAT, false, STRIDE * 4, off * 4);
    };
    attr('a_pos', 3, 0);
    attr('a_nrm', 3, 3);
    attr('a_aux', 4, 6);
    attr('a_base', 3, 10);

    const loc: Record<string, WebGLUniformLocation | null> = {};
    for (const n of ['u_vp', 'u_model', 'u_offset', 'u_time', 'u_eye', 'u_color', 'u_teal', 'u_alpha']) {
      loc[n] = gl.getUniformLocation(prog, n);
    }

    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(0, 0, 0, 0);

    let W = (canvas.width = window.innerWidth);
    let H = (canvas.height = window.innerHeight);

    const onResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      gl.viewport(0, 0, W, H);
    };
    window.addEventListener('resize', onResize);

    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.tx = (e.clientX / W) * 2 - 1;
      mouse.ty = (e.clientY / H) * 2 - 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    let raf = 0;
    let time = 0;
    let spin = 0.5;

    const render = () => {
      raf = requestAnimationFrame(render);
      time += 0.015;

      mouse.x += (mouse.tx - mouse.x) * 0.05;
      mouse.y += (mouse.ty - mouse.y) * 0.05;
      spin += 0.003;

      gl.viewport(0, 0, W, H);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

      const fov = (32 * Math.PI) / 180;
      const dist = (radius * H) / (0.85 * Math.min(W, H) * Math.tan(fov / 2));
      const el = 15 * (Math.PI / 180);
      const eye: V3 = [HEART[0], HEART[1] + Math.sin(el) * dist, HEART[2] + Math.cos(el) * dist];
      const proj = perspective(fov, W / H, Math.max(0.05, dist - 6), dist + 8);
      const vp = multiply(proj, lookAt(eye, HEART));

      const model = multiply(
        rotY(spin + mouse.x * 0.8),
        rotX(mouse.y * 0.3)
      );

      // Shift position slightly to the right side on wide desktop screens
      const offsetX = W > 1024 ? 0.35 : 0.0;
      const offsetY = -0.05;

      gl.uniformMatrix4fv(loc.u_vp, false, vp);
      gl.uniformMatrix4fv(loc.u_model, false, model);
      gl.uniform2f(loc.u_offset, offsetX, offsetY);
      gl.uniform1f(loc.u_time, time);
      gl.uniform3f(loc.u_eye, eye[0], eye[1], eye[2]);
      // Dual accent color: red-crimson highlights and muted teal reflections
      gl.uniform3f(loc.u_color, 0.88, 0.12, 0.15);
      gl.uniform3f(loc.u_teal, 0.31, 0.60, 0.64);
      gl.uniform1f(loc.u_alpha, 0.75);

      gl.drawElements(gl.TRIANGLES, mesh.index.length, gl.UNSIGNED_SHORT, 0);
    };

    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      gl.deleteBuffer(vbo);
      gl.deleteBuffer(ibo);
      gl.deleteProgram(prog);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full opacity-65 transition-opacity duration-1000"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
