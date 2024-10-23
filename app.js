//Step 1 + 2

import {multiply, add, subtract } from './mathModule.js';
    console.log('multiply:', multiply(6,4)); //I used different numbers than the question
  
    console.log('Add:', add (4, 4));
    console.log('Subtract:', subtract (10, 4));


import { toUpperCase, toLowerCase } from './stringModule.js'
    console.log('Uppercase: ', toUpperCase('welcome to lab 5'));
    console.log('Lowercase:', toLowerCase('Welcome to lab 5'));

import { findMax, reverseArray } from './array.js'
    console.log('FindMax:', findMax([16, 50, 25, 600])); 
    console.log('ReverseArray:', reverseArray([17, 27, 8, 47]));


//Task 2:
import { addAndLogUpper } from './mathModule.js';
    console.log(addAndLogUpper(10, 20));

//Part 8:
   

    const num = [20, 200, 75];
    const maxNum = findMax(num);

    const multiplyNum = multiply(maxNum, 2);
    const uppCase = multiplyNum.toString().toUpperCase();

    console.log('Max:', maxNum); // logs as 200
    console.log('Multiply:', multiplyNum); // 200 * 2 = 400
    console.log('Uppercase:', uppCase);
