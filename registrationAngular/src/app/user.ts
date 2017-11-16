export class User {
    public fname: string;
    public lname: string;
    public email: string;
    public password: string;
    public street: string;
    public unit: string;
    public city: string;
    public state: string;
    public zip: number;
    public lucky: boolean;

    constructor(){
        this.fname = "";
        this.lname = "";
        this.email = "";
        this.password = "";
        this.street = "";
        this.unit = "";
        this.state = "";
        this.zip = null;
        this.lucky = false;
    };
}
