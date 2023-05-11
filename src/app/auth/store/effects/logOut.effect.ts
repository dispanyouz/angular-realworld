import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { logOutAction } from "src/app/auth/store/actions/sync.action"
import { tap } from "rxjs"
import { PersistanceService } from "src/app/shared/services/persistance.service"
import { Router } from "@angular/router"

@Injectable()
export class LogOutEffect {
    logOut$ = createEffect(
        () =>
            this.actions$.pipe(
                ofType(logOutAction),
                tap(() => {
                    this.persistanceService.set("accessToken", "")
                    this.router.navigateByUrl("/")
                })
            ),
        { dispatch: false }
    )
    constructor(
        private actions$: Actions,
        private persistanceService: PersistanceService,
        private router: Router
    ) {}
}
