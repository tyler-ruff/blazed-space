import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './lib/header/header.component';
import { FooterComponent } from './lib/footer/footer.component';
import { LazyLoadDirective } from './lazyload.directive';
import { CtaComponent } from './components/cta/cta.component';
import { HomeComponent } from './pages/home/home.component';
import { IntroComponent } from './components/intro/intro.component';
import { MottoComponent } from './components/motto/motto.component';
import { HrComponent } from './lib/hr/hr.component';
import { ContactInfoComponent } from './components/contact-info/contact-info.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { PhoneFormatPipe } from './utils/format-phone-pipe/format-phone.pipe';

import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './pages/companies/companies.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LazyLoadDirective,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    CtaComponent,
    IntroComponent,
    MottoComponent,
    HrComponent,
    ContactInfoComponent,
    ServicesComponent,
    ProductsComponent,
    CompaniesComponent,
    PhoneFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
