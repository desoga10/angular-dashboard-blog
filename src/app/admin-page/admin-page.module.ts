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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AdminRoutingModule } from '../admin-page/admin-routing-module';
import { DashboardComponent } from '../admin-page/dashboard/dashboard.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { AppNavbarComponent } from '../admin-page/navbar/navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MenusComponent } from './menus/menus.component';
import { PostsComponent } from './posts/posts.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { ConfirmationDialogComponent } from './shared/confirmation-dialog/confirmation-dialog.component';
import { EditMenuComponent } from './menus/edit-menu/edit-menu.component';

@NgModule({
  declarations: [
    DashboardComponent,
    AdminPageComponent,
    AppNavbarComponent,
    MenusComponent,
    PostsComponent,
    ConfirmationDialogComponent,
    EditMenuComponent
  ],
  entryComponents: [ConfirmationDialogComponent, EditMenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
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
    FormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPageModule {}
