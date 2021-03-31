import {Person} from "./mylib";

let taro = new Person('Taro', 'taro@yamada', 35);
let hanako = new Person('Hanako', 'hanako@flower', 17);


function load() {
    let msg = `<ul>
    <li>${taro.print()}</li>
    <li>${hanako.print()}</li>
    </ul>`;
    document.querySelector('#msg').innerHTML = msg;
}

load();