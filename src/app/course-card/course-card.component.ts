import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Course } from '../model/course';
import { HighlightedDirective } from '../directives/highlighted.directive';

@Component({
  selector: 'course-card',
  imports: [HighlightedDirective],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input({ required: true})
  index: number;

  @Output('courseSelected')
  courseEmmiter = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit() {

  }

  onCourseViewed() {
    console.log('Course clicked')
    this.courseEmmiter.emit(this.course);
  }

}
