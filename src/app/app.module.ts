import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterBarComponent } from './components/footer-bar/footer-bar.component';
import { CommercialComponent } from './components/commercial/commercial.component';
import { ResidentialComponent } from './components/residential/residential.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { ImageContentComponent } from './components/image-content/image-content.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { FullWidthComponent } from './components/full-width/full-width.component';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { CoroselComponent } from './components/corosel/corosel.component';
import { MobileNavbarComponent } from './components/mobile-navbar/mobile-navbar.component';
import { SecurityServicesComponent } from './components/security-services/security-services.component';
import { ImageTitleContentComponent } from './components/image-title-content/image-title-content.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'commercial',      component: CommercialComponent },
  { path: 'residential',      component: ResidentialComponent },
  { path: 'about',      component: AboutComponent },
  { path: 'services',      component: SecurityServicesComponent },
  { path: '', redirectTo: '/home' , pathMatch: 'full' },
  { path: '**', redirectTo: '/home' , pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainContentComponent,
    HeaderBarComponent,
    NavbarComponent,
    NavComponent,
    FooterBarComponent,
    CommercialComponent,
    ResidentialComponent,
    AboutComponent,
    ImageContentComponent,
    HomeComponent,
    SliderComponent,
    FullWidthComponent,
    BackgroundImageComponent,
    CoroselComponent,
    MobileNavbarComponent,
    SecurityServicesComponent,
    ImageTitleContentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
