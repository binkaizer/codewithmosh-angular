import { Pipe, PipeTransform } from "@angular/core";
import { transformAll } from "@angular/compiler/src/render3/r3_ast";

@Pipe({
  name: "summary"
})
export class SummaryPipe implements PipeTransform {
  transform(value: string, limit?: number) {
    if (!value) return null;
    let actualLimit = limit ? limit : 50;
    return value.substr(0, limit) + "...";
  }
}
