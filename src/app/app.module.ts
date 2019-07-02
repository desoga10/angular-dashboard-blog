import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Routes, RouterModule } from '@angular/router';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AfService } from './providers/af.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FrontPageModule } from '../app/front-page/front-page-module';

import { AdminGuard } from '../app/guards/admin.guard';
import { SubscriberGuard } from '../app/guards/subscriber.guard';
import { MenusService } from '../app/service/menus/menus.service';
import { PostsService } from '../app/service/posts/posts.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: '../app/front-page/front-page.module#FrontPageModule'
  },
  { path: 'login', component: LoginPageComponent },
  {
    path: 'admin',
    loadChildren: '../app/admin-page/admin-page.module#AdminPageModule',
    canActivate: [AdminGuard]
  }
];
@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [
    BrowserModule,

    AppRoutingModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    FrontPageModule
  ],
  providers: [
    AfService,
    AdminGuard,
    SubscriberGuard,
    MenusService,
    PostsService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
