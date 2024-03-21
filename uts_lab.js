document.addEventListener('DOMContentLoaded', function() {
    const inputName = document.querySelector('.input-name input');
    const submitBtn = document.querySelector('.input-name button');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Menghentikan perilaku default tombol submit
        const enteredName = inputName.value.trim(); // Mengambil nilai nama yang dimasukkan pengguna

        if (enteredName !== '') {
            // Simpan nama di session storage untuk digunakan di halaman lain
            sessionStorage.setItem('userName', enteredName);
            // Redirect ke halaman lain setelah nama disimpan
            window.location.href = './pages/main.html';
        } else {
            alert('Please enter your name.'); // Tampilkan peringatan jika nama kosong
        }
    });

    // Ambil nama dari session storage dan tampilkan di halaman
    const userNameElement = document.querySelector('.navbar p');
    const savedName = sessionStorage.getItem('userName');

    if (savedName) {
        userNameElement.textContent = `Hello, ${savedName}`;
    }
});
