import { AuthStateInterface } from "src/app/auth/types/authState.interface"
import { FeedStateInterface } from "src/app/shared/modules/feed/types/feedState.interface"
import { ArticleStateInterface } from "src/app/article/types/articleState.interface"
import { CreateArticleStateInterface } from "src/app/createArticle/types/createArticleState.interface"

export interface AppStateInterface {
    auth: AuthStateInterface
    feed: FeedStateInterface
    article: ArticleStateInterface
    createArticle: CreateArticleStateInterface
}
