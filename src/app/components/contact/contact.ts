import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Github, Linkedin, Mail, Send, Globe, CalendarCheck, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Mail = Mail;
  readonly Send = Send;
  readonly Globe = Globe;
  readonly CalendarCheck = CalendarCheck;
  readonly ArrowRight = ArrowRight;

  contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'shasarita23@gmail.com',
      href: 'mailto:shasarita23@gmail.com',
      color: '#4F98A3',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'sharmaaman012',
      href: 'https://linkedin.com/in/sharmaaman012',
      color: '#0077b5',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: '89Aman',
      href: 'https://github.com/89Aman',
      color: '#6e5494',
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'amanworks.runs-on.dev',
      href: 'https://amanworks.runs-on.dev',
      color: '#6DBF8F',
    },
  ];
}
