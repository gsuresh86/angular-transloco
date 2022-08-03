import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';
import { NzSelectModule} from 'ng-zorro-antd/select';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslocoRootModule,
    NzSelectModule,
    NzDropDownModule,
    NzIconModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'home',  pathMatch: 'full' },
      { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      { path: 'pricing', loadChildren: () => import('./pricing/pricing.module').then(m => m.PricingModule)}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
