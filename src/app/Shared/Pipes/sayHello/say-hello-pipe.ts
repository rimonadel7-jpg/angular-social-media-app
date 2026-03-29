import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sayHello'
})
export class SayHelloPipe implements PipeTransform {

  transform(username:string): string {


    return `hello${username}`;
  }

}
