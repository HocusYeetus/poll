import { Component, OnInit } from '@angular/core';
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
	//sf3fYcWX8bYAmafcRM1G

	// refresh() {
	// 	let sub = interval(5000).subscribe(() => this.getResults());
	// }

	getResults(): void {
		this.resultsService.registerListener(GraphComponent.DOC_ID, (p) => {
			this.poll = p;
			this.calculatePercent();
			this.generateGraph();
			console.log('biteub');
			
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

	constructor(private resultsService: ResultsService) {}

	ngOnInit(): void {
		this.randomizeColor();
		this.getResults();
		// this.refresh();
	}
}
