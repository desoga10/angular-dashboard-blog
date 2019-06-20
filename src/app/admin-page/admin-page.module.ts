import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AdminRoutingModule } from '../admin-page/admin-routing-module';
import { DashboardComponent } from '../admin-page/dashboard/dashboard.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { AppNavbarComponent } from '../admin-page/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [DashboardComponent, AdminPageComponent, AppNavbarComponent, MenusComponent, PostsComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPageModule {}
