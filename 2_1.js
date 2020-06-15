Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль -  let [firstName, lastName] = [ 'dima','masha']
console.log(firstName, lastName)

Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль
 let [firstName, lastName, ...rest] = [ 'dima','masha','vova','misha']
let other = rest

other.forEach(other => console.log(other));

if (other.length < 1 ){other = ['alex']}
