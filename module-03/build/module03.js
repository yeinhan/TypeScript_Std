"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
let mySundaeIceCream = {
    flavor: "vanila2",
    scoops: 2,
    sauce: 'caramel',
    nuts: true
};
function tooManyScoopsSundae(dessert) {
    if (dessert.scoops >= 4) {
        return dessert.scoops + " is too many";
    }
    else {
        return "your order will be ready soon!";
    }
}
console.log(tooManyScoopsSundae({ flavor: "vanila", scoops: 5, sauce: 'caramel' }));
let myIceCreamArray;
myIceCreamArray = ['chocolate', 'vanila', 'strawberry'];
let myStr = myIceCreamArray[1];
console.log(myStr);
//인터페이스를 사용하여 Javascript API 설명 
const fetchURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield fetch(url);
        let body = yield response.json();
        return body;
    });
}
function showPost() {
    return __awaiter(this, void 0, void 0, function* () {
        let posts = yield fetchPosts(fetchURL);
        // Display the contents of the first item in the response
        let post = posts[0];
        console.log('Post #' + post.id);
        // If the userId is 1, then display a note that it's an administrator
        console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()));
        console.log('Title: ' + post.title);
        console.log('Body: ' + post.body);
    });
}
showPost();
