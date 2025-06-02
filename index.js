//challange 1.Sum of Positives
function sumeOfPositives(positiveNum) {
    var sum = 0;
    for (var i = 0; i < positiveNum.length; i++) {
        if (positiveNum[i] > 0) {
            sum += positiveNum[i];
        }
    }
    return sum;
}
console.log(sumeOfPositives([-3, 6, -2, 5, 3, 2, -1]));
//challange.2 Find Maximum Value.
function findBigestNumber(bigNum) {
    var biggest = 0;
    for (var i = 0; i < bigNum.length; i++) {
        if (bigNum[i] > biggest)
            bigNum[i] = biggest;
    }
    return biggest;
}
console.log(findBigestNumber([9, 40, 21, 96, 4, 52, 3, 24, 5]));
function findWinner(candidates) {
    var winner = candidates[0];
    for (var _i = 0, candidates_1 = candidates; _i < candidates_1.length; _i++) {
        var candidate = candidates_1[_i];
        if (candidate.votes > winner.votes) {
            winner = candidate;
        }
    }
    return winner;
}
console.log(findWinner([
    { name: "Antoo", votes: 364 },
    { name: "Tasha", votes: 432 },
    { name: "Frank", votes: 743 }
]));
//challange 4.Longest Word
function findLongestWord(words) {
    var longest = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        if (word.length > longest.length)
            longest = word;
    }
    return longest;
}
console.log(findLongestWord(["Frankline", "Anthony", "Tasha"]));
//challange 5. Count Properties
function findProperties() {
    var properties = {
        name: "Frankline",
        age: 22,
        county: "Muranga"
    };
    var count = Object.keys(properties).length;
    return "number of keys is: ".concat(count);
}
console.log(findProperties());
//challange 6 Filter by Length.
function filterByLength(arr, minLength) {
    return arr.filter(function (word) { return word.length >= minLength; });
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
// 7. Sum of Even Numbers
function summOfEvenNumbers(evenNumbers) {
    var sum = 0;
    for (var i = 0; i < evenNumbers.length; i++) {
        if (evenNumbers[i] % 2 === 0) {
            sum += evenNumbers[i];
        }
    }
    return sum;
}
console.log(summOfEvenNumbers([1, 2, 3, 4, 5, 6]));
// 8. Difference Between Sum of Even and Odd Numbers
function sumDifference(difference) {
    var sumEven = 0;
    var sumOdd = 0;
    for (var i = 0; i < difference.length; i++) {
        if (difference[i] % 2 === 0) {
            sumEven += difference[i];
        }
        else if (difference[i] % 2 === 1) {
            sumOdd += difference[i];
        }
    }
    return sumEven - sumOdd;
}
console.log(sumDifference([1, 2, 3, 4, 5, 6]));
// 9. Count Truthy
function countTruthy(obj) {
    var count = 0;
    for (var key in obj) {
        if (obj[key]) {
            count++;
        }
    }
    return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }));
// 10. Average of Numbers
function averageOfNumbers(numbers) {
    var sum = 0;
    var average = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return average = sum / numbers.length;
}
console.log(averageOfNumbers([12, 23, 4, 45, 3, 23, 21, 34]));
// 11. Linear Search
function linearSearch(a, c) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] == c) {
            return i;
        }
    }
    return -1;
}
var a = [12, 23, 4, 23, 34, 45, 9];
var c = 5;
console.log(linearSearch([5, 3, 7, 1, 4], 7));
console.log(linearSearch([5, 3, 7, 1, 4], 10));
// 12. Reverse Linear Search
function reverseLinearSearch(a, b) {
    for (var i = a.length - 1; i >= 0; i--) {
        if (a[i] === b) {
            return i;
        }
    }
    return -1;
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));
// 13. Linear Search All Indices
function findIndices(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
console.log(findIndices([1, 3, 2, 4, 5, 6, 7], 4));
console.log(findIndices([5, 3, 7, 1, 4, 7], 7));
// 14. Count Occurrences
function countOccurence(array) {
    var result = {};
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var string = array_1[_i];
        result[string] = (result[string] || 0) + 1;
    }
    return result;
}
console.log(countOccurence(["apple", "banana", "apple", "orange", "banana", "apple"]));
// 15. Remove Duplicates
var removeDuplicates = function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (!result.includes(item)) {
            result.push(item);
        }
    }
    console.log(result);
};
removeDuplicates([1, 2, 4, 3, 2, 2, 1, 2, 4, 1, 5]);
removeDuplicates(["apple", "banana", "apple", "orange"]);
// 16. Most Frequent
var mostFrequent = function (array) {
    var counts = {};
    var maxCount = 0;
    var mostCommon = null;
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        var key = String(item);
        counts[key] = (counts[key] || 0) + 1;
        if (counts[key] > maxCount) {
            maxCount = counts[key];
            mostCommon = item;
        }
    }
    console.log(mostCommon);
};
console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));
