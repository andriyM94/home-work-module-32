// -----1----
// Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду,
// починаючи від from і закінчуючи to.
// Зробіть два варіанти рішення.
// Використовуючи setInterval.
// Використовуючи вкладений setTimeout
console.log("-----1----");

const start = 1;
const finish = 10;

//перший варіант: Використовуючи setInterval.
function printNumbers(from, to) {
  let counter = from;
  let timer = setInterval(() => {
    console.log(counter);

    if (counter == to) {
      clearInterval(timer);
    }
    counter++;
  }, 1000);
}

printNumbers(1, 3);

//другий варіант: Використовуючи вкладений setTimeout
function _printNumbers(from, to) {
  let counter = from;

  setTimeout(function next() {
    console.log(counter);

    if (counter < to) {
      setTimeout(next, 1000);
    }

    counter++;
  }, 1000);
}

_printNumbers(4, 6);

// -----2----
// Вбудована функція setTimeout використовує колбек-функції. Створіть
// альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через
// ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }delay(3000).then(() => alert('виконалось через 3 секунди'));

function delay(ms) {
  return new Promise(function (resolve) {
    setTimeout(() => resolve(), ms);
  });
}

const ms = 3000;

delay(ms).then(() => alert(`Виконалось через ${ms / 1000} секунди`));
