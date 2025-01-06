import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = [] // pode iniciar tanto aqui quanto no construtor

  constructor(){
    //this.courses = [];
  }

  ngOnInit(): void {

  }





}
