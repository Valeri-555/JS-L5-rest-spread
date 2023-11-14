                //    * * * * * * ТЕОРІЯ * * * * *

// допомагає розкрити html-елемент у вигляді об'єкту;

//  ми завжди повинні ділити html - и на 2 типи:
//  І тип - КОМУНІКАЦІЇ (input, button), те що ми вводимо, взаємодія
//  ІІ тип - ТЕКСТОВИЙ

//console.dir(title.textContent); // щоб зчитати властивість з нашого об'єкту, тобто вилучити текст.
//title.textContent = "Hello JS" // за рахунок що це об'єкт ми можемо його перевизначати

//          * * * * * СlassList - властивість яка зберігає всю інформацію про класи, які  належать нашому html - елементу;
// з Js ми можемо маніпулювати класами(видаляти, додавати, замінювати)
// Вона має 3 найрозповсюджених метода:
// add - додати;
// remove - видалити;
// toggle - додати якщо немає, видалити якщо є;

// title.classList.add('title-color');
// console.log(title);
// title.classList.remove('title-color');
// title.classList.toggle('title-color'); //якщо такого класу немає, він його додасть
// title.classList.toggle('title-color'); // якщо такий клас є він його видалить


//             * * * * * * ДОДАЄМО СТИЛІ
// title.style.fontSize = '50px';
// title.style.color = 'green';
// console.dir(title);


// title.hiidden = false;
// title.hiidden = true;
// console.dir(title.dataset.good); //якщо потрібно достучатись до датасет

// console.dir(title.getAttribute('data-id/data-goods')); //якщо нам потібно отримати значення якогось атрибуту, достукуємось через приставку data-...*
//  У edataset зберігається  dataAtribute.

// const list = document.querySelector('.js-list');
// console.dir(list.children);
// console.log([...list.children]);
//можемо спуститись на 2 рівні нижче максимум;


            // * * * * * * ДОДАЄМО ЕЛЕМЕНТИ (такий варіант вважається складним)

// const li = document.createElement('li');
// li.textContent = list.children.length + 1; // створюємо lі
// li.classlist.add('title-color'); //якщо в li потрібно додати class;
// li.dataset.ia = '1234'; //якщо потрібно додати data atribute
// const div = document.createElement('div') // стиорюємо div
// const h2 = document.createElement('h2') //якщо в div потрібно створити h2
// h2.textContent = 'Hello' // в h2 додаємо текст
// li.append(div); //тепер div потрібно додати в li;
// div.append(h2); // тепер h2 додаємо в div
// list.append(li); //тепер додаємо li в список ul;буде додано в кінець списку, по типу push
// console.log(li);


            // * * * * *  МЕТОД ШАБЛОННИХ РЯДКІВ !!!!

// const li = `<li class="title-color" data-id = '1234'>${list.children.length + 1}
//     <div>
//     <h2>Hello</h2>
//     </div>
//      </li>`; // створюємо лішку як html подібний синтаксис + підставляємо значення якоїсь змінної
 //list.insertAdjacentHTML("beforeend",li); // тепер наш list додаємо в html документ, вазуємо 'куди' а потім 'що'.
// afterbegin - додається першим елементом
// afterend - додається в самий кінець, після закінчення
// beforebegin - додається передд самим списком(перед ul)
// beforeend - додається  в кінець списку


// якщо працюємо із створеною html розміткою, то пишемо приставку append;
// якщо створюємо нову розмітку то пишемо insertAdjacentHTML


            //* * * * * *  ЖИВА/НЕ ЖИВА КОЛЕКЦІЯ (СТАТИЧНА/ДИНАМІЧНА)


// const listStatic = document.querySelectorAll('li'); //повертає всі селектори
// const listDynamics = document.getElementsByTagName('li') // щоб отримати набір наших елементів, шукаємо за назвою тегів
// const list = document.querySelector(".js-list");
// const li = document.createElement('li'); // створимо li
// li.textContent = list.children.length + 1;// цій li даємо текстовий контент
// list.append(li); // тепер поміщаємо в наш список
// console.log('listStatic', listStatic);
// console.log('listDynamics', listDynamics);

//querySelectorAll - не покаже змін, які відбулись після нього, він фактично забирає ті елементи які булин на момент отримання їх;
// getElements - завжди буде повертати нам актуальні данні




// const elements = {
//     clickMe: document.querySelector('.js-click'),
//     box: document.querySelector('.js-box'),
//     query: document.querySelector('.js-query'),
//     form: document.querySelector('.js-form')
// }

// elements.clickMe.addEventListener('click', handlerClick);
// elements.box.addEventListener('click', handlerClick);

// let step = 0;
// function handlerClick() {
//     step += 50;
//     elements.box.style.marginTop = `${step}px`;
//     elements.box.style.marginLeft = `${step}px`;
// }


// function handlerClick(evt) {
//     step += 50;
//     evt.currentTarget.style.marginTop = `${step}px`;
//     evt.currentTarget.style.marginLeft = `${step}px`;
// }



// elements.query.addEventListener('input', handlerSearch);
// // elements.query.addEventListener('blur', handlerSearch);

// function handlerSearch(evt) {
//     console.dir(evt.currentTarget);
//     console.dir(evt.currentTarget.value);
// }

// elements.form.addEventListener('submit', handlerSubmit)

// function handlerSubmit(evt) {
//     evt.preventDefault();
//     console.dir(evt.currentTarget);
//     const { comment, email, password } = evt.currentTarget.elements;

//     console.log(email);
//     console.log(password);
//     console.log(comment);
// }




// Перерва до 21.30


// document.addEventListener('keydown', handlerKey);



// function handlerKey(evt) {
// if (evt.code === "Escape") {
//     console.log('😂');
// } else {
//     console.log('😴');
// }
// console.log(evt.code);
//     switch (evt.code) {

//         case 'Escape':
//             console.log('Escape');
//             break;
//         case 'KeyQ':
//             console.log('Q');
//             break;
//     }
// }


// document.addEventListener('keydown', handlerKey);


// function handlerKey(evt) {
//     // if (evt.ctrlKey && evt.code === 'KeyC') {
//     //     evt.preventDefault();
//     // }


// console.log(evt);
//     if (evt.ctrlKey) {
//         switch (evt.code) {
//             case 'KeyC':
//             case 'KeyV':
//                 evt.preventDefault();
//         }
//     }
// }


// document.addEventListener('mouseup', handler)
// function handler(evt) {
//     console.log(evt);
// }



const cars = [
    {
        id: 1,
        car: "Honda",
        type: "Civic",
        price: 12000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTCOHzdE-dK6WK7ax8NzQolTcCWA_jhJD-CRGWfqKJIJuGs8ML_-OyiDwzsdC8jOi_K10&usqp=CAU",
    },
    {
        id: 2,
        car: "Audi",
        type: "Q7",
        price: 40000,
        img: "https://upload.wikimedia.org/wikipedia/commons/8/8b/2017_Audi_Q7_S_Line_Quattro_3.0_Front.jpg",
    },
    {
        id: 33,
        car: "BMW",
        type: "5 siries",
        price: 9000,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUH96e58ynLO8SXMsFTNYkJci79eAZ8CyqcZsZ8snvzz2sfLl3Ojd1BQoaWBcrMKWvSYc&usqp=CAU",
    },
    {
        id: 3,
        car: "Honda",
        type: "Accord",
        price: 20000,
        number: "+380000000000",
        img: "https://upload.wikimedia.org/wikipedia/commons/7/76/2021_Honda_Accord_Sport_%28facelift%29%2C_front_11.30.21.jpg",
    },
    {
        id: 4,
        car: "Volvo",
        type: "XC60",
        price: 7000,
        img: "https://www.volvocars.com/media/shared-assets/master/images/pages/my19/xc60-my19/accessories/xc60my19_accessories_exteriorfeature2_1.jpg?w=320",
    },
];

const container = document.querySelector(".js-container"); //map повертає масив
const markup = cars.map(({ id = 'none', car, type, price, img }) => `<li data-id="${id}"> 
            <img src="${img}" alt="${car}" class="img">
            <h2>Марка - ${car}</h2>
            <h3>Модель - ${type}</h3>
            <p>Ціна - ${price}</p>
        </li>`).join(''); // join приводить у рядок;
console.dir(markup);
container.insertAdjacentHTML("beforeend", markup);
// data-atribute завжди ставимо на спільного батька, в ашому випадку це li


        // * * * * *  видалення html розмітки

container.insertAdjacentHTML("beforeend", markup);
const containerAfter = document.querySelector(".js-container");
[...containerAfter.children].forEach((item) => {
    if (item.CDATA_SECTION_NODE.id !== "none") {
        item.remove();
    }
});




// const elements = {
//     form: document.querySelector('.js-form'),
//     container: document.querySelector('.js-list')
// }

// function createMarkup(arr) {
//     return arr.map(({ id, car, type, price, img }) => `
//     <li data-id="${id}">
//     <img src="${img}" alt="${type}" width="300"/>
//     <h2>${car}</h2>
//     <h3>${type}</h3>
//     <span>${price}</span>
//   </li>`).join('')
// }

// elements.container.style.display = 'flex';
// elements.container.style.flexWrap = 'wrap';
// elements.container.style.gap = '25px';
// elements.container.insertAdjacentHTML('beforeend', createMarkup(cars))
// elements.form.addEventListener('submit', handlerSearch);

// function handlerSearch(evt) {
//     evt.preventDefault();

//     const { options, query } = evt.currentTarget.elements;
//     console.log(options.value);

//     const result = cars.filter((item) => item[options.value].toLowerCase().includes(query.value.toLowerCase()))
//         .sort((a, b) => a[options.value].localeCompare(b[options.value]));

//     elements.container.innerHTML = createMarkup(result);
// }




















