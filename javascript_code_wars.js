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
