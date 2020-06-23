import {Person} from "../domain/Person";
import {PersonRespository} from "../repo/PersonRespository";
import {Task} from "../domain/Task";

export class PersonServie {
    private pr = new PersonRespository();

    getAll(param): Person[] {
        return this.pr.findAll(param);
    }

    getOne(k): Person {
        return this.pr.findOne(k);
    }

    save(p: Person) {
        this.pr.save(p);
    }

    getTaskById(k): Task {
        return this.pr.getTaskById(k);
    }
}