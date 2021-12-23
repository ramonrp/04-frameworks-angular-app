import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPublicComponent } from './headers/header-public/header-public.component';
import { HeaderPrivateComponent } from './headers/header-private/header-private.component';
import { MenuPublicComponent } from './menu/menu-public/menu-public.component';
import { MenuPrivateComponent } from './menu/menu-private/menu-private.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CrudComponent } from './crud/crud.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderPublicComponent,
    HeaderPrivateComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    GalleryComponent,
    DashboardComponent,
    CrudComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
