import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  initState = false;
  hamburger;
  navLinks;
  links;

  constructor() {}

  ngOnInit(): void {
    this.hamburger = document.querySelector('.hamburger');
    this.navLinks = document.querySelector('.nav-links');
    this.links = document.querySelectorAll('.nav-links li');
    console.log(this.navLinks, this.hamburger, this.links);
  }

  onBtnToggle = () => {
    this.navLinks.classList.toggle('open');
  };
}
