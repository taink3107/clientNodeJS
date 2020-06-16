import {ICrudReponsitory} from "./ICrudReponsitory";
import {Person} from "../domain/Person";
import {ENDPOINT} from "../util/Constants";
import $ = require("jquery");


export class PersonRespository implements ICrudReponsitory<Person, number>{
    findAll(): Person[] {
        let p:Person[]=[];
        $.ajax({
            url:ENDPOINT.person.list,
            method:'GET',
            contentType:'application/json',
            async:false,
            success:(data:any) =>{
                $.extend(p,data);
            },
            error:(msg)=>{
                console.log(msg)
            }
        })
        return p;
    }

    findOne(k: number): Person {
        return undefined;
    }

}