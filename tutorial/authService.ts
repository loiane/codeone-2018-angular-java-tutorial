export class AuthService {

    private loggedIn = new BehaviorSubject(false);

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
}

isLoggedIn = AuthService.isLoggedIn;