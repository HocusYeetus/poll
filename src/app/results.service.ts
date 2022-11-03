import { Injectable } from '@angular/core';
import { Result, results } from "./results";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  getResults(): Result[]{
    return results;
  }

  constructor() { }
}
