import { Component } from '@angular/core';
import { Student } from '../student-model';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
Students:Student[]=[
  { ID: 1, Name: 'John', Age: 20, Average: 85, grade: 'A', Active: true },
  { ID: 2, Name: 'Kavin', Age: 18, Average: 86, grade: 'A', Active: false },
  { ID: 3, Name: 'Peter', Age: 22, Average: 45, grade: 'D', Active: true },
  { ID: 4, Name: 'Sam', Age: 23, Average: 65, grade: 'C', Active: false },
  { ID: 5, Name: 'Rohan', Age: 20, Average: 95, grade: 'A+', Active: true },
  { ID: 6, Name: 'Rohit', Age: 24, Average: 70, grade: 'B', Active: false }, 
  { ID: 7, Name: 'Sammer', Age: 22, Average: 60, grade: 'B', Active: false },
]
}
