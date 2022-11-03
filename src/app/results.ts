export class Result{
    name: string = "";
    count: number = 0;
    constructor(name: string, count: number){
        this.name = name;
        this.count = count;
    }
}

export const results: Result[] = [
    new Result("yeet1", 1),
    new Result("yeet2", 12),
    new Result("yeet3", 5),
    new Result("yeet4", 31),
]