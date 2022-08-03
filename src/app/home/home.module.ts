import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from '@angular/router';
import {TranslocoModule} from '@ngneat/transloco';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslocoModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ]
})
export class HomeModule { }
