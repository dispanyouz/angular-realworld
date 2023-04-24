import { Component, Input, OnInit } from "@angular/core"
import { select, Store } from "@ngrx/store"
import { Observable } from "rxjs"
import { ActivatedRoute, Router } from "@angular/router"

import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/getFeedResponse.interface"
import {
    errorSelector,
    feedSelector,
    isLoadingSelector,
} from "src/app/shared/modules/feed/store/selectors"
import { getFeedAction } from "src/app/shared/modules/feed/store/actions/getFeed.action"
import { limit } from "src/limit"

@Component({
    selector: "mc-feed",
    templateUrl: "./feed.component.html",
})
export class FeedComponent implements OnInit {
    @Input("apiUrl") apiUrlProps: string
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<GetFeedResponseInterface | null>
    limitFeed = limit
    baseUrl: string
    currentPage: number
    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.initializeValues()
        this.fetchFeed()
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.feed$ = this.store.pipe(select(feedSelector))
        this.baseUrl = this.router.url.split("?")[0]
    }
    fetchFeed(): void {
        this.store.dispatch(getFeedAction({ url: this.apiUrlProps }))
    }
}
