# This is a Github Repository to store my completed and implemented solutions to leetcode problems.

## 10/2/26

Patterns Practiced: **two pointers, array manipulation**

Today I learned about array destructuring assignment. A way to simultaneously change the value of 2 elements in the array with each other. These problems helped me think more logically, adding helper functions and using logic to manipulate arrays.

Today i completed:

    - 344. Reverse String (easy)

    - 189. Rotate Array (med)

344. Reverse String/Array (easy)

I learned about array destructuring assignment. I completed an initial, more inefficient solution where I created a variable that stored the one elements data, before swapping them. I used this method as I did not know about ada at this point, this is inefficient as it takes more space in the form of the extra variable that must be created and redefined every itteration of the for loop.

189. Rotate Array (med)

This was a more complicated leetcode problem that I had a tough time with. I was attempting to essentailly brute force it using a for loop and some unecessarily complicated math to figure out how many spaces over to move each element. However, I ended up implementing a helper function in the form of the Reverse Array function. I then reversed the whole and parts of the array to get my desired outcome.

**14/2/26:** The importance of the [k % n] is understated in my previous entry. I only figured it out after trying to complete it myself, without any resources. When k is greater than n, attempting to reverse at k will cause an out of bounds error. The importance of [k%n] stems from the fact that if k == n, the array rotates all the way through and ends up unchanged. Therefore when the % operator is used, the result is the final amount that the array elements are shifted.


## 12/2/26

I completed and added 2 leetcode problems. I learned about **hashmaps** and how to use them to save time complexity through removing the need to reitterate through arrays.

I learned how to create hashmaps using both objects and the in built Map() feature in javascript. Both work similarly, Maps however have more in built keywords such as **set** (set an element to a key), **get** (retrieve an element related to a key), **has** (checks to see if the hashmap contains a key).

Completed:

    - 1. Two Sum (easy)

    - 560. Subarray Sum Equals K (medium)

1. Two Sum (easy)
   I completed the brute force method, but the search for a more efficient solution led me to hashmaps. I used the object variation of maps, itterating through the array, and checking if [target-i] was a key in the hashmap. If it was, the value related to that key (which is the index) is returned, otherwise the current element and index are stored as the key and value within the object respectively.
2. Subarray Sum Equals K (medium)
   This one was a difficult problem. I completed it using the inbuilt Map() feature of js. An itteration of the array is completed, during which, the current element is subtracted from k, and a check is performed to see if the result is in the hashmap, if yes, the count is increased, if no, the current element and index are added to the map.


## 14/2/26

Haven't done new leetcode problems, have been watching relevant videos. Redid completed leetcode questions as refreshers, ended up reinforcing previous topics, have a greater understanding as a result. Redid reverse and rotate array leetcode questions.
