import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  email : string ='';
  visibility : boolean = false;
  transition_classes = "news-container";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() =>{
      this.visibility=true;
      this.transition_classes="news-container transform";
    },6000)
  }

  clicked(){
    this.visibility= false;
  }

  onSubmit(){
    const new_cros =`https://hidden-dusk-36336.herokuapp.com/`;
    const uton_sheet = `https://docs.google.com/forms/d/e/1FAIpQLSex_doMrovCPIDgRGh_q_2qgv7lwrtRUDYEzKwRgm5_9ZXPkQ/formResponse?usp=pp_url&entry.1400008253=${this.email}`;
    fetch(new_cros+uton_sheet,
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
