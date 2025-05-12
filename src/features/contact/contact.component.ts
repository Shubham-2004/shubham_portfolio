import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Mail,
  MapPin,Globe,Github,Linkedin,Twitter,Send
} from 'lucide-angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [LucideAngularModule]
})
export class ContactComponent {
  // Expose icons so they can be used in the template via [img]
  readonly Icons = {
    Mail,
    MapPin,
    Globe,
    Github,Linkedin,Twitter,Send
  };
}