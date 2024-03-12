import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.css'
})
export class UserPageComponent {

  activeTab: string = 'technical';

  constructor() { }

  setActiveTab(tab: string): void {
    this.activeTab = tab;

    const tabs = document.querySelectorAll('.topic');
    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    // Add 'active' class to the clicked tab
    const activeTabElement = document.getElementById(tab);
    activeTabElement?.classList.add('active');
  }

  

}
