import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-icon-up',
    standalone: true,
    templateUrl: './icon-up.component.html',
    styleUrls: ['./icon-up.component.scss'],
})
export class IconUpComponent {
    showArrow = false;

    @HostListener('window:scroll', [])
    onScroll(): void {
        this.showArrow = window.scrollY > 300;
    }

    scrollToTop(): void {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
