import { Component } from '@angular/core';
import { Projects, PetProjects, ProjectItemType } from './projects';
import { CommonModule } from '@angular/common';
import { ProjectItemComponent } from '../project-item/project-item.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ProjectItemComponent],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent {
  projects: ProjectItemType[] = Projects;
  petProjects: ProjectItemType[] = PetProjects;
}
