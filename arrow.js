// function doubleIt(num){
//     return num * 2;
// }
// const result = doubleIt(2);
// console.log(result);

// const doubleIt = function(num){
//     return num * 2;
// }

// const doubleIt = num => num * 5;
// const result = doubleIt(5);
// console.log(result);

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x-y;
    const result = sum*diff;
    return result;
}

const result = doMath(50,70);
console.log(result);