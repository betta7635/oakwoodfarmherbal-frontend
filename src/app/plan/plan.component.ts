import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plan } from './plan.model';
import { PlanService } from './plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent implements OnInit {
  myPlans: Plan[] = [];
  selectedPlan: Plan;
  plan: Plan;
  idx: number;

  constructor(private planService: PlanService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.plan = this.planService.getPlan(this.idx);
    });
    this.planService.planSelected.subscribe((plan: Plan) => {
      this.selectedPlan = plan;
    });
    this.planService.planIndexChanged.subscribe((plans: Plan[]) => {
      this.myPlans = plans;
    });
  }

  onPlanSelected(plan) {
    this.planService.planSelected.emit(this.plan);
  }
}
