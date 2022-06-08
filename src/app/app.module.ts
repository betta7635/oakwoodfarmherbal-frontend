import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './shared/authorization/authorization.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { InfoFormComponent } from './shared/info-form/info-form.component';
import { PlanFormComponent } from './shared/plan-form/plan-form.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { UserComponent } from './shared/user/user.component';
import { PlanComponent } from './plan/plan.component';
import { EditPlanComponent } from './plan/edit-plan/edit-plan.component';
import { NewPlanComponent } from './plan/new-plan/new-plan.component';
import { PlanDetailsComponent } from './plan/plan-details/plan-details.component';
import { PlanIndexComponent } from './plan/plan-index/plan-index.component';
import { PlantComponent } from './plant/plant.component';
import { EditPlantComponent } from './plant/edit-plant/edit-plant.component';
import { NewPlantComponent } from './plant/new-plant/new-plant.component';
import { PlantDetailsComponent } from './plant/plant-details/plant-details.component';
import { PlantIndexComponent } from './plant/plant-index/plant-index.component';
import { SeedComponent } from './seed/seed.component';
import { EditSeedComponent } from './seed/edit-seed/edit-seed.component';
import { NewSeedComponent } from './seed/new-seed/new-seed.component';
import { SeedDetailsComponent } from './seed/seed-details/seed-details.component';
import { SeedIndexComponent } from './seed/seed-index/seed-index.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { EditWishlistComponent } from './wishlist/edit-wishlist/edit-wishlist.component';
import { NewWishlistComponent } from './wishlist/new-wishlist/new-wishlist.component';
import { WishlistDetailsComponent } from './wishlist/wishlist-details/wishlist-details.component';
import { WishlistIndexComponent } from './wishlist/wishlist-index/wishlist-index.component';
import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    NavigationComponent,
    InfoFormComponent,
    PlanFormComponent,
    SearchFormComponent,
    UserComponent,
    PlanComponent,
    EditPlanComponent,
    NewPlanComponent,
    PlanDetailsComponent,
    PlanIndexComponent,
    PlantComponent,
    EditPlantComponent,
    NewPlantComponent,
    PlantDetailsComponent,
    PlantIndexComponent,
    SeedComponent,
    EditSeedComponent,
    NewSeedComponent,
    SeedDetailsComponent,
    SeedIndexComponent,
    WishlistComponent,
    EditWishlistComponent,
    NewWishlistComponent,
    WishlistDetailsComponent,
    WishlistIndexComponent,
    HomeComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
