type Results = Map<string, number>
/**
 * contains key-value pairs for each answer in the poll along with its
 * corresponding number of votes
 * 
 */
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

