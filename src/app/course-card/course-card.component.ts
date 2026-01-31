import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input() course: Course;

  constructor() {

  }

  ngOnInit() {

  }

}
