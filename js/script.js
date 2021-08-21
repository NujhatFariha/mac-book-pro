//  id call for memory
const memory8Gb = document.getElementById("memory-8gb");
const memory16Gb = document.getElementById("memory-16gb");
const memoryCostField = document.getElementById("extra-memory-cost");
//id call for storage
const storage256Gb = document.getElementById("storge-265gb");
const storage512Gb = document.getElementById("storage-512gb");
const storage1Tb = document.getElementById("storage-1tb");
const storageCostField = document.getElementById("extra-storage-cost");
//id call for delivery option
const freeDelivery = document.getElementById("free-delivery");
const deliveryChargeRequired = document.getElementById("delivery-charge-required")
const deliveryChargeField = document.getElementById("delivery-charge");
//id call for best price
const bestPriceField = document.getElementById("best-price")
// id call for total price
const total = document.getElementById("total-price");
const grandTotal = document.getElementById("grand-total-price");
updateTotal()


// update on the html
memory8Gb.addEventListener("click", function (){
    memoryCostField.innerText = "0";
});
memory16Gb.addEventListener("click", function (){
    memoryCostField.innerText = "180";
    updateTotal()
})
storage256Gb.addEventListener("click", function (){
    storageCostField.innerText = "0";
});
storage512Gb.addEventListener("click", function (){
    storageCostField.innerText = "100";
    updateTotal()
})
storage1Tb.addEventListener("click", function (){
    storageCostField.innerText = "180";
    updateTotal()
})
freeDelivery.addEventListener("click", function (){
    deliveryChargeField.innerText = "0";
})
deliveryChargeRequired.addEventListener("click", function (){
    deliveryChargeField.innerText = "20";
    updateTotal()
})

// total price update function
function updateTotal(){
    const bestPrice = parseInt(bestPriceField.innerText);
    const extraMemoryCost = parseInt(memoryCostField.innerText);
    const extraStorageCost = parseInt(storageCostField.innerText);
    const deliveryCharge = parseInt (deliveryChargeField.innerText);
    const totalPrice = bestPrice + extraMemoryCost +extraStorageCost + deliveryCharge ;
    total.innerText = totalPrice;
    grandTotal.innerText = totalPrice;

}

