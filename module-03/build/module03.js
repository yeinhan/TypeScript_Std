"use strict";
let employee = {
    firstName: "yein",
    lastName: "han",
    fullName() {
        return this.lastName + " " + this.firstName;
    }
};
console.log(employee.fullName());
let myIceCream = {
    flavor: "vanila",
    scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many scoops!";
    }
    else {
        return "Your order vill be ready soon!";
    }
}
console.log(tooManyScoops({ flavor: "vanila2", scoops: 5 }));
