import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./authorization/auth.guard";
import { AuthorizationComponent } from "./authorization/authorization.component";
import { HomeComponent } from "./home/home.component";
import { LibraryComponent } from "./library/library.component";
import { EditPlanComponent } from "./plan/edit-plan/edit-plan.component";
import { NewPlanComponent } from "./plan/new-plan/new-plan.component";
import { PlanDetailsComponent } from "./plan/plan-details/plan-details.component";
import { PlanIndexComponent } from "./plan/plan-index/plan-index.component";
import { EditPlantComponent } from "./plant/edit-plant/edit-plant.component";
import { NewPlantComponent } from "./plant/new-plant/new-plant.component";
import { PlantDetailsComponent } from "./plant/plant-details/plant-details.component";
import { PlantIndexComponent } from "./plant/plant-index/plant-index.component";
import { ProfileComponent } from "./profile/profile.component";
import { EditSeedComponent } from "./seed/edit-seed/edit-seed.component";
import { NewSeedComponent } from "./seed/new-seed/new-seed.component";
import { SeedDetailsComponent } from "./seed/seed-details/seed-details.component";
import { SeedIndexComponent } from "./seed/seed-index/seed-index.component";
import { EditWishlistComponent } from "./wishlist/edit-wishlist/edit-wishlist.component";
import { NewWishlistComponent } from "./wishlist/new-wishlist/new-wishlist.component";
import { WishlistDetailsComponent } from "./wishlist/wishlist-details/wishlist-details.component";
import { WishlistIndexComponent } from "./wishlist/wishlist-index/wishlist-index.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "authorization", component: AuthorizationComponent },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "library", component: LibraryComponent, canActivate: [AuthGuard] },
  { path: "plan-index", component: PlanIndexComponent, canActivate: [AuthGuard],
    children: [
      { path: "edit-plan", component: EditPlanComponent },
      { path: "new-plan", component: NewPlanComponent },
      { path: "plan-details", component: PlanDetailsComponent },
    ],
  },
  { path: "plant-index", component: PlantIndexComponent, canActivate: [AuthGuard],
    children: [
      { path: "edit-plant", component: EditPlantComponent },
      { path: "new-plant", component: NewPlantComponent },
      { path: "plant-details", component: PlantDetailsComponent },
    ],
  },
  { path: "seed-index", component: SeedIndexComponent, canActivate: [AuthGuard],
    children: [
      { path: "edit-seed", component: EditSeedComponent },
      { path: "new-seed", component: NewSeedComponent },
      { path: "seed-details", component: SeedDetailsComponent },
    ],
  },
  { path: "wishlist-index", component: WishlistIndexComponent, canActivate: [AuthGuard],
    children: [
      { path: "edit-wishlist", component: EditWishlistComponent },
      { path: "new-wishlist", component: NewWishlistComponent },
      { path: "wishlist-details", component: WishlistDetailsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
