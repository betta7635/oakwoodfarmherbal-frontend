import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap, tap, take } from "rxjs/operators";
import { AuthService } from "src/app/authorization/auth.service";
import { LibraryService } from "src/app/library/library.service";
import { Info } from "../info-form/info.model";


@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  baseApiRootURL = "https://localhost:3000/api/v1/home.json";

  constructor(private http: HttpClient, private libraryService: LibraryService, private authService: AuthService) {}

  // SAVE plant/seed/item info to baseApi db
  saveInfoToAPI() {
    const infos = this.libraryService.getInfos();
    this.http.put(this.baseApiRootURL, infos).subscribe((response) => {
      console.log("baseApi response:", response);
    });
  }

  // GET plant/seed/item info from baseApi db
  fetchInfoFromAPI() {
    // return this.authService.currentUser.pipe(
    //   take(1),
    //   exhaustMap((user) => {
    //     console.log(user);
    return this.http.get<Info[]>(this.baseApiRootURL, {}).pipe(
      tap((infos) => {
        this.libraryService.setInfos(infos);
      })
    );
  }
}
