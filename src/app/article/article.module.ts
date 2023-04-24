import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { EffectsModule } from "@ngrx/effects"
import { StoreModule } from "@ngrx/store"
import { RouterModule } from "@angular/router"

import { reducers } from "src/app/article/store/reducers"
import { ArticleService } from "src/app/shared/services/article.service"
import { GetArticleEffect } from "src/app/article/store/effects/getArticle.effect"
import { ArticleComponent } from "src/app/article/components/article/article.component"

const routes = [
    {
        path: "articles/:slug",
        component: ArticleComponent,
    },
]
@NgModule({
    imports: [
        CommonModule,
        EffectsModule.forFeature([GetArticleEffect]),
        StoreModule.forFeature("article", reducers),
        RouterModule,
        RouterModule.forChild(routes),
    ],
    declarations: [ArticleComponent],
    exports: [],
    providers: [ArticleService],
})
export class ArticleModule {}
