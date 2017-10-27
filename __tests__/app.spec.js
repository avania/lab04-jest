'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

describe('Basic math', function(){
    //tests: use it or test (same thing but it goes with describe)
    it('should add numbers together correctly', function() {
        //javascript
        let result = 1+1;
        
        //assertion
        expect(result).toEqual(2);
    });
})

describe('invertCase() function', function(){
    it('correct lower case output', function(){
        let input = "abcdefghijklmnopqrstuvwxyz";
        let result = invertCase(input);
        expect(result).toEqual("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    });
    it ('correct upper case output', function() {
        let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = invertCase(input);
        expect(result).toEqual("abcdefghijklmnopqrstuvwxyz");
    });
});