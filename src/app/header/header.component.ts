import { Component, OnInit, OnDestroy, ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconBehanceComponent } from "../icons/behance/icon-behance.component";
import { IconGithubComponent } from "../icons/github/icon-github.component";
import { IconInstagramComponent } from "../icons/instagram/icon-instagram-component";
import { IconLinkedInComponent } from "../icons/linkedIn/icon-linkedIn.component";
import { LinesComponent } from "../lines/lines.component";

@Component({
  selector: 'app-header',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, LinesComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {
  activeSection: string = 'about';
  sections = ['about', 'experience', 'projects'];
  observer!: IntersectionObserver;
  isScrollListenerDisabled = false;

  navLinks = [
    { title: 'About', to: '#about', id: 'about' },
    { title: 'Experience', to: '#experience', id: 'experience' },
    { title: 'Projects', to: '#projects', id: 'projects' },
  ];

  socials = [
    { link: 'https://www.linkedin.com/in/hanna-kryvaruchka-fog', icon: IconLinkedInComponent },
    { link: 'https://github.com/Krivoruchko-Anna?tab=repositories', icon: IconGithubComponent },
    { link: 'https://www.behance.net/anna49fogbb16', icon: IconBehanceComponent },
    { link: 'https://www.instagram.com/anna49foggy/profilecard/?igsh=d3VkbXgxc2Fydzcy', icon: IconInstagramComponent }
  ];

  ngOnInit() {
    this.observer = new IntersectionObserver(
        (entries) => {
          const visibleSection = entries.find((entry) => entry.isIntersecting);
          if (visibleSection && !this.isScrollListenerDisabled) {
            this.activeSection = visibleSection.target.id;
          }
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50% 0px',
        }
    );

    this.sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) this.observer.observe(element);
    });
  }

  ngOnDestroy() {
    this.sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) this.observer.unobserve(element);
    });
  }

  updateActiveSection(link: string) {
    this.activeSection = link;
  }

  disableListener() {
    this.isScrollListenerDisabled = true;
    setTimeout(() => {
      this.isScrollListenerDisabled = false;
    }, 500);
  }
}
