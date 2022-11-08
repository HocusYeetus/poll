type Results = Map<string, number>

export class Poll {
    constructor(public results: Results) {}
    
    resultsToTuples(): Array<[string, number]> {
        let tuples: [string, number][] = []
        this.results.forEach((v,k) => {
            tuples.push([k, v])
        });
        return tuples;
    }
}

