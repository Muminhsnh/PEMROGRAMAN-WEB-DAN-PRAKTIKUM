// operasi string

// char at
let dataMhs = "Mumin mahasiswa teknik informatika";
console.log(dataMhs);
console.log(dataMhs.charAt(3)); 

// concat
let namaDepan = "Mumin"; 
let namaBelakang = "Hasanah";
let namaLengkap = namaDepan.concat(" ", namaBelakang); 
console.log(namaLengkap); 

// index of
console.log(dataMhs.indexOf('m')); 

// substring 
console.log(dataMhs.substring(5, 15)); 
console.log(dataMhs.substring(15, 5)); 

// slice
console.log(dataMhs.slice(5, 15));
console.log(dataMhs.slice(15, 5)); // data kosong 

// replace
ubahDataMhs = dataMhs.replace("Mumin", "Salva");
console.log(ubahDataMhs); 

// tolowercase
console.log(dataMhs.toLowerCase()); 

// touppercase
console.log(dataMhs.toUpperCase()); 
