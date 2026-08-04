const billingArea = document.getElementById("billingArea");
const newBill = document.getElementById("newBill");

if (newBill && billingArea) {
    newBill.addEventListener("click", () => {
        billingArea.style.display = "block";
    });
}
