import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-about-section',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    public viewportHeight: number;

    constructor(private viewportRuler: ViewportRuler) { }

    ngOnInit(): void {
        this.viewportHeight = this.viewportRuler.getViewportSize().height;
    }

}
