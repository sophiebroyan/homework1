1.
const arr = [1, 3, 5, 7];

function seperate(array) {
  let odd = [];
  let even = [];
  for (let i of array) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }
  console.log(odd);
  console.log(even);
}
seperate(arr);


2. 
const array = [60, 5, 3, 2];

function summary(arr) {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  console.log(sum);
}
summary(array);


function multiplication(arr) {
  let multi = 1;
  for (let i in arr) {
    multi *= arr[i];
  }
  console.log(multi);
}
multiplication(array);


function difference(arr) {
  let dif = arr[0];
  for (let i = 1; i < arr.length; i++) {
    dif -= arr[i]
  }
  console.log(dif);
}
difference(array);


function division(arr) {
  let div = arr[0]
  for (let i = 1; i < arr.length; i++) {
    div /= arr[i];
  }
  console.log(div);
}
division(array);


3.
const text = ('Yes, London. You know, fish, chips, cup o tea, bad food, worse weather, o');
const word = ('o');

function remove(str1, str2) {
  let result;
  result = str1.split(str2);
  console.log(result.join(''));
}
console.log(remove(text, word));


5. 
let a = {
    a: 1
  };
  let b = {
    a: 1
  };
  
  function shallow(obj1, obj2) {
    for (let i in obj1) {
      for (let j in obj2) {
        if (obj1[i] !== obj2[j]) {
          return false;
        }
      }
    }
    return true;
  }
  console.log(shallow(a, b));
  