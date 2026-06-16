// let liItems = document.querySelectorAll("ul li");

// let content = document.getElementById("content");
// let btn = document.getElementById("btn");
// let totalPrice = 0;
// liItems.forEach(
//   (item) =>
//     (item.onclick = () => {
//       content.innerHTML += item.textContent + " ";
//       totalPrice += item.getAttribute("price");
//       btn.style.display = "block";
//     }),
// );
// btn.addEventListener("click", () => {
//   console.log(totalPrice);
// });
///////////////////////////////////////////////////////////

// let arr = [1, 2, 3, 4, 5];
// let result = arr.slice(1);

// console.log(result);
// console.log(arr);

/////////////////////////////////////////////////////////

// console.log(25 + Math.floor(Math.random() * (30 - 25 + 1)));

/////////////////////////////////////////////////////////////

// let xHttp = new XMLHttpRequest();
// console.log(xHttp.readyState);

// xHttp.open("GET", "https://jsonplaceholder.typicode.com/users");
// xHttp.onload = function () {
//   console.log(xHttp.responseText);
// };

// xHttp.send();

//////////////////////////////////////////////////////////////////

// let car = {
//   name: "BMW",
//   color: "red",
// };
// let car2 = new Object(car);

// let car2 = Object.create(car, {
//   code: {
//     value: "123",
//   },
// });

// console.log(Object.getPrototypeOf(car2));

// let car2 = { ...car, code: "123" }; ===
// let car2 = Object.assign({}, car, { code: "123" });

// console.log(car2);

/////////////////////////////////////////////////////////////////

// function greet() {
//   console.log("hi");
// }
// Function.prototype.call.call.call.call(greet);

///////////////////////////////////////////////////////////////////
//////////////////////////////////!depi
// const buttonActions = {
//   click() {
//     console.log("button", this.id, "clicked");
//   },
//   disable() {
//     console.log("button", this.id, "disabled");
//   },
// };

// function createBtn(id) {
//   let btn = Object.create(buttonActions);
//   btn.id = id;
//   return btn;
// }

// let b1 = createBtn(1);
// let b2 = createBtn(2);

// b1.click();
// b2.click();

////////////////////////////////////////////////////////////
// هل object اتحذف
// function test() {
//   let a = { x: 1 };
// }
// test();

////////////////////////////////////////////////////////////

// let a = { x: 1 };
// delete a.x;
// console.log(a);

///////////////////////////////////////////////////////////

// let arr = [1, 2, 3];
// delete arr[1];

// console.log(arr); // [1, empty, 3]

///////////////////////////////////////////////////////////

// document.getElementById("demo").addEventListener("mousemove", (e) => {
//   console.log(e.pageY);
// });

///////////////////////////////////////////////////////////

// function change(obj) {
//   obj.x = 100;
// }

// let data = { x: 1 };
// change(data);

// console.log(data.x); // 100

// console.log("-------------------------------------");

// function change(obj) {
//   obj = { x: 100 };
// }

// let data = { x: 1 };
// change(data);

// console.log(data.x); // 1

//////////////////////////////////////////////////////////////////

// let original = {
//   name: "Ahmed",
//   address: {
//     city: "Cairo",
//   },
// };

// let shallow = Object.assign({}, original);
// shallow.address.city = "giza";

// console.log(shallow.address.city);
// console.log(original.address.city);

//////////////////////////////////////////////////////////////////////
//! deep clone

// let original = {
//   name: "Ahmed",
//   address: {
//     city: "Cairo",
//   },
// };

// // let deep = structuredClone(original);
// let deep = JSON.parse(JSON.stringify(original));

// console.log(original === deep);

// deep.address.city = "Alex";

// console.log(original.address.city); // Cairo ✅

///////////////////////////////////////////////////////////////////////
//! deep copy  & shallow copy

// let a = { x: 1 };
// let b = { ...a };
// b.x = 2;

// console.log(a.x); // ==> 1

//! //////////////////

// let a = { x: { y: 1 } };
// let b = { ...a };
// b.x.y = 2;

// console.log(a.x.y); //  ==> 2

//! /////////////////

// function update(obj) {
//   obj.x = 5;
// }

// let a = { x: 1 };
// update(a);

// console.log(a.x); // ==> 5

//! /////////////////

// const obj = {
//   fN: "ahmed",
//   lN: "eliewa",
// };

// function createU(data) {
//   console.log(...Object.entries(data));
// }

// createU(obj);

//! ///////////////////////////

// function Person(name) {
//   this.name = name;

//   this.sayHi = function () {
//     console.log("hi");
//   };
// }
// // ===
// // Person.prototype.sayHi = function () {
// //   console.log("hi");
// // };

// const p1 = new Person("ahmed");
// console.log(typeof p1.constructor == typeof p1);

//! ///////////////////////////////

// function Counter() {
//   let count = 0; // 🔒 متغير خاص (Private)

// this.inc = function () {
//   count++;
//   return count;
// };

// this.dec = function () {
//   count--;
//   return count;
// };

// this.get = function () {
//   return count;
// };
// }

// const c1 = new Counter();
// const c2 = new Counter();

// console.log(c1.inc()); //1
// console.log(c1.inc()); //2
// console.log(c2.inc()); //1
// console.log(c1.dec()); //1
// console.log(c1.get()); //1

//! ////////////////////

const a = {
  name: "ahmed",
  age: 36,
};

const n = Object.keys(a);

console.log(n);

for (let key in a) {
  console.log(key, a[key]);
}
