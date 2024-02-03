import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LivePriceComponent } from './live-price/live-price.component';
import { PriceInputComponent } from './price-input/price-input.component';
import { RslComponent } from './rsl/rsl.component';
import { NewsComponent } from './news/news.component';
import { FooterComponent } from './footer/footer.component';
import { AdsComponent } from './ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivePriceComponent,
    PriceInputComponent,
    RslComponent,
    NewsComponent,
    FooterComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
