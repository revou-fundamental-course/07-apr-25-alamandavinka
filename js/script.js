function validateNameForm() {
    const nama = document.forms['name-form']['name-input'].value;

    if (nama === '') {
        document.getElementById("error-name").innerHTML = "Tidak Boleh Kosong!";
        return false;
    }

    document.getElementById("name").innerHTML = nama;
    document.getElementById("error-name").innerHTML = "";
    return false;
}

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

    if (fullName === '') {
        document.getElementById("error-full-name").innerHTML = "Nama tidak boleh kosong!";
        isValid = false;
    }

    if (birthDate === '') {
        document.getElementById("error-birth-date").innerHTML = "Tanggal lahir harus diisi!";
        isValid = false;
    }

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

    if (message === '') {
        document.getElementById("error-messages").innerHTML = "Pesan tidak boleh kosong!";
        isValid = false;
    }

    if (!isValid) return false;

    // Menampilkan ke halaman
    document.getElementById("sender-full-name").innerText = fullName;
    document.getElementById("sender-birth-date").innerText = birthDate;
    document.getElementById("sender-gender").innerText = gender;
    document.getElementById("sender-messages").innerText = message;

    return false;
}

