function getReceipt() {
    //initializes string so it can be passed from function to function and be added on to a full receipt
    var text1 = "<h3>Your Order:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + '<br>'
        }
    }
    if (selectedSize === 'Personal Pizza') {
        sizeTotal = 6;
    }
    else if (selectedSize === 'Medium Pizza') {
        sizeTotal = 8;
    }
    else if (selectedSize === 'Large Pizza') {
        sizeTotal = 10;
    }
    else if (selectedSize === 'XL Pizza') {
        sizeTotal = 12;
    }
    else if (selectedSize === 'Ludicrous Pizza') {
        sizeTotal = 14;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + runningTotal + ".00");
    console.log("Size text1: " + text1);
    console.log("Subtotal: $" + runningTotal + ".00")
    getTopping(runningTotal, text1)
}

function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName('toppings');
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>"
        }
    }

    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = toppingCount - 1;
    } else {
        toppingTotal = 0;
    }

    runningTotal = (runningTotal + toppingTotal)
    console.log("total selected topping count: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00")
    console.log("topping text1: " + text1);
    console.log("Purchase total = $" + runningTotal + ".00");
    document.getElementById('showText').innerHTML = text1;
    document.getElementById('totalPrice').innerHTML = "<h3> Total: $<strong>" + runningTotal + ".00 </strong> </h3>";
}