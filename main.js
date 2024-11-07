function cap(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            var firstLetter = words[i].charAt(0).toUpperCase();
            var restOfWord = words[i].slice(1).toLowerCase();
            words[i] = firstLetter + restOfWord;
        }
    }
    return words.join(" ");
}
console.log(cap("hello my name is khaled"));


function count(str) {
    return str.length;
}
console.log(count('hello my name is khaled'))

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(8));

// output 
// 120

// ******************************************* //


function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    var f = [0, 1];

    for (var i = 2; i < n; i++) {
        var nextNumber = f[i - 1] + f[i - 2];
        f.push(nextNumber);
    }

    return f;
}

console.log(fibonacci(10));



function filter(arr) {
    return arr.filter(num => num > 5);
}

console.log(filter([2, 7, 99, 52, 9, 10, 8, 6, 4, 3, 2, 1, 0]));


function max(arr) {
    return Math.max(...arr)
}

function min(arr) {
    return Math.min(...arr);
}

console.log("Maximum value:", max([99, 51, 79, 13, 27, 5]));
console.log("Minimum value:", min([99, 51, 79, 13, 27, 5]));

function prime(num) {
    if (num < 2) {
        return false;
    }
    
    for (i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    
    return true;
}
console.log(prime(5));

function rev(str) {
    return str.split('').reverse().join('');
}

console.log(rev('hello my name is khaled'))

function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(sum([9, 12, 34, 24, 130]))