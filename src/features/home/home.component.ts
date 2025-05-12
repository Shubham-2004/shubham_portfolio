import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('roleText') roleText!: ElementRef;

  // List of roles to cycle through
  private roles = [
    'Flutter Developer',
    'Backend Developer',
    'AI/AR Enthusiast',
    'Open Source Contributor',
    'Software Engineer',
  ];

  // Index to track current role
  private currentIndex = 0;

  ngAfterViewInit(): void {
    this.typeWriterEffect();
  }

  /**
   * Simulates typing effect for roles
   */
  private typeWriterEffect(): void {
    const roleElement = this.roleText.nativeElement;
    const currentRole = this.roles[this.currentIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < currentRole.length) {
        roleElement.textContent += currentRole[charIndex];
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => this.clearText(), 2000); // Wait 2 seconds before clearing
      }
    }, 100); // Adjust typing speed here
  }

  /**
   * Clears the current role text
   */
  private clearText(): void {
    const roleElement = this.roleText.nativeElement;
    let text = roleElement.textContent;

    const interval = setInterval(() => {
      if (text.length > 0) {
        text = text.slice(0, -1); // Remove one character at a time
        roleElement.textContent = text;
      } else {
        clearInterval(interval);
        this.currentIndex = (this.currentIndex + 1) % this.roles.length; // Move to next role
        this.typeWriterEffect(); // Restart typing effect
      }
    }, 50); // Adjust clearing speed here
  }
}