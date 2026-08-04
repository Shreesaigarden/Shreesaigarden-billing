const billArea = document.getElementById("billingArea");
const newBill = document.getElementById("newBill");

let total = 0;

newBill.addEventListener("click", () => {
    billArea.style.display = "block";
});

const buttons = document.querySelectorAll("#billingArea button");

buttons.forEach(btn => {

    btn.addEventListener("click", () => {

        if(btn.innerText.includes("Paneer")){
            total += 180;
        }

        if(btn.innerText.includes("Butter")){
            total += 25;
        }

        if(btn.innerText.includes("Tea")){
            total += 20;
        }

        document.querySelector("#billingArea h3:last-child").innerHTML =
        "Total : ₹" + total;

    });

});
