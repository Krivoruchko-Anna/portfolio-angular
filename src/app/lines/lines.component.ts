import { Component, ElementRef, ViewChildren, QueryList, AfterViewInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

interface Line {
    controlPoint: number;
    initialColor: string;
    secondaryColor: string;
    isInitial: boolean;
}

@Component({
    selector: 'app-lines',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lines.component.html',
    styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements AfterViewInit {
    @ViewChildren('lineRef') lineRefs!: QueryList<ElementRef>;

    lines: Line[] = [
        { controlPoint: 40, initialColor: '#7FBED1', secondaryColor: '#577080', isInitial: true },
        { controlPoint: 60, initialColor: '#D86937', secondaryColor: '#E9DBC9', isInitial: true },
        { controlPoint: 80, initialColor: '#F0A728', secondaryColor: '#AF8260', isInitial: true }
    ];

    constructor(private renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this.lineRefs.forEach((lineRef, index) => {
            this.renderer.listen(lineRef.nativeElement, 'mousemove', (event: MouseEvent) =>
                this.onMouseMove(event, index)
            );
            this.renderer.listen(lineRef.nativeElement, 'mouseleave', () => this.onLeave(index));
        });
    }

    onMouseMove(event: MouseEvent, lineIndex: number): void {
        const line = this.lines[lineIndex];
        const svgBounds = (event.target as SVGElement).getBoundingClientRect();
        const mouseX = event.clientX - svgBounds.left;
        const maxOffset = 50;
        const centerX = line.controlPoint;

        const newControlPoint = Math.min(
            Math.max(centerX + (mouseX - centerX) * 0.9, centerX - maxOffset),
            centerX + maxOffset
        );

        line.isInitial = !line.isInitial;
        const color = line.isInitial ? line.initialColor : line.secondaryColor;

        gsap.to(this.lineRefs.toArray()[lineIndex].nativeElement, {
            duration: 0.2,
            attr: { d: `M ${line.controlPoint},0 Q ${newControlPoint},500 ${line.controlPoint},1000` },
            stroke: color,
            ease: 'power1.out'
        });
    }

    onLeave(lineIndex: number): void {
        const line = this.lines[lineIndex];
        const color = line.isInitial ? line.secondaryColor : line.initialColor;

        gsap.to(this.lineRefs.toArray()[lineIndex].nativeElement, {
            duration: 0.9,
            attr: { d: `M ${line.controlPoint},0 Q ${line.controlPoint},500 ${line.controlPoint},1000` },
            stroke: color,
            ease: 'bounce.out'
        });
    }
}
