// Given variables
const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for (let index = 0; index < dishData.length; index++) {
        var element = dishData[index];
        finalPrice = element.price;
        if (taxBoolean) {
            finalPrice = element.price * tax;
        }
        else if (!taxBoolean){
            element.price = finalPrice;
        }
        else{
            console.log("You need to pass a boolean to the getPrices call!");
        }

        console.log("Dish: ", element.name, "Price: $", finalPrice)
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean,guests) {
    getPrices(taxBoolean);


    if (typeof guests === 'number' && guests > 0 && guests < 30) {
    // Do something if the number is in range
        discount = 0;
        if (guests < 5) {
            discount = 5;
            
        } else if(guests >= 5) {
            discount = 10
            
        }
        console.log('Discount is $' + discount);
    } else {
    // Do something else if the number is not in range
        console.log('The second argument must be a number greate between 0 and 30');
    }



}

// Call getDiscount()
getDiscount(true, 2)
getDiscount(false, 10)
getDiscount(false,4)
getDiscount(true,13)
getDiscount(true,-5)