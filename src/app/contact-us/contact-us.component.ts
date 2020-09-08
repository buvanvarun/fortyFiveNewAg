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
  // https://docs.google.com/forms/d/e/1FAIpQLSeQ_OSqUZB-YOtJ2oKnfQjatJRnnAy62K89GzqOpTNjR1w_gw/viewform?usp=pp_url&entry.173606854=R+P+Buvan+Varun&entry.1843898531=buvanvarun2@gmail.com&entry.826827194=4
}
