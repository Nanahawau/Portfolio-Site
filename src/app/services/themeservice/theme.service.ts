import { Injectable, ApplicationRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {DefaultSystemTheme} from 'src/app/constants/default-mode';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themes = ['dark-theme', 'light-theme'];
  theme = new BehaviorSubject('light-theme');

  constructor(private ref: ApplicationRef) {
    // initially trigger dark mode if preference is set to dark mode on system
    const darkModeOn = DefaultSystemTheme.darkModeOn;


    if(darkModeOn){
      this.theme.next('dark-theme');
    }

    // watch for changes of the preference
    // tslint:disable-next-line: deprecation
    window.matchMedia('(prefers-color-scheme: dark)').addListener(e => {
      const turnOn = e.matches;
      this.theme.next(turnOn ? 'dark-theme' : 'light-theme');

      // trigger refresh of UI
      this.ref.tick();
    });
  }



}
