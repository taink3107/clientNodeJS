export class Person {
    id: number;
    firstname: string;
    lastname: string;
    age: number;
    salary: number;
    dob: Date;
    status: string;


    constructor(fisrtname: string, lastname: string, age: number, salary: number, dob: Date, status: string) {
        this.firstname = fisrtname;
        this.lastname = lastname;
        this.age = age;
        this.salary = salary;
        this.dob = dob;
        this.status = status;
    }

    toString(): string {
        return this.firstname + " - " + this.lastname + " - " + this.age + " - " + this.salary + " - " + this.dob + " - " + this.status;
    }

}