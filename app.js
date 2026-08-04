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
        </tr>`;
    }

    grandTotal.innerHTML = "Grand Total : ₹" + total;
}


// Buttons
document.getElementById("paneer").addEventListener("click", function(){
    addItem("Paneer Masala",180);
});

document.getElementById("roti").addEventListener("click", function(){
    addItem("Butter Roti",25);
});

document.getElementById("tea").addEventListener("click", function(){
    addItem("Tea",20);
});
    

document.getElementById("saveBill").onclick = function(){
    alert("Bill Saved Successfully ✅");
};
