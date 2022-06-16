import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Plant } from '../plant/plant.model';
import { Seed } from '../seed/seed.model';
import { Info } from '../shared/info-form/info.model';
import { Wishlist } from '../wishlist/wishlist.model';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  myInfos: Info[] = [];
  info: Info;
  selectedInfo: Info;
  idx: number;

  constructor(private libraryService: LibraryService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.info = this.libraryService.getInfo(this.idx);
    });
    this.myInfos = this.libraryService.getInfos();
    this.libraryService.infoChanged.subscribe((infos: Info[]) => {
      this.myInfos = infos;
    });
    this.libraryService.infoSelected.subscribe((info: Info) => {
      this.selectedInfo = info;
    });
  }

  onSavePlant(info) {
    this.libraryService.saveInfo(info);
    // do not redirect
  }
  onSaveSeed(info) {
    this.libraryService.saveInfo(info);
  // do not redirect
  }
  onSaveWishlist(info) {
    this.libraryService.saveInfo(info);
    // do not redirect
  }

    onCancel() {
    // redirect to profile
    this.router.navigate(['profile']);
  }
}
