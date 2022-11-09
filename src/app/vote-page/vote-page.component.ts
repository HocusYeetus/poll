import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Poll } from '../models/poll';
import { ResultsService } from '../results.service';

@Component({
	selector: 'app-vote-page',
	templateUrl: './vote-page.component.html',
	styleUrls: ['./vote-page.component.css'],
})
export class VotePageComponent implements OnInit {
	docID?: string;
	poll?: Poll;

	getDocID() {
		let id: string | null = this.route.snapshot.paramMap.get('id');
		if (id === null) return;
		this.docID = id;
	}

	getPoll() {
		if (this.docID === undefined) return;
		this.resultsService.getResults(this.docID).then((p) => (this.poll = p));
	}

	incrementAnswer(answer: string, docID: string) {
		this.resultsService.incrementAnswer(answer, docID);
		this.router.navigate(['/' + docID + '/graph']);
	}

	constructor(
		private resultsService: ResultsService,
		private route: ActivatedRoute,
		private router: Router
	) {}

	ngOnInit(): void {
		this.getDocID();
		this.getPoll();
	}
}
