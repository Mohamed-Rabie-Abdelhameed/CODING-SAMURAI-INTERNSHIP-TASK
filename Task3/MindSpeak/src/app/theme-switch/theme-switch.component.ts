import { Component, OnInit } from '@angular/core';
import { ModeService } from '../services/mode.service';

@Component({
  selector: 'app-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.css'],
})
export class ThemeSwitchComponent implements OnInit {
  constructor(private modeService: ModeService) {}

  darkMode: boolean = false;

  ngOnInit(): void {
    this.darkMode = this.modeService.isDarkMode();
    this.toggleDarkModeStyles();
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.toggleDarkModeStyles();
  }

  private toggleDarkModeStyles() {
    const body = document.querySelector('body');
    const logo = document.getElementById('logo') as HTMLImageElement;
    if (body) {
      if (this.darkMode) {
        body.classList.add('dark');
        if (logo) {
          logo.src = 'assets/images/logo-light.svg';
        }
      } else {
        body.classList.remove('dark');
        if (logo) {
          logo.src = 'assets/images/logo.svg';
        }
      }
    }
  }
}
