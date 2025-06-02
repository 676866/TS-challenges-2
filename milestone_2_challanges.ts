//challange 1.Sum of Positives
function sumeOfPositives(positiveNum:number[]):number{
    let sum:number=0;
    for (let i =0; i <positiveNum.length; i++){
    if (positiveNum[i]>0){
        sum+=positiveNum[i];
    }
    }
    return sum   
}
console.log(sumeOfPositives([-3,6,-2,5,3,2,-1]));
 
//challange.2 Find Maximum Value.
function findBigestNumber(bigNum:number[]):number{
    let biggest:number=0;
    for (let i =0; i<bigNum.length;i++){
        if (bigNum[i]>biggest)
            bigNum[i]=biggest;
        
    }
return biggest;

}
console.log(findBigestNumber([9,40,21,96,4,52,3,24,5]));

// challange 3. Election winner
interface Candidate {
  name: string;
  votes: number;
}
function findWinner(candidates: Candidate[]): Candidate {
  let winner = candidates[0];
  for (let candidate of candidates) {
    if (candidate.votes > winner.votes) {
      winner = candidate;
    }
  }
  return winner;
}
console.log(findWinner([
  { name: "Antoo", votes: 364 },
  { name: "Tasha", votes: 432 },
  { name: "Frank", votes:743}
]));

//challange 4.Longest Word
function findLongestWord(words: string[]): string {
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log(findLongestWord(["Frankline","Anthony","Tasha"]));

//challange 5. Count Properties
function findProperties(): string {
  let properties = {
    name: "Frankline",
    age: 22,
    county: "Muranga"
  };

  const count = Object.keys(properties).length;
  return `number of keys is: ${count}`;
}
console.log(findProperties());


//challange 6 Filter by Length.
function filterByLength(arr: string[], minLength: number): string[] {
  return arr.filter(word => word.length >= minLength);
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));


// 7. Sum of Even Numbers
function summOfEvenNumbers(evenNumbers:number[]):number{
    let sum:number=0;
    for (let i=0;i<evenNumbers.length;i++){
    if (evenNumbers[i]%2===0){
        sum+=evenNumbers[i]

    }
    }
     return sum
}console.log(summOfEvenNumbers([1, 2, 3, 4, 5, 6]))


// 8. Difference Between Sum of Even and Odd Numbers

function sumDifference(difference:number[]):number{
    let sumEven:number=0
    let sumOdd:number=0;
    for (let i = 0; i<difference.length; i++){
        if (difference[i]%2===0){
            sumEven+=difference[i]
        }
        else if(difference[i]%2===1){
            sumOdd+=difference[i]
        }
    }
  return sumEven-sumOdd

}

console.log(sumDifference([1, 2, 3, 4, 5, 6])); 

// 9. Count Truthy
function countTruthy(obj: { [key: string]: string | number | boolean | null }): number {
    let count = 0;
    for (let key in obj) {
     if (obj[key]) {
     count++;
}
   }
    return count;
}
console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))

// 10. Average of Numbers
function averageOfNumbers(numbers:number[]){
  let sum: number=0;
    let average : number=0
    for(let i=0;i<numbers.length; i++){
    sum+=numbers[i]
    }
    return average = sum/numbers.length
}
console.log(averageOfNumbers([12,23,4,45,3,23,21,34]))
 

// 11. Linear Search
    function linearSearch(a:number[],c:number ):number{
        for (let i=0; i<a.length ; i++){
    if (a[i]==c){
            return i
       }
        }
        return -1
    }
    let a:number[]=[12,23,4,23,34,45,9];
    let c:number=5;

console.log(linearSearch([5, 3, 7, 1, 4], 7)); 
console.log(linearSearch([5, 3, 7, 1, 4], 10)); 

// 12. Reverse Linear Search
function reverseLinearSearch(a: number[], b: number): number {
    for (let i = a.length - 1; i >= 0; i--) {
     if (a[i] === b) {
      return i; 
        }
     }
    return -1; 
}
console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7));

// 13. Linear Search All Indices
function findIndices(arr:number[],value:number):number{
    for (let i=0; i<arr.length;i++){
       if(arr[i]===value){
      return i
     }
    }
    return -1
}
console.log(findIndices([1,3,2,4,5,6,7],4))
console.log(findIndices([5, 3, 7, 1, 4, 7], 7))

// 14. Count Occurrences
function countOccurence(array: string[]): Record< string, number> {
     const result: Record<string, number> = {};
  for (let string of array) {
    result [string] = (result [string] || 0) + 1;
  }
  return result;
}


console.log(countOccurence(["apple", "banana", "apple", "orange", "banana", "apple"]))



// 15. Remove Duplicates
const removeDuplicates = (array: (number | string)[]): void => {
  const result: (number | string)[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (!result.includes(item)) {
  result.push(item);
    }
  }
  console.log(result);
};

removeDuplicates([1, 2, 4, 3, 2, 2, 1, 2, 4, 1, 5]);
removeDuplicates(["apple","banana","apple","orange"]);


// 16. Most Frequent
const mostFrequent = (array: (number |string)[]):void=> {
  const counts: Record <string, number> = {};
  let maxCount = 0;
  let mostCommon: number| string| null = null;

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const key = String(item);

    counts[key] = (counts[key] || 0) + 1;

    if (counts[key] > maxCount) {
    maxCount = counts[key];
 mostCommon = item;
    }
  }

  console.log(mostCommon);
}

console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]));








