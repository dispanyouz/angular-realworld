import { createFeatureSelector, createSelector } from "@ngrx/store"
import { AppStateInterface } from "src/app/shared/types/appState.interface"
import { SettingsStateInterface } from "src/app/settings/types/settingsState.interface"

export const settingsFeatureSelector = createFeatureSelector<
    AppStateInterface,
    SettingsStateInterface
>("auth")

export const isSubmittingSelector = createSelector(
    settingsFeatureSelector,
    (settingsState: SettingsStateInterface) => settingsState.isSubmitting
)
export const validationErrorsSelector = createSelector(
    settingsFeatureSelector,
    (settingsState: SettingsStateInterface) => settingsState.validationErrors
)
