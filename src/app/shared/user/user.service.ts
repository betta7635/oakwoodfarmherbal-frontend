import { EventEmitter, Injectable } from "@angular/core";
import { AuthService } from "src/app/authorization/auth.service";
import { Plan } from "src/app/plan/plan.model";
import { Plant } from "src/app/plant/plant.model";
import { Seed } from "src/app/seed/seed.model";
import { Wishlist } from "src/app/wishlist/wishlist.model";
import { User } from "./user.model";


@Injectable({
  providedIn: 'root',
})
export class UserService {
  userSelected = new EventEmitter<User>();
  userChanged = new EventEmitter<User[]>();
  private myUsers: User[] = [];
  myPlans: Plan[] = [];
  planCount: number;
  myPlants: Plant[] = [];
  plantCount: number;
  mySeeds: Seed[] = [];
  seedCount: number;
  myWishlists: Wishlist[] = [];
  wishlistCount: number;
  isAuthenticated: boolean = false;
  selectedUser: boolean = false;

  constructor(private authService: AuthService) {}

  getUsers() {
    return this.myUsers.slice();
  }

  getPlanCount(number) {
    this.myUsers.slice();
    if (this.selectedUser = this.isAuthenticated) {
      return this.myPlans.length
    } else {
      this.planCount === 0
    };
  }

  getPlantCount(number) {
    this.myUsers.slice();
    if (this.selectedUser = this.isAuthenticated) {
      return this.myPlants.length
    } else {
      this.plantCount === 0
    };
  }

  getSeedCount(number) {
    this.myUsers.slice();
    if (this.selectedUser = this.isAuthenticated) {
      return this.mySeeds.length
    } else {
      this.seedCount === 0
    };
  }

  getWishlistCount(number) {
    this.myUsers.slice();
    if (this.selectedUser = this.isAuthenticated) {
      return this.myWishlists.length
    } else {
      this.wishlistCount === 0
    };
  }

  saveUser(user: User) {
    this.myUsers.push(user);
    this.userChanged.emit(this.myUsers.slice());
  }

  deleteUser(index: number) {
    if (index !== -1) {
      this.myUsers.splice(index, 1);
      this.userChanged.emit(this.myUsers.slice());
    }
  }
}
