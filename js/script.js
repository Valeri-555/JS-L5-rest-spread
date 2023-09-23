// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze

// KAHOOT урок 6, перенести

// 1. const user = {
//     email: 'mango@gmail.com',
//     age: 20
// };
// const { username = "User" } = user;
// console.log(username); // Помилка


// 2. const user = {
//    email: 'mango@gmail.com',
//    age: 20,
//    location: {lat: 10, lon: 20},
//  };
// const { location: {lat, lon}} = user;
// console.log(lat, lon); // 10, 20

    
// 3. function foo({ username } = {}) {
//     console.log(username);
// }
// foo(); // undefind
    
    
// 4. const values = [10, 3, 17, 84, 12, 6];
// const min = Math.min(...values); // знайти мінімальне значення
// console.log(min);  // 3;


// 5. const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [...arr1];
// console.log(arr1 === arr2); // false


// 6. constb profile = {
//     username: "Mango",
//     age: 2
// };
// const profileUpdate = {
//     username: "Poly"
// };
// const updatedProfile = {
//     ...profile,
//     ...profileUpdate
// };
// console.log(updatedProfile);

 

// Tільки цикл for...in перебирає повноцінно об'єкти

// Якщо нам потрібно отримати ключі об'єкта  - Object.keys
// Якщо потрібно отримати значення ключа - Object.values
// Якщо потрібно отриматикомбінації - Object.entries




// Що таке Об'єкт
// const user = {
//     name: 'Test user',
//    skills: {         // - можна робити вкладеність, ств обєкт в середині осн. обєктуч
//         html: true,
//         css: true,
//         react: false
//     },
// }
//  *  *  *  *  *    ЗВЕРНЕННЯ ДО ВЛАСТИВОСТЕЙ ОБ'ЄКТА

// Коли ми працюємо з обєктами ми завжди будемо звертатися до певних ключів (їч існує 2 методи)

// 1. Коли нам потрібно зчитати ім'я нашого умовного user
//console.log(user.name);
// 2. Коли потрібно звертатись до вкладених властивостей
 //console.log('css', user.skills.css);

 //const objectKey = 'name'; // Якщо нам потрібно достучатись до ключа який знаходиться в іншій змінній
 //console.log(user[objectKey]); // нову змінну огортаємо в квадратні дужки
 //console.log(user['name']); //як виглядає під капотом

 // Можна перевизначати ключ який знаходиться в середині об'єета але ніяким чином не перевизначати його значення ( але змінну також можна перевизначати)
 

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// console.log(user.name);
// function getKey(key){ // 'name' 'skills' ств функцію в якій є одін параметр key;
//     console.log(user[key])//user['name']
// }
// getKey('name')
// getKey('skills')

//const objectKey = 'skills'; // підставляли змінну і значення змінної
//const skillKey = 'css';

// Різні варіанти звернення (комбінування між собою) до вкладеного обєкта (ключа)

//console.log(user['skills']['css']); // Як виглядає під капотом
// console.log(user[objectKey][skillKey]);
// console.log(user.skills[skillKey]);
// console.log(user[objectKey].css);

// Коли ми звертаємось через "." ми вказуємо фактичну назву ключа, коли ми звертаємось через "[]",
// то в нас назва ключа проходить як рядочок або він зберігається в якійсь змінній





//  *  *  *  *  *    ЗМІНА ЗНАЧЕННЯ ВЛАСТИВОСТІ (додаємо нові ключі з властивостями)

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// user['age'] = 28; //ств клюів через квадратні дужки, ключ огортаємо в рядок
// console.log(user);


// user.city = 'Odessa';
// console.log(user);



// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// Object.freeze(user.skills);
// user.name = 'Artem';
// user.city = 'Lviv';
// user.skills.html = true;
// console.log(user);

// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// user.city = 'Lviv';
// delete user.city
// console.log(user);

// Методи об'єкта
// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
//     sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const user2 = {
//     name: 'Den',
//     skills: {
//         html: true,
//         css: true,
//         react: true
//     },
//     sayHello: user.sayHello
// }

// user2.sayHello()
// user.sayHello('Lviv')

// console.log(user);





// Цикл for...in
// const testObj = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     }, sayHello(city) {
//         // console.log(city);
//         console.log(`Hello my name ${this.name}`);
//     }
// }

// const user = Object.create(testObj);
// user.city = 'Lviv'
// console.log(user);

// for (const key in testObj) {
//     if (testObj.hasOwnProperty(key)) {
//         console.log(key, user[key]);
//     }
// }





// Метод Object.keys()
// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }

// const keys = Object.keys(user);
// for(const key of keys){
//     console.log(key,user[key]);
// }
// console.log(keys);



// Метод Object.values()

// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }
// const values = Object.values(user);
// const values = Object.values(user.skills);
// console.log(values);

// Метод Object.entries()

// const user = {
//     name: 'Artem',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }


// const entries = Object.entries(user);
// const entries = Object.entries(user.skills);
// console.log(entries);




// Перерва до 21.05




// Практика //
// Task - 1
// Створи функцію яка буде приймати 3 параметри та формувати об'єкт покупки
// 1 Назва продукту
// 2 Кількість одиниць
// 3 Ціна за 1 одиницю товару
// Функція має повертати сформований об'єкт з ключами name, price, quantity, totalPrice.


// function createBasket(product, quantity, price) {
//     const totalPrice = quantity * price;

//     console.log('product', product);
//     // const basket = {
//     //     product, // product : 'pizza'
//     //     quantity,
//     //     price,
//     //     totalPrice
//     // }

//     // return basket;

//     return {
//         product,
//         quantity,
//         price,
//         totalPrice
//     }
// }
// console.log(createBasket('pizza', 3, 120));
// console.log(createBasket('aplle', 13, 1200));

// Task - 2
// Створи функцію для ведення статистики комп'ютерного клубу. Функція приймає 1 параметр це об'єкт користувачів де ключ це ім'я користувача, а значення це час оренди у хвилинах.
// Функція повертає рядок з інформацією про те скільки було користувачів та який середній час оренди комп'ютер.

// const players = {
//     Den: 60,
//     Kate: 130,
//     William: 45,
//     Matthew: 120,
//     Ethan: 40,
//     David: 55,
// }

// function getTime(obj) {
//     const values = Object.values(obj);
//     let total = 0;
// console.log(values);
//     for (const value of values) {
//         total += value;
//     }

//     return `Count of players ${values.length}, average time ${total/values.length}`
// }

// console.log(getTime(players));


// Task - 3
// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є дана книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
//     { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
//     { name: "Alice", books: ["War and peace", "Romeo and Juliet"] },
//     { name: "Oleksii", books: ["Bible", "War and peace", "Harry Potter", "Romeo and Juliet"], age: 26 },
// ]

// function getTotalAge(arr) {
//     let totalAge = 0;

//     for (const user of arr) {
//         // console.log(user.name, 'age' in user);

//         if ('age' in user) {
//             console.log(`${user.name} - ${user.age}`);
//             totalAge += user.age
//         }
//         // if (user.hasOwnProperty('age')) {
//         //     totalAge += user.age
//         // }
//     }
//     console.log(totalAge);
// }
// console.log(getTotalAge(friends));






// const user = {
//     name: "Anna",
//     books: ["Bible", "Harry Potter"],
//     age: 21
// }
// function getUsers(arr, bookName) {
//     const userNames = [];
//     for (const user of arr) {
//         if (user.books.includes(bookName)) {
//             userNames.push(user.name);
//         }
//     }

//     return userNames.join(', ');
// }
// console.log(getUsers(friends, "Harry Potter"));




// Task - 4
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета

// const hogvarts = {
//     griffindor: [{
//         name: "Harry",
//         points: 17
//     },
//     {
//         name: "Hermiona",
//         points: 19
//     },
//     {
//         name: "Ron",
//         points: 14
//     },
//     ],
//     slizerin: [{
//         name: "Draco",
//         points: 17
//     },
//     {
//         name: "Goyl",
//         points: 14
//     },
//     {
//         name: "Crabbe",
//         points: 5
//     },
//     ],
//     getUserList(faculty) {
//         if (!(faculty in this)) {
//             return 'Faculty not found 😥';
//         }
//         const students = [];
//         for (const student of this[faculty]) {
//             students.push(student.name);
//         }
//         return students.join(', ')
//     },
//     getTotalPoints(faculty) {
//         if (!(faculty in this)) { // ! HE 
//             return 'Faculty not found 😥';
//         }
//         let totalPoints = 0;
//         for (const student of this[faculty]) {
//             if ('points' in student) {
//                 totalPoints += student.points;
//             }
//         }

//         return totalPoints;
//     }
// }

// console.log(hogvarts.getUserList('griffindor'));
// console.log(hogvarts.getUserList('slizerin'));
// console.log(hogvarts.getUserList('slitherin'));

// console.log(hogvarts.getTotalPoints('griffindor'));
// console.log(hogvarts.getTotalPoints('slizerin'));
// console.log(hogvarts.getTotalPoints('slitherin'));




// const user = {
//     name: 'Test user',
//     skills: {
//         html: false,
//         css: true,
//         react: false
//     },
// }


// let totalKeys = 0;

// for (const key in user) {
//     if (user.hasOwnProperty(key)) {
//         totalKeys += 1
//     }
// }

// console.log(totalKeys);

// console.log(Object.keys(user).length);


// console.log(800 === 000800);
// console.log(123 === 000123);


// 2) чо це ? 800 === 000800 true 123 === 000123 false
// 3) де можна дивитися інфу про оновлення всяких мов щоб бути в курсі всіх нових фішок ?
// 4) я знайшов додаток RunJS там не треба свторювати файли і писати логи там вже показується результат, ви знаєте про цей додаток ? пишу щоб всі змогли спробувати в ньому просто не треба зайвих файлів і браузер відкривати його навіть на заннятях можна використовувати, що скажете ? якраз практика без логів які все одно треба буде потім прибирати 
// 5) бачив у вас в джс сніпети для розгортки коду чи можна буде іх отримати в слек ?
// 6) чи є у вас вигорання і якщо є як з ним справлятися ?
