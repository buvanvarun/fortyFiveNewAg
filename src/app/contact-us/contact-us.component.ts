import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  apply: boolean = false;
  name;
  email;
  yearsOfExp;
  currentOrg;
  degree;

  onApply(val, deg) {
    this.apply = val;
    this.degree = deg;
  }
}
