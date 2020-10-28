import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userTitle'
})
export class UserTitlePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    if (gender === 'male')
      return "Mr. " + name;
    else
      return "Miss " + name;
  }

}


