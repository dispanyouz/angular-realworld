import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { GlobalFeedComponent } from "src/app/globalFeed/components/globalFeed/globalFeed.component"
import { RouterModule } from "@angular/router"
import { FeedModule } from "src/app/shared/modules/feed/feed.module"
import { BannerModule } from "src/app/shared/modules/banner/banner.module"
import { PopularTagsModule } from "src/app/shared/modules/popularTags/popularTags.module"
import { FeedToggleModule } from "src/app/shared/modules/feedToggle/feedToggle.module"

const routes = [
    {
        path: "",
        component: GlobalFeedComponent,
    },
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FeedModule,
        BannerModule,
        PopularTagsModule,
        FeedToggleModule,
    ],
    declarations: [GlobalFeedComponent],
})
export class GlobalFeedModule {}
