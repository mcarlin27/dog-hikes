import { Pipe, PipeTransform } from '@angular/core';
import { Member } from './member.model';

@ Pipe({
  name: "position",
  pure: false
})

export class PositionPipe implements PipeTransform {

  transform(input: Member[], desiredPosition) {
    var output: Member[] = [];

    if(desiredPosition === 'regular-members') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].position === 'Member') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === 'admin') {
      for (var i = 0; i < input.length; i++) {
        if(input[i].position != 'Member') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredPosition === 'allMembers') {
      return input;
    }
  }
}
