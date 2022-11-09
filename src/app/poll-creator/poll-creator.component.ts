import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/poll';
import { ResultsService } from '../results.service';

@Component({
  selector: 'app-poll-creator',
  templateUrl: './poll-creator.component.html',
  styleUrls: ['./poll-creator.component.css']
})
export class PollCreatorComponent implements OnInit {
  answerAmount: number = 2;

  

  constructor(private resultsService: ResultsService) { }

  ngOnInit(): void {
  }

}
