// // 'use strict';

// ////////////////////////////////////////////////////////////////
// // ARRAY
// // const friends = ['jonas', 'gaurav', 'jatin', 'sanjay'];
// // friends.push('Ananta');
// // friends.pop();
// // friends.unshift('ananta');
// // friends.shift();
// // console.log(friends.includes('ananta'));
// // console.log(friends.includes('jonas'));
// // console.log(friends.indexOf('jatin'));

// // console.log(friends);

// // // OBJECTS
// // const jonas = {
// //     firstname: "Jonas",
// //     lastname: "Schmedtmann",
// //     birthYear: 1991,
// //     job: 'Programmer',
// //     friends: ['Gaurav', 'Prince', 'Jatin', 'Sanjay'],
// //     calcAge: function () {
// //         console.log(this);
// //         return 2037 - this.birthYear;
// //     }
// // };
// // console.log(jonas.firstname);
// // console.log(jonas.lastname);
// // console.log(jonas.friends);
// // console.log(jonas['firstname'] + " " + 'Schmedtmann');

// // // const interestedIn = prompt("what do you want to know about jonas");
// // // if (jonas[interestedIn])
// // //     console.log(jonas[interestedIn]);
// // // else
// // //     console.error("invalid input");

// // jonas.location = window.location;
// // console.log(jonas.calcAge());

// //LOOPS--------------
// // for (let i = 1; i < 11; i++) {
// //     console.log(`Lifting weights repitition ${i}`);
// // }

// // const jonas = ["jonas", 'schmedtmann', 2022 - 1991, 'teacher', ['Michael', 'Peter', 'Steven']];

// // for (let i = 0; i < jonas.length; i++) {
// //     console.log(jonas[i]);
// // }

// // const birthYears = [1991, 2007, 1999, 2020];
// // const ages = [];

// // for (let i = 0; i < birthYears.length; i++) {
// //     ages.push(2022 - birthYears[i]);
// // }
// // console.log(ages);

// // for (let i = 0; i < jonas.length; i++) {
// //     if (typeof jonas[i] === 'number') continue;
// //     console.log(jonas[i]);
// // }
// // for (let i = 0; i < jonas.length; i++) {
// //     if (jonas[i] === 'teacher') break;
// //     console.log(jonas[i]);
// // }

// // for (let i = jonas.length - 1; i >= 0; i--) {
// //     console.log(jonas[i]);
// // }

// // for (let i = 1; i < 4; i++) {
// //     console.log(`Excercise number ${i} start`);
// //     for (let j = 1; j < 3; j++) {
// //         console.log(`Set number ${j}`)
// //     }
// // }
// // let i = 1;
// // while (i < 10) {
// //     console.log(i);
// //     i++;
// // }

// // let dice = Math.ceil(Math.random() * 6);
// // console.log(dice);

// // gaurav();
// // gaurav = function () {
// //     // console.log("gaurav");
// // }

// // var gaurav;


// // Function scoped
// // fun(); // Undefined
// // function fun() {
// //     console.log("function is hoisted");
// // }

// // console.log(funCall());
// // function funCall() {
// //     return ("Hello my name is gaurav");
// // }

// // const flight = 'LH234';
// // const jonas = {
// //     name: 'Gaurav Joshi',
// //     passport: 123456789,
// // }

// // const checkIn = function (flightNum, passenger, newPassport) {
// //     flightNum = 'LH999';
// //     passenger.name = 'Mr.' + passenger.name;
// //     newPassport(passenger);
// // }

// // const newPassport = function (person) {
// //     person.passport = Math.trunc(Math.random() * 10000000);
// //     console.log(person.passport);
// // }
// // // newPassport(jonas);

// // checkIn(flight, jonas, newPassport);
// // console.log(flight);
// // console.log(jonas);


// // const oneWord = function (str) {
// //     return str.replaceAll(' ', '').toLowerCase();
// // }

// // const upperFirstWord = function (str) {
// //     const [first, ...rest] = str.split(' ');
// //     return [first.toUpperCase(), ...rest].join(' ');
// // }

// // const transformer = function (str, fun) {
// //     console.log(`Original String : ${str}`);
// //     console.log(`Transformed String : ${fun(str)}`);
// //     console.log(`Transformed String : ${fun.name}`);
// // }
// // transformer("JavaScript is the best", oneWord);
// // transformer("JavaScript is the best", upperFirstWord);

// // const greet = function (greeting) {
// //     return function (name) {
// //         console.log(`${greeting} ${name}`);
// //     }
// // }
// // const greetHey = greet("hey");
// // greetHey("gaurav");

// // const lufthansa = {
// //     airline: 'lufthansa',
// //     iataCode: 'LH',
// //     bookings: [],

// //     book(flightNum, name) {
// //         console.log(`${name} booked a seat on ${this.airline} airline with flight Number ${flightNum} and iata code ${this.iataCode}`);

// //         this.bookings.push({
// //             flight: `${this.iataCode} ${flightNum}, name`
// //         })
// //     }
// // }
// // lufthansa.book(123, "Gaurav Joshi");
// // lufthansa.book.call(lufthansa, 321, "Jonas Scmedtmann");

// // const openBook = lufthansa.book;

// // const eurowings = {
// //     airline: 'Eurowings',
// //     iataCode: 'EW',
// //     bookings: [],
// // };
// // openBook.call(eurowings, 23, "Sarah Williams");
// // lufthansa.book.call(eurowings, 23, "Sarah Williams");


// // const swiss = {
// //     airline: "swiss",
// //     iataCode: 'LX',
// //     bookings: [],
// // };
// // const newArr = [23, "Marry Cooper"];
// // openBook.apply(swiss, newArr);
// // console.log(swiss.bookings);

// // const open = lufthansa.book.bind(swiss);
// // open(24, "Gaurav Joshi");

// // const next = lufthansa.book.bind(eurowings, 41,);
// // next("Sanjay Joshi");

// // const secureBookings = function () {
// //     let counts = 0;

// //     return function () {
// //         counts++;

// //         console.log(counts);
// //     };
// // };

// // secureBookings()();

// // Closure is not something that we have to create, it actually gets created by itself only.

// // const movements = [123, 1234, -2384, -234, 34956, -3456, -43, 43, -76, -7654];

// // for (const [i, movement] of movements.entries()) {
// //     if (movement > 0) console.log(`${i + 1}: You deposited ${movement}`);

// //     else console.log(`${i + 1}: You have done a withdrawl of ${Math.abs(movement)}`)
// // }

// // movements.forEach(function (mov, i, movements) {
// //     if (mov > 0) console.log(`${i + 1}: You deposited ${mov}`);

// //     else console.log(`${i + 1}: You have done a withdrawl of ${Math.abs(mov)}`)
// // })

// // const currency = new Map([
// //     ['USD', "United State Dollar"],
// //     ['EUR', "Euro"],
// //     ['GBP', "Pound Sterling"],
// // ])
// // for (const [key, cur] of currency.entries()) {
// //     console.log(`We are using ${key}, i.e. ${cur}`);
// // }

// // currency.forEach(function (cur, key) {
// //     console.log(`We are using ${key}, i.e. ${cur}`);
// // })

// // const newSet = new Set(['INR', 'INR', 'USD', 'USD', 'EUR', 'EUR']);
// // console.log(newSet);
// // newSet.forEach((newSet) => console.log(newSet))

// // const newObj = new Object();
// // newObj.name = "gaurav joshi";
// // newObj.address = "Pradhan enclave Burari North Delhi, delhi 110084, INDIA";

// // console.log(newObj);

// // const obj1 = {
// //     name: "gaurav"
// // }
// // const obj2 = {
// //     name: "Sanjay"
// // }

// // const date = new Date();
// // const arr = [1, 2, 3, 4, 5];


// // console.log(obj1.valueOf() + " " + arr + date.toString());

// // const nums = [1, 2, 3, 4, 5];
// // let arr;
// // for (let i = 0; i < nums.length; i++) {
// //     arr[i] = nums[i];
// // }
// // console.log(arr);

// // const newArr = new Array(10);

// // newArr.fill(7, 7);

// // console.log(newArr);

// // const arr = Array.from({ length: 10 }, () => 1);
// // console.log(arr);

// // console.log(0.1 + 0.2);
// // console.log(Number('23'));
// // console.log(+'23');

// // console.log(parseFloat('23.3e'));
// // console.log(parseFloat('er32'));

// // console.log(Math.sqrt(25));
// // console.log(25 ** (1 / 1000000000000000));
// // console.log(8 ** (1 / 3));
// // console.log(Math.max(12, 34, 56, 78, 90));
// // console.log(Math.min('12', 34, 56, 78, 90));
// // console.log(Math.PI);

// // console.log(Math.ceil(Math.random() * 10) + 10);
// // console.log(Math.round(21.0));

// // console.log(Number.MAX_SAFE_INTEGER);
// // console.log(2 ** 53 - 1);

// // console.log(parseFloat('30000_45_67'));
// // console.log(+'234');
// // console.log(12344444444444444444n * 2345678n);
// // console.log(456782345678n * (56));

// // console.log(new Date(0));
// // console.log((52 * 12 * 31 * 24 * 60 * 60 * 1000));
// // console.log(new Date(1671321600000));
// // console.log(Date.now());
// // console.log(new Date(1674139318908));

// // const time = new Date();
// // console.log(time.getFullYear());
// // console.log(time.getMonth());
// // console.log(time.getDate());
// // console.log(time.getDay());
// // console.log(time.getHours());
// // console.log(time.getMinutes());
// // console.log(time.getSeconds());
// // console.log(time.getMilliseconds());
// // console.log(time.toISOString());
// // const date = (new Intl.DateTimeFormat('en-IN')
// //     .format(new Date()))
// //     .split('/')
// //     .map(data => {
// //         if (+data < 9)
// //             return data.padStart(2, 0);
// //         return data;
// //     }).join('/');
// // console.log(date);

// // console.log(`${time.getDay()}`.padStart(2, 0));
// // console.log([123, 432, 43245, 54324, 5434].sort((a, b) => a - b));
// // console.log(new Date() - new Date("2019-11-01T13:15:33.035Z"));

// // const dates = [100108548045, 97134302840,
// //     94018320319, 88484981038, 85274105619,
// //     78438348029, 78241847294, 77942128433];

// // const formula = function (dates) {
// //     return dates.map(day => {
// //         return (new Date() - new Date(day)) / (24 * 60 * 60 * 1000);

// //     })
// // }
// // const gaurav = formula(dates);
// // console.log(gaurav);

// // const now = new Date();
// // const options = {
// //     hour: '2-digit',
// //     minute: '2-digit',
// //     second: '2-digit',
// //     day: '2-digit',
// //     month: '2-digit',
// //     year: 'numeric',
// // }

// // console.log(new Intl.DateTimeFormat('ar-dj', options).format(now));
// // console.log(navigator.language);

// // const options = {
// //     style: 'unit',
// //     unit: 'kilogram'
// // }
// // const num = 1341234123;

// // console.log(new Intl.NumberFormat(options).format(num));

// // setTimeout(() => {
// //     console.log("HERE IS YOUR DELICIOUS PIZZA");
// // }, 1000);
// // console.log("waiting❗❗❗❗");

// // const ingredients = ['corn', 'cheese'];
// // const pizzaTimer = setTimeout((ing1, ing2) => {
// //     console.log(`Your Pizza is ready with ${ing1} and ${ing2}`);
// // }, 2000, ...ingredients);

// // if (ingredients.includes('corn')) clearTimeout(pizzaTimer);
// // console.log("Waiting for the pizza");


// // const options = {
// //     hour: '2-digit',
// //     minute: '2-digit',
// //     second: '2-digit',
// //     // day: '2-digit',
// //     // month: '2-digit',
// //     // year: 'numeric',
// // }
// // setInterval(() => {
// //     const now = new Intl.DateTimeFormat('en-us', options).format(new Date());
// //     console.log(now);
// // }, 1000);

// // const timer = function () {
// //     let time = 10;

// //     const timerset = setInterval(() => {
// //         const min = String(Math.trunc(time / 60)).padStart(2, 0);
// //         const sec = String(time % 60).padStart(2, 0);

// //         console.log(`${min}:${sec}`);

// //         if (time == 0) clearInterval(timerset);
// //         time--;

// //     }, 1000);
// // }
// // timer();


// // const timer = document.querySelector(".timer");
// // const timerSet = function () {
// //     let time = 7200;

// //     const tick = function () {

// //         const hour = String(Math.trunc(time / 60 / 60)).padStart(2, 0);
// //         const min = String(Math.trunc(time / 60 % 60)).padStart(2, 0);
// //         const sec = String(time % 60).padStart(2, 0);

// //         timer.textContent = `${hour}:${min}:${sec}`;
// //         if (time === 0)
// //             clearTimeout(tooo);

// //         time--;
// //     }
// //     tick();

// //     const tooo = setInterval(tick, 1000);

// // }
// // timerSet();

// // console.log(document.documentElement);
// // console.log(document.location);
// // console.log(document.body);
// // console.log(document.head);


// // const message = document.createElement("div");
// // message.innerText = "gaurav joshi";

// // document.body.append(message);

// const person = function (name) {
//     this.name = name;
//     console.log(this.name);
//     // this.fun = function () {

//     // }
// };
// const jonas = new person('jonas');
// jonas.__proto__.calcAge = function (name = 'sanjay') {
//     console.log("my age is my age, none of your age", name);
// }
// const gaurav = new person('gaurav');

// jonas.__proto__.calcAge("gaurav");
// person.prototype.calcAge();
// console.log(jonas);
// console.log(gaurav);
// console.log(person.prototype);
// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === person.prototype);
// console.log(jonas.__proto__ === gaurav.__proto__);

// console.log(person.prototype.isPrototypeOf(jonas));


// const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 3, 2, 3, 4, 3, 2];
// Array.prototype.unique = function () {
//     console.log(this);
//     return [...new Set(this)];
// }

// console.log(arr.unique());

// const heading = document.querySelector('h1');
// console.dir(heading.clientWidth - 85);


// const Animal = function (category) {
//     this.category = category;

//     console.log(this.category);

//     this.sanjay = function () {
//         console.log("hey sanjay");
//     }
// }
// Animal.prototype.gaurav = function () {
//     console.log("hey gaurav");
// }
// Animal.hey = function () {
//     console.log("hey dog");
// }

// const dog = new Animal("Dog");
// dog.sanjay();
// Animal.hey();

// console.log(dog);
// console.log(Animal.prototype);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     static hey() {
//         console.log("hey");
//     }
// }
// const jonas = new Person("Gaurav", 21);
// console.log(jonas.__proto__);
// Person.hey();

// const PersonProto = {
//     init(name, birthYear) {
//         this.name = name;
//         this.birthYear = birthYear;
//     },

//     calcAge() {
//         console.log(`${2023 - this.birthYear}`);
//     }

// };

// const gaurav = Object.create(PersonProto);

// gaurav.init("Gaurav", 2001);
// gaurav.calcAge();
// console.log(gaurav);

// const getCountryData = function (country) {
//     try {
//         fetch(`https://restcountries.com/v2/name/${country}`)
//             .then(response => {
//                 response.json();
//                 if (!response.ok) throw new Error("No Country Found" + " " + response.status);
//             })
//             .then(data => {
//                 console.log(data);
//                 const neighbour = data[0].borders?.[0];

//                 fetch(`https://restcountries.com/v2/name/${neighbour}`)
//                     .then(response => response.json())
//                     .then(data => console.log(data));
//             })
//     } catch (err) {
//         console.error(err);
//     }
// }
// getCountryData('srfg');





// const request2 = new XMLHttpRequest();
// request2.open('Get', 'https://restcountries.com/v2/name/bharat');
// request2.send();

// request2.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     console.log(data);
// })

// const lotteryPromise = new Promise(function (resolve, reject) {
//     console.log("Lottery process is processing");
//     setTimeout(() => {
//         if (Math.random() >= 0.5) {
//             resolve("You Win");
//             return new Promise(() => console.log('yes'));
//         }
//         else reject("You Lost Your Money");
//     }, 2000);
// })

// lotteryPromise.then(Response => {
//     console.log(Response);
// }).catch(err => console.error(err))

// const getLocation = function () {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }
// getLocation().then(res => console.log(res.coords))



// const obj1 = {
//   name: "gaurav",
//   class: 12,
//   game: "Volley Ball",
//   place: "Man hatten, New York"
// }
// console.log(obj1);

// const obj2 = {
//   name: "Sanjay",
//   class: 10
// }

// const fun = function () {
//   Object.keys(obj2).forEach(el => {
//     obj1[el] = obj2[el];
//   })
// }

// fun();
// console.log(obj1);