import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Plan } from '../plan.model';
import { PlanService } from '../plan.service';

@Component({
  selector: 'app-edit-plan',
  templateUrl: './edit-plan.component.html',
  styleUrls: ['./edit-plan.component.css']
})
export class EditPlanComponent implements OnInit {
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
    this.planService.planIndexChanged.subscribe((plans: Plan[]) => {
      this.myPlans = plans;
    });
    this.planService.planSelected.subscribe((plan: Plan) => {
      this.selectedPlan = plan;
    });
  }

  onSavePlan(plan) {
    this.planService.savePlan(plan);
    // redirect to current plan id
    this.planService.planSelected.emit(this.plan);
  }

  onCancel() {
    // redirect to current plan id
    this.planService.planSelected.emit(this.plan);
  }

  onDeletePlan(index) {
    this.planService.deletePlan(index);
    // redirect to plan index

  }
}
