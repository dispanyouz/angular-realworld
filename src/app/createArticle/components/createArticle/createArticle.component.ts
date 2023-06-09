import { Component, OnInit } from "@angular/core"
import { Observable } from "rxjs"
import { BackendErrorsInterface } from "src/app/shared/types/backendErrors.interface"
import { select, Store } from "@ngrx/store"
import {
    isSubmittingSelector,
    validationErrorsSelector,
} from "src/app/createArticle/store/selectors"
import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface"
import { createArticleAction } from "src/app/createArticle/store/actions/createArticle.action"

@Component({
    selector: "mc-create-article",
    templateUrl: "./createArticle.component.html",
})
export class CreateArticleComponent implements OnInit {
    initialValues = {
        title: "",
        description: "",
        body: "",
        tagList: [],
    }
    isSubmitting$: Observable<boolean>
    backendErrors$: Observable<BackendErrorsInterface | null>
    constructor(private store: Store) {}
    ngOnInit(): void {
        this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
        this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    }
    onSubmit(articleInput: ArticleInputInterface): void {
        this.store.dispatch(createArticleAction({ articleInput }))
    }
}
