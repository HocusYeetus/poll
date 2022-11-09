import { Component, OnInit } from '@angular/core';
import { Poll } from '../models/poll';
import { ResultsService } from '../results.service';
import { Router } from "@angular/router";

@Component({
	selector: 'app-poll-creator',
	templateUrl: './poll-creator.component.html',
	styleUrls: ['./poll-creator.component.css'],
})
export class PollCreatorComponent implements OnInit {
	answerAmount: number = 4;
	answers: string[] = Array<string>(this.answerAmount);
  poll: Poll = new Poll(new Map<string, number>);

	decrement() {
		if (this.answers.length > 2) {
			this.answerAmount--;
      this.answers.length--;
		}
	}

	increment() {
		this.answerAmount++;
    this.answers.length++;
	}

	print() {
		this.answers.forEach((val, i) => {
			this.poll?.results.set(val, 0);
		});
    
    this.resultsService.createDoc(this.poll).then((docRef) => this.router.navigate([`/${docRef.id}`]));
  }

  trackByFn(index: any) {
    return index;
  }

	constructor(private resultsService: ResultsService, private router: Router) {}

	ngOnInit(): void {}
}
