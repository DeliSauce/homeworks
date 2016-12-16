function madLib(verb, adj, noun) {
  return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}

function isSubstring(search, sub) {
  return search.includes(sub);
}


function fizzBuzz(arr) {
  let newArr = [];
  arr.forEach((num) => {
    if (!((num % 3 === 0) && (num % 5 === 0))) {
      if (num % 3 === 0) {newArr.push(num);}
      if (num % 5 === 0) {newArr.push(num);}
    }
  });
  return newArr;
}

fizzBuzz([1,2,3,5,6,7,8,9,15]);


function isPrime(num) {
  let count = 0;
  for(let i = 2; i <= num; i++) {
    if(num % i === 0) {
      count++;
    }
  }
  if (count === 1) {
    return true;
  } else {
    return false;
  }
}


function firstNPrimes(n) {
  let count = 0;
  let arr = [];
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      arr.push(num);
      count++;
    }
    num++;
  }
  return arr;
}

function sumOfNPrimes(n) {
  let sum = 0;
  firstNPrimes(n).forEach((el) => {
    sum += el;
  });
  return sum;
}



function myEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

myEach([1,2,3,4], function(el) {console.log(el);});
