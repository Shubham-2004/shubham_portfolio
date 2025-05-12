import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Home,
  User,
  Briefcase,
  Star,
  Mail
} from 'lucide-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  // Expose icons so they can be used in the template via [img]
  protected readonly Icons = {
    Home,
    User,
    Briefcase,
    Star,
    Mail
  };

  /**
   * Scrolls to the specified section by ID.
   * @param sectionId The ID of the section to scroll to.
   */
  navigateTo(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80; // Adjust based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}