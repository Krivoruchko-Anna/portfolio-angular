import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface ExperienceItemType {
  date: string;
  title: string;
  description: string;
  stack: string[];
  link?: string;
}

@Component({
  selector: 'app-experience-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience-item.component.html',
  styleUrls: ['./experience-item.component.scss']
})
export class ExperienceItemComponent {
  @Input() item!: ExperienceItemType;
}
