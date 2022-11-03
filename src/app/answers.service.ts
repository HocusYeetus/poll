import { Injectable } from '@angular/core';
import { answers } from "./answers";

@Injectable({
  providedIn: 'root'
})
export class AnswersService {
  getAnswers(): string[] {
    return answers;
  }

  constructor() { }
}
