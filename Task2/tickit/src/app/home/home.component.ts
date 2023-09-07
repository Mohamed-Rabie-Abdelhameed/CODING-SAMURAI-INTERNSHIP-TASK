import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isMobile: boolean = false;
  ngOnInit(): void {
    this.isMobile = window.innerWidth <= 768;
    AOS.init({
      duration: 1500,
      once: true,
    });
  }
}
