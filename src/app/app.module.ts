import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

// Services
import { AppService } from './shared/app.service';

// Pages 
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { ProductsComponent } from './pages/products/products.component';
import { CompaniesComponent } from './pages/companies/companies.component';


// Components
import { LayoutComponent } from './components/layout/layout.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HrComponent } from './components/hr/hr.component';

//Widgets
import { CtaComponent } from './widgets/cta/cta.component';
import { IntroComponent } from './widgets/intro/intro.component';
import { MottoComponent } from './widgets/motto/motto.component';
import { ContactInfoComponent } from './widgets/contact-info/contact-info.component';

// Utilities
import { LazyLoadDirective } from './utils/lazyload.directive';
import { PhoneFormatPipe } from './utils/format-phone.pipe';
import { RelativeTimePipe } from './utils/relative-time.pipe';

import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LazyLoadDirective,
    PhoneFormatPipe,
    RelativeTimePipe,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HrComponent,
    HomeComponent,
    CtaComponent,
    IntroComponent,
    MottoComponent,
    CompaniesComponent,
    ContactInfoComponent,
    ServicesComponent,
    ProductsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
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
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
