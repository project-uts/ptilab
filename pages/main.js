document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.querySelector('.navbar p');
    const savedName = localStorage.getItem('userName');

    if (savedName) {
        userNameElement.textContent = `Hello, ${savedName}`;
    }

    updateMainPage(); 
});

function updateMainPage() {
    const balanceElement = document.querySelector('.amount .nominal');
    const transactionListElement = document.querySelector('.transaction .info');

    let totalIncome = 0;
    let totalOutcome = 0;
    let transactionHTML = '';

    const incomeTransactions = JSON.parse(localStorage.getItem("incomeTransactions")) || [];
    incomeTransactions.forEach(transaction => {
        totalIncome += parseFloat(transaction.nominal);
        transactionHTML += `<p style="color:green;">${transaction.name} - ${transaction.nominal} - ${transaction.category}</p>`;
    });

    const outcomeTransactions = JSON.parse(localStorage.getItem("outcomeTransactions")) || [];
    outcomeTransactions.forEach(transaction => {
        totalOutcome += parseFloat(transaction.nominal);
        transactionHTML += `<p style="color:red;">${transaction.name} - ${transaction.nominal} - ${transaction.category}</p>`;
    });

    const totalBalance = totalIncome - totalOutcome;
    balanceElement.textContent = totalBalance.toFixed(2); 
    transactionListElement.innerHTML = transactionHTML; 
}
