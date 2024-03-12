import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isMenuOpened: boolean = false;

  constructor(private elementRef: ElementRef) {}

  MenuToggler(): void {
    this.isMenuOpened = !this.isMenuOpened;
  }
}
