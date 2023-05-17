import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { RouterModule } from "@angular/router"

import { UserProfileComponent } from "src/app/userProfile/components/userProfile/userProfile.component"
import { UserProfileService } from "src/app/userProfile/services/userProfile.service"
import { GetUserProfileEffect } from "src/app/userProfile/store/effects/getUserProfile.effect"
import { reducers } from "src/app/userProfile/store/reducers"
import { FeedModule } from "src/app/shared/modules/feed/feed.module"

const routes = [
    {
        path: "profiles/:slug",
        component: UserProfileComponent,
    },
    {
        path: "profiles/:slug/favorites",
        component: UserProfileComponent,
    },
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        EffectsModule.forFeature([GetUserProfileEffect]),
        StoreModule.forFeature("userProfile", reducers),
        FeedModule,
    ],
    declarations: [UserProfileComponent],
    exports: [UserProfileComponent],
    providers: [UserProfileService],
})
export class UserProfileModule {}
