import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from '../admin-page/dashboard/dashboard.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { MenusComponent } from '../admin-page/menus/menus.component';
import { PostsComponent } from '../admin-page/posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'menus',
        component: MenusComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  }
];

export const AdminRoutingModule = RouterModule.forChild(routes);
