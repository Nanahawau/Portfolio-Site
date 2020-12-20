import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/Themeservice/theme.service';
import { DefaultSystemTheme } from 'src/app/constants/default-mode';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
themes: string[];

dark: boolean = DefaultSystemTheme.darkModeOn;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themes = this.themeService.themes;
  }

  changeTheme(theme: string): void {
    theme === 'light-theme' ? this.dark = false : this.dark = true;
    this.themeService.theme.next(theme);
  }
}
