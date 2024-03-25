document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.querySelector('.navbar p');
    const savedName = localStorage.getItem('userName');

    if (savedName) {
        userNameElement.textContent = `Hello, ${savedName}`;
    }

    const transactionName = localStorage.getItem('transactionName');
    const transactionNominal = localStorage.getItem('transactionNominal');
    const transactionCategory = localStorage.getItem('transactionCategory');

    if (transactionName && transactionNominal && transactionCategory) {
        const transactionInfo = document.querySelector('.transaction .info');
        transactionInfo.innerHTML = `
            <p>Nama Transaksi: ${transactionName}</p>
            <p>Nominal Transaksi: ${transactionNominal}</p>
            <p>Kategori Transaksi: ${transactionCategory}</p>
        `;

        localStorage.removeItem('transactionName');
        localStorage.removeItem('transactionNominal');
        localStorage.removeItem('transactionCategory');
    } else {

        const transactionInfo = document.querySelector('.transaction .info');
        transactionInfo.textContent = 'Belum ada transaksi';
    }
});

window.addEventListener('beforeunload', function() {
    localStorage.clear();
});
