import $ = require("jquery");
import {Person} from "./domain/Person";
import {PersonServie} from "./service/PersonServie";
import {ENDPOINT} from "./util/Constants";

$("#save").click(function (e) {
    alert("xyz");
    e.preventDefault();
    if( $("#firstname").val() === "taink"){
        alert("ABxxxC");
    }else{
        alert("ABC");
    }
})