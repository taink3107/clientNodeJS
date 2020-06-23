import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import moment = require("moment");
import {Search} from "./domain/Search";
import {Task} from "./domain/Task";

$(document).ready(function () {
    console.log("dcmmmm")
    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get("search");
    let persons: Person[] = new PersonServie().getAll(param);
    let ulEle = $("#persons tbody");
    if (persons.length < 0) {
        ulEle.html("<li>khong co person</li>");
    } else {
        let content = "";
        persons.forEach(value => content += processDate(value))
        ulEle.append(content);
    }
})

function processDate(value: Person) {
    var content = `<tr>
        <td scope="col">${value.id}</td>
        <td scope="col">${value.firstname} ${value.lastname}</td>
        <td scope="col">${value.age}</td>
        <td scope="col">${formatCurrency(value.salary, "VND")}</td>
        <td scope="col">${formatDate(value.dob)}</td>
        <td scope="col">${formatStatus(value.status)}</td>
        <td scope="col" class="showTask"><button type="button" class="btn btn-info" data-toggle="modal" data-target=".bd-example-modal-lg" data-value="${value.id}" id="btnShow">Show task</button></td>
        <td scope="col"><button type="button" class="btn btn-success" id="editPerson${value.id}">Edit</button></td>
    </tr>`
    return content;
}

$(document).on('click', '#persons .showTask #btnShow', function () {
    var temp = $(this).attr('data-value');
    let task: Task = new PersonServie().getTaskById(temp);
    console.log(task.toString());
});

function formatStatus(xxx: string) {
    if (xxx == "ACTIVE") {
        return "Đã kích hoạt";
    } else {
        return "Chưa kích hoạt";
    }
}

function formatCurrency(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}


function formatDate(date: Date) {
    return moment(date).format('MMMM/DD/YYYY');
}

$(document).ready(function () {
    $("#btnSearch").on(`click`, function () {
        var fisrtname = $("#firstname").val();
        var status = (($("#status").val() == 1) ? "ACTIVE" : "INACTIVE");
        let param: Search = new Search(fisrtname, status);
        document.location.search = param.toString();
    })
})


// $(document).ready(function () {
//     let xxx = $(location).attr("pathname");
//     console.log(ENDPOINT.person.personID + xxx);
//     let person: Person = new PersonServie().getOne(xxx);
//     let h1Ele = $("#person");
//     if (person.age != null) {
//         h1Ele.html(
/*`<i>${person.fisrtname} - ${person.age} - ${person.salary}</i>`
)
//*/
//     } else {
//         h1Ele.html(`del co thang nao ca`)
//     }
// })
