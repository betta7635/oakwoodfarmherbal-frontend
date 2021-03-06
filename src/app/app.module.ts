import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { CarouselComponent } from './carousel/carousel.component';
import { EditPlanComponent } from './plan/edit-plan/edit-plan.component';
import { EditPlantComponent } from './plant/edit-plant/edit-plant.component';
import { EditSeedComponent } from './seed/edit-seed/edit-seed.component';
import { EditWishlistComponent } from './wishlist/edit-wishlist/edit-wishlist.component';
import { HomeComponent } from './home/home.component';
import { InfoFormComponent } from './shared/info-form/info-form.component';
import { LibraryComponent } from './library/library.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { NewPlanComponent } from './plan/new-plan/new-plan.component';
import { NewPlantComponent } from './plant/new-plant/new-plant.component';
import { NewSeedComponent } from './seed/new-seed/new-seed.component';
import { NewWishlistComponent } from './wishlist/new-wishlist/new-wishlist.component';
import { PlanComponent } from './plan/plan.component';
import { PlanDetailsComponent } from './plan/plan-details/plan-details.component';
import { PlanFormComponent } from './shared/plan-form/plan-form.component';
import { PlanIndexComponent } from './plan/plan-index/plan-index.component';
import { PlantComponent } from './plant/plant.component';
import { PlantDetailsComponent } from './plant/plant-details/plant-details.component';
import { PlantIndexComponent } from './plant/plant-index/plant-index.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchFormComponent } from './shared/search-form/search-form.component';
import { SeedComponent } from './seed/seed.component';
import { SeedDetailsComponent } from './seed/seed-details/seed-details.component';
import { SeedIndexComponent } from './seed/seed-index/seed-index.component';
import { UserComponent } from './shared/user/user.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { WishlistDetailsComponent } from './wishlist/wishlist-details/wishlist-details.component';
import { WishlistIndexComponent } from './wishlist/wishlist-index/wishlist-index.component';
import { AuthInterceptorService } from './authorization/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent,
    CarouselComponent,
    EditPlanComponent,
    EditPlantComponent,
    EditSeedComponent,
    EditWishlistComponent,
    HomeComponent,
    InfoFormComponent,
    LibraryComponent,
    NavigationComponent,
    NewPlanComponent,
    NewPlantComponent,
    NewSeedComponent,
    NewWishlistComponent,
    PlanComponent,
    PlanDetailsComponent,
    PlanFormComponent,
    PlanIndexComponent,
    PlantComponent,
    PlantDetailsComponent,
    PlantIndexComponent,
    ProfileComponent,
    SearchFormComponent,
    SeedComponent,
    SeedDetailsComponent,
    SeedIndexComponent,
    UserComponent,
    WishlistComponent,
    WishlistDetailsComponent,
    WishlistIndexComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
