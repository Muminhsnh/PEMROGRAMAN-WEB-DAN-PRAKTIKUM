document.getElementById("tombol").onclick = function () {
    const nama = document.getElementById("nama").value.trim();
    const nim = document.getElementById("nim").value.trim();
    const utsInput = document.getElementById("uts").value.trim();
    const uasInput = document.getElementById("uas").value.trim();
    const uts = Number(utsInput);
    const uas = Number(uasInput);

    if (
        utsInput === "" ||
        uasInput === "" ||
        !Number.isFinite(uts) ||
        !Number.isFinite(uas) ||
        uts < 0 ||
        uts > 100 ||
        uas < 0 ||
        uas > 100
    ) {
        alert("Masukkan nilai UTS dan UAS antara 0 sampai 100.");
        return;
    }

    const rataRata = (uts + uas) / 2;

    let grade;
    if (rataRata >= 80) {
        grade = "A";
    } else if (rataRata >= 70) {
        grade = "B";
    } else if (rataRata >= 60) {
        grade = "C";
    } else if (rataRata >= 50) {
        grade = "D";
    } else {
        grade = "E";
    }

    const dataMhs = `${nama} ${nim} | UTS: ${uts} | UAS: ${uas} | Rata-rata: ${rataRata} | Grade: ${grade}`;
    console.log(dataMhs);
    document.getElementById("dataMhs").textContent = dataMhs;
};