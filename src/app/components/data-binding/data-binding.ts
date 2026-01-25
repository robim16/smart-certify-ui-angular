import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  // Interpolation and Property Binding
  appName = 'SmartCertify';
  logoUrl = 'https://smartlearnbykarthik.azurewebsites.net/assets/android-chrome-512x512.png';
  appDescription = 'An amazing platform to test and certify your knowledge.';

  // Two-Way Binding
  username = '';

  // *ngIf, *ngElse
  isWelcomeVisible = true;

  toggleWelcome() {
    this.isWelcomeVisible = !this.isWelcomeVisible;
  }

  // *ngFor
  technologies = ['Angular', '.NET Core', 'C#', 'Azure', 'React'];

  // Event Binding
  clickCounter = 0;

  incrementCounter() {
    this.clickCounter++;
  }

  // Attribute Directives: ngClass and ngStyle
  isHighlighted = false;

  getClass() {
    return this.isHighlighted ? 'text-primary' : 'text-secondary';
  }

  getStyle() {
    return this.isHighlighted
      ? { fontWeight: 'bold', fontSize: '24px' }
      : { fontWeight: 'normal', fontSize: '20px' };
  }

  toggleHighlight() {
    this.isHighlighted = !this.isHighlighted;
  }
}
