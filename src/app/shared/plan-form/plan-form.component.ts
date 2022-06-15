import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { PlanDetailsComponent } from 'src/app/plan/plan-details/plan-details.component';
import { Plan } from 'src/app/plan/plan.model';
import { PlanService } from 'src/app/plan/plan.service';
import { Plant } from 'src/app/plant/plant.model';
import { PlantService } from 'src/app/plant/plant.service';
import { Seed } from 'src/app/seed/seed.model';
import { SeedService } from 'src/app/seed/seed.service';
import { Info } from '../info-form/info.model';

const target = document.getElementById('target');

@Component({
  selector: 'app-plan-form',
  templateUrl: './plan-form.component.html',
  styleUrls: ['./plan-form.component.css']
})
export class PlanFormComponent implements OnInit {
  selectedFile: File;
  http: any;
  info: Info;
  myInfos: Info[] = [];
  planForm: FormGroup;
  myPlans: Plan[]= [];
  selectedPlan: Plan;
  plan: Plan;
  mySeeds: Seed[] = [];
  selectedSeed: Seed;
  seed: Seed;
  myPlants: Plant[] = [];
  selectedPlant: Plant;
  plant: Plant;
  isEditMode: boolean = false;
  idx: number;
  index: number;

  constructor(private planService: PlanService, private plantService: PlantService, private seedService: SeedService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // form control
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.isEditMode = params['id'] != null;
      this.plan = this.planService.getPlan(this.idx);
      this.plant = this.plantService.getPlant(this.idx);
      this.seed = this.seedService.getSeed(this.idx);
    });
    this.planForm = new FormGroup({
      'planData': new FormGroup({
        'photoImagePath': new FormControl(null),
        'planName': new FormControl(null, Validators.required),
        'planLocation': new FormControl(null, Validators.required),
        'planDescription': new FormControl(null),
        'planNotes': new FormControl(null),
      }),
      info: null
    });

    // image control
    target.addEventListener('drop', (event) => {
      event.stopPropagation();
      event.preventDefault();
      return(event.dataTransfer.files);
    });
    target.addEventListener('dragover', (event) => {
      event.stopPropagation();
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    });

    // plan control
    this.myPlans = this.planService.getPlans();
    this.planService.planIndexChanged.subscribe((plans: Plan[]) => {
      this.myPlans = plans;
    });
    this.planService.planSelected.subscribe((plan: Plan) => {
      this.selectedPlan = plan;
    });

    // plant control
    this.myPlants = this.plantService.getPlants();
    this.plantService.plantIndexChanged.subscribe((plants: Plant[]) => {
      this.myPlants = plants;
    });
    this.plantService.plantSelected.subscribe((plant: Plant) => {
      this.selectedPlant = plant;
    });

    // seed control
    this.mySeeds = this.seedService.getSeeds();
    this.seedService.seedIndexChanged.subscribe((seeds: Seed[]) => {
      this.mySeeds = seeds;
    });
    this.seedService.seedSelected.subscribe((seed: Seed) => {
      this.selectedSeed = seed;
    });
  }

  // image handling functions
  onSelectImage(event) {
    return this.selectedFile = event.target.files[0];
  }
  onUploadFile(event) {
    this.http.post('', this.selectedFile)
      .subscribe(
        (event: any) => {
          if (this.selectedFile = event.target.files[0]) {

          }
        }
      );
  }

  // plan control
  onPlanSelected() {

  }

  onAddSeed(index) {

  }
  onAddPlant(index) {

  }
  onInfoChanged($event) {

  }
}
