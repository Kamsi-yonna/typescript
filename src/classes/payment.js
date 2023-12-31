"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(c, d, a) {
        (this.recipient = c), (this.details = d), (this.amount = a);
    }
    Payment.prototype.format = function () {
        return "".concat(this.recipient, " is owed $").concat(this.amount, " for ").concat(this.details);
    };
    return Payment;
}());
exports.Payment = Payment;
