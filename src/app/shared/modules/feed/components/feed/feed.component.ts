import {
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
} from "@angular/core"
import { select, Store } from "@ngrx/store"
import { Observable, Subscription } from "rxjs"
import { ActivatedRoute, Params, Router } from "@angular/router"

import { GetFeedResponseInterface } from "src/app/shared/modules/feed/types/getFeedResponse.interface"
import {
    errorSelector,
    feedSelector,
    isLoadingSelector,
} from "src/app/shared/modules/feed/store/selectors"
import { getFeedAction } from "src/app/shared/modules/feed/store/actions/getFeed.action"
import { limit } from "src/limit"
import queryString from "query-string"

@Component({
    selector: "mc-feed",
    templateUrl: "./feed.component.html",
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
    @Input("apiUrl") apiUrlProps: string
    isLoading$: Observable<boolean>
    error$: Observable<string | null>
    feed$: Observable<GetFeedResponseInterface | null>
    limitFeed = limit
    baseUrl: string
    queryParamsSubscription: Subscription
    currentPage: number
    constructor(
        private store: Store,
        private router: Router,
        private route: ActivatedRoute
    ) {}
    ngOnInit(): void {
        this.initializeValues()
        this.initializeListeners()
    }
    ngOnDestroy(): void {
        this.queryParamsSubscription.unsubscribe()
    }
    ngOnChanges(changes: SimpleChanges) {
        const isApiUrlChanged =
            !changes["apiUrlProps"].firstChange &&
            changes["apiUrlProps"].currentValue !==
                changes["apiUrlProps"].previousValue
        if (isApiUrlChanged) {
            this.fetchFeed()
        }
    }

    initializeValues(): void {
        this.isLoading$ = this.store.pipe(select(isLoadingSelector))
        this.error$ = this.store.pipe(select(errorSelector))
        this.feed$ = this.store.pipe(select(feedSelector))
        this.baseUrl = this.router.url.split("?")[0]
    }
    fetchFeed(): void {
        const offset = this.currentPage * this.limitFeed - this.limitFeed
        const parsedUrl = queryString.parseUrl(this.apiUrlProps)
        const stringifiedParams = queryString.stringify({
            limit: this.limitFeed,
            offset,
            ...parsedUrl.query,
        })
        const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
        this.store.dispatch(getFeedAction({ url: apiUrlWithParams }))
    }

    initializeListeners(): void {
        this.queryParamsSubscription = this.route.queryParams.subscribe(
            (params: Params) => {
                this.currentPage = Number(params["page"] || "1")
                this.fetchFeed()
            }
        )
    }
}
