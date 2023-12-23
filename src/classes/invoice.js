"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invoice = void 0;
//the has formatter is am interface that has a method and returns a string. (we defined that in the file.)
//to use it on a class/interface again, we add 'implement hasFormatter'
// A class is a blue print for an object
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        (this.client = c), (this.details = d), (this.amount = a);
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes $").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
//the hasFormatter doesnt give errors because, the Invoice is a method that returns a string...if we change it o return a number then we may see errors.
