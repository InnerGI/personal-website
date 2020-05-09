import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-welcome-section',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

    public viewportHeight: number;

    constructor(private viewportRuler: ViewportRuler) { }

    ngOnInit(): void {
        // Set section height based on viewport size
        this.viewportHeight = this.viewportRuler.getViewportSize().height * .90;
    }

}
