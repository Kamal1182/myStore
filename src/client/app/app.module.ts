import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Routing
import { AppRoutingModule } from './app-routing.module';

// Material section
import { AngularMaterialModule } from './angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services
import { ApiService } from './shared/services/api/api.service';
import { AuthService } from './shared/services/auth/auth.service';

// Interceptors
import { HeaderTokenInterceptor } from './shared/interceptor/header-token.interceptor';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';

// shared
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,

    // Material
    AngularMaterialModule,
    BrowserAnimationsModule,

    SharedModule
  ],
  providers: [
              ApiService, 
              AuthService,
              { provide: HTTP_INTERCEPTORS, useClass: HeaderTokenInterceptor, multi: true }
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
