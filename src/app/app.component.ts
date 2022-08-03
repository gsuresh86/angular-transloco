import { Component } from '@angular/core';
import {TranslocoService} from '@ngneat/transloco';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-transloco';
  // @ts-ignore
  selectedValue = window.urlParams.language || 'en';

  constructor(private ts: TranslocoService) {
  }

  onLanguageChange() {
    this.ts.setActiveLang(this.selectedValue);
  }
}
