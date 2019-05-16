import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'enumKeys'
})
export class EnumKeysPipe implements PipeTransform {
  transform(enumeration: any): {key: any, value: any}[] {
    const keys: {key: any, value: any}[] = [];
    for (const enumKey of Object.keys(enumeration)) {
      keys.push({key: enumKey, value: enumeration[enumKey]});
    }
    return keys;
  }
}
