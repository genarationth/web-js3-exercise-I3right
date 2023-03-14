// ------------------ Exercise 1 ---------------------
// Design an function to calculate pament cost not sure about. How many transection of the mount;
// so add another parameter(freq) for how many transection for that mounth
function paymentCost(cash, freq) {
  let cost = (3 + cash * 0.1/100 + cash) * freq;
  let summary = `Should pay ${cost.toFixed(2)}$`;
  return summary;
}
console.log(paymentCost(3, 1));


// ------------------ Exercise 2 ---------------------
// part1: get name and log to console
greeting = (name1, name2, name3) => `Welcome ${name1}, ${name2}, ${name3}`;

console.log(greeting("A", "B", "C"));

// part2 : get an age then - with current year
function ageCalculator(age) {
  let today = new Date();
  let year = today.getFullYear();
  return Math.abs(year - age);
}
console.log(ageCalculator(1990)); //assume user age is 1990 can change to promt or input number

// part3
function greeting2(name1, name2, name3, age1, age2, age3) {
  let result = "";
  result += `Welcome ${name1}, you are ${age1} years old. `;
  result += `Welcome ${name2}, you are ${age2} years old. `;
  result += `Welcome ${name3}, you are ${age3} years old. `;
  return result;
}
console.log(greeting2("A", "B", "C", 1, 2, 3)); // can edit in future to bring from part 2 and part 1 to calculate usefull function


// ------------------ Challenge ---------------------
// Grading 0 -> 11
// 0-4 : false   5-8 : true   9-10 : Excellent  11: perfect
function grading(score) {
  //check score in range or not
  if (score >= 0 && score <= 11) {
    score < 5 ? console.log("false")
    : score <= 8 ? console.log("True/ passed")
    : score < 11 ? console.log("Excellent")
    : console.log("Perfect");
  } else {
    console.log("invalid Score! Please enter score");
  }
}
grading(9);
