import { Injectable } from "@angular/core"
import { map, Observable } from "rxjs"
import { HttpClient } from "@angular/common/http"

import { PopularTagType } from "src/app/shared/types/popularTag.type"
import { apiUrl } from "src/apiUrl"
import { GetPopularTagsResponseInterface } from "src/app/shared/modules/popularTags/types/getPopularTagsResponse.interface"

@Injectable()
export class PopularTagsService {
    getPopularTags(): Observable<PopularTagType[]> {
        const url = apiUrl + "/tags"

        return this.http.get(url).pipe(
            map((res: GetPopularTagsResponseInterface) => {
                return res.tags
            })
        )
    }
    constructor(private http: HttpClient) {}
}
