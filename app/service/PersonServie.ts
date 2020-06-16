import {Person} from "../domain/Person";
import {PersonRespository} from "../repo/PersonRespository";

export class PersonServie {
    private pr = new PersonRespository();
    getAll():Person[]{
        return this.pr.findAll();
    }
}