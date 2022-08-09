// Types of variable
// 1.
var str = "I am Not Robot";
let num = 20;
const bln = true;

// 2.
num = 10;

// 3.
const num1 = 10;
const num2 = 5;

const sum = num1 + num2;
const product = num1 * num2;
const difference = num1 - num2;
const reminder = num1 % num2;
const quotient = num1 / num2;

// 4.
/* 
if(num1 == num2){
    console.log("Num1 equal");
}
if(num1 > num2){
    console.log("Num1 Greater");
}
if(num1 >= num2){
    console.log("Num1 Greater or Equal");
}
if(num1 < num2){
    console.log("Num1 Smaller");
}
if(num1 <= num2){
    console.log("Num1 Smaller or Equal");
}
if(num1 != num2){
    console.log("Num1 Not Equal");
}
 */

// 5.
/* 
if (num1 > num2 && num1 != num2){
    console.log(num1);
}
if (num1 > num2 || num1 < num2){
    console.log(num1);
}
 */

// 6.
/* 
if (num1 == num2){
    console.log("hudai")
}
else {
    console.log("hudai!!!!!")
}
*/

// 7.
/* 
let x = 7;
while(x < 28){
    if(x % 2 != 0){
        console.log(x);
    }
    x++
}
 */

// 8.
/* 
const arr = [10, 20, 30, 40, 50, 60, 70];
const arrLength = arr.length;
arr[3] = 45; 
const sum1 = arr[0] + arr[1];
arr.pop();
// console.log(arr)
*/

// 9.
/* 
const arr = [10, 20, 30, 40, 50, 60, 70];
// for(i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
for(let i of arr){
    console.log(i);
}
*/

// 10.
/* 
const arr = [50, 60, 80, 85, 40, 90, 20, 95, 100];
for (let i of arr){
    if(i > 80){
        console.log(i);
    }
}
*/

// 11.
/* 
function productOf3 (x, y, z){
    const product = x*y*z;
    return product;
}
console.log(productOf3(1, 2, 3));
*/

// 12.

const obj = {
    age: 15,
    price: 2000,
    title: "Obj"
}
obj.age = 10;
obj["price"] = 1000;
let objectTitle = "title";
obj[objectTitle] = "Object";
console.log(obj);


