import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { exhaustMap } from "rxjs";
import { AuthService } from "src/app/authorization/auth.service";
import { LibraryService } from "src/app/library/library.service";


@Injectable({
  providedIn: 'root',
})
export class HTTPService {
  // baseApiRootURL = "";

  constructor(private http: HttpClient, private libraryService: LibraryService, private authService: AuthService) {}

  // saveInfoToAPI() {
  //   const infos = this.libraryService.getInfos();
  //   this.http.put(this.baseApiRootURL, infos).subscribe((response) => {
  //     console.log('api response:', response);
  //   });
  // }

  fetchInfoFromAPI() {
    return this.authService.currentUser.pipe(
      take(1),
      exhaustMap((user) => {
        console.log(user);
        return this.http
          .get(this.baseApiRootURL, {
            params: new HttpParams().set('auth', user.value),
          })
            .pipe(
              tap((infos: Info[]) => {
                this.libraryService.setInfos(infos);
              })
            )
      })

    )
  http
      .get(this.baseApiRootURL, {})
      .subscribe((response: Info[] | []) => {
        this.libraryService.setInfos(response);
      });
  }
}
