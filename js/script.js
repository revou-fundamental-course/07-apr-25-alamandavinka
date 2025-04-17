// form isi nama di awal
let namaPengunjung = "";

window.onload = function () {
    while (namaPengunjung.trim() === "" || namaPengunjung === null) {
        namaPengunjung = prompt("Masukkan nama Anda:");
        if (namaPengunjung === null || namaPengunjung.trim() === "") {
            alert("Nama harus diisi untuk melanjutkan.");
        }
    }

    // Tampilkan nama ke dalam HTML
    document.getElementById("name").innerText = namaPengunjung;
    document.getElementById("name-input").value = namaPengunjung;
};

function validateNameForm() {
    const nama = document.getElementById("name-input").value;

    if (nama.trim() === "") {
        document.getElementById("error-name").innerText = "Nama tidak boleh kosong!";
        return false;
    }

    return false; // Supaya tidak reload halaman
}


// validasi form di message us
function validateMessageForm() {
    const form = document.forms['message-form'];
    const fullName = form['full-name'].value;
    const birthDate = form['birth-date'].value;
    const genderInputs = form['gender'];
    const message = form['messages'].value;

    // Reset error messages
    document.getElementById("error-full-name").innerHTML = "";
    document.getElementById("error-birth-date").innerHTML = "";
    document.getElementById("error-gender").innerHTML = "";
    document.getElementById("error-messages").innerHTML = "";

    let isValid = true;

    // validasi nama
    if (fullName === '') {
        document.getElementById("error-full-name").innerHTML = "Nama tidak boleh kosong!";
        isValid = false;
    }

    // validasi tgl lahir
    if (birthDate === '') {
        document.getElementById("error-birth-date").innerHTML = "Tanggal lahir harus diisi!";
        isValid = false;
    }

    // validasi jenis kelamin
    let gender = '';
    for (let i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            gender = genderInputs[i].value;
        }
    }
    if (gender === '') {
        document.getElementById("error-gender").innerHTML = "Pilih jenis kelamin!";
        isValid = false;
    }

    // validasi pesan
    if (message === '') {
        document.getElementById("error-messages").innerHTML = "Pesan tidak boleh kosong!";
        isValid = false;
    }

    if (!isValid) return false;

    // Menampilkan hasil 
    document.getElementById("sender-full-name").innerText = fullName;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = message;

    return false;
}

// bagian gambar banner
let indexBanner = 0;

// slide ke gambar selanjutnya
function nextBanner() {
    indexBanner += 1;
    showBanner();
}

function showBanner() {
    const bannerList = document.getElementsByClassName('banner-img');

    if (indexBanner > bannerList.length - 1) {
        indexBanner = 0;
    }

    for (let i = 0; i < bannerList.length; i++) {
        bannerList[i].style = 'display: none';
    }

    bannerList[indexBanner].style = 'display: block';
}

showBanner();

// gambar berganti setiap 3 detik
setInterval(() => {
    nextBanner();
}, 3000);


