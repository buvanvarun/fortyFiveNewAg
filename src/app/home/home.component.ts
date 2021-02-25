import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import SwiperCore, { Mousewheel, Scrollbar } from 'swiper/core';
import { SwiperEvents } from 'swiper/types';
SwiperCore.use([Scrollbar, Mousewheel]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  onSwipe(e: Event): void {}
  onSlideChange(): void {}
  openLink(code: string) {
    switch (code) {
      case 'fb':
        window.open('https://www.facebook.com/fortyfive.bike');
        break;
      case 'ig':
        window.open('https://www.instagram.com/fortyfive.bike/');
        break;
      case 'li':
        window.open('https://www.linkedin.com/company/uton-energia');
        break;
      case 'mail':
        window.location.href =
          'mailto:info@utonenergia.com?subject=Need Info(from website)';
        break;
    }
  }
  openPolicy(value: string) {
    switch (value) {
      case 'refund':
        this.router.navigate(['/refund-policy']);
        break;
      case 'privacy':
        this.router.navigate(['/privacy-policy']);
        break;
      case 'terms':
        this.router.navigate(['/terms-conditions']);
        break;
    }
  }
}
