import { Component, OnInit } from '@angular/core';
import { Plan } from '../plan.model';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-plan-index',
  templateUrl: './plan-index.component.html',
  styleUrls: ['./plan-index.component.css']
})
export class PlanIndexComponent implements OnInit {
  myPlans: Plan[] = [];
  selectedPlan: Plan;
  plan: Plan;

  constructor(private planService: PlanService) { }

  ngOnInit(): void {
    this.myPlans = this.planService.getPlans();
    this.planService.planIndexChanged.subscribe((plans: Plan[]) => {
      this.myPlans = plans;
    });
    this.planService.planSelected.subscribe((plan: Plan) => {
      this.selectedPlan = plan;
    })

  }

// place on individual plan card
  // onPlanSelected(plan) {
  //   this.planService.planSelected.emit(this.plan);
  // }

  onCreatePlan() {
    // redirect to new plan form

  }

  onCancel() {
    // redirect to profile

  }
}
