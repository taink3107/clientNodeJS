import {Person} from "./Person";

export class Task {
    id: number;
    name: string;
    person: Person;

    constructor(name: string, personId: Person) {
        this.name = name;
        this.person = personId;
    }

    toString(): string {
        return "id=" + this.id + "name" + this.name + " " + this.person.firstname;
    }
}