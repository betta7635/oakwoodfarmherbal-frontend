import { EventEmitter, Injectable } from "@angular/core";
import { Plan } from "./plan.model";


@Injectable({
  providedIn: 'root',
})
export class PlanService {
  planSelected = new EventEmitter<Plan>();
  planIndexChanged = new EventEmitter<Plan[]>();
  private myPlans: Plan[] = [];

  getPlans() {
    return this.myPlans.slice();
  }

  getPlan(idx: number) {
    return this.myPlans.slice()[idx];
  }

  savePlan(plan: Plan) {
    this.myPlans.push(plan);
    this.planIndexChanged.emit(this.myPlans.slice());
  }

  deletePlan(index: number) {
    if (index !== -1) {
      this.myPlans.splice(index, 1);
      this.planIndexChanged.emit(this.myPlans.slice());
    }
  }
}
