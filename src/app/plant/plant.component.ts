import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Info } from '../shared/info-form/info.model';
import { Plant } from './plant.model';
import { PlantService } from './plant.service';

@Component({
  selector: 'app-plant',
  templateUrl: './plant.component.html',
  styleUrls: ['./plant.component.css']
})
export class PlantComponent implements OnInit {
  myPlants: Plant[] = [];
  selectedPlant: Plant;
  plant: Plant;
  info: Info;
  idx: number;

  constructor(private plantService: PlantService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.plant = this.plantService.getPlant(this.idx);
    });
  }

  onPlantSelected(plant) {
    this.plantService.plantSelected.emit(this.plant);
  }
}
