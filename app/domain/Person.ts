export class Person {
    id: number;
    fisrtname: string;
    lastname: string;
    age: number;
    salary: number;
    dob: Date;
    status: number;


    constructor(fisrtname: string, lastname: string, age: number, salary: number, dob: Date, status: number) {
        this.fisrtname = fisrtname;
        this.lastname = lastname;
        this.age = age;
        this.salary = salary;
        this.dob = dob;
        this.status = status;
    }
}