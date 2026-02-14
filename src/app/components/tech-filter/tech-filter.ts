import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tech-filter',
  imports: [CommonModule],
  templateUrl: './tech-filter.html',
  styleUrl: './tech-filter.css',
})
export class TechFilter {
  @Input() techList: { name: string; image: string }[] = []; 
  @Output() filterCourses = new EventEmitter<string>();

  selectTechnology(tech: string): void {
    this.filterCourses.emit(tech); 
  }
}
