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
let total = 0;

const billingArea = document.getElementById("billingArea");
const newBill = document.getElementById("newBill");
const totalText = document.getElementById("total");
const billList = document.getElementById("billList");

newBill.onclick = function () {
    billingArea.style.display = "block";
};

function addItem(name, price) {
    total += price;

    const li = document.createElement("li");
    li.textContent = `${name} - ₹${price}`;
    billList.appendChild(li);

    totalText.textContent = "Total ₹" + total;
}

document.getElementById("paneer").onclick = () => addItem("Paneer Masala", 180);
document.getElementById("roti").onclick = () => addItem("Butter Roti", 25);
document.getElementById("tea").onclick = () => addItem("Tea", 20);
