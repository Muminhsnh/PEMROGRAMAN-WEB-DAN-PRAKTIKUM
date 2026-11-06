// array => objek yang digunakan untuk menyimpan banyak data dalam satu variabel 

let dataMhs = ["mumin", "salpa", "loli", "puput", "patrik"];
console.log(dataMhs); 

// menampilkan data array berdasarkan index
console.log(dataMhs[0]);  
console.log(dataMhs[1]);  
console.log(dataMhs[2]);  
console.log(dataMhs[3]);  
console.log(dataMhs[4]);   
console.log(dataMhs[5]);   

// fungsi method pada array
// length => untuk mengetahui jumlah data dalam array
console.log(dataMhs.length);  

// push => menambahkan data baru ke dalam array
dataMhs.push("sipa");
console.log(dataMhs);  

// pop => menghapus data terakhir dalam array
dataMhs.pop();
console.log(dataMhs);  

// shift => menghapus data pertama dalam array
dataMhs.shift();
console.log(dataMhs);   

// unshift => menambahkan data baru di awal array
dataMhs.unshift("sipa");
console.log(dataMhs); 

// splice => menghapus data tertentu dalam array
dataMhs.splice(2, 1);
console.log(dataMhs);  

// slice => menyalin data tertentu dalam array  
let dataMhs2 = dataMhs.slice(1, 3);
console.log(dataMhs2); 

// join => menggabungkan data array menjadi string
let dataMhsString = dataMhs.join(", ");
console.log(dataMhsString); 

// concat => menggabungkan dua array menjadi satu array baru
let dataMhs3 = ["nani", "aini", "anis"];
let dataMhsGabungan = dataMhs.concat(dataMhs3);
console.log(dataMhsGabungan); 

// sort => mengurutkan data array 
dataMhs.sort();
console.log(dataMhs);

// reverse => membalik urutan data array
dataMhs.reverse();
console.log(dataMhs); 

// indexOf => mencari index dari data tertentu dalam array
let index = dataMhs.indexOf("salpa");
console.log(index);