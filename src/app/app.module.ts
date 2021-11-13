import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainHeaderComponent } from './home-components/main-header/main-header.component';
import { FeatureSliderComponent } from './home-components/feature-slider/feature-slider.component';
import { BannerComponent } from './home-components/banner/banner.component';
import { FeaturedProductsComponent } from './home-components/featured-products/featured-products.component';
import { DealZoneComponent } from './home-components/deal-zone/deal-zone.component';
import { KeyGalleryComponent } from './home-components/key-gallery/key-gallery.component';
import { AdBannersComponent } from './home-components/ad-banners/ad-banners.component';
import { NewArrivalsComponent } from './home-components/new-arrivals/new-arrivals.component';
import { BannerBrandComponent } from './home-components/banner-brand/banner-brand.component';
import { ColumnSectionComponent } from './home-components/column-section/column-section.component';
import { ContacFooterComponent } from './home-components/contac-footer/contac-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainHeaderComponent,
    FeatureSliderComponent,
    BannerComponent,
    FeaturedProductsComponent,
    DealZoneComponent,
    KeyGalleryComponent,
    AdBannersComponent,
    NewArrivalsComponent,
    BannerBrandComponent,
    ColumnSectionComponent,
    ContacFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
