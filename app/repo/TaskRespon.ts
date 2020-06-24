import {ICrudReponsitory} from "./ICrudReponsitory";
import {Person} from "../domain/Person";
import {ENDPOINT} from "../util/Constants";
import $ = require("jquery");
import {Task} from "../domain/Task";

export class TaskRespon {
    save(task: Task) {
        $.ajax({
            url: ENDPOINT.task.save,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(task),
            async: false,
            success: (data) => {

                alert("sucess");
            }, error: () => {
                alert("error");
            }
        })

    }

}