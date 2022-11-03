import { Component, OnInit } from '@angular/core';
import { AnswersService } from "../answers.service";

@Component({
  selector: 'app-poll-answers',
  templateUrl: './poll-answers.component.html',
  styleUrls: ['./poll-answers.component.css']
})
export class PollAnswersComponent implements OnInit {
  answers: string[] = [];

  constructor(private answersService: AnswersService) { }

  getAnswers(): void {
    this.answers = this.answersService.getAnswers();
  }

  ngOnInit(): void {
    this.getAnswers();
  }

}
