import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

 

  class_vehicle_cl = "faq-container faq--vehicle";
  class_ownership_cl = "faq-container faq--ownership";
  class_customization_cl = "faq-container faq--customization";

  class_heading_vehicle_cl="faq-heading-container faq-heading-container-vehicle";
  class_heading_ownership_cl = "faq-heading-container faq-heading-container-ownership";
  class_heading_customization_cl = "faq-heading-container  faq-heading-container-customization";

  class_collapse ="faq-collapse";
  class_expand="faq-expand";

  class_hide="faq-heading-hide";

  class_vehicle = this.class_vehicle_cl;
  class_ownership = this.class_ownership_cl;
  class_customization = this.class_customization_cl;

  class_heading_vehicle =this.class_heading_vehicle_cl;
  class_heading_ownership =this.class_heading_ownership_cl;
  class_heading_customization =this.class_heading_customization_cl;

  class_faq_accordion_vehicle_cl="faq-accordion faq-accordion-vehicle";
  class_faq_accordion_ownership_cl="faq-accordion faq-accordion-ownership";
  class_faq_accordion_customization_cl="faq-accordion faq-accordion-customization";


  class_faq_accordion_vehicle = this.class_faq_accordion_vehicle_cl + " "+this.class_hide;
  class_faq_accordion_ownership = this.class_faq_accordion_ownership_cl + " "+this.class_hide;
  class_faq_accordion_customization = this.class_faq_accordion_customization_cl + " "+this.class_hide;
  

  clicked(id){
    if(id==="vehicle")
    {
      this.class_vehicle = this.class_vehicle_cl + " " + this.class_expand;
      this.class_ownership =this.class_ownership_cl + " "+this.class_collapse;
      this.class_customization= this.class_customization_cl+" "+this.class_collapse;

      this.class_heading_vehicle = this.class_heading_vehicle_cl+" "+this.class_hide;
      this.class_heading_customization= this.class_heading_customization_cl+" "+this.class_hide;
      this.class_heading_ownership=this.class_heading_ownership_cl+" "+this.class_hide;

      this.class_faq_accordion_vehicle=this.class_faq_accordion_vehicle_cl;
      this.class_faq_accordion_ownership = this.class_faq_accordion_ownership_cl+" "+this.class_hide;
      this.class_faq_accordion_customization = this.class_faq_accordion_customization_cl + " "+this.class_hide;
    }
    else if(id==="ownership")
    {
      this.class_vehicle = this.class_vehicle_cl + " " + this.class_collapse;
      this.class_ownership =this.class_ownership_cl + " "+this.class_expand;
      this.class_customization= this.class_customization_cl+" "+this.class_collapse;

      this.class_heading_vehicle = this.class_heading_vehicle_cl+" "+this.class_hide;
      this.class_heading_customization= this.class_heading_customization_cl+" "+this.class_hide;
      this.class_heading_ownership=this.class_heading_ownership_cl+" "+this.class_hide;

      this.class_faq_accordion_vehicle=this.class_faq_accordion_vehicle_cl +" " +this.class_hide;
      this.class_faq_accordion_ownership = this.class_faq_accordion_ownership_cl;
      this.class_faq_accordion_customization = this.class_faq_accordion_customization_cl + " "+this.class_hide;
    }
    else if(id==="customization")
    {
      this.class_vehicle = this.class_vehicle_cl + " " + this.class_collapse;
      this.class_ownership =this.class_ownership_cl + " "+this.class_collapse;
      this.class_customization= this.class_customization_cl+" "+this.class_expand;

      this.class_heading_vehicle = this.class_heading_vehicle_cl+" "+this.class_hide;
      this.class_heading_customization= this.class_heading_customization_cl+" "+this.class_hide;
      this.class_heading_ownership=this.class_heading_ownership_cl+" "+this.class_hide;

      this.class_faq_accordion_vehicle=this.class_faq_accordion_vehicle_cl +" " +this.class_hide;
      this.class_faq_accordion_ownership = this.class_faq_accordion_ownership_cl+" "+this.class_hide;
      this.class_faq_accordion_customization = this.class_faq_accordion_customization_cl;
    }
  }


}
