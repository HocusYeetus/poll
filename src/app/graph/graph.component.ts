import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import arrayShuffle from 'array-shuffle';
import { Poll } from '../models/poll';
import { ResultsService } from '../results.service';

@Component({
	selector: 'app-graph',
	templateUrl: './graph.component.html',
	styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
	/** count is in percent for this component*/
	docID?: string;
	poll?: Poll;
	total: number = 0;
	colors: string[] = [
		'maroon',
		'red',
		'purple',
		'fuchsia',
		'green',
		'lime',
		'olive',
		'yellow',
		'navy',
		'blue',
		'teal',
		'aqua',
	];
	graphColors: string = '';

	private static readonly DOC_ID: string = 'sf3fYcWX8bYAmafcRM1G';
	private static readonly ANSWER_FIELD: string = 'answers';
	// test-doc: sf3fYcWX8bYAmafcRM1G

	getDocID() {
		let id: string | null = this.route.snapshot.paramMap.get('id');
		if (id === null) return;
		this.docID = id;
	}

	getResults(): void {
		if (this.docID === undefined) return;
		this.resultsService.registerListener(this.docID, (p) => {
			this.poll = p;
			this.calculatePercent();
			this.generateGraph();
		});
	}

	calculatePercent(): void {
		if (this.poll === undefined) {
			return;
		}
		this.total = 0;
		for (const [_, v] of this.poll.results) {
			this.total += v;
		}
		for (let [k, v] of this.poll.results) {
			this.poll.results.set(k, v / this.total);
		}
	}

	generateGraph() {
		if (this.poll === undefined) {
			return;
		}
		var graphColors = 'conic-gradient(';
		var index = 0;
		var total = 0;
		for (const [_, v] of this.poll.results) {
			graphColors += `\n${this.colors[index % this.colors.length]} ${
				total * 100
			}%,`;
			total += v;
			graphColors += `\n${this.colors[index % this.colors.length]} ${
				total * 100
			}%,`;
			index++;
		}
		graphColors = graphColors.slice(0, -1);
		graphColors += '\n)';
		this.graphColors = graphColors;
	}

	randomizeColor() {
		this.colors = arrayShuffle(this.colors);
	}

	constructor(
		private resultsService: ResultsService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.getDocID();
		this.randomizeColor();
		this.getResults();
	}
}
