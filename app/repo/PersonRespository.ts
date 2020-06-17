import {ICrudReponsitory} from "./ICrudReponsitory";
import {Person} from "../domain/Person";
import {ENDPOINT} from "../util/Constants";
import $ = require("jquery");


export class PersonRespository implements ICrudReponsitory<Person, any> {
    findAll(): Person[] {
        let p: Person[] = [];
        $.ajax({
            url: ENDPOINT.person.list,
            method: 'GET',
            contentType: 'application/json',
            async: false,
            success: (data: any) => {
                $.extend(p, data);
            },
            error: (msg) => {
                console.log(msg)
            }
        })
        return p;
    }

    findOne(k): Person {
        let p: Person = new Person(null, null, null);
        $.ajax({
            url: ENDPOINT.person.personID + k, // /1
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

}