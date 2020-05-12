import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';
import { softwareEngingeerDesc, familyDesc, gamerDesc, golferDesc } from './passion.constants';

@Component({
  selector: 'app-passion-section',
  templateUrl: './passion.component.html',
  styleUrls: ['./passion.component.scss'],
  animations: [
        trigger('hoverPassion', [
            state('initial', style({
                backgroundColor: '#0a1d49',
                borderColor: '#DEDEDE',
                fontSize: '5rem',
                color: '#DEDEDE'
            })),
            state('final', style({
                backgroundColor: '#e4757e',
                borderColor: '#e4757e',
                fontSize: '5.5rem',
                color: '#0a1d49'
            })),
            transition('initial=>final', animate('200ms 100ms')),
            transition('final=>initial', animate('200ms 100ms'))
        ]),
    ]
})
export class PassionComponent implements OnInit {

    public engineerState: string;
    public engineerDesc: string;
    public familyState: string;
    public familyDesc: string;
    public golferState: string;
    public golferDesc: string;
    public gamerState: string;
    public gamerDesc: string;
    public heroSectionBorderCount: number;
    public viewportHeight: number;

    constructor(private viewportRuler: ViewportRuler) {
        this.engineerState = 'initial';
        this.engineerDesc = softwareEngingeerDesc;
        this.familyState = 'initial';
        this.familyDesc = familyDesc;
        this.golferState = 'initial';
        this.golferDesc = golferDesc;
        this.gamerState = 'initial';
        this.gamerDesc = golferDesc;
    }

    ngOnInit(): void {
        // TODO: Recalc with window resize event;
        // Based on viewport width and 10% border width, calculate how many icons we can fit sized at .4rem and spaced with .5rem (i.e .9);
        this.heroSectionBorderCount = Math.ceil((this.viewportRuler.getViewportSize().width * .1) / (16 * .9));
    }

    // TODO: Hover event for Icons, toggle to white background/ pink icon/ animate.
    public onHover(stateName: string): void {
        switch (stateName) {
            case 'engineer':
                this.engineerState = this.engineerState === 'initial' ? 'final' : 'initial';
                break;
            case 'family':
                this.familyState = this.familyState === 'initial' ? 'final' : 'initial';
                break;
            case 'golfer':
                this.golferState = this.golferState === 'initial' ? 'final' : 'initial';
                break;
            case 'gamerState':
                this.gamerState = this.gamerState === 'initial' ? 'final' : 'initial';
                break;
        }
    }

}
