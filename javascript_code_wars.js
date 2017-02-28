// 1 Use math pi and conditional - alternate solutions
function annulusArea(a) {
  if(a <= 1) {
    return 0;
  }
  else {
    var p = ((a / 2) * (a / 2)) * Math.PI;
    return Number( p.toFixed( 2 ));
  }
}
//
function annulusArea(a) {
  const r1 = a / Math.sqrt(3) / 2
  const r2 = a / Math.sqrt(3)

  return +(Math.PI * r2 * r2 - Math.PI * r1 * r1).toFixed(2)
}
//
function annulusArea(a) {
  return parseFloat((Math.PI * (a / 2) * (a / 2)).toFixed(2));
}
//
function annulusArea(a) {
  return Math.round(Math.PI * a * a / 2 / 2 * 100) / 100
}

// 2     Calculate the loudness of a sound wave, given its intensity as a parameter to the dBScale/db_scale function.

const dBScale = intensity => 10 * (12 + Math.log10(intensity));
//
function dBScale(intensity) {
  return 10 * (Math.log10(intensity) + 12);
}

// 3    Given an array of elements, return the binary equivilent of the sum of the elements
function arr2bin(arr){
  return arr.reduce((x , y) => x + (typeof y == "number" ? y : 0), 0).toString(2);
}


function arr2bin(arr){
  var sum = 0;
  arr.forEach(function(num){
    if(typeof num === 'number'){
      sum += num;
    }
  });
  return sum.toString(2);
}


// 4   Fix the below javascript code without removing any lines of code. The intended output is Hello World.
function run() {
   "use strict";

    return {
       helloWorld: function () {
       var str = { message: "Hello World" };
       return str;
    }};
}

// 5 Work with OOP, javascript - introduction to constructor concept, differs from ruby
class Labrador {
  constructor(n, age, g, m) {
    this.name = n;
    this.age = age;
    this.gender = g;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = m;
    this.loyal = true;
  }
}

class Labrador {
  constructor(name, age, gender, master) {
    Object.assign(this, new Dog(name, age, gender, "Labrador", "Large", master, true))
  }
}

// 6  Fix this helloWorld function
function run() {

    return {
       helloWorld: function () {
       var str = { message: "Hello World"};
       return str;
    }};
}

// 7  Return string with no whitespace
function noSpace(x){
  return x.split(' ').join('')
}

// 8  Write function avg which calaculates average of numbers in given list.
function find_average(array) {
  return array.reduce(function (p, c) {
    return p + c;
  }) / array.length;
}

function find_average(array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}

// 9  Write a method sum (sum_array in python) that takes an array of numbers and
//    returns the sum of the numbers. These may be integers or decimals for Ruby and any
//    instance of Num for Haskell. The numbers can also be negative. If the array does not
//    contain any numbers then you should return 0.
      // Assumptions
      //
      // You can assume that you are only given numbers.
      // You cannot assume the size of the array.
      // You can assume that you do get an array and if the array is empty, return 0.
function sum (numbers) {
    "use strict";
    var sum = numbers.reduce(add, 0);
    function add(a, b) {
      return a + b;
  }
  return sum;
};

// //  10 In javascript, Array is one of basic data types. Define an empty array can use
    // var arr=new Array() or var arr=[]
    //
    // Array has an attribute: length, if there is an array named arr, using arr.length
    // to know how many elements are contained in the array.
    //
    // Each element in the array has an index, use arr[index] to get the value of element.
    //
    // index always start from 0, so the first element of array is arr[0],
    // the last element of array is arr[arr.length-1].
    //
    // If we want to add new elements to the array, you can use the array method: push().
    // It can add an element to the end of the array.
    // Instead, if we want to remove the last element of the array,
    // you can use the array method: pop(). for example:
function getLength(arr){
  return arr.length
}
function getFirst(arr){
  return arr[0]
}
function getLast(arr){
  return arr[arr.length-1]
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  return arr
}
function popElement(arr){
  arr.pop();
  return arr
}


//  11 I've create three function, and defined some global variables,
// please select some variables that can make up the name of the function,
// and return them(Please note the uppercase and lowercase letters are different).
var a1="A",a2="a",b1="B",b2="b",c1="C",c2="c",d1="D",d2="d",e1="E",e2="e",n1="N",n2="n"
function Dad(){
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee(){
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana(){
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer2(){
  //the answer should be "yes" or "no"
  return "no";
}
function answer3(){
  //the answer should be "yes" or "no"
  return "yes";
}


//  12 Find the last element of a list.
function last(list){
  var a;
  if (arguments.length > 1) {
    a = arguments[arguments.length - 1];
  } else if (typeof(list)==='string') {
    a = list.charAt(list.length-1);
  } else if (Array.isArray(list)) {
    a = list.pop();
  } else {
    a = list;
  }
  return a;
}

function last(...args){
    const theLast = args[args.length - 1];
    return theLast[theLast.length - 1] || theLast;
  }


//  13 As you probably know, Fibonacci sequence are the numbers in the following integer sequence:
  // 1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last
  // fibonacci number.
function getFib(index) {
    var a = 1, b = 0, c;
  while (index >= 0){
    c = a;
    a = a + b;
    b = c;
    index--;
  }
  return b
}

//  14 (could not solve with JavaScript - this is someone elses solution)!!!

//    As you probably know, Fibonacci sequence are the numbers in the following integer sequence:
//    1, 1, 2, 3, 5, 8, 13... Write a method that takes the index as an argument and returns last
//    digit of (index) fibonacci number.

function getLastDigit(index) {
  var one = 1,
      two = 1,
      hold = 0,
      counter = 2;
  if (index === 1) {
    return 1;
  } else if (index === 2) {
    return one;
  }
  while (counter < index) {
    hold = two;
    two = (one + two) % 10;
    one = hold;
    counter++;
  }
  return two;
}

function getLastDigit(index) {
  var a = 1, b = 1, c;
  for (var i = 3; i <= index; i++) {
    a = a % 10;
    b = b % 10;
    c = a + b;
    c = c % 10;
    a = b;
    b = c;
  }
  return b;
}

// 15 Return the minimum, maximum and difference between the two - values from an array (ages) in new array (myArray)
function differenceInAges(ages){
  var myArray = new Array();
  myArray.push(Math.min.apply(null, ages))
  myArray.push(Math.max.apply(null, ages))
  myArray.push(Math.max.apply(null, ages) - Math.min.apply(null, ages))
  return myArray
}

function differenceInAges(ages){
  const min = Math.min(...ages);
  const max = Math.max(...ages);

  return [min, max, max-min];
}

//  16 Concatenate string, return with space in between 2 strings. wouldve used s1.concat(s2); otherwise
function joinStrings(string1, string2){
   var result = string1 + " " + string2
   return result
}

//  17 Create a function that takes an integer as an argument
//  and returns "Even" for even numbers or "Odd" for odd numbers.
function even_or_odd(number) {
  if(number % 2 == 0) {
    return "Even"
  }
  else {
    return "Odd"
  }
}
function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

//  18 Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x){
  return x.replace(/ /g,'')
}

//  19 Remove a exclamation mark from the end of string.
//  For a beginner kata, you can assume that the input data is always a string, no need to verify it.
function remove(s){
  return s.replace(/!$/, '');
}

//  20 Reverse the words in a string.
function reverse(string){
  var reverse = string.split(' ').reverse().join(' ');
  return reverse
}

//  21 (SIMPLE) Push string into array.
function stringToArray(string){
  var arr =  new Array(string)
  return arr
}
//  22 (SIMPLE) Return a string when given an argument (num), which is an Integer/Boolean
function numberToString(num) {
  return num.toString()
}
function booleanToString(b){
  return b.toString()
}
// 23 Your task is to make two functions, max and min (maximum and minimum in PHP)
 // that take a(n) array/vector of integers list as input and outputs, respectively,
 // the largest and lowest number in that array/vector.


var min = function(list){
    var min_of_array = Math.min.apply(Math, list);
    return min_of_array;
}

var max = function(list){
    var max_of_array = Math.max.apply(Math, list);
    return max_of_array;
}

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

//  24 The function findDigit takes two numbers as input, num and nth.
// It outputs the nth digit of num (counting from right to left).
var findDigit = function(num, nth){
  return nth > 0? +(num+'').split('').reverse().splice(nth - 1, 1): -1;
}

const findDigit = (num, nth) => nth <= 0 ? -1 : +[...Math.abs(num)+''].reverse()[nth-1] || 0;

//  25 Return integer, from string. Got NaN becuase I misinterpreted the way the function was set up, and dont
//  forget the radix.
var stringToNumber = function(str){
     return parseInt(str, 0)
}

//  26 Return boolean, from string.
function booleanToString(b){
  var n = new Boolean(b);
  return n.toString()
}

//  27 Return Yes, for true. No, for false. Turning a boolean into a coorelated string.
function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}

//  28 Return the mean of the values in array (marks), round to integer, not float
function getAverage(marks){
  var sum = marks.reduce((pre, cur) => cur += pre);
  var avg = sum / marks.length;
  return parseInt(avg, 0)
}

// 29 Return the difference between num, and 6.
function sixToast(num) {
  var n = num - 6
  return Math.abs(n)
}
