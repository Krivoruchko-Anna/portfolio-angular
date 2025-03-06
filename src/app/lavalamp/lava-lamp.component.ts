import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Circle {
    id: number;
    left: string;
    size: number;
    delay: string;
    gradient: string;
}

@Component({
    selector: 'app-lava-lamp',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lava-lamp.component.html',
    styleUrls: ['./lava-lamp.component.scss']
})
export class LavaLampComponent {
    circles: Circle[] = [
        { id: 1, left: '14%', size: 100, delay: '9s', gradient: 'var(--lava-orange), var(--lava-orange-1)' },
        { id: 2, left: '32%', size: 120, delay: '5s', gradient: 'var(--lava-orange-1), var(--yellow-lava)' },
        { id: 3, left: '60%', size: 80, delay: '0s', gradient: 'var(--biege), var(--light-brown)' },
        { id: 4, left: '85%', size: 90, delay: '11s', gradient: 'var(--lava-orange), var(--red)' },
        { id: 5, left: '9px', size: 94, delay: '10s', gradient: 'var(--lava-orange-2), var(--yellow-lava)' },
        { id: 6, left: '92%', size: 60, delay: '2s', gradient: 'var(--lava-orange), var(--lava-orange-1)' },
    ];

    middleCircles: Circle[] = [
        { id: 7, left: '49%', size: 90, delay: '3s', gradient: 'var(--lava-orange), var(--red)' },
        { id: 8, left: '25%', size: 94, delay: '1s', gradient: 'var(--light-brown), var(--biege)' },
    ];
}
