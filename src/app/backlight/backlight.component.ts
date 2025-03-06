import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
    selector: 'app-backlight',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './backlight.component.html',
    styleUrls: ['./backlight.component.scss']
})
export class BacklightComponent implements AfterViewInit, OnDestroy {
    @ViewChild('backlight') backlight!: ElementRef<HTMLElement>;

    private mouseMoveListener!: () => void;

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        const backlightEl = this.backlight.nativeElement;

        gsap.set(backlightEl, {
            width: 500,
            height: 500,
            opacity: 0.2,
            boxShadow: '0 0 100px rgba(121, 88, 73, 0.5)',
        });

        this.mouseMoveListener = this.renderer.listen('document', 'mousemove', (event: MouseEvent) =>
            this.handleMouseMove(event)
        );
    }

    ngOnDestroy(): void {
        this.mouseMoveListener();
    }

    private handleMouseMove(event: MouseEvent): void {
        const backlightEl = this.backlight.nativeElement;
        gsap.to(backlightEl, {
            x: event.clientX - backlightEl.offsetWidth / 2,
            y: event.clientY - backlightEl.offsetHeight / 2,
            duration: 0.1,
            ease: 'power1.out',
        });
    }
}
