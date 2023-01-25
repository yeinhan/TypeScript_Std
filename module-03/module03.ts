
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
