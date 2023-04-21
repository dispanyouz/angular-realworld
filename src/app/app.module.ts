import { isDevMode, NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "src/app/app.component"
import { AuthModule } from "src/app/auth/auth.module"
import { EffectsModule } from "@ngrx/effects"
import { HeaderModule } from "src/app/shared/modules/header/header.module"
import { PersistanceService } from "src/app/shared/services/persistance.service"
import { AuthInterceptor } from "src/app/shared/services/authInterceptor.service"
import { GlobalFeedModule } from "src/app/globalFeed/globalFeed.module"

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
        HeaderModule,
        GlobalFeedModule,
    ],
    providers: [
        PersistanceService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
