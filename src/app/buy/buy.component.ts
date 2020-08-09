import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css'],
})
export class BuyComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  summary = true;
  choices;
  total = 35000;
  name = '';
  email = '';
  phone = '';
  address = '';

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

  formatter = new Intl.NumberFormat('en-IN', {
    currency: 'INR',
  });

  setSummary = (val) => {
    this.summary = val;
  };

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.choices = id.split('').map(Number);
    this.calculateTotal();
  }

  buyProduct = () => {
    const color = this.choices[0] ? 'Grey' : 'Black';
    const goToUrl = `https://pages.razorpay.com/fortyfivebike?name=${this.name}&email=${this.email}&phone=${this.phone}&address=${this.address}&bike_color=${color}&range_plus=${this.choices[1]}&charging_plus=${this.choices[2]}&electronic_locking=${this.choices[3]}&intelligent_systems_service=${this.choices[5]}&tyre_pressure_monitoring=${this.choices[6]}&fenders=${this.choices[4]}`;
    window.open(goToUrl);
  };

  calculateTotal = () => {
    if (this.choices[1] === 1) {
      this.total += 2000;
    }
    if (this.choices[2] === 1) {
      this.total += 1500;
    }
    if (this.choices[3] === 1) {
      this.total += 1500;
    }
    if (this.choices[4] === 1) {
      this.total += 1500;
    }
    if (this.choices[5] === 1) {
      this.total += 6500;
    }
    if (this.choices[6] === 1) {
      this.total += 3000;
    }
  };
}
