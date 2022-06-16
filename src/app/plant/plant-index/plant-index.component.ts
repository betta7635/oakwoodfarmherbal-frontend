import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { LibraryService } from 'src/app/library/library.service';
import { Info } from 'src/app/shared/info-form/info.model';

@Component({
  selector: 'app-plant-index',
  templateUrl: './plant-index.component.html',
  styleUrls: ['./plant-index.component.css']
})
export class PlantIndexComponent implements OnInit {
  myInfos: Info[] = [];
  selectedInfo: Info;
  info: Info;
  idx: number;

  constructor(private libraryService: LibraryService, private route: ActivatedRoute, private router: Router) { }

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

  onCreatePlant() {
    // redirect to new plant form

  }

  onCancel() {
    // redirect to profile

  }
}
