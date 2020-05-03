import { Injectable } from '@angular/core';
import { Employee} from './employee';
import { EMPLOYEES} from './mockEmps';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  employees: Employee[] = EMPLOYEES;

  addEmployee(employee: Employee) {
    console.log(employee)
    this.employees.push(employee);
    console.log(this.employees)
  }

  getEmployees(): Employee[]{
    console.log(this.employees);
    return this.employees;
  }

  constructor() { }
}
