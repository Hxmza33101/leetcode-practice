# This is an MD file for logging my progress to ensure accountability, as well as keeping a record.

## 10/2/26

Patterns Practiced: **two pointers, array manipulation**

Today I learned about array destructuring assignment. A way to simultaneously change the value of 2 elements in the array with each other. These problems helped me think more logically, adding helper functions and using logic to manipulate arrays.

Today i completed:

```
- 344. Reverse String (easy)

- 189. Rotate Array (med)
```

1. Reverse String/Array (easy)

I learned about array destructuring assignment. I completed an initial, more inefficient solution where I created a variable that stored the one elements data, before swapping them. I used this method as I did not know about ada at this point, this is inefficient as it takes more space in the form of the extra variable that must be created and redefined every itteration of the for loop.

1. Rotate Array (med)

This was a more complicated leetcode problem that I had a tough time with. I was attempting to essentailly brute force it using a for loop and some unecessarily complicated math to figure out how many spaces over to move each element. However, I ended up implementing a helper function in the form of the Reverse Array function. I then reversed the whole and parts of the array to get my desired outcome.

**14/2/26:** The importance of the [k % n] is understated in my previous entry. I only figured it out after trying to complete it myself, without any resources. When k is greater than n, attempting to reverse at k will cause an out of bounds error. The importance of [k%n] stems from the fact that if k == n, the array rotates all the way through and ends up unchanged. Therefore when the % operator is used, the result is the final amount that the array elements are shifted.

## 12/2/26

I completed and added 2 leetcode problems. I learned about **hashmaps** and how to use them to save time complexity through removing the need to reitterate through arrays.

I learned how to create hashmaps using both objects and the in built Map() feature in javascript. Both work similarly, Maps however have more in built keywords such as **set** (set an element to a key), **get** (retrieve an element related to a key), **has** (checks to see if the hashmap contains a key).

Completed:

```
- 1. Two Sum (easy)

- 560. Subarray Sum Equals K (medium)
```

1. Two Sum (easy)
  I completed the brute force method, but the search for a more efficient solution led me to hashmaps. I used the object variation of maps, itterating through the array, and checking if [target-i] was a key in the hashmap. If it was, the value related to that key (which is the index) is returned, otherwise the current element and index are stored as the key and value within the object respectively.
2. Subarray Sum Equals K (medium)
  This one was a difficult problem. I completed it using the inbuilt Map() feature of js. An itteration of the array is completed, during which, the current element is subtracted from k, and a check is performed to see if the result is in the hashmap, if yes, the count is increased, if no, the current element and index are added to the map.

## 14/2/26

Haven't done new leetcode problems, have been watching relevant videos. Redid completed leetcode questions as refreshers, ended up reinforcing previous topics, have a greater understanding as a result. Redid reverse and rotate array leetcode questions.

## 20/2/26

Quickly completed some work on BST data structures. Understood how they work, and attempted to create one from scratch using my previous knowledge on linked lists. I attempted to force them to be sorted when creating one node, however this was the wrong approach due to errors caused by scope. I learned how to properly create a BST and coded it, made sure to wrap my head around the concept.

## 21/2/26

Was working mostly on refining the integration of AI into my workflow. Completed the HTML course on Free Code Academy. Also did some linked lists within this GitHub repository. Worked on remembering how to create linked lists as well as integrating the main methods of linked lists, such as:

- inserting data/nodes to the front and the back of the linked list
- iterating through the linked list and displaying the data at each node

## 22/2/26

Completed palindrome question on elite code tested my ability to iterate through strings and compare its content.I had two solutions for this problem. The first pushed each valid element onto an array, which was then checked from both ends to see if each character matched. The second method used a two-pointer system in which several while loops were used to check if the characters from each end matched each other, skipping invalid characters.

Worked on stack and queue data structures, added files that contain information about how to create them using both arrays as well as creating them using classes with methods.

Worked on the character frequency function. Used GitHub copilot to code it super efficiently and practicing the integration of AI such as GitHub copilot into my workflow to improve and maximize efficiency in my coding

## 23/2/26

Worked on a valid anagram leetcode question. Had university classes today, so I have been familiarizing myself with the syllabus as well as some of the content. Also differentiated the README.md file from this ProgressLog.md file in order to ensure proper procedures of git repositories

Within the valid_anagram question, I learned how to scratch that. Within the valid_anagram LeetCode question, I used my knowledge of hash maps in the form of JavaScript objects to check and record characters and their frequency, and an efficient way to compare it with another string with its characters and frequency.

Completed reverse string LeetCode question. This reinforced the knowledge I learned from the reverse array LeetCode question. The way I did it was the same as the reverse array LeetCode question. I simultaneously swapped the values from both ends of the arrays using a two-pointer system.

Added meaningful comment to rotate_array.js file in order to specify the question as well as add my insight and my thought process

## 24/2/26

Worked on the merge intervals lead code question. This question tested my knowledge of 2D arrays, as well as how to sort them and efficiently traverse them in order to merge specific subarrays together. The dot push method was used to push subarrays into a new array in order to get a final answer

## 25/2/26

Worked on the move_zeroes leetcode question, in which all zeroes must be moved to the end of an array while keeping the order of the non-zero numbers the same. I completed it using 2 methods, both using a 2 pointer system, however one used swapping to get each element in the correct position while the other method moved all the non-zero elements to the front and filled the rest of the array with zeroes, keeping track using the .length of the total array length.

Worked on the longest substring leetcode question. Completed a brute force method in which two iterations are done using nested loops to check if the first character repeats, which breaks the array. this value is then saved in a variable that records the longest length. If another subarray is found which is longer, this overwrites this variable, making the value the new longest subarray length

## 6/3/26

Have been doing work in my other project folders (haven't been slacking off)

Today I worked on some recursion in js, I completed a few exercises such as factorial, array sum, etc.

## 9/3/26

Added remove_duplicated.js to. the linked list folder in the repository, answered the leetcode question, very simple, really just did it to add the contribution to my github profile today. Also added comments to some files in the repo, again just to increase the commits for today, felt very lazy and tired today.

## 12/3/26

I added @flatten_array.js; this was a problem provided to me by Claude as a way to practice my JavaScript. Completing this problem helped me learn and understand the ...spread Feature of JavaScript and how it can be used in the context of arrays to format and individualize collective data.

Also completed 2 other JavaScript problems @count_occurence.js and @group_by_length.js. These problems help me understand how to use objects within JavaScript.

## 13/3/26

Added @reverse_words.js to the repository. This problem was suggested by claude, this problem helped with my string manipulation and in altering strings in relation to whitespaces. Also completed the @find_duplicates.js problem provided by claude. This problem allowed me to practice array traversal and manipulation. It helped me put my understanding of objects/maps in js to use to solve the problem.

## 14/3/26

Completed @chunk_array.js question, a problem provided by claude to practice my js proficiency. This problem helped with my traversal through arrays and handling of nested/2d arrays

## 15/3/26

Completed @title_case.js problem provided by claude. Goal is to return a string with all the first letters of every word capitalised.

## 16/3/26

Completed @flatten_object.js and @fizzbuzz.js. These problems were provided by claude to help me practice my understanding of JS concepts. Fizzbuzz was a simple warmup using arrays in while loops to count what itteration im on. Flatten object was more difficult and required me to broaden my understanding of how to traverse and manipulate data in objects.

## 17/3/26

Completed remove_duplicates problem, provided by ChatGPT, this problem had 2 solutions, one using the inbuilt .include() method of js and the other using object/maps to keep track of what has been added to the result

## 18/3/26

Completed first_unique.js, a problem provided by ChatGPT that helps in my understanding of counting + second pass logic in relation to problems in js.

## 19/3/26

Added and completed compact array problem, provided by chatgpt, its a simple problem that helps in practicing my fundamentals. It is a common occurence in practical code so it was worth completing the problem

## 20/3/26

Added max_subarray.js solution, problem provided by chatgpt. Also affected comments in other files

## 21/3/26

Lazy day, just added comments to some of the code files, adding meaningful insight to the files.

## 22/3/26

Completed another problem provided by ChatGPT, this problem involved itterating through an array and returning an array that multiplies certain elements within the array together, careful to not multiply some of the numbers

## 23/3/26

Completed a problem provided by chatgpt in which 2 sorted arrays are merged in ascending order. This problem helped me practice my understanding of 2 pointers in code and how to safely and properly implement them without adding dead code or redundant parts of the logic.

## 24/3/26

Completed mergeSort, a semi complex method of sorting an unsorted array by halving an array and rebuilding it while sorting the elements in ascending order. This is useful as it is a practical idea/piece of code that is likely to show up in real world scenarios.

## 25/3/26

Today was more spent researching and broadening my knowledge rather than completing DSA problems.

## 26/3/26

Completed the removeElement_inPlace.js problem, a problem provided by ChatGPT to practice my array traversal and was a practice in modifying arrays without extra space as well as practicing pointer shifting / overwrite. Also completed a second containsDuplicate problem, this one was a bit more difficult than just checking if there were duplicates in the array at all. This problem a function that would check if the 2 duplicate elements were within a certain range of each other.

## 28/3/26

Didn't do any DSA today, was working on discrete math unit coursework

## 29/3/26

Completed daily_temps.js problem, provided by chatgpt, its a simple problem that requires a nested loop to itterate through an array and compare values.

## 30/3/26

Calm day today, completed topK_frequent_elements.js problem provided by chatgpt.

## 31/3/26

Worked on my project instead of DSA today.

## 1/3/26

Got a job at apple.. (april fools). Did uni work today instead of DSA, will contribute to the repo tomorrow.

## 2/3/26

Am going to work on python alongside js, so I split the repo into 2 folders based on the language within it. Completing a basic python syntax document today as well as a few beginner functions to ease my way into it and handle the differences between js and python.

Completed 2 problems today in python alongside the basic syntax file:

- remove_duplicates.py
- count_occurrences.py

These are both problems I have completed in JavaScript before, so I didn't learn anything in terms of logic, however it was useful in helping me get used to the syntax of python.

## 3/3/26

I added to the count_occurrences.py file today, I added a second way to do it that uses python's inbuilt .get() method, it serves the same purpose in a safer and less error prone way. I also completed reverse_words.py, a string manipulation problem in which I got to familiarise myself with using string related methods like .split() and .join() and how they work in Python. Still not completely used to the way python handles for loops, I feel javascript is much more intuitive in this sense.

## 5/4/26

Didn't mean to skip yesterday, guess I forgot. Today I completed 3 problems:

- check_palindrome.py
- [fizzbuzz.py](http://fizzbuzz.py)
- find_max.py

These three problems are simple and I've completed them in JS already. However these problems helped me understand the differences in python syntax in comparison to JS. 

In Python, incrementing is not possible using "i++", and you must use "i+=1". 

I learned how the splice operation is used with strings in python from the  check_palindrome.py problem.

I also learned how to check specifically in a range using the for loop, saying for i in range(n), checks 0 to n, however to itterate 1 to n like is needed in fizzbuzz, we use range(1, n).  

Completed [inputs.py](http://inputs.py), learning how to take inputs in python, super simple in comparison to something like JS.


## 6/4/26
Not doing DSA today, rest day


## 7/4/26
Feeling super lazy again today, will definitely do something productive tomorrow.

## 11/4/26
Completed sum digits and first unique problems in python, they were simple but helped me practice the syntax more in terms of dictionaries and for loops.

## 13/4/26
Didn't do yesterday, the commit streak is all but crumbled. I will continue it to the best of my ability, however, I am clearly having trouble staying consistent

## 14/4/26
Completed a simple problem today, remove evens in python, more list building practice, this helps me solidify my list building knowledge. The problem was provided by chatgpt to help me learn python as a JS coder, it gave me a bunch of simple yet fundamental problems to help me understand the syntax of python and how it differs from JS.

## 15/4/26
Added reverse_list.py to the repository, a simple yet fundamental problem within coding. Also completed merge_lists.py problem, identical to the problem I've completed in JS, the logic is the same, it just needed to be translated over, again helping me solidify my knowledge regarding python syntax and how it compares to the JS sytax I am familiar with.

## 16/4/26
Rest day from work today, was out all day, will pick it up again tmrw.

## 19/4/26
I wasnt home all day yesterday, so another day i missed on the commit streak. Today I was completing my Eng2050 assignment, so that is the work I am considering for today as it did take a lot of time.

## 22/4/26
Have been preparing for the viva for my comp2100 assignment for the past few days, I took that viva today, I am not doing any work for a bit to relax.

## 23/4/26
Another rest day, I feel like a chud programmer that larps on insta, or a fatass that keeps refeeding on the first day of the cut.

## 25/4/26
Am in melbourne rn, here to look at unis because we might move here. Spent all of yesterday on the drive so I wasnt able to commit at all.

## 26/4/26
Still in melbourne, not planning on doing much work, just want to keep the commit streak going. I did do some work for my Eng2050 group assignment though.