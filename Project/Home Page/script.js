const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Mencegah formulir terkirim secara default
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById('message').value;
    output.innerHTML = `
        Nama: ${name}<br>
        Tanggal Lahir: ${birthdate}<br>
        Jenis Kelamin: ${gender}<br>
        Pesan: ${message}
    `;
    console.log(name)
});



const tableBody = document.getElementById('tableBody');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Ambil nilai dari setiap input
    const nama = document.getElementById('name').value;
    const tanggalLahir = document.getElementById('birthdate').value;
    
    // ... dan seterusnya

    // Buat elemen baris baru (tr) dan sel (td)
    const newRow = document.createElement('tr');
    const namaCell = document.createElement('td');
    const birthdateCell = document.createElement('td');
    namaCell.textContent = nama;
    birthdateCell.textContent = tanggalLahir

    // ... lakukan hal yang sama untuk sel lainnya ...

    // Tambahkan sel ke baris, lalu baris ke tabel
    newRow.appendChild(namaCell);

    // ... dan seterusnya
    tableBody.appendChild(newRow);
});