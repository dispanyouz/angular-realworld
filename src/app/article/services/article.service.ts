import { Injectable } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { apiUrl } from "src/apiUrl"

@Injectable()
export class ArticleService {
    constructor(private http: HttpClient) {}
    deleteArticle(slug: string): Observable<{}> {
        const url = `${apiUrl}/articles/${slug}`

        return this.http.delete<{}>(url)
    }
}
