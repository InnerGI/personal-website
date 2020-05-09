import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-passion-section',
  templateUrl: './passion.component.html',
  styleUrls: ['./passion.component.scss']
})
export class PassionComponent implements OnInit {

    public viewportHeight: number;
    public heroSectionBorderCount: number;

    constructor(private viewportRuler: ViewportRuler) { }

    ngOnInit(): void {
        this.viewportHeight = this.viewportRuler.getViewportSize().height;

        // TODO: Recalc with window resize event;
        // Based on viewport width and 10% border width, calculate how many icons we can fit sized at .4rem and spaced with .5rem (i.e .9);
        this.heroSectionBorderCount = Math.ceil((this.viewportRuler.getViewportSize().width * .1) / (16 * .9));
    }

    // TODO: Hover event for Icons, toggle to white background/ pink icon/ animate.

}
