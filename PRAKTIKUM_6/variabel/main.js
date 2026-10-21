// variabel => wadah atau tempat menyimpan data (var, let, const) 

// var 
// var mhs1 = "doni"; 
// mhs1 = "dino";  
// console.log(mhs1);  

// let 
// let mhs2 = "dina";
// mhs2 = "dini";
// console.log(mhs2);

// const
// const mhs3 = "joni";
// console.log(mhs3); 

// perilaku var
var mhs1 = "doni";
{
    var mhs1 = "dani"
    console.log(mhs1);
}
console.log(mhs1); 

// perilaku let 

let mhs2 = "dina"; // tersimpan untuk data global
{
    let mhs2 = "dini"; // tersimpan untuk data lokal
    console.log(mhs2);
}
console.log(mhs2);