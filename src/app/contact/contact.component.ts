import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  gmail = "isfanbimantara@gmail.com"
  whatsapp = "https://wa.me/081517535402"
  constructor() { }

  ngOnInit(): void {
  }

}
