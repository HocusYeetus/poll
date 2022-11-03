import { Injectable } from '@angular/core';
import { Result, results } from "./results";

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  getResults(): Result[]{
    console.log(results.sort((a,b) => a.count - b.count));
    
    return results.sort((a,b) => a.count - b.count);
  }

  constructor() { }
}
