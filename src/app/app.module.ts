import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SpecsComponent } from './specs/specs.component';
import { BuildComponent } from './build/build.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ThreeloaderComponent } from './build/threeloader/threeloader.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SpecsComponent, BuildComponent, PreOrderComponent, BlogComponent, ContactUsComponent, NavigationComponent, ThreeloaderComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
