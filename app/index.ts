import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
$(document).ready(function () {
    // let p:Person = new Person("Hieu",23,1000);
    // console.log(p);

    let persons: Person[] = new PersonServie().getAll();
    console.log(persons);
})
