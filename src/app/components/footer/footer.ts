import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, Heart, ArrowUp, Terminal } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Heart = Heart;
  readonly ArrowUp = ArrowUp;
  readonly Terminal = Terminal;

  quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  socialLinks = [
    { icon: Github, href: 'https://github.com/89Aman', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sharmaaman012', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:shasarita23@gmail.com', label: 'Email' },
  ];

  scrollToSection(event: Event, href: string) {
    event.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navbarHeight = 80;
      const offsetPosition = element.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
