import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import {ENDPOINT} from "./util/Constants";
import DateTimeFormat = Intl.DateTimeFormat;

let personService: PersonServie = new PersonServie();
$("#save").click(function (e) {

    e.preventDefault();
    let first_name = $("#firstname").val();
    let last_name = $("#lastname").val();
    let age = $("#age").val();
    let salary = $("#salary").val();
    let dob: Date = new Date($("#dob").val().toString());
    let temp = $("#status").val();
    let status = (temp == 2) ? "ACTIVE" : "INACTIVE";
    let per: Person = new Person(first_name.toString(), last_name.toString(), +age, +salary, dob, status.toString());
    console.log(per);
    personService.save(per);
})