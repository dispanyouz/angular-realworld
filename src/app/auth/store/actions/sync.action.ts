import { createAction } from "@ngrx/store"
import { ActionTypes } from "src/app/auth/store/actionTypes"

export const logOutAction = createAction(ActionTypes.LOGOUT)
