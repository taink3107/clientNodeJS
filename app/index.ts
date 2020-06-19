import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import moment = require("moment");

$(document).ready(function () {

    let searchParams = new URLSearchParams(window.location.search)
    let param = searchParams.get("search");
    let persons: Person[] = new PersonServie().getAll(param);
    let ulEle = $("#persons tbody");
    if (persons.length < 0) {
        ulEle.html("<li>khong co person</li>");
    } else {
        console.log(persons.length)
        let content = "";
        persons.forEach(value => content += processDate(value))
        ulEle.append(content);
    }
})

function processDate(value: Person) {
    var content = `<tr>
        <td>${value.id}</td>
        <td>${value.firstname} ${value.lastname}</td>
        <td>${value.age}</td>
        <td>${formatCurrency(value.salary, "VND")}</td>
        <td>${formatDate(value.dob)}</td>
        <td>${formatStatus(value.status)}</td>
    </tr>`
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
    $("#btnSearch").on(`click`,function () {
        var fisrtname = "firstname:" + $("#firstname").val();
        alert(fisrtname);
        var status = "lastname" + (($("#status").val() == 1) ? "ACTIVE" : "INACTIVE");
        let param = "search=" + fisrtname + "," + status;
        document.location.search = param;
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
