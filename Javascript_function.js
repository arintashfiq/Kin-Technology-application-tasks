/**
 * Finds the largest number in an array
 * 
 * Approach:
 * 1. Initialize with first element as current maximum
 * 2. Iterate through remaining elements using efficient loop
 * 3. Compare each element with current maximum
 * 4. Update maximum when larger element is found
 * 5. Return the final maximum value
 */

function findLargestNumber(arr) {
    // Initialize maximum value
    let max = arr[0];
    
    // Iterate through array elements
    // Approach: Start from index 1 (second element) since index 0 is already set as max
    for (let i = 1; i < arr.length; i++) {
        // Compare current element with current maximum
        // If current element is larger, update the maximum value
        if (arr[i] > max) max = arr[i];
    }
    
    // After checking all elements, return the largest value found
    return max;
}

// TASK: Test the function with various inputs

// Test Case 1: Basic positive numbers
const testArray1 = [3, 7, 2, 9, 1, 5];
console.log('Test 1 - Basic positive numbers:');
console.log('Input:', testArray1);
console.log('Largest number:', findLargestNumber(testArray1));
console.log('---');

// Test Case 2: Negative numbers
const testArray2 = [-5, -2, -9, -1, -3];
console.log('Test 2 - Negative numbers:');
console.log('Input:', testArray2);
console.log('Largest number:', findLargestNumber(testArray2));
console.log('---');

// Test Case 3: Mixed positive and negative numbers
const testArray3 = [-3, 7, -2, 0, 15, -8];
console.log('Test 3 - Mixed positive and negative:');
console.log('Input:', testArray3);
console.log('Largest number:', findLargestNumber(testArray3));
console.log('---');

// Test Case 4: Single element array
const testArray4 = [42];
console.log('Test 4 - Single element:');
console.log('Input:', testArray4);
console.log('Largest number:', findLargestNumber(testArray4));
console.log('---');

// Test Case 5: Decimal numbers
const testArray5 = [3.14, 2.71, 1.618, 2.99];
console.log('Test 5 - Decimal numbers:');
console.log('Input:', testArray5);
console.log('Largest number:', findLargestNumber(testArray5));
console.log('---');

// Test Case 6: Large numbers
const testArray6 = [1000, 5000, 2500, 10000, 7500];
console.log('Test 6 - Large numbers:');
console.log('Input:', testArray6);
console.log('Largest number:', findLargestNumber(testArray6));
console.log('---');
