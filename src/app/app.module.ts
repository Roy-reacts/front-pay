import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PageComponent } from './page/page.component';
import { StripeModule } from 'stripe-angular';

@NgModule({
  declarations: [
    AppComponent,
    CheckoutComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StripeModule.forRoot('pk_test_51MdoZSC8gOLcVvt1j758f50RoVGs2eKEIRDDE3V8sMPqn8G4vqgofEHMtM5uhRwGjRhiQsryOReSIIKfopD6vnRK00iv1pX5it')

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
