/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HelperService } from './helper.service';

describe('Service: Helper', () => {
  describe('flattenIntegerArray', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HelperService]
    });
  });
    it('Happy path using example values', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray([[1,2,[3]],4]).sort();
      expect(retValue).toEqual([1,2,3,4]);
    }));
    
    it('Empty array returns empty array', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray([]).sort();
      expect(retValue).toEqual([]);
    }));

    it('Flat array returns flat array', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray([3,4,6,88,1,4]).sort();
      expect(retValue).toEqual([1,3,4,4,6,88]);
    }));

    it('Top level empty arrays are skipped', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray([[1,[],2,[3]],[],4,[]]).sort();
      expect(retValue).toEqual([1,2,3,4]);
    }));

    it('Nested empty arrays are skipped', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray(
        [
          [
            1,
            [
              55,
              []
            ],
            2,
            [
              3,
              77,
              []
            ]
          ],
          [],
          4,
          []
        ])
      .sort();
      expect(retValue).toEqual([1,2,3,4,55,77]);
    }));

    it('All arrays empty returns empty array', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray(
        [
          [
            [
              []
            ],
            [
              []
            ]
          ],
          [],
          []
        ])
      .sort();
      expect(retValue).toEqual([]);
    }));

    it('Complex example with many nested arrays returns correct value', inject([HelperService], (service: HelperService) => {
      let retValue = service.flattenIntegerArray(
        [
          99,
          [
            3,
            [
              5,
              [
                32,
                33,
                [
                  23,
                  24,
                  25
                ],
                4
              ],
              3,
              [
                32,
                33,
                [
                  23,
                  24,
                  [
                    932,
                    933
                  ],
                  [
                    [
                      345,
                      333
                    ]
                  ],
                  25
                ],
                4
              ]
            ]
          ]
        ])
      .sort();
      expect(retValue).toEqual( [23,23,24,24,25,25,3,3,32,32,33,33,333,345,4,4,5,932,933,99]);
    }));

    it('Passing initial null throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray(null); } ).toThrow(new Error("inValue must be an array"));
    }));
    
    it('Passing initial string throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray("hello"); } ).toThrow(new Error("inValue must be an array"));
    }));
    
    it('Passing initial integer throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray(1); } ).toThrow(new Error("inValue must be an array"));
    }));
    
    it('Passing initial array of strings throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray(["hello", "123","Wow"]); } ).toThrow(new Error("Array element is not a number"));
    }));

    it('Passing initial array of floats throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray([1.4, 4.3, 3.14159]); } ).toThrow(new Error("Array element is not an integer"));
    }));

    it('Passing inner array with float throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray([1, 2, [1, 2, 3.14159], 4]); } ).toThrow(new Error("Array element is not an integer"));
    }));

    it('Passing inner array with string throws exception', inject([HelperService], (service: HelperService) => {
      expect( function(){ service.flattenIntegerArray([1, 2, ["1", 2, 3], 4]); } ).toThrow(new Error("Array element is not a number"));
    }));
  });
});
