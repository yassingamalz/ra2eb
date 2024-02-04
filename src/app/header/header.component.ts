import { Component } from '@angular/core';
import { Router } from '@angular/router'; // For navigation

interface MenuItem {
  label: string;
  link?: string; // For in-app navigation
  icon?: string; // For displaying an icon
  action?: () => void; // For custom actions
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;
  menuItems: MenuItem[] = [
    { label: 'Home', link: '/' },
    { label: 'About', link: '/about' },
    { label: 'Contact', link: '/contact' },
    { label: 'Settings', action: () => this.openSettings() } // Example custom action
  ];

  constructor(private router: Router) {}

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  openSettings() {
    // Do something when "Settings" is clicked
    // (e.g., open a dialog or navigate to a settings page)
  }

  navigateTo(link: string) {
    this.router.navigate([link]);
  }
}
