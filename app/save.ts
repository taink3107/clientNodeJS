import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import {ENDPOINT} from "./util/Constants";
import DateTimeFormat = Intl.DateTimeFormat;
import {PersonRespository} from "./repo/PersonRespository";
import {Task} from "./domain/Task";
import {TaskRespon} from "./repo/TaskRespon";
import {TaskService} from "./service/TaskService";

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



$(document).ready(function () {
    $("#submitTask").click(function (e) {
        e.preventDefault();
        let text = $("#textXXX").val();
        let idPerson = $("#valuePerson").val();
        let person: Person = new PersonRespository().findOne(idPerson);
        let task: Task = new Task(text, person);
        new TaskService().save(task);
        //text.html();
    });
    $("#textXXX").keypress(function(event) {
        if (event.keyCode == 13) {
            let text = $("#textXXX").val();
            let idPerson = $("#valuePerson").val();
            let person: Person = new PersonRespository().findOne(idPerson);
            let task: Task = new Task(text, person);
            new TaskService().save(task);
        };
    });
})



