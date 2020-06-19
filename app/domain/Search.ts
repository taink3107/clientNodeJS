export class Search {
    firstname: string
    lastname: string
    age: string
    dob: string
    salary: string
    status: string


    constructor(firstname: string, status: string) {
        this.firstname = firstname;
        this.status = status;
    }

    toString() {
        return "search=firstname:" + this.firstname + "," +"status:"+st;
    }
}