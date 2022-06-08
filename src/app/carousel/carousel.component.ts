import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  path1: string = "./assets/butchart-gardens.jpg";
  alttext1: string = "Butchart Gardens";
  path2: string = "./assets/doi-tung-chiang-rai-thailand-1586975534U2L.jpg";
  alttext2: string = "Doi Tung Gardens";
  path3: string = "./assets/gardens.jpg";
  alttext3: string = "Tulip Gardens";
  path4: string = "./assets/KeukenhofGardens.jpg";
  alttext4: string= "Keukenhof Gardens";
  path5: string = "./assets/valley-gardens.jpg";
  alttext5: string = "Valley Gardens";

  constructor() { }

  ngOnInit(): void {
  }
}
