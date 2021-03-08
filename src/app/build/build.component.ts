import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css'],
})
export class BuildComponent implements OnInit {
  display = [false, false, false, false, false, false, false];
  choices = [0, 0, 0, 0, 0, 0, 0];
  total = 35000;
  summary = false;
  buyUrl = '0000000';
  constructor(private router: Router) {}

  basics = [
    'Bike with the selected options',
    'Mobile App',
    '2 years Warrenty on motor and battery',
  ];

  premiums = [
    'Over the air updates & remote diagnostics',
    'Theft detection notifications',
    '2 Years maintenance & warranty on motor & battery',
  ];

  changeDisplay = (index) => {
    this.display.forEach((el, i) => {
      if (i === index) {
        this.display[i] = true;
      } else {
        this.display[i] = false;
      }
    });
  };

  generateBuyUrl() {
    let url = this.choices.toString();
    this.buyUrl = url.replace(/,/g, '');
  }
  setChoice = (index, e) => {
    this.choices.forEach((el, i) => {
      if (i === index && this.choices[i] != e) {
        if (this.choices[i] === 0) {
          this.calculatePrice(i, 'add');
        } else {
          this.calculatePrice(i, 'sub');
        }
        this.choices[i] = e;
        this.generateBuyUrl();
      }
    });
  };

  formatter = new Intl.NumberFormat('en-IN', {
    currency: 'INR',
  });

  setSummary() {
    this.summary = true;
  }

  onCross() {
    this.summary = false;
  }

  calculatePrice = (index, el) => {
    if (el === 'add') {
      if (index === 1) {
        this.total += 2000;
      } else if (index === 2) {
        this.total += 1000;
      } else if (index === 3) {
        this.total += 2000;
      } else if (index === 4) {
        this.total += 1500;
      } else if (index === 5) {
        this.total += 6500;
      } else if (index === 6) {
        this.total += 3000;
      } else {
        this.total += 0;
      }
    } else if (el === 'sub') {
      if (index === 1) {
        this.total -= 2000;
      } else if (index === 2) {
        this.total -= 1000;
      } else if (index === 3) {
        this.total -= 2000;
      } else if (index === 4) {
        this.total -= 1500;
      } else if (index === 5) {
        this.total -= 6500;
      } else if (index === 6) {
        this.total -= 3000;
      } else {
        this.total += 0;
      }
    }
  };
  buyProduct = () => {
    const color = this.choices[0] ? 'Grey' : 'Black';
    const goToUrl = `https://pages.razorpay.com/fortyfivebike?color=${color}&range=${this.choices[1]}&charging_time=${this.choices[2]}&smart_lock=${this.choices[3]}&fenders=${this.choices[4]}`;
    window.open(goToUrl, '_self');
  };
  ngOnInit(): void {}
}

// &intelligent_systems_service=${this.choices[5]}&tyre_pressure_monitoring=${this.choices[6]}