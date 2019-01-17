import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase | lowercase }}<br />
    {{ course.students | number }}<br />
    {{ course.rating | number: "1.2-2" }}<br />
    {{ course.price | currency: "AUD" }}<br />
    {{ course.releaseDate }}<br />
    <br />
    <br />

    {{ text | summary: 10 }}
  `
})
export class CoursesComponent {
  course = {
    title: "The complete Angular Course",
    rating: 4.9435,
    students: 343536,
    price: 190,
    releaseDate: new Date(2016, 3, 1)
  };

  text = `
  Lorem Ipsum is simply dummy text of the printing  and typeset
  `;
}
