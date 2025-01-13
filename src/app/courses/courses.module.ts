import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMatirialModule } from '../shared/app-matirial/app-matirial.module';





@NgModule({
  declarations: [
    //CoursesComponent
  ],
  imports: [

    CommonModule,
    CoursesRoutingModule,
    AppMatirialModule
  ]
})
export class CoursesModule { }
