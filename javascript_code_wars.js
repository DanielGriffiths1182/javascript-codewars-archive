// 1 
function annulusArea(a) {
  if(a <= 1) {
    return 0;
  }
  else {
    var p = ((a / 2) * (a / 2)) * Math.PI;
    return Number( p.toFixed( 2 ));
  }
}
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

// 2

const dBScale = intensity => 10 * (12 + Math.log10(intensity));

function dBScale(intensity) {
  return 10 * (Math.log10(intensity) + 12);
}

// 3
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


// 4   
function run() {
   "use strict";

    return {
       helloWorld: function () {
       var str = { message: "Hello World" };
       return str;
    }};
}

// 5 
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

// 6  
function run() {

    return {
       helloWorld: function () {
       var str = { message: "Hello World"};
       return str;
    }};
}

// 7  
function noSpace(x){
  return x.split(' ').join('')
}

// 8  
function find_average(array) {
  return array.reduce(function (p, c) {
    return p + c;
  }) / array.length;
}

function find_average(array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}

// 9  
function sum (numbers) {
    "use strict";
    var sum = numbers.reduce(add, 0);
    function add(a, b) {
      return a + b;
  }
  return sum;
};

//  10 
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


//  11
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


//  12 
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


//  13 
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

//  14
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

// 15
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

//  16 
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

//  18
function noSpace(x){
  return x.replace(/ /g,'')
}

//  19
function remove(s){
  return s.replace(/!$/, '');
}

//  20 
function reverse(string){
  var reverse = string.split(' ').reverse().join(' ');
  return reverse
}

//  21
function stringToArray(string){
  var arr =  new Array(string)
  return arr
}
//  22
function numberToString(num) {
  return num.toString()
}
function booleanToString(b){
  return b.toString()
}
// 23
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

//  24
var findDigit = function(num, nth){
  return nth > 0? +(num+'').split('').reverse().splice(nth - 1, 1): -1;
}

const findDigit = (num, nth) => nth <= 0 ? -1 : +[...Math.abs(num)+''].reverse()[nth-1] || 0;

//  25
var stringToNumber = function(str){
     return parseInt(str, 0)
}

//  26
function booleanToString(b){
  var n = new Boolean(b);
  return n.toString()
}

//  27 
function boolToWord( bool ){
  return bool ? 'Yes' : 'No';
}

//  28
function getAverage(marks){
  var sum = marks.reduce((pre, cur) => cur += pre);
  var avg = sum / marks.length;
  return parseInt(avg, 0)
}

// 29
function sixToast(num) {
  var n = num - 6
  return Math.abs(n)
}

//  30 
function multi(arr) {
  return arr.reduce(function(a , b){return a * b;});
}
function add(arr) {
  return arr.reduce(function(a , b){return a + b;});
}
function reverse(str) {
    var string = '';
  for (var i = str.length - 1; i >= 0; i--)
    string += str[i];
  return string;
}

//  31
function addFive(num) {
  var total = num + 5
  return total
}

//  32 
function lovefunc(flower1, flower2){
  var love = (flower1 + flower2) % 2 == 0 ? false : true;
  return love
}
// BETTER
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}

//  33
function numberJoy(n) {
  var digits = eval(n.toString().split('').join('+'));
  var rev_digits = digits.toString().split('').reverse().join('');
  return digits * rev_digits == n ? true : false;
}

//  34 (Needed assistance, didnt solve on my own) Invert a given list of integer values.
function invert(array) {
   return array.map( x => x === 0 ? x : -x);
}

//  35
function plural(n) {
  return n === 1 ? false : true;
}

//  36
function lenR(x) {
   if (x == 0) {
        return 0;
    }
    return lenR(x.slice(0, -1)) + 1;
}

//  37 
function squareAreaToCircle(size){
  return size * Math.PI / 4;
}

//  38
function twoSort(s) {
  var word = s.sort()[0];
  return word.split('').join('***')
}

//  39
function squareSum(numbers){
  var sq = numbers.map(function(num) {
    num * num;
  })
  return sq.reduce(add, 0);
};

//  40 
function countSheeps(arrayOfSheep) {
  var count = 0;
  arrayOfSheep.map(function(current){
    if(current){
      count += 1;
    }
  });
  return count;
};
// Alternate Solution -- Much Better Refactoring
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}


//  41
function calculator(a,b,sign) {
  try
    { return eval(a+sign+b); }
  catch(e)
    { return "unknown value"; }
}
