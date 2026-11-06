const data = [];

function tampilkanData() {
    const daftarData = document.getElementById("daftar-data");
    daftarData.innerHTML = "";

    for (let i = 0; i < data.length; i++) {
        const item = document.createElement("li");
        const tombolHapus = document.createElement("button");

        item.textContent = data[i] + " ";
        tombolHapus.textContent = "Hapus";
        tombolHapus.onclick = function () {
            hapusData(i);
        };

        item.appendChild(tombolHapus);
        daftarData.appendChild(item);
    }
}

function tambahData() {
    const inputData = document.getElementById("input-data");
    const nilaiData = inputData.value;

    if (nilaiData === "") {
        return;
    }

    data.push(nilaiData);
    inputData.value = "";
    tampilkanData();
}

function hapusData(index) {
    data.splice(index, 1);
    tampilkanData();
}