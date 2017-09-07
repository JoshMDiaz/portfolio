import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdMenuModule, MdSidenavModule, MdCardModule, MdGridListModule, MdTabsModule, MdButtonModule, MdIconModule, MdProgressSpinnerModule, MdDialogModule, MdSnackBarModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { FooterComponent } from './footer/footer.component';
import { ContactButtonComponent } from './contact-button/contact-button.component';

// Routes
const appRoutes: Routes = [
  // { path: 'crisis-center', component: CrisisListComponent },
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
    ContactModalComponent,
    FooterComponent,
    ContactButtonComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserAnimationsModule,
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
    MdSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
