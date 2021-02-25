import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-preorder-button',
  templateUrl: './preorder-button.component.html',
  styleUrls: ['./preorder-button.component.scss'],
})
export class PreorderButtonComponent implements OnInit {
  @Input('isDark') isDark: boolean;
  @Input('content') content: string;

  constructor() {}

  ngOnInit(): void {}
}
