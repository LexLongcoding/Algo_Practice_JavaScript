// Write a method that prints all the numbers from 1 to 255.
function print1to255() {
    for (var i = 1; i<256; i++){
        console.log(i)
    }
}
print1to255()

//Write a method that prints all the odd numbers from 1 to 255.
function odd1to255() {
    for (var i = 1; i<256; i++){
        if(i % 2 == 1){
        console.log(i)
        }
    }
}
odd1to255()

// Write a method that creates and eventually returns a sum variable that adds up all the numbers from 1 to 255. In this method you are not printing the sum, except to debug if you need to, the method should return the sum. Note: You do not need an array to write this function. 
function sigma255(){
    var sum = 0;
    for (var i = 0; i<256; i++){
        sum = sum + i;
    }
return sum
}
console.log(sigma255())

//Given an array X, say [1,3,5,7,9,13], write a method that would iterate through each member of the array and print each value on the screen. Being able to loop through each member of the array is extremely important.
function arrloop(arr) {
    for (var i = 0; i<arr.length; i++){
        console.log(arr[i])
    }
}
arrloop([1,3,5,7,9,13])

//Write a method (sets of instructions) that takes any array and prints the maximum value in the array. Your method should also work with a given array that has all negative numbers (e.g. [-3, -5, -7]), or even a mix of positive numbers, negative numbers and zero.
function logmax(arr) {
    var max = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>max){
            max = arr[i];
        }
    }
    return max
}
console.log(logmax([-3,-5,-7,6]))

function logmin(arr) {
    var min = 0;
    for (var i = 0; i<arr.length; i++){
        if (arr[i]<min){
            min= arr[i];
        }
    }
    return min
}
console.log(logmin([-3,-5,-7,6]))


//Write a method that creates an array 'y' that contains all the odd numbers between 1 to 255. When the method is done, 'y' should have the value of [1, 3, 5, 7, ... 255].
function oddarr() {
    var arr = [];
    for (var i = 1; i<256; i++){
        if(i % 2 == 1){
        arr.push(i)
        }
    }
    return arr;
}
console.log(oddarr())


//Write a method that takes an array, and prints the AVERAGE of the values in the array. For example for an array [2, 10, 3], your method should print an average of 5. Again, make sure you come up with a simple base case and write instructions to solve that base case first, then test your instructions for other complicated cases.
function avgarr(arr){
    var sum = 0;
    var avg = 0;
    for (var i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    { avg = sum/arr.length;
    }
return avg
}
console.log(avgarr([2,10,3]))

//Write a method that takes an array and returns the number of values in that array whose value is greater than a given value y. For example, if array = [1, 3, 5, 7] and y = 3, after your method is run it will print 2 (since there are two values in the array that are greater than 3).
function greaterthany(arr) {
    var y= 3;
    var count = 0;
    for (i=0; i<arr.length; i++) {
        if (arr[i] > y ){
            count = count + 1;
        }

    }
    return count
}
console.log(greaterthany([1,3,5,7]))

//Given any array x, say [1, 5, 10, -2], write a method that multiplies each value in the array by itself. When the method is done, the array x should have values that have been squared, say [1, 25, 100, 4].
function square(arr) {
    for (i=0; i<arr.length; i++){
        arr[i] = arr[i]*arr[i];
    }
    console.log(arr)
}
square([1,5,10,-2])

//Given any array x, say [1, 5, 10, -2], write a method that replaces any negative number with the value of 0. When the method is done, x should have no negative values, say [1, 5, 10, 0].
function positivity(arr) {
    for(i=0; i<arr.length; i++) {
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    console.log(arr);
}
positivity([1,5,10,-2])

//Max, Min, and Average
//Given any array x, say [1, 5, 10, -2], write a method that returns an array with the maximum number in the array, the minimum value in the array, and the average of the values in the array. The returned array should be three elements long and contain: [MAXNUM, MINNUM, AVG]

function mma(arr) {
result = [];
var min = logmin(arr);
var max = logmax(arr);
var avg = avgarr(arr);
{
    result.push(max, min, avg);
}
return result
}
console.log(mma([1,5,10,-2]))

//Shifting the Values in the Array
//Given any array x, say [1, 5, 10, 7, -2], write a method that shifts each number by one to the front. For example, when the method is done, an x of [1, 5, 10, 7, -2] should become [5, 10, 7, -2, 0]. Notice that the last number is 0. The method does not need to wrap around the values shifted out of bounds.

function shifting(arr) {
    for (i=0; i<arr.length; i++){
        arr[i] = arr[i+1];
    
        }
        arr[arr.length-1] = 0;
        return arr;
}
console.log(shifting([1,5,10,7,-2]))