import { Component, OnInit, Input } from '@angular/core';
import {EmployeeService} from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

export class AddEmployeeComponent implements OnInit {
  @Input() first: string;
  @Input() last: string;
  @Input() email: string;

  constructor(private employeeService: EmployeeService) { }

  newEmployee(): void {
    var newEmp : Employee = {
      first: this.first,
      last: this.last,
      email: this.email
    }
    this.employeeService.addEmployee(newEmp);
  }


  ngOnInit(): void {
  }

}
