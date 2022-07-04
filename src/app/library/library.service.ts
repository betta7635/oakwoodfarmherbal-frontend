import { EventEmitter, Injectable } from "@angular/core";
import { Info } from "../shared/info-form/info.model";


@Injectable({
  providedIn: 'root',
})
export class LibraryService {
  infoSelected = new EventEmitter<Info>();
  infoChanged = new EventEmitter<Info[]>();
  private myInfos: Info[] = [];

  // info handling
  getInfos() {
    return this.myInfos.slice();
  }

  getInfo(idx: number) {
    return this.myInfos.slice()[idx];
  }

  setInfos(infos: Info[] | []) {
    console.log('%c infos:', 'color: red;', infos);
    this.myInfos = infos || [];
    this.infoChanged.next(this.myInfos.slice());
  }

  saveInfo(info: Info) {
    this.myInfos.push(info);
    this.infoChanged.emit(this.myInfos.slice());
  }

  deleteInfo(index: number) {
    if (index !== -1) {
      this.myInfos.splice(index, 1);
      this.infoChanged.emit(this.myInfos.slice());
    }
  }

  // plant handling
  getPlants() {
    return this.myInfos.slice();
  }
  getPlant(idx: number) {
    return this.myInfos.slice()[idx];
  }
  savePlant(info: Info) {
    this.myInfos.push(info);
    this.infoChanged.emit(this.myInfos.slice());
  }
  deletePlant(index: number) {
    if (index !== -1) {
      this.myInfos.splice(index, 1);
      this.infoChanged.emit(this.myInfos.slice());
    }
  }

  // seed handling
  getSeeds() {
    return this.myInfos.slice();
  }
  getSeed(idx: number) {
    return this.myInfos.slice()[idx];
  }
  saveSeed(info: Info) {
    this.myInfos.push(info);
    this.infoChanged.emit(this.myInfos.slice());
  }
  deleteSeed(index: number) {
    if (index !== -1) {
      this.myInfos.splice(index, 1);
      this.infoChanged.emit(this.myInfos.slice());
    }
  }

  // wishlist handling
  getWishlists() {
    return this.myInfos.slice();
  }
  getWishlist(idx: number) {
    return this.myInfos.slice()[idx];
  }
  saveWishlist(info: Info) {
    this.myInfos.push(info);
    this.infoChanged.emit(this.myInfos.slice());
  }
  deleteWishlist(index: number) {
    if (index !== -1) {
      this.myInfos.splice(index, 1);
      this.infoChanged.emit(this.myInfos.slice());
    }
  }
}
