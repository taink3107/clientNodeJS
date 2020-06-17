import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";

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
