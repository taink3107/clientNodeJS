import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import moment = require("moment");
import {Search} from "./domain/Search";
import {Task} from "./domain/Task";
import {TaskService} from "./service/TaskService";

var personServie: PersonServie = new PersonServie();

var taskService: TaskService = new TaskService();

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

//function fillPerson Daskboard
function processDate(value: Person) {
    var content = `<tr>
        <td scope="col">${value.id}</td>
        <td scope="col">${value.firstname} ${value.lastname}</td>
        <td scope="col">${value.age}</td>
        <td scope="col">${formatCurrency(value.salary, "VND")}</td>
        <td scope="col">${formatDate(value.dob)}</td>
        <td scope="col">${formatStatus(value.status)}</td>
        <td scope="col" class="showTask"><button type="button" class="btn btn-outline-dark"  data-toggle="modal" data-target=".bd-example-modal-lg" data-value="${value.id}" id="btnShow">Show task</button></td>
        <td scope="col" class="editPerson" ><button type="button" class="btn btn-outline-dark"  data-toggle="modal" data-target=".bd-example-modal-sm" data-edit="${value.id}" id="editPerson">Edit</button></td>
    </tr>`
    return content;
}


//function Show Task
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

//child show Task
function processDataTable(x: Task): string {
    var content = `<tr><th scope="row">${x.id}</th><td>${x.name}</td></tr>`
    return content;
}

//formatStatus
function formatStatus(xxx: string) {
    if (xxx == "ACTIVE") {
        return "Đã kích hoạt";
    } else {
        return "Chưa kích hoạt";
    }
}


//format Currency
function formatCurrency(n, currency) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,') + currency;
}


//format date
function formatDate(date: Date) {
    return moment(date).format('MMMM/DD/YYYY');
}

//function Search
$(document).ready(function () {
    $("#btnSearch").on(`click`, function () {
        var fisrtname = $("#inputName").val();
        var status = $("#inputGroupSelect").val();
        console.log(status);
        let param: Search = new Search(fisrtname, status);
        document.location.search = param.toString();
    });

    //check Status
    $("#statusEdit").change(function () {
        var selectedCountry = $(this).children("option:selected").val();

        console.log(selectedCountry);
    });


})

function fill() {
    let tlb = $("#editModal .modal-body");
    let content = `<form id="formInfo">
                            <input type="text" class="form-control mb-1" id="txtFirstName" name="firstname"
                                   placeholder="Tên"
                                   aria-label="task" aria-describedby="basic-addon1">
                            <input type="text" class="form-control mb-1" id="txtLastName" name="lastname"
                                   placeholder="Họ"
                                   aria-label="task" aria-describedby="basic-addon1">
                            <input type="number" class="form-control mb-1" id="txtAge" name="age" placeholder="Tuổi"
                                   aria-label="task" aria-describedby="basic-addon1">
                            <input type="text" step="any" class="form-control mb-1" name="salary" id="txtSalary"
                                   placeholder="Lương"
                                   aria-label="task" aria-describedby="basic-addon1">
                            <input type="date" class="form-control mb-1" id="txtDate" name="dob" placeholder="DoB"
                                   aria-label="task" aria-describedby="basic-addon1">
                            <div class="row">
                                <div class="col text-md-right">
                                    <select id="statusEdit" class="custom-select-sm mb-1" name="status">
                                        <option value="ACTIVE">ACTIVE</option>
                                        <option value="INACTIVE">INACTIVE</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <label>Status</label>
                                </div>
                            </div>
                        </form>`;
    tlb.html(content);

}

//function edit
$(document).ready(function () {
    var temp;
    var p: Person;
    var pNew: Person;
    $(document).on('click', '#persons .editPerson #editPerson', function () {
        fill();
        temp = $(this).attr('data-edit');
        p = new PersonServie().getOne(temp);
        fillFormEdit(p);

    });

    $(document).on('click', '.modal-footer #btnSave', function (event) {
        event.preventDefault();
        pNew = createPerson();
        let pNew2: Person = new Person("Tai", "Khanh", 18, 20000, null, "ACTIVE");
        pNew.id = temp;
        console.log(pNew);
        console.log("p2");
        console.log(JSON.stringify(pNew2));
        let value = taskService.isExist(temp);
        personServie.update(pNew);
        if (value === 0) {
            //    personServie.save(pNew);
        } else {
            alert("Người dùng đang có 1 số công việc nên không thể thay đổi thông tin");
        }
    })
})


//function get person
function createPerson(): Person {
    let per: Person;
    var inputs = $("#formInfo :input");
    var obj = $.map(inputs, function (x, y) {
        // var o = {};
        // o[x.name] = $(x).val();
        // return o;
        return $(x).val();
    });
    per.firstname = obj[0];
    per.lastname = obj[1];
    return obj;
}

//function fillPerson to Edit form
function fillFormEdit(p: Person) {
    $("#editModal #txtFirstName").val(p.firstname);
    $("#editModal #txtLastName").val(p.lastname);
    $("#editModal #txtAge").val(p.age);
    $("#editModal #txtDate").val(p.dob);
    $("#editModal #txtSalary").val(p.salary);
    let date = formatDate(p.dob);
    $("#editModal #txtDate").val(moment(date).format('YYYY-MM-DD'));
    $("#statusEdit").val(p.status).change();
}


