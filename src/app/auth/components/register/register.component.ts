import { Component, OnInit } from "@angular/core"
import { FormBuilder, Validators } from "@angular/forms"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"

import { registerAction } from "../../store/actions/register.action"
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from "../../store/selectors"
import { AuthService } from "src/app/auth/services/auth.service"
import { RegisterRequestInterface } from "src/app/auth/types/registerRequest.interface"
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"

@Component({
    selector: "mc-register",
    templateUrl: "./register.component.html",
    styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
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
        // @ts-ignore
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        // @ts-ignore
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }
    initializeForm(): void {
        this.form = this.fb.group({
            username: ["", Validators.required],
            email: "",
            password: "",
        })
    }

    onSubmit(): void {
        console.log(this.form.valid)
        const request: RegisterRequestInterface = {
            user: this.form.value,
        }
        this.store.dispatch(registerAction({ request }))
    }
}
