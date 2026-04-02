// This function works by recursively checking if the string is empty, and if it isnt, returning a recursion call of the function and concattenating the rest of the string

function reverse(str) {
  if (str === "") return "";
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse('hello'))