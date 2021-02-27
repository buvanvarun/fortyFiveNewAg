import { BrowserModule } from '@angular/platform-browser';
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThreeloaderComponent } from './build/threeloader/threeloader.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BuyComponent } from './buy/buy.component';
import { CareerApplicationComponent } from './career-application/career-application.component';
import { SwiperModule } from 'swiper/angular';
import { PreorderButtonComponent } from './preorder-button/preorder-button.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BuildComponent,
    PreOrderComponent,
    BlogComponent,
    ContactUsComponent,
    NavigationComponent,
    ThreeloaderComponent,
    BuyComponent,
    CareerApplicationComponent,
    PreorderButtonComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    TermsConditionsComponent,
    NewsletterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    SwiperModule,
  ],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
