import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { map, Observable } from "rxjs"

import { ArticleInputInterface } from "src/app/shared/types/articleInput.interface"
import { ArticleInterface } from "src/app/shared/types/article.interface"
import { apiUrl } from "src/apiUrl"
import { SaveArticleResponseInterface } from "src/app/shared/types/saveArticleResponse.interface"

@Injectable()
export class EditArticleService {
    constructor(private http: HttpClient) {}
    updateArticle(
        slug: string,
        articleInput: ArticleInputInterface
    ): Observable<ArticleInterface> {
        const fullUrl = `${apiUrl}/articles/${slug}`

        return this.http
            .put<SaveArticleResponseInterface>(fullUrl, {
                article: articleInput,
            })
            .pipe(
                map(
                    (response: SaveArticleResponseInterface) => response.article
                )
            )
    }
}
