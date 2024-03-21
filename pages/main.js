document.addEventListener('DOMContentLoaded', function() {
    // Ambil nama dari local storage dan tampilkan di halaman
    const userNameElement = document.querySelector('.navbar p');
    const savedName = localStorage.getItem('userName');

    if (savedName) {
        userNameElement.textContent = `Hello, ${savedName}`;
    }
});
