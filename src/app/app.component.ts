import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './services/Themeservice/theme.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {
  title = 'Nana-Hawau';

  constructor(private themingService: ThemeService) { }
  @HostBinding('class') public cssClass: string;

  ngOnInit(): void {
    this.themingService.theme.subscribe((theme: string) => {
      this.cssClass = theme;
    });
  }
}
