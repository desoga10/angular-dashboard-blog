import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FrontRoutingModule } from './front-routing-module';
import { FrontPageComponent } from './front-page.component';

@NgModule({
  imports: [CommonModule, FrontRoutingModule],
  declarations: [FrontPageComponent, HomePageComponent, PagesListComponent],
  entryComponents: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FrontPageModule {}
