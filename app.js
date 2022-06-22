//Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами. - 10 баллов

let BishkekCity = 2000000;
let NewBalykchy = 1000;
let differenceBetweenCities = BishkekCity - NewBalykchy;

console.log(differenceBetweenCities);

//В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. Примечание: в углу, где дом, забора нет. - 10

let yardX = 50;
let yardY = 30;
let yardS = yardX * yardY;

let houseX = 20;
let houseY = 10;
let houseS = houseX * houseY;

let freeAreaOfTheYard = yardS - houseS;
let fenceLength = yardX * 2 - 20 + yardX * 2 - 10;
console.log(`freeAreaOfTheYard:${freeAreaOfTheYard}`);
console.log(`fenceLength:${fenceLength}`);

//В браузере запрашиваются два числа. Если первое больше второго, то вычислить их сумму, иначе - произведение. После этого компьютер должен вывести alert ЗАДАЧА РЕШЕНА. - 10

let number = prompt("Enter your number");
let number2 = prompt("Enter your number");

if (number > number2) {
  document.write(number + number2);
  alert("ЗАДАЧА РЕШЕНА.");
} else {
  alert("ЗАДАЧА РЕШЕНА.");
  document.write(number * number2);
}

//Дракон каждый год отращивает по три головы, но после того, как ему исполнится 100 лет - только по две. Сколь-ко голов и глаз у дракона, которому N лет? - 10

let yHead = 3;
let yEyes = 3;
let xHead = 2;
let xEyes = 2;
let years = prompt("Ажыдаар канча жашта?");

if (years <= 100) {
  alert("Дракондун башы: " + years * yHead);
  alert("Дракондун козу: " + years * (yEyes * 2));
} else {
  alert("Дракондун башы: " + (years * xHead + 100));
  alert("Дракондун козу: " + (years * (xEyes * 2) + 200));
}

//Пусть браузер, узнав возраст человека, дальнейшую беседу ведет по двум вариантам. Если возраст больше 17, то компьютер должен задать вопрос: "В каком институте ты учишься?" и получив ответ, глубокомысленно заметить "Хороший институт". Если же возраст меньше или равен 17, то соответственно - "В какой школе ты учишься?" и "Неплохая школа". После этого, каков бы ни был вариант, компьютер должен попрощаться: "До следующей встречи!". - 10

let userAge = prompt(" Ваш Возраст?");
if (userAge > 17) {
  let student = prompt("В каком институте ты учишься?");
  alert("Хороший институт");
} else if (userAge <= 17) {
  let pupil = prompt("В какой школе ты учишься?");
  alert("Неплохая школа");
} else {
  alert("До следующей встречи!");
}
