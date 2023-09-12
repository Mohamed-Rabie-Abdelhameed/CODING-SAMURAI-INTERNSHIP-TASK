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
      } else {
        body.classList.remove('dark');
      }
      this.toggleIcons();
    }
  }

  private toggleIcons() {
    const close = document.getElementById('close-icon');
    const open = document.getElementById('open-menu');
    const logo = document.getElementById('logo') as HTMLImageElement;
    const theme = document.getElementById('theme-icon') as HTMLImageElement;
    if (this.darkMode) {
      close?.style.setProperty('stroke', '#fafafa');
      open?.style.setProperty('stroke', '#fafafa');
      logo.src = 'assets/images/logo-light.svg';
      theme.src = 'assets/images/sun.svg';
    } else {
      close?.style.setProperty('stroke', '#18181b');
      open?.style.setProperty('stroke', '#18181b');
      logo.src = 'assets/images/logo.svg';
      theme.src = 'assets/images/moon.svg';
    }
  }
}
