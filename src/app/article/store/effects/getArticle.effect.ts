import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects"
import { catchError, map, of, switchMap } from "rxjs"

import { ArticleService } from "src/app/shared/services/article.service"
import {
    getArticleAction,
    getArticleFailureAction,
    getArticleSuccessAction,
} from "src/app/article/store/actions/getArticle.action"
import { ArticleInterface } from "src/app/shared/types/article.interface"

@Injectable()
export class GetArticleEffect {
    getArticle$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getArticleAction),
            switchMap(({ slug }) => {
                return this.articleService.getArticle(slug).pipe(
                    map((article: ArticleInterface) => {
                        return getArticleSuccessAction({ article })
                    }),
                    catchError(() => {
                        return of(getArticleFailureAction())
                    })
                )
            })
        )
    )

    constructor(
        private actions$: Actions,
        private articleService: ArticleService
    ) {}
}