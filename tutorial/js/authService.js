"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = /** @class */ (function () {
    function AuthService() {
        this.loggedIn = new BehaviorSubject(false);
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    return AuthService;
}());
exports.AuthService = AuthService;
isLoggedIn = AuthService.isLoggedIn;
