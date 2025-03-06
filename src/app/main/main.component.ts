import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { ExperienceComponent } from "../experience/experience/experience.component";
import { ProjectsComponent } from '../projects/projects/projects.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [AboutComponent, ExperienceComponent, ProjectsComponent]
})
export class MainComponent {}
