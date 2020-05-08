import { state, style, transition, animate, keyframes, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ViewportRuler } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  animations: [
    trigger('animate', [
        transition('* => pulse', [
            style('*'),
            animate('{{timing}} ease-in-out',
                keyframes([
                    style({ transform: 'scale(1)' }),
                    style({ transform: 'scale(1.05)' }),
                    style({ transform: 'scale(1)' })
                ])
            )], { params: { timing: '1s'}}
        )
    ])
  ],
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public viewportHeight: number;

  constructor(private viewportRuler: ViewportRuler) { }

  ngOnInit(): void {
      this.viewportHeight = this.viewportRuler.getViewportSize().height;
  }
}
