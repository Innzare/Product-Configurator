import { ref } from 'vue';
import { LocalStorage } from '@/helpers/storage';

export class EmployeeModel {
  constructor() {
    const employeeFromStorage = LocalStorage.get('employees');
    const isEmployeeDataFromStorageExist = typeof employeeFromStorage !== 'undefined';

    const initialEmployeesData = isEmployeeDataFromStorageExist ? employeeFromStorage : [];

    this.employees = ref(initialEmployeesData);
  }

  getEmployees() {
    return this.employees;
  }

  setEmployees(employeeData) {
    this.employees.value = employeeData;

    LocalStorage.set('employees', employeeData);
  }
}
