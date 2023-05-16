import { NgModule } from "@angular/core"
import { CommonModule } from "@angular/common"
import { AddToFavoritesComponent } from "src/app/shared/modules/addToFavorites/components/addToFavorites/addToFavorites.component"
import { AddToFavoritesService } from "src/app/shared/modules/addToFavorites/services/addToFavorites.service"
import { EffectsModule } from "@ngrx/effects"
import { AddToFavoritesEffect } from "src/app/shared/modules/addToFavorites/store/effects/addToFavorites.effect"

@NgModule({
    imports: [CommonModule, EffectsModule.forFeature([AddToFavoritesEffect])],
    declarations: [AddToFavoritesComponent],
    exports: [AddToFavoritesComponent],
    providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
