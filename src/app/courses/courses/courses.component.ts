import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [
    {_id: "1", name: "Java", category:"Back-end"}
  ]; // pode iniciar tanto aqui quanto no construtor
  displayedColumns = ['name', 'category'];

  constructor(){
    //this.courses = [];
  }

  ngOnInit(): void {

  }





}
