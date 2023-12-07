import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isDarkMode = false;
  themeChanged$ = new Subject<void>();

  getIsDarkMode(): boolean {
    return this.isDarkMode;
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.classList.toggle('dark-mode', this.isDarkMode);
    localStorage.setItem('theme', this.isDarkMode.toString());
    this.themeChanged$.next();
  }

  initializeTheme(): void {
    this.isDarkMode = false;
  }
}