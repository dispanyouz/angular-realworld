import { Component, Input, OnInit } from "@angular/core"
import { UtilsService } from "src/app/shared/services/utils.service"

@Component({
    selector: "mc-pagination",
    templateUrl: "./pagination.component.html",
})
export class PaginationComponent implements OnInit {
    @Input("total") totalProps: number
    @Input("limitFeed") limitFeedProps: number
    @Input("currentPage") currentPageProps: number
    @Input("url") urlProps: string
    pagesCount: number
    pages: number[]
    constructor(private utilsService: UtilsService) {}
    ngOnInit(): void {
        this.pagesCount = Math.ceil(this.totalProps / this.limitFeedProps)
        this.pages = this.utilsService.range(1, this.pagesCount)
    }
}
