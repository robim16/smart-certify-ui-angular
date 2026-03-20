import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-question-choice',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './create-question-choice.html',
  styleUrl: './create-question-choice.css',
})
export class CreateQuestionChoice {

}
