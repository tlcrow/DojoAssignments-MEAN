export class Farm {
    public _id;
    public name: string;
    public description: string;
    public creator: string;
    public _mongoose;

    constructor(){
        this.name = "";
        this.description = "";
        this.creator = "";
    }
}
