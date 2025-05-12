import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  imports: [CommonModule, RouterModule],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  // Define the list of technical skills with icons and descriptions
  skills = [
    {
      name: 'Flutter',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Flutter_logo.png/1200px-Flutter_logo.png ',
      description: 'Cross-platform app development framework for building high-performance mobile apps.'
    },
    {
      name: 'Django',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Django_logo.svg/1200px-Django_logo.svg.png ',
      description: 'High-level Python web framework for rapid development and clean design.'
    },
    {
      name: 'Angular',
      icon: 'https://angular.io/assets/images/logos/angular/logo-nav @2x.png',
      description: 'A TypeScript-based framework for building dynamic web applications.'
    },
    {
      name: 'Firebase',
      icon: 'https://www.gstatic.com/devrel-devsite/prod/va9e1e0c90da002e9f963f6b17005978e23355d6a3428638e2c48d48a9f091228/firebase/images/lockup.png ',
      description: 'Backend-as-a-service platform for authentication, databases, and cloud messaging.'
    },
    {
      name: 'AI/AR Technologies',
      icon: 'https://www.gstatic.com/devrel-devsite/prod/v4e0f7a0c/images/ar/logo.png ',
      description: 'Artificial Intelligence and Augmented Reality solutions for innovative applications.'
    },
    {
      name: 'Database Management',
      icon: 'https://cdn-icons-png.flaticon.com/512/3096/3096616.png ',
      description: 'Expertise in MySQL, Firebase, Supabase, and MongoDB for data management.'
    }
  ];
}