// function 

// deklarasi function 
function sayHello() {
    console.log("Hello World"); // blok program 
} 
sayHello(); // pemanggilan function 

// function expression
const hello = function() {
    console.log("Hello World 2");
}
hello(); 

// arrow function
const hai = () => {
    console.log("Hello World 3");
}   
hai(); 

// function dengan parameter
function mahasiswa(name) {
    console.log(`Nama Mahasiswa: ${name}`);
}
mahasiswa("Mumin"); 
mahasiswa("Hasanah"); 

// function dengan return value
function nilai(a, b) {
    return a + b;
}
console.log(nilai(5, 3)); 

// function dengan nilai default 
function nilai2(x,y = 5) {
    return x + y;
}
const hasil = nilai2(10);
console.log(hasil);  

// function dengan rest parameter
function sum(...nilai) {
    return nilai.reduce((total, sum) => total * sum, 5); 
}
const total = sum(1, 2, 3, 4, 5);
console.log(total); 

// function dengan callback
function inputData (callback) {
     const nama = prompt("Masukkan Nama: ");
     callback(nama);
 } 
 inputData(function(nama) {
     console.log(nama);
 }); // memanggil function dengan callback 

// function clouser 
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log(outerVariable, innerVariable);
    }
}

outerFunction("outside")("inside"); 
// innerFunction("inside"); 

// function dengan IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Menjalankan fungsi immediately");
})();

// function dengan recursive
function factorial(n) {
    // base kondisi untuk menghentikan rekursi
    if (n === 0) {
        return 1;
    } 

    return n * factorial(n - 1); // memanggil dirinya sendiri
} 
console.log(factorial(5));

// function async/await 
async function fetchData(url) { 
    try {
        const response = await fetch(url); // menunggu response dari server
        const data = await response.json();
        return data; // mengembalikan data
    } catch (error) {
        console.error("Error Fetching Data:", error);
    } 
}

fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then(data => console.log(data)) // menampilkan data
    .catch(error => console.error("Error:", error));

// function dengan generator 
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}
const generator = generatorFunction();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);

// function dengan method 
const mhs = {
    name: "Mumin",
    age: 19,
    nim: 2511102441314,

    dataMhs() {
        console.log(`Nama: ${this.name}, Umur: ${this.age}, NIM: ${this.nim}`);
    }
}
mhs.dataMhs();

// function dengan constructor
function person(name, age, nim) {
    this.name = name;
    this.age = age;
    this.nim = nim;
}  

// function dengan prototype
person.prototype.dataMhs = function() {
    console.log(`Nama: ${this.name}, Umur: ${this.age}, NIM: ${this.nim}`);
}
const person1 = new person("Mumin", 19, 2511102441314);
console.log(person1);

// function dengan class 
class car {
    constructor(nama) {
        this.nama = nama;
    }
}
car.prototype.model = function() {
    console.log(`this.nama`);
} 

const car1 = new car("BMW");
console.log(car1); 