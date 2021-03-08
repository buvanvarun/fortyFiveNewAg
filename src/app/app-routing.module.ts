import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuildComponent } from './build/build.component';
import { PreOrderComponent } from './pre-order/pre-order.component';
import { BlogComponent } from './blog/blog.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { BuyComponent } from './buy/buy.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import {FaqComponent} from './faq/faq.component'
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'build', component: BuildComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'refund-policy', component: RefundPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'preorder', component: PreOrderComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'buy/:id', component: BuyComponent },
  {path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
