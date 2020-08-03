import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specs',
  templateUrl: './specs.component.html',
  styleUrls: ['./specs.component.css'],
})
export class SpecsComponent implements OnInit {
  features: string[] = [
    `Over the air updates
    & remote diagnostics.`,
    `Theft detection
  notifications.`,
    `2 Years maintenance &
  warranty on motor &
  battery.`,
  ];
  constructor() {}

  ngOnInit(): void {}
}
