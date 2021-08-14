// // Strings, Numbers, Boolean, null, undefined, Symbol

// const name = "John";
// const age = 12;
// // Concatenation

// console.log("My name is" + name + " and I am" + age);

// // Template String
// console.log(`My name is ${name}`);

// const s = "Hello World";
// console.log(s.split(""));

// // Arrays variable that hold multiple values

// const number = new Array(1, 2, 3, 4, 5);
// const fruits = ["apples", "oranges", "pears"];
// fruits[3] = "grapes";
// fruits.push("watermelon", "mangos");
// fruits.unshift("strawberries");
// fruits.pop("mangos");

// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf("oranges"));
// console.log(fruits);

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   hobbies: ["music", "movies", "sports"],
//   address: {
//     street: "50 Main St",
//     city: "Boston",
//     state: "MA",
//   },
// };
// console.log(person.firstName, person.lastName);
// console.log(person.hobbies[1]);
// const {
//   firstName,
//   lastName,
//   address: { city },
// } = person;
// console.log(city);

// const todos = [
//   {
//     id: 1,
//     text: "take out trash",
//     isCompleted: true,
//   },
//   {
//     id: 2,
//     text: "Meeting with Boss",
//     isCompleted: true,
//   },
//   {
//     id: 3,
//     text: "Doctors Appointment",
//     isCompleted: false,
//   },
// ];
// // console.log(todos[1].text);
// // const todoJson = JSON.stringify(todos);
// // console.log(todoJson);
// let i = todos.length;
// console.log(i);
// for (let i = 0; i <= 10; i++) {
//   console.log(todos[i].text);
// }
const x = 20;
if (x == 10) {
  console.log("x is 10");
} else {
  console.log("x is not 10");
}
