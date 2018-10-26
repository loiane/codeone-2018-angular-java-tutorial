"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact = /** @class */ (function () {
    function Contact(_name) {
        this._name = _name;
    }
    Object.defineProperty(Contact.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    return Contact;
}());
exports.Contact = Contact;

var c = new Contact();
c._name
