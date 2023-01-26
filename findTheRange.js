// Starting array
let array = [28, 43, -12, 30, 4, 0, -36]
//console.log(array[0])
//console.log(array.length)
// Write your solution below:
// let lowest = Math.min(...array);
// console.log('Lowest Number:' + lowest);
// let highest = Math.max(...array);
// console.log('Highest Number:' + highest);
let min = array[0]
let max = array[0]

for(let i = 0; i < array.length; i++){
    // console.log(array[1])
    let currentValue = array[i]
    if(currentValue < min){
        console.log(`The current value ${currentValue} is lower than our current minimum ${min}`)
        min = currentValue
        }

    if(currentValue > max){
        console.log(`The current value ${currentValue} is higher than our current maximum ${max}`)
        max = currentValue
    }
}
    console.log(`In the array ${array}, the highest value is ${max} and the lowest value is ${min}`)
