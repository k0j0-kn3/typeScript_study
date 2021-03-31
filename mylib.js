"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person(nm, ml, ag) {
        this.name = nm;
        this.mail = ml;
        this.age = ag;
    }
    Object.defineProperty(Person.prototype, "age", {
        get: function () {
            return this._age;
        },
        set: function (n) {
            this._age = n < 0 ? 0 : n;
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.print = function () {
        return this.name + ',' + this.mail + ',' + this.age;
    };
    return Person;
}());
exports.Person = Person;
