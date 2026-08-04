const billingArea = document.getElementById("billingArea");
const newBill = document.getElementById("newBill");

const tbody = document.querySelector("#billTable tbody");

const grandTotal = document.getElementById("grandTotal");

let bill = {};
let total = 0;

newBill.onclick = function () {
    billingArea.style.display = "block";
};

function addItem(name, price) {

    if (!bill[name]) {

        bill[name] = {
            qty: 0,
            price: price
        };

    }

    bill[name].qty++;

    renderBill();

}

function renderBill() {

    tbody.innerHTML = "";

    total = 0;

    for (let item in bill) {

        let qty = bill[item].qty;

        let price = bill[item].price;

        let itemTotal = qty * price;

        total += itemTotal;

        tbody.innerHTML += `
<tr>
<td>${item}</td>
<td>${qty}</td>
<td>₹${price}</td>
<td>₹${itemTotal}</td>
</tr>
`;

    }

    grandTotal.innerHTML = "Grand Total : ₹" + total;

}

document.getElementById("paneer").onclick = () => addItem("Paneer Masala",180);

document.getElementById("roti").onclick = () => addItem("Butter Roti",25);

document.getElementById("tea").onclick = () => addItem("Tea",20);

document.getElementById("saveBill").onclick = function(){

alert("Bill Saved Successfully ✅");

};
