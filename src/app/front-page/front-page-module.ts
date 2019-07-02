import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatToolbarModule,
  MatInputModule,
  MatSortModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';

import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontRoutingModule } from './front-routing-module';
import { FrontPageComponent } from './front-page.component';
import { NavbarComponent } from '../front-page/navbar/navbar.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  imports: [
    CommonModule,
    FrontRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatInputModule,
    MatListModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [
    FrontPageComponent,
    HomePageComponent,
    PagesListComponent,
    NavbarComponent,
    PagesComponent
  ],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontPageModule {}
