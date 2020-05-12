import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    public downloadResume(): void {
        console.log('resume');
    }

    public email(): void {
        console.log('email');
    }

    public goToLinkedIn(): void {
        console.log('linkedIn');
    }

}
