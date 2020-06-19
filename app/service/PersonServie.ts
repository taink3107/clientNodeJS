import {Person} from "../domain/Person";
import {PersonRespository} from "../repo/PersonRespository";

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
}