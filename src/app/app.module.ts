import { isDevMode, NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "src/app/app.component"
import { AuthModule } from "src/app/auth/auth.module"
import { EffectsModule } from "@ngrx/effects"

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule,
        StoreModule.forRoot({}),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
        }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
