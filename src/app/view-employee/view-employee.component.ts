import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  employees: Employee[];
  selectedEmployee: Employee;
  
  getEmployees(): void {
    this.employees = this.employeeService.getEmployees()
  }

  onSelect(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  title = "View Employees";
  ngOnInit(): void {
    this.getEmployees();
  }

}
