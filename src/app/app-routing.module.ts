import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SpecsComponent } from './specs/specs.component';
import { BuildComponent } from './build/build.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyComponent } from './buy/buy.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'specs', component: SpecsComponent },
  { path: 'build', component: BuildComponent },
  { path: 'preorder', component: PreOrderComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'buy/:id', component: BuyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
