import { Injectable } from "@angular/core"
import { map, Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

import { apiUrl } from "src/apiUrl"
import { GetArticleResponseInterface } from "src/app/shared/types/getArticleResponse.interface"
import { ArticleInterface } from "src/app/shared/types/article.interface"

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {}
    getArticle(slug: string): Observable<ArticleInterface> {
        const fullUrl = `${apiUrl}/articles/${slug}`
        return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
            map((response: GetArticleResponseInterface) => {
                return response.article
            })
        )
    }
}
