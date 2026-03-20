import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-questions-list',
  imports: [CommonModule, FormsModule],
  templateUrl: './questions-list.html',
  styleUrl: './questions-list.css',
})
export class QuestionsList {

}
