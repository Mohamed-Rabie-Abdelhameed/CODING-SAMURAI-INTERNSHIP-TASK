import { Component, OnInit } from '@angular/core';
import { ModeService } from './services/mode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MindSpeak';
  constructor(private modeService: ModeService) {}
  ngOnInit(): void {
    this.updateFavicon();
  }

  updateFavicon() {
    const favicon = document.getElementById('favicon') as HTMLLinkElement;
    if (!this.modeService.isDarkMode()) {
      favicon.href = 'assets/images/favicon.png';
    } else {
      favicon.href = 'assets/images/favicon-light.png';
    }
  }
}
