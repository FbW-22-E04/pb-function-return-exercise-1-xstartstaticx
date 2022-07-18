//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.
// 1
function uppercase(str) {
  const arr = str.split(" ");
  let str2;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    str2 = arr.join(" ");
  }
  return str2;
}
console.log(uppercase("the quick brown fox"));
// 2
// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function find_longest_word(str) {
  let words = str.split(" ");
  let longestWord = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
}
console.log(find_longest_word("Web Development Tutorial"));

// 3
// Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
function Longest_Country_Name(country_name) {
  //write your code here
  let countries = country_name;
  let longestCountry = "";
  for (let i = 0; i < countries.length; i++) {
    if (countries[i].length > longestCountry.length) {
      longestCountry = countries[i];
    }
  }
  return longestCountry;
}
console.log(
  Longest_Country_Name(["Australia", "Germany", "United States of America"])
);
