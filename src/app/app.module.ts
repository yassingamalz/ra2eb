import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LivePriceComponent } from './live-price/live-price.component';
import { PriceInputComponent } from './price-input/price-input.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';
import { AdsenseModule } from 'ng2-adsense';
import { GroceryPricesComponent } from './grocery-prices/grocery-prices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivePriceComponent,
    PriceInputComponent,
    NewsComponent,
    FooterComponent,
    AdsComponent,
    GroceryPricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5210825966321952',
      adSlot: 7414189616,
      adFormat: 'auto',
    })],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
