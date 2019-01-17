import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">{{ course }}</li>
    </ul>
    <button class="btn btn-primary" [class.active]="isActive">Save</button>
    <button [style.backgroundColor]="isActive ? 'blue' : 'white'">
      Style Binding
    </button>
    <div (click)="onDivSave()">
      <button (click)="onSave($event)">Event Binding</button>
    </div>
    <div><input (keyup.enter)="onKeyUp($event)" /></div>
    <div><input #email2 (keyup.enter)="onKeyUpReference(email2.value)" /></div>
    <div>
      <input
        [value]="email"
        (keyup.enter)="email = $event.target.value; onKeyUp2WayBinding()"
      />
    </div>
    <div>
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp2WayBinding()" />
    </div>
  `
})
export class CoursesComponent {
  title = "List of courses";
  courses;
  isActive = false;
  email = "me@example.com";

  constructor(service: CoursesService) {
    // let service = new CoursesService();
    this.courses = service.getCourses();
  }

  onSave($event) {
    event.stopPropagation();

    console.log("Button was clicked", $event);
  }

  onDivSave() {
    console.log("Div was clicked");
  }

  onKeyUp($event) {
    console.log($event.target.value);
  }

  onKeyUpReference(email2) {
    console.log(email2);
  }

  onKeyUp2WayBinding() {
    console.log(this.email);
  }
}
