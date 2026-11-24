const data = [];

function validasiNama(input) {
    input.value = input.value.replace(/[0-9]/g, "");
}

function validasiNim(input) {
    input.value = input.value.replace(/[^0-9]/g, "");
}

function tambahData(event) {
    event.preventDefault();

    const inputNama = document.getElementById("input-nama");
    const inputNim = document.getElementById("input-nim");
    const nama = inputNama.value.trim();
    const nim = inputNim.value.trim();

    if (nama === "" || nim === "") {
        alert("Nama dan NIM harus diisi.");
        return;
    }

    if (/[0-9]/.test(nama) || !/^[0-9]+$/.test(nim)) {
        alert("Nama tidak boleh berisi angka dan NIM hanya boleh berisi angka.");
        return;
    }

    data.push({ nama: nama, nim: nim });
    inputNama.value = "";
    inputNim.value = "";
    inputNama.focus();
    tampilkanData();
}

function hapusData(index) {
    data.splice(index, 1);
    tampilkanData();
}

function tampilkanData() {
    const daftarData = document.getElementById("daftar-data");
    daftarData.innerHTML = "";

    data.forEach(function (mahasiswa, index) {
        const baris = daftarData.insertRow();
        const kolomNomor = baris.insertCell();
        const kolomNama = baris.insertCell();
        const kolomNim = baris.insertCell();
        const kolomAksi = baris.insertCell();
        const tombolHapus = document.createElement("button");

        kolomNomor.textContent = index + 1;
        kolomNama.textContent = mahasiswa.nama;
        kolomNim.textContent = mahasiswa.nim;
        tombolHapus.textContent = "Hapus";
        tombolHapus.type = "button";
        tombolHapus.onclick = function () {
            hapusData(index);
        };

        kolomAksi.appendChild(tombolHapus);
    });

    document.getElementById("jumlah-data").textContent =
        "Jumlah mahasiswa: " + data.length;
}