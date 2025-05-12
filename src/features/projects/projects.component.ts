import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  // Define the list of projects with details
  projects = [
    {
      title: 'QueueWisePro',
      type: 'App',
      image: 'assets/projects/queue.png', // Replace with your image path in assets
      description:
        'A cross-platform Flutter app to optimize queue management using real-time updates, AI-driven wait-time predictions, and smart slot bookings.',
      techStack: ['Flutter', 'Firebase', 'AI','MCP' ,'MERN','FCM'],
      githubUrl: 'https://github.com/Shubham-2004/queue_wise_pro_app '
    },
    {
      title: 'Smart Sense',
      type: 'App',
      image: 'assets/projects/smart_sense.png', // Replace with your image path in assets
      description:
        'An industrial maintenance app with AR visualization and computer vision for real-time machine diagnostics.',
      techStack: ['Flutter', 'Firebase', 'AI','AR', 'MERN','YOLOv8'],
      githubUrl: 'https://github.com/anshshr/smart-manufacturing-app '
    },
    {
      title: 'Shubh Yatra',
      type: 'App',
      image: 'assets/projects/shubh_yatra.png', // Replace with your image path in assets
      description:
        'A multilingual railway complaint management system supporting voice/video/photo complaints with NLP-based routing.',
      techStack: ['Flutter', 'Firebase', 'NLP'],
      githubUrl: 'https://github.com/Shubham-2004/ShubhYatra '
    },
    {
      title: 'Elevate Labs',
      type: 'Website',
      image: 'assets/projects/elevate.png', // Replace with your image path in assets
      description:
        'An AI-powered startup accelerator automating SRS docs, landing pages, and logos to reduce launch time by 60%.',
      techStack: ['Angular', 'Firebase', 'Node.js'],
      githubUrl: 'https://elevate-labs.vercel.app'
    },
    {
      title: 'Liberty Labs',
      type: 'Website',
      image: 'assets/projects/liberty.png', // Replace with your image path in assets
      description:'expert advice, community support, and responsive customer service.It empowers users with knowledge and assistance for informed decision-making in legal matters.',
      techStack: ['Django', 'SQLite', 'Gen-AI'],
      githubUrl: 'https://liberty-labs.vercel.app/'
    },
    {
      title: 'AgriCredit X',
      type: 'App',
      image: 'assets/projects/agri.png', // Replace with your image path in assets
      description:
        'A credit evaluation tool for farmers using predictive analytics and interactive dashboards to visualize credit scores and loan eligibility.',
      techStack: ['Flutter', 'Firebase','MERN','ML Models', 'AI'],
      githubUrl: 'https://github.com/anshshr/farmer_app'
    },
    
  ];
}