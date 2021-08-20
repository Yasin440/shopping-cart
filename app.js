function updateItems(product, price, isIncreasing) {
    const productsNumber = document.getElementById(product + '-number');
    let productsNumberValue = productsNumber.value;
    if (isIncreasing == true) {
        productsNumberValue = parseInt(productsNumberValue) + 1;
    }
    else if (productsNumberValue > 0) {
        productsNumberValue = parseInt(productsNumberValue) - 1;
    }
    productsNumber.value = productsNumberValue;
    //update case-price
    const productsPrice = document.getElementById(product + '-price');
    productsPrice.innerText = productsNumberValue * price;
    //update totalPrice
    calculateTotalPrice();
}

function getProductValu(product) {
    const productQuantity = document.getElementById(product + '-number').value;
    const productNumber = parseInt(productQuantity);
    return productNumber;
}
function calculateTotalPrice() {
    const phoneTotal = getProductValu('phone') * 1219;
    const caseTotal = getProductValu('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const total = subTotal + tax;
    //update on html
    document.getElementById('subTotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}

//phone increase and dicrease
document.getElementById('phone-plus').addEventListener('click', function () {
    updateItems('phone', 1219, true);
});
document.getElementById('phone-minus').addEventListener('click', function () {
    updateItems('phone', 1219, false);
});
//case increase and dicrease
document.getElementById('case-plus').addEventListener('click', function () {
    updateItems('case', 59, true);
});
document.getElementById('case-minus').addEventListener('click', function () {
    updateItems('case', 59, false);
});
