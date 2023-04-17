import { Injectable } from "@angular/core"
import { map, Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface"
import { CurrentUserInterface } from "src/app/shared/types/currentUser.interface"
import { apiUrl } from "src/apiUrl"
import { AuthResponseInterface } from "src/app/auth/types/authResponse.interface"
@Injectable()
export class AuthService {
    constructor(private http: HttpClient) {}
    register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
        const url = apiUrl + "/users"
        return this.http
            .post<AuthResponseInterface>(url, data)
            .pipe(map((response: AuthResponseInterface) => response.user))
    }
}
