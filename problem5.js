function onlyPositive(arr){
    let newArr = [];
    for(let element of arr){
        if (element >= 0){
            newArr.push(element);
        }
        else{
            return newArr;
        }
    }
    return newArr;
}
const arr = [10, 20, 30, 50, 0, -1, 20, 5];
const positiveArr = onlyPositive(arr);
console.log(positiveArr);