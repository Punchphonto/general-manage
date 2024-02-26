import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displaJobId',
  standalone: true
})
export class DisplaJobIdPipe implements PipeTransform {

  transform(id: number): string {
    return "JOB" + id.toString().padStart(4, '0');
  }

}
