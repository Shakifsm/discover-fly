document.getElementById("first-class-plus").addEventListener("click", function(){
    handleFirstClass(true);
});

document.getElementById("first-class-minus").addEventListener("click", function(){
    handleFirstClass(false);
});

function handleFirstClass(isIncrease){
    var firstClassInput = document.getElementById("first-class-count");
    var firstClassCount = parseInt(firstClassInput.value);
    var newFirstClassCount = firstClassCount;
    if(isIncrease == true){
        newFirstClassCount = firstClassCount + 1;
    }
    if(isIncrease == false && firstClassCount > 0){
        newFirstClassCount = firstClassCount - 1;
    }
    firstClassInput.value = newFirstClassCount;
    var firstClassTotal = newFirstClassCount * 150;
    document.getElementById("subtotal").innerText = "$" + firstClassTotal;
    calculateTotal()
};


document.getElementById("economy-class-plus").addEventListener("click", function(){
    handleEconomyClass(true);
});

document.getElementById("economy-class-minus").addEventListener("click", function(){
    handleEconomyClass(false);
});

function handleEconomyClass(isIncrease){
    var economyClassInput = document.getElementById("economy-class-count");
    var economyClassCount = parseInt(economyClassInput.value);
    var newEconomyClassCount = economyClassCount;
    if(isIncrease == true){
        newEconomyClassCount = economyClassCount + 1;
    }
    if(isIncrease == false && economyClassCount > 0){
        newEconomyClassCount = economyClassCount - 1;
    }
    economyClassInput.value = newEconomyClassCount;
    var economyClassTotal = newEconomyClassCount * 100;
    document.getElementById("subtotal").innerText = "$" + economyClassTotal;
    calculateTotal()
};

function calculateTotal(){
    var firstClassInput = document.getElementById("first-class-count");
    var firstClassCount = parseInt(firstClassInput.value);

    var economyClassInput = document.getElementById("economy-class-count");
    var economyClassCount = parseInt(economyClassInput.value);

    var totalPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("subtotal").innerText = "$" + totalPrice;

    var tax = Math.round(totalPrice * 0.1);
    document.getElementById("tax-amount").innerText = "$" + tax;

    var grandTotal = totalPrice + tax;
    document.getElementById("grand-total").innerText = "$" + grandTotal;
};

document.getElementById("book-btn").addEventListener("click", function(){
    var sectionToHide = document.getElementById("main-section");
    sectionToHide.style.display = "none";
    var sectionToShow = document.getElementById("confirm-ticket");
    sectionToShow.style.display = "block";
})