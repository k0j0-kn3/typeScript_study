"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mylib_1 = require("./mylib");
var taro = new mylib_1.Person('Taro', 'taro@yamada', 35);
var hanako = new mylib_1.Person('Hanako', 'hanako@flower', 17);
function load() {
    var msg = "<ul>\n    <li>" + taro.print() + "</li>\n    <li>" + hanako.print() + "</li>\n    </ul>";
    document.querySelector('#msg').innerHTML = msg;
}
load();
