import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"

import { FeedModule } from "src/app/shared/modules/feed/feed.module"
import { BannerModule } from "src/app/shared/modules/banner/banner.module"
import { PopularTagsModule } from "src/app/shared/modules/popularTags/popularTags.module"
import { FeedToggleModule } from "src/app/shared/modules/feedToggle/feedToggle.module"
import { TagFeedComponent } from "src/app/tagFeed/components/globalFeed/tagFeed.component"

const routes = [
    {
        path: "tags/:slug",
        component: TagFeedComponent,
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
    declarations: [TagFeedComponent],
})
export class TagFeedModule {}
