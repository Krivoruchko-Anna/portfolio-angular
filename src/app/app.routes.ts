import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from "./experience/experience/experience.component";
import { ProjectsComponent } from "./projects/projects/projects.component";

export const routes: Routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'projects', component: ProjectsComponent },
];
