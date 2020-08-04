import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css'],
})
export class BuildComponent implements OnInit {
  display = [false, false, false, false, false, false, false];
  choices = [0, 0, 0, 0, 0, 0, 0];
  total = 35000;
  constructor() {}

  changeDisplay = (index) => {
    this.display.forEach((el, i) => {
      if (i === index) {
        this.display[i] = true;
      } else {
        this.display[i] = false;
      }
    });
  };
  setChoice = (index, e) => {
    this.choices.forEach((el, i) => {
      if (i === index && this.choices[i] != e) {
        if (this.choices[i] === 0) {
          this.calculatePrice(i, 'add');
        } else {
          this.calculatePrice(i, 'sub');
        }
        this.choices[i] = e;
      }
    });
  };

  formatter = new Intl.NumberFormat('en-IN', {
    currency: 'INR',
  });

  calculatePrice = (index, el) => {
    if (el === 'add') {
      if (index === 1) {
        this.total += 2000;
      } else if (index === 2) {
        this.total += 1500;
      } else if (index === 3) {
        this.total += 1500;
      } else if (index === 4) {
        this.total += 1500;
      } else if (index === 5) {
        this.total += 6500;
      } else if (index === 6) {
        this.total += 3000;
      }
    } else if (el === 'sub') {
      if (index === 1) {
        this.total -= 2000;
      } else if (index === 2) {
        this.total -= 1500;
      } else if (index === 3) {
        this.total -= 1500;
      } else if (index === 4) {
        this.total -= 1500;
      } else if (index === 5) {
        this.total -= 6500;
      } else if (index === 6) {
        this.total -= 3000;
      }
    }
  };
  ngOnInit(): void {}
}
