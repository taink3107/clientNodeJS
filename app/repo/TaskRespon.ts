import {ENDPOINT} from "../util/Constants";
import $ = require("jquery");
import {Task} from "../domain/Task";
import {Error} from "../domain/Error";

export class TaskRespon {

    save(task: Task) {
        let temp = $("#editModal .modal-body");
        temp.html("");
        $.ajax({
            url: ENDPOINT.task.save,
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(task),
            async: false,
            success: (data) => {
                temp.html("sucess");
            }, error: (error) => {

                let content : string = "";
                var json_response = error.responseJSON.errors;
                json_response.forEach(x => content += x.defaultMessage);
                temp.html(content);

            }
        })
    }

    isExist(id): number {
        let value: number;
        $.ajax({
            url: ENDPOINT.task.isExist.replace("{id}", id),
            method: 'POST',
            contentType: 'application/json',
            async: false,
            success: (data) => {
                value = data;
            }, error: () => {
                value = 0;
            }
        })
        return value;
    }

}