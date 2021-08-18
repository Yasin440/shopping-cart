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
