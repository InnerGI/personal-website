import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public viewportHeight: number;

  constructor(private viewportRuler: ViewportRuler) { }

  ngOnInit(): void {
      this.viewportHeight = this.viewportRuler.getViewportSize().height;
  }
}
