
//step 1
export function add(a,b) {
    return a + b;
}

export function subtract(a,b) {
    return a - b;
}

//PART 5
//Step 1:

export default function multiply(a,b) {
    return a * b;
}

//PART 7:
import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}//?????????????

//p 8
export function maxMultiplyUpper(a,b) {
    const result = multiply(findMax);
    console.log(toUpperCase(result.toString()));
}