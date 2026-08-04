let total = 0;

const billingArea = document.getElementById("billingArea");

document.getElementById("newBill").onclick = function () {
    billingArea.style.display = "block";
};

document.getElementById("paneer").onclick = function () {
    total += 180;
    document.getElementById("total").innerHTML = "Total ₹" + total;
};

document.getElementById("roti").onclick = function () {
    total += 25;
    document.getElementById("total").innerHTML = "Total ₹" + total;
};

document.getElementById("tea").onclick = function () {
    total += 20;
    document.getElementById("total").innerHTML = "Total ₹" + total;
};
