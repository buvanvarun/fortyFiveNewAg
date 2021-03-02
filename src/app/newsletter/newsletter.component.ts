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

  onSubmit(){
    const cros_url =`https://cors-anywhere.herokuapp.com/`;
    const uton_sheet = `https://docs.google.com/forms/d/e/1FAIpQLSex_doMrovCPIDgRGh_q_2qgv7lwrtRUDYEzKwRgm5_9ZXPkQ/formResponse?usp=pp_url&entry.1400008253=${this.email}`;
    
    fetch(cros_url+uton_sheet,
      {
        method:"POST",
        headers:{Content:"xml"},
      })
    .then(res=>{
      this.visibility=false;
    }).catch(err=>{
      console.log(err);
    })
    
    // `https://docs.google.com/forms/d/e/1FAIpQLSex_doMrovCPIDgRGh_q_2qgv7lwrtRUDYEzKwRgm5_9ZXPkQ/formResponse?usp=pp_url&entry.1400008253=${this.email}`

        // fetch(
    //   `https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSeAygyKSWPYRiEFxMlKNOykU6BBYHYYBmJDX7AvDhkbG1K6NA/formResponse?usp=pp_url&entry.2047198105=${this.email}`,
    //   {
    //     method:"POST",
    //     headers:{Content:"xml"},
    //   })
    // .then(res=>{
    //   this.visibility=false;
    // }).catch(err=>{
    //   console.log(err);
    // })

    // instance({
    //   method: 'post',
    //   url:`https://cors-anywhere.herokuapp.com/https://docs.google.com/forms/d/e/1FAIpQLSeAygyKSWPYRiEFxMlKNOykU6BBYHYYBmJDX7AvDhkbG1K6NA/viewform?usp=pp_url&entry.2047198105=${this.email}`,
    // })
    // .then(res=>{
    //   this.visibility=false;
    // }).catch(err=>{
    //   console.log(err);
    // })

    // this.visibility=false;

    
  }


}
