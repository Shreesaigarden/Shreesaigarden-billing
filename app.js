let total = 0;

const billingArea = document.getElementById("billingArea");
const newBill = document.getElementById("newBill");
const totalText = document.getElementById("total");

newBill.addEventListener("click", function () {
    billingArea.style.display = "block";
});

document.getElementById("paneer").addEventListener("click", function () {
    total += 180;
    totalText.textContent = "Total ₹" + total;
});

document.getElementById("roti").addEventListener("click", function () {
    total += 25;
    totalText.textContent = "Total ₹" + total;
});

document.getElementById("tea").addEventListener("click", function () {
    total += 20;
    totalText.textContent = "Total ₹" + total;
});
