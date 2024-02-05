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
import { MeatMarketPricesComponent } from './meat-market-prices/meat-market-prices.component';
import { CombustibleMarketPricesComponent } from './combustible-market-prices/combustible-market-prices.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemDetailsComponent } from './item/item-details/item-details.component';
import { RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PriceGraphComponent } from './price-graph/price-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LivePriceComponent,
    PriceInputComponent,
    NewsComponent,
    FooterComponent,
    AdsComponent,
    GroceryPricesComponent,
    MeatMarketPricesComponent,
    CombustibleMarketPricesComponent,
    DashboardComponent,
    ItemDetailsComponent,
    HomePageComponent,
    PriceGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5210825966321952',
      adSlot: 7414189616,
      adFormat: 'auto',
    })],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
