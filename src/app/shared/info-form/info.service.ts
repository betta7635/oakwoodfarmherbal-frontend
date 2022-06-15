import { EventEmitter, Injectable } from "@angular/core";
import { Info } from "./info.model";


@Injectable({
  providedIn: 'root',
})
export class InfoService {
  infoSelected = new EventEmitter<Info>();
  infoChanged = new EventEmitter<Info[]>();
  private myInfos: Info[] = [];

  getInfos() {
    return this.myInfos.slice();
  }

  getInfo(idx: number) {
    return this.myInfos.slice()[idx];
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
}
