import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import {ENDPOINT} from "./util/Constants";

$(document).ready(function () {
    let persons: Person[] = new PersonServie().getAll();
    let ulEle = $("#persons");
    if (persons.length < 0) {
        ulEle.html("<li>khong co person</li>");
    } else {
        let content = "";
        persons.forEach(value => content += `<li>${value.name} - ${value.age} - ${value.salary}</li>`)
        ulEle.html(content);
    }
})

$(document).ready(function () {
    let xxx = $(location).attr("pathname");
    console.log(ENDPOINT.person.personID + xxx);
    let person: Person = new PersonServie().getOne(xxx);
    let h1Ele = $("#person");
    if (person.age != null) {
        h1Ele.html(`<i>${person.name} - ${person.age} - ${person.salary}</i>`)
    }else{
        h1Ele.html(`del co thang nao ca`)
    }
})
