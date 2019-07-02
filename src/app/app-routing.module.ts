import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesListComponent } from '../app/front-page/pages-list/pages-list.component';
import { HomePageComponent } from '../app/front-page/home-page/home-page.component';
import { FrontPageComponent } from './front-page/front-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
