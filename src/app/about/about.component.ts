import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';
import { throttle } from 'lodash';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
    @ViewChild('photo') photo!: ElementRef<HTMLImageElement>;
    @ViewChild('circle') circle!: ElementRef<HTMLDivElement>;

    ngAfterViewInit(): void {
        this.bounceEffect = throttle(this.bounceEffect.bind(this), 900);
    }

    getRandomSign(): number {
        return Math.random() < 0.5 ? -100 : 100;
    }

    bounceEffect(): void {
        const randomX = this.getRandomSign();
        const randomY = this.getRandomSign();

        gsap.fromTo(this.photo.nativeElement,
            { y: 0, x: 0 },
            { scale: 0.85, y: randomY, x: randomX, skewX: 25, skewY: 25, duration: 0.1, ease: 'elastic.out', yoyo: true, repeat: 1 }
        );

        gsap.fromTo(this.circle.nativeElement,
            { y: 0, x: 0 },
            { scale: 0.9, y: 0, x: 0, skewX: 0, skewY: 0, duration: 0.1, ease: 'elastic.out', yoyo: true, repeat: 1 }
        );
    }
}
