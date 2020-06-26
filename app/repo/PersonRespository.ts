import {ICrudReponsitory} from "./ICrudReponsitory";
import {Person} from "../domain/Person";
import {ENDPOINT} from "../util/Constants";
import $ = require("jquery");
import {Task} from "../domain/Task";

export class PersonRespository implements ICrudReponsitory<Person, any> {
    findAll(param): Person[] {
        let p: Person[] = [];
        $.ajax({
            url: ENDPOINT.person.list + "?search=" + param,
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data: any) => {
                $.extend(p, data);
                console.log(p);
            },
            error: (msg) => {
                console.log(msg)
            }
        })
        return p;
    }

    findOne(k): Person {
        let p: Person = new Person(null, null, null, null, null, null);
        $.ajax({
            url: ENDPOINT.person.personID.replace("{id}", k), // /1
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data) => {
                $.extend(p, data);
            },
            error: (msg) => {
                $(location).attr('href', '/error.html')
            }
        })
        return p;
    }

    save(per: Person) {

        $.ajax({
            url: ENDPOINT.person.save,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(per),
            async: false,
            success: (data) => {
                alert("sucess");
            }, error: () => {
                alert("error");
            }
        })
    }

    getTaskById(value): Task[] {
        let task: Task[] = [];
        $.ajax({
            url: ENDPOINT.task.getById.replace("{id}", value),
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data) => {
                $.extend(task, data);
            }, error: () => {
                alert("error");
            }
        })
        return task;
    }

    update(per: Person) {

        console.log("XXX");
        console.log(JSON.stringify(per));
        $.ajax({
            url: ENDPOINT.person.update,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(per),
            async: false,
            success: (data) => {
                alert("sucess");
            }, error: () => {
                alert("error");
            }
        })
    }


}