import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatMenuModule,
  ]
})
export class PagesModule { }
