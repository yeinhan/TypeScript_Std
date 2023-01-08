/* String */

let myname: string = "yein";
let pri: string = `my name is ${myname}`

console.log(pri)


// 열거형 enum
enum ContractStatus {
    Premanent,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;

console.log(employeeStatus)

console.log(ContractStatus[employeeStatus])

//any - 제약조건 없이 형식 사용 가능 /사용자가 동적 입력을 하거나 타사 라이브러리 값이 필요한 경우
let randomVal: any = 10;
randomVal = "Mateo";
randomVal = true;

console.log(randomVal);
console.log(randomVal.name);
randomVal();


//unKnown  - 속성에 엑세스하거나 속성을 호출할 수 없다.
let randomValue: unknown = 10;
randomValue = true;
randomValue = 'Mateo';

// console.log(randomValue.name);
randomVal();

/* 형식 어선셜 */
let randomV: unknown = 10;

randomV = true;
randomV = 'Metro';

if(typeof randomV === "string"){
    console.log((randomV as string).toUpperCase());
}else {
    console.log("Error - A string was expected here.")
}

 /*
 공용 구조체 유형
 여려 형식 중 하나일 수 있는 형식 지정
 */
 function add(x:number | string, y: number | string){
    if(typeof x === 'number' && typeof y === 'number'){
        return x + y;
    }

    if(typeof x === 'string' && typeof y === 'string'){
        return x.concat(y);
    }

    throw new Error("Parameters must be numbers or strings");
}

console.log(add('one', 'two'));
console.log(add(1,2));
console.log(add('one',2))

/**
 * 교집합 형식
 * 두개 형식을 합하여 기존의 형식을 모두 포함하는 새 형식을 만듭니다.
 */
 interface Employee {
    employeeID: number;
    age: number;
}
interface Manager {
    stockPlan: boolean;
}

type ManagerEmployee = Employee & Manager;
let newManager: ManagerEmployee = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
}

console.log(newManager)

/**
 * 리터럴 형식 정의
 */
type dice = 1 | 2 | 3 | 4;
let diceRoll:dice;
diceRoll = 1;


/**
 * 배열
 */
let list: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

/**
 * 튜플
 */
let person1: [string, number]  = ["yein", 27];