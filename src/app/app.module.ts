import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import {MdInputModule, MdMenuModule, MdSidenavModule, MdCardModule, MdGridListModule, MdTabsModule, MdButtonModule, MdIconModule, MdProgressSpinnerModule, MdProgressBarModule, MdDialogModule, MdSnackBarModule, MdRadioModule, MdToolbarModule} from '@angular/material';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

//// My Components
// Pages
import { HomeComponent } from './home/home.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ReachOutComponent } from './reach-out/reach-out.component';
// Custom Components
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { StripesBgComponent } from './stripes-bg/stripes-bg.component';
import { MyWorkDetailComponent } from './my-work-detail/my-work-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BannerComponent } from './banner/banner.component';
import { PortfolioTileComponent } from './portfolio-tile/portfolio-tile.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { GalleryListItemComponent } from './gallery-list-item/gallery-list-item.component';
import { GalleryModalComponent } from './gallery-modal/gallery-modal.component';

// Routes
const appRoutes: Routes = [
  { path: 'awesomeness', component: HomeComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'reach-out', component: ReachOutComponent },
  { path: 'my-work/:id',      component: MyWorkDetailComponent },
  { path: 'my-work', component: MyWorkComponent },
  { path: '',
    redirectTo: '/awesomeness',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactModalComponent,
    ContactButtonComponent,
    StripesBgComponent,
    AboutMeComponent,
    MyWorkComponent,
    ReachOutComponent,
    HomeComponent,
    MyWorkDetailComponent,
    PageNotFoundComponent,
    BannerComponent,
    PortfolioTileComponent,
    TestimonialsComponent,
    GalleryListItemComponent,
    GalleryModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MdInputModule,
    MdMenuModule,
    MdSidenavModule,
    MdCardModule,
    MdGridListModule,
    MdTabsModule,
    MdButtonModule,
    MdIconModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdDialogModule,
    MdSnackBarModule,
    MdRadioModule,
    MdToolbarModule,
    NgxCarouselModule
  ],
  entryComponents: [
    ContactModalComponent,
    GalleryModalComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
