import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss'],
})
export class BuildComponent implements OnInit {
  // option indices depend on features object indices
  display = [false, false, false, false, false];
  addOnPrices = [1000, 2000, 1500, 2000, 1500];
  choices = [0, 0, 0, 0, 0];
  total = 35000;
  summary = false;
  buyUrl = '0000000';
  isChecked = [];
  features: {
    feature: string;
    option1: string;
    option2: string;
  }[] = [
    { feature: 'color', option1: 'Black', option2: 'Grey' },
    {
      feature: 'Battery',
      option1: '43 Km',
      option2: '65 km',
    },
    {
      feature: 'Charger',
      option1: '3 Hrs',
      option2: '75 Min',
    },
    { feature: 'Locking', option1: 'Cable', option2: 'Smart' },
    { feature: 'Fenders', option1: 'Yes', option2: 'No' },
  ];
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
  checkBoxChange(index: number, isChecked) {
    this.display[index] = isChecked;
    this.calculateTotal();
  }

  calculateTotal() {
    this.total = 35000;
    this.display.forEach((value, index) => {
      if (value) {
        this.total += this.addOnPrices[index];
      }
    });
  }

  eventEmitted(event) {
    console.log(event);
  }
  preorderpage() {
    const url =
      'https://pages.razorpay.com/fortyfivebike?bike_color=Grey&range_plus=0&charging_plus=0&electronic_locking=0&intelligent_systems_service=0&tyre_pressure_monitoring=0&fenders=0';
    window.open(url, '_self');
  }
  generateBuyUrl() {
    let url = this.choices.toString();
    this.buyUrl = url.replace(/,/g, '');
  }

  buyProduct = () => {
    const color = this.choices[0] ? 'Grey' : 'Black';
    const goToUrl = `https://pages.razorpay.com/fortyfivebike?bike_color=${color}&range_plus=${this.choices[1]}&charging_plus=${this.choices[2]}&electronic_locking=${this.choices[3]}&intelligent_systems_service=${this.choices[5]}&tyre_pressure_monitoring=${this.choices[6]}&fenders=${this.choices[4]}`;
    window.open(goToUrl, '_self');
  };
  ngOnInit(): void {}
}
