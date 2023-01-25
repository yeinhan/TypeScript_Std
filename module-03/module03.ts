
/** 인터페이스 */
interface Employee {
    firstName : string;
    lastName : string;
    fullName() : string;
}

let employee: Employee ={
    firstName: "yein",
    lastName: "han",
    fullName(): string {
        return this.lastName + " " + this.firstName;
    }

}

console.log(employee.fullName())

//인터페이스는 일련의 개체에서 일관성을 유지한다. -> 인터페이스를 구현하는 개체는 인터페이스의 모든 멤버를 구현해야한다.

//type형식과 비슷하나 차이점은 존재한다.
//형식 별칭은 데이더 정의 이다 -> 공용 구조체, 기본, 교집합 등
//인터페이스는 개체와 같은 데이터 셰이프를 설명하는 방법.
//형식 별칭은 새 속성을 추가하기 위해 다시 열 수 없는 반면 인터페이스는 확장이 가능하다.

/**연습 - 인터페이스 선언 및 인스턴스화 */

interface IceCream {
    flavor : string;
    scoops: number;
}


let myIceCream: IceCream = {
    flavor : "vanila",
    scoops: 2
}

console.log(myIceCream.flavor)

function tooManyScoops(dessert: IceCream) {
    if(dessert.scoops >= 4){
        return dessert.scoops + " is too many scoops!"
    }else {
        return "Your order vill be ready soon!";
    }
}

console.log(tooManyScoops({flavor: "vanila2", scoops : 5}))


/**인터페이스 확장 */
interface Sundae extends IceCream {
    sauce: 'chocolate' | 'caramel' | 'strawberry';
    nuts?: boolean;
    whippendCream?: boolean;
    instructions?: boolean;
}

let mySundaeIceCream: Sundae = {
    flavor: "vanila2",
    scoops: 2,
    sauce: 'caramel',
    nuts: true
}

function tooManyScoopsSundae(dessert: Sundae) {
    if(dessert.scoops >=4){
        return dessert.scoops + " is too many"
    }else {
        return "your order will be ready soon!"
    }
}

console.log(tooManyScoopsSundae({flavor: "vanila", scoops: 5, sauce: 'caramel'}))


/**인터페이스를 사용하는 다른 방법 */
//인덱싱
interface IceCreamArray {
    [index: number]: string;
}

let myIceCreamArray: IceCreamArray;
myIceCreamArray= ['chocolate', 'vanila', 'strawberry'];
let myStr: string = myIceCreamArray[1]
console.log(myStr)

//인터페이스를 사용하여 Javascript API 설명 
const fetchURL = 'https://jsonplaceholder.typicode.com/posts'

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(url: string){
    let response = await fetch(url);
    let body = await response.json();
    return body as Post [];
}

async function showPost() {
    let posts = await fetchPosts(fetchURL);
    // Display the contents of the first item in the response
    let post = posts[0];
    console.log('Post #' + post.id)
    // If the userId is 1, then display a note that it's an administrator
    console.log('Author: ' + (post.userId === 1 ? "Administrator" : post.userId.toString()))
    console.log('Title: ' + post.title)
    console.log('Body: ' + post.body)
}

showPost();