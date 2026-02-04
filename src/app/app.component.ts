import { Component, Input, ViewChild } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';
import {HighlightedDirective} from './directives/highlighted.directive';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false,
})
export class AppComponent {

    courses: Course[] = COURSES;

    onCourseSelected(course: Course) {
        console.log('App component - card triggert', course);
    }

}
