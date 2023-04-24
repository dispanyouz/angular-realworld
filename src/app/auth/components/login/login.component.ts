import { Component, OnInit } from "@angular/core"
import { FormBuilder } from "@angular/forms"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"

import {
    isSubmittingSelector,
    validationErrorsSelector,
} from "../../store/selectors"
import { AuthService } from "src/app/auth/services/auth.service"
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"
import { LoginRequestInterface } from "src/app/auth/types/loginRequest.interface"
import { loginAction } from "src/app/auth/store/actions/login.action"

@Component({
    selector: "mc-login",
    templateUrl: "./login.component.html",
})
export class LoginComponent implements OnInit {
    form: any
    isSubmitting$: Observable<boolean> | undefined
    backendErrors$: Observable<BackendErrorsInterface | null> | undefined

    constructor(
        private fb: FormBuilder,
        private store: Store,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        this.initializeForm()
        this.initializeValues()
    }
    initializeValues(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }
    initializeForm(): void {
        this.form = this.fb.group({
            email: "",
            password: "",
        })
    }

    onSubmit(): void {
        console.log(this.form.valid)
        const request: LoginRequestInterface = {
            user: this.form.value,
        }
        this.store.dispatch(loginAction({ request }))
    }
}
