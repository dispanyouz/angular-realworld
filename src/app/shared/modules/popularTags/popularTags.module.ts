import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { PopularTagsService } from "src/app/shared/modules/popularTags/services/popularTags.service"
import { StoreModule } from "@ngrx/store"
import { reducers } from "src/app/shared/modules/popularTags/store/reducers"
import { EffectsModule } from "@ngrx/effects"
import { GetPopularTagsEffect } from "src/app/shared/modules/popularTags/store/effects/getPopularTags.effect"
import { PopularTagsComponent } from "src/app/shared/modules/popularTags/components/popularTags/popularTags.component"

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        StoreModule.forFeature("popularTags", reducers),
        EffectsModule.forFeature([GetPopularTagsEffect]),
    ],
    declarations: [PopularTagsComponent],
    exports: [PopularTagsComponent],
    providers: [PopularTagsService],
})
export class PopularTagsModule {}
