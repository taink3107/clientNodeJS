import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import moment = require("moment");
import {Search} from "./domain/Search";
import {Task} from "./domain/Task";

$(document).ready(function () {
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
        <td scope="col" class="editPerson" ><button type="button" class="btn btn-success" data-toggle="modal" data-target=".bd-example-modal-sm" data-edit="${value.id}" id="editPerson">Edit</button></td>
    </tr>`
    return content;
}

$(document).on('click', '#persons .showTask #btnShow', function () {

    var temp = $(this).attr('data-value');
    let tasks: Task[] = new PersonServie().getTaskById(temp);
    $("#valuePerson").val(temp);
    let tableEle = $("#tableTask tbody");
    if (tasks.length > 0) {
        let content: string;
        tasks.forEach(value => content += processDataTable(value));
        tableEle.html(content);
    }
});

function processDataTable(x: Task): string {
    var content = `<tr><th scope="row">${x.id}</th><td>${x.name}</td></tr>`
    return content;
}

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

$(document).on('click', '#persons .editPerson #editPerson', function () {

    var temp = $(this).attr('data-edit');
    let p: Person = new PersonServie().getOne(temp);
    $("#editModal #txtFirstName").val(p.firstname);
    $("#editModal #txtLastName").val(p.lastname);
    $("#editModal #txtAge").val(p.age);
    $("#editModal #txtDate").val(p.dob);
    $("#editModal #txtSalary").val(p.salary);
    let date = formatDate(p.dob);

    $("#editModal #txtDate").val(moment(date).format('mm/dd/yyyy'));

});

$("#statusEdit").on('change', function () {
    alert(this.value)
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
