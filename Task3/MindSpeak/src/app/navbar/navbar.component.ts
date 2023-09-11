import { Component, OnInit } from '@angular/core';
import { ModeService } from '../services/mode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private modeService: ModeService) {}
  isMenuOpen = false;
  isDarkMode = false;
  ngOnInit(): void {
    this.isDarkMode = this.modeService.isDarkMode();
  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
