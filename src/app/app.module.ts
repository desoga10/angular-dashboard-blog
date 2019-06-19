import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfService } from './providers/af.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminGuard } from '../app/guards/admin.guard';
import { SubscriberGuard } from '../app/guards/subscriber.guard';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  {
    path: 'article',
    component: PagesListComponent,
    canActivate: [SubscriberGuard]
  }
];
@NgModule({
  declarations: [
    AppComponent,
    PagesListComponent,
    LoginPageComponent,
    NavbarComponent,
    HomePageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    AngularFirestoreModule
  ],
  providers: [AfService, AdminGuard, SubscriberGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
