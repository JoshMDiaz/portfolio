import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdMenuModule, MdSidenavModule, MdCardModule, MdGridListModule, MdTabsModule, MdButtonModule, MdIconModule, MdProgressSpinnerModule, MdDialogModule, MdSnackBarModule, MdRadioModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { FooterComponent } from './footer/footer.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';
import { StripesBgComponent } from './stripes-bg/stripes-bg.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MyWorkComponent } from './my-work/my-work.component';
import { ReachOutComponent } from './reach-out/reach-out.component';

// Routes
const appRoutes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
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
    ReachOutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
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
    MdDialogModule,
    MdSnackBarModule,
    MdRadioModule
  ],
  entryComponents: [
    ContactModalComponent
  ],
  providers: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
