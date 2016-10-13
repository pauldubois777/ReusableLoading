import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  constructor() { }

  // Flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].
  flattenIntegerArray(inArray: any): Array<number> {
    let retArray: Array<number> = new Array<number>();
    if (!Array.isArray(inArray)){
        throw new Error("inValue must be an array or number");
    }
    for(let i = 0; i < inArray.length; i++) {
      if(Array.isArray(inArray[i])) {
          inArray =inArray.concat(this.flattenIntegerArray(inArray[i]));
      } else {
        let element: any = inArray[i];
        if (!(typeof(element) === 'number')) {
          throw new Error("Array element is not a number");
        }
        if (element != parseInt(element.toString(), 10)){
          throw new Error("Array element is not an integer");
        } 
        retArray.push(element);
      }
    }
    return retArray;
  }
}
