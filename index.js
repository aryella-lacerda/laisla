/*
 * PRIMITIVE VALUES
 */

// Strings
const nameBeforeMarriage = "Aryella Lacerda";
const nameAfterMarriage = "Aryella Smith";

// Numbers
const age = 18; // integer
const weight = 59.5; // floating point, float

const numFour = 4;
const strFour = "4";

// Comparing variables
console.log(
  "Weak comparison... Are these variables the same?",
  numFour == strFour // evaulated to false
);
console.log(
  "Strong comparison... Are these variables the same?",
  numFour === strFour // evaluated to true
);

// Booleans
const isAryellaOlderThanLaisla = false;
const isLaislaOlderThanAryella = true;

// This is changable
let surname = "Lacerda";
surname = "Smith";

// Verifying the types of variables
console.log("The variable AGE is of type", typeof age);
console.log("The variable WEIGHT is of type", typeof weight);
console.log("The variable SURNAME is of type", typeof surname);

/*
 * NON-PRIMITIVE VALUES
 */

// Object
const user1 = {
  name: "Aryella",
  gender: "F",
  age: 27,
  isFriendsWithOwner: true,
};

// Object
const user2 = {
  name: "Laisla",
  gender: "F",
  age: 15,
  isFriendsWithOwner: false,
};

// Boolean operators
const isUserAllowedInFemaleDorm = user1.gender === "F" && user1.age > 18; // AND
const isAllowedInBar = user1.age > 18 || user1.isFriendsWithOwner === true; // OR

console.log("Is Aryella older than Laisla?", user1.age <= user2.age);

// Arrays
const users = [];
