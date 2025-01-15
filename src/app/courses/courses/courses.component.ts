import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CoursesService } from '../service/courses.service';

@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit {

  courses: Course[] = []; // pode iniciar tanto aqui quanto no construtor
  displayedColumns = ['name', 'category'];
   // injeção de dependencia de modo manual - antigo
  //coursesService : CoursesService;

  // injeção de dependencia de modo automatico - moderno  -
  constructor(private coursesService : CoursesService){
    //this.courses = [];
    //this.coursesService = new CoursesService();
    this.courses = this.coursesService.list();
  }

  ngOnInit(): void {

  }

}
