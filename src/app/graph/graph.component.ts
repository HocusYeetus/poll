import { Component, OnInit } from '@angular/core';

import { ResultsService } from '../results.service';
import { Result } from '../results';
import { concatWith } from 'rxjs';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css'],
})
export class GraphComponent implements OnInit {
  results: Result[] = [];
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

  getResults(): void {
    this.results = this.resultsService.getResults();
  }

  calculatePercent(): void {
    for (const result of this.results) {
      this.total += result.count;
    }
    for (const result of this.results) {
      result.count = result.count / this.total;
    }
  }

  generateGraph() {
    var graphColors = 'conic-gradient(';
    var index = 0;
    var total = 0;
    for (const result of this.results) {
      total += result.count
      graphColors += `
      ${this.colors[index % this.colors.length]} 0%,
      ${this.colors[index % this.colors.length]} ${Math.trunc(total * 1000 + 0.5)/10}%,`;
      index++;
    }
    graphColors = graphColors.slice(0,-1)
    graphColors += '\n)';
    return graphColors;
  }

  getGraph(): string {
    return this.generateGraph();
  }

  constructor(private resultsService: ResultsService) {}

  ngOnInit(): void {
    this.getResults();
    this.calculatePercent();
    console.log(this.getGraph());
  }
}
