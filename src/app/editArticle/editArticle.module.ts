import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { RouterModule } from "@angular/router"
import { StoreModule } from "@ngrx/store"
import { EffectsModule } from "@ngrx/effects"

import { ArticleFormModule } from "src/app/shared/modules/articleForm/articleForm.module"
import { reducers } from "src/app/editArticle/store/reducers"
import { EditArticleService } from "src/app/editArticle/services/editArticle.service"
import { ArticleService as SharedArticleService } from "src/app/shared/services/article.service"
import { GetArticleEffect } from "src/app/editArticle/store/effects/getArticle.effect"
import { UpdateArticleEffect } from "src/app/editArticle/store/effects/updateArticle.effect"
import { EditArticleComponent } from "src/app/editArticle/components/createArticle/editArticle.component"

const routes = [
    {
        path: "articles/:slug/edit",
        component: EditArticleComponent,
    },
]
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ArticleFormModule,
        EffectsModule.forFeature([GetArticleEffect, UpdateArticleEffect]),
        StoreModule.forFeature("editArticle", reducers),
    ],
    declarations: [EditArticleComponent],
    providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
