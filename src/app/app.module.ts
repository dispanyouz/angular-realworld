import { isDevMode, NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { StoreModule } from "@ngrx/store"
import { StoreDevtoolsModule } from "@ngrx/store-devtools"
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http"
import { EffectsModule } from "@ngrx/effects"
import { StoreRouterConnectingModule, routerReducer } from "@ngrx/router-store"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "src/app/app.component"
import { AuthModule } from "src/app/auth/auth.module"
import { HeaderModule } from "src/app/shared/modules/header/header.module"
import { PersistanceService } from "src/app/shared/services/persistance.service"
import { AuthInterceptor } from "src/app/shared/services/authInterceptor.service"
import { GlobalFeedModule } from "src/app/globalFeed/globalFeed.module"
import { CreateArticleModule } from "src/app/createArticle/createArticle.module"
import { ArticleModule } from "src/app/article/article.module"
import { EditArticleModule } from "src/app/editArticle/editArticle.module"
import { YourFeedModule } from "src/app/yourFeed/yourFeed.module"
import { TagFeedModule } from "src/app/tagFeed/tagFeed.module"
import { SettingsModule } from "src/app/settings/settings.module"

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        AuthModule,
        HttpClientModule,
        StoreModule.forRoot({ router: routerReducer }),
        EffectsModule.forRoot([]),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: !isDevMode(),
            autoPause: true,
            trace: false,
            traceLimit: 75,
        }),
        StoreRouterConnectingModule.forRoot(),
        HeaderModule,
        GlobalFeedModule,
        YourFeedModule,
        TagFeedModule,
        CreateArticleModule,
        ArticleModule,
        EditArticleModule,
        SettingsModule,
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
