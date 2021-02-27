import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  email : string ='';
  visibility : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  clicked(){
    this.visibility= false;
  }


}
