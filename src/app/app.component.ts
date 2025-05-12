import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "../features/home/home.component";
import { HeaderComponent } from "../components/header/header.component";
import { FooterComponent } from "../components/footer/footer.component";
import { AboutComponent } from "../features/about/about.component";
import { ProjectsComponent } from "../features/projects/projects.component";
import { ExperienceComponent } from "../experience/experience.component";
import { ContactComponent } from "../features/contact/contact.component";

@Component({
  selector: 'app-root',
  imports: [HomeComponent, HeaderComponent, FooterComponent, AboutComponent, ProjectsComponent, ExperienceComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portolio';
}
