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
    userNameElement.textContent = `${savedName}'s Income`;
  }
});


function category() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function selectCategory(category) {
  document.getElementById("categoryInput").value = category;
  category();
}

window.onclick = function (event) {
  if (!event.target.matches(".drop-button")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const incomeForm = document.getElementById("incomeForm");

  incomeForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const transactionName = document.getElementById("transactionName").value.trim();
    const transactionNominal = document.getElementById("transactionNominal").value.trim();
    const categoryInput = document.getElementById("categoryInput").value.trim();

    if (transactionName !== "" && transactionNominal !== "" && categoryInput !== "") {
      const incomeTransactions = JSON.parse(localStorage.getItem("incomeTransactions")) || [];
      incomeTransactions.push({ name: transactionName, nominal: transactionNominal, category: categoryInput });
      localStorage.setItem("incomeTransactions", JSON.stringify(incomeTransactions));

      alert("Transaksi sukses!");

      window.location.href = "../pages/main.html";
    } else {
      alert("Transaksi belum selesai, silakan lengkapi formulir!");
    }
  });
});
