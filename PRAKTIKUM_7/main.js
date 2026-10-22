let dataMhs = ["Nama mahasiswa adalah doni"]; 
console.log(dataMhs[0]);

// escaping (\, \lt, \n, "''")
let dataMhs2 = "Nama Mahasiswa adalah \tdoni";
console.log(dataMhs2); 

// string literal 
let nama = "doni";
let nim = "123456";
let prodi = "Teknik Informatika";

let biodata = nama + " " + nim + " " + prodi; 
console.log(biodata); 
console.log(typeof biodata);

// template string literal 
let biodataLengkap = `mahasiswa dengan ${nama} dan ${nim} program studi${prodi}`; 
console.log(biodataLengkap); 
console.log(typeof biodataLengkap); 
