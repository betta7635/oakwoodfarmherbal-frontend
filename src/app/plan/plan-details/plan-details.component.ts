import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plan } from '../plan.model';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-details',
  templateUrl: './plan-details.component.html',
  styleUrls: ['./plan-details.component.css']
})
export class PlanDetailsComponent implements OnInit {
  myPlans: Plan[] = [];
  selectedPlan: Plan;
  plan: Plan;
  index: number;
  idx: number;

  constructor(private planService: PlanService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.idx = +params['id'];
      this.plan = this.planService.getPlan(this.idx);
    });
    this.myPlans = this.planService.getPlans();
    this.planService.planSelected.subscribe((plan: Plan) => {
      this.selectedPlan = plan;
    });
    this.planService.planIndexChanged.subscribe((plans: Plan[]) => {
      this.myPlans = plans;
    });
  }

  onEditPlan(plan) {
    // redirect to current plan id edit form

  }

  onCancel() {
    // redirect to plan index

  }

  onDeletePlan(index) {
    this.planService.deletePlan(index);
    // redirect to plan index

  }
}
