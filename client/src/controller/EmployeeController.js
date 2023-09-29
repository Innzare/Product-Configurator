import { EmployeeModel } from '@/model/EmployeeModel';

export class EmployeeController {
  constructor() {
    this.model = new EmployeeModel();
  }

  getEmployees() {
    return this.model.getEmployees();
  }

  setEmployees(employeeData) {
    this.model.setEmployees(employeeData);
  }
}
