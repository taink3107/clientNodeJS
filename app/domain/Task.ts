export class Task {
    id: number;
    name: string;
    personId: number;

    constructor(id: number, name: string, personId: number) {
        this.id = id;
        this.name = name;
        this.personId = personId;
    }

    toString(): string {
        return "id=" + this.id + "name" + this.name;
    }
}