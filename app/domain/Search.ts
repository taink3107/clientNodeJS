export class Search {
    firstname: string
    lastname: string
    age: string
    dob: string
    salary: string
    status: string


    constructor(firstname: string, status: string) {
        this.firstname = firstname;
        // Sua lai status
        this.status = status;
    }

    toString() {
        return "search=firstname:" + this.firstname + "," + "status:" + this.status;
    }
}