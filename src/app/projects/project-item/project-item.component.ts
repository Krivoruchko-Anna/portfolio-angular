import { Component, Input } from '@angular/core';

export interface ProjectItemType {
  title: string;
  description: string;
  image: string;
  link: string;
}

@Component({
  selector: 'app-project-item',
  standalone: true,
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {
  @Input() project!: ProjectItemType;
}
