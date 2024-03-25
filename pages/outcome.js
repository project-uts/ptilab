document.addEventListener("DOMContentLoaded", function () {
  const userNameElement = document.querySelector(".navbar p");
  const savedName = localStorage.getItem("userName");

  if (savedName) {
      userNameElement.textContent = `Hello, ${savedName}`;
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const userNameElement = document.querySelector(".income-content h1");
  const savedName = localStorage.getItem("userName");

  if (savedName) {
      userNameElement.textContent = `${savedName}'s Outcome`;
  }
});

function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  dropdown.classList.toggle("show");
}

function selectCategory(category) {
  document.getElementById("categoryInput").value = category;
  toggleDropdown("myDropdown"); 
}

window.onclick = function (event) {
  if (!event.target.matches(".drop-button")) {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
          if (dropdown.classList.contains("show")) {
              dropdown.classList.remove("show");
          }
      });
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const outcomeForm = document.getElementById("incomeForm");

  outcomeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const transactionName = document.getElementById("transactionName").value.trim();
    const transactionNominal = document.getElementById("transactionNominal").value.trim();
    const categoryInput = document.getElementById("categoryInput").value.trim();

    if (transactionName !== "" && transactionNominal !== "" && categoryInput !== "") {
      const outcomeTransactions = JSON.parse(localStorage.getItem("outcomeTransactions")) || [];
      outcomeTransactions.push({ name: transactionName, nominal: transactionNominal, category: categoryInput });
      localStorage.setItem("outcomeTransactions", JSON.stringify(outcomeTransactions));

      alert("Transaksi sukses!");

      window.location.href = "../pages/main.html";
    } else {
      alert("Transaksi belum selesai, silakan lengkapi formulir!");
    }
  });
});

