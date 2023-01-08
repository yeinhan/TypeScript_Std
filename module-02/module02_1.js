/* String */
var myname = "yein";
var pri = "my name is ".concat(myname);
console.log(pri);
// 열거형 enum
var ContractStatus;
(function (ContractStatus) {
    ContractStatus[ContractStatus["Premanent"] = 0] = "Premanent";
    ContractStatus[ContractStatus["Temp"] = 1] = "Temp";
    ContractStatus[ContractStatus["Apprentice"] = 2] = "Apprentice";
})(ContractStatus || (ContractStatus = {}));
var employeeStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);
//any - 제약조건 없이 형식 사용 가능 /사용자가 동적 입력을 하거나 타사 라이브러리 값이 필요한 경우
var randomVal = 10;
randomVal = "Mateo";
randomVal = true;
console.log(randomVal);
console.log(randomVal.name);
randomVal();
//unKnown  - 속성에 엑세스하거나 속성을 호출할 수 없다.
var randomValue = 10;
randomValue = true;
randomValue = 'Mateo';
// console.log(randomValue.name);
randomVal();
/* 형식 어선셜 */
var randomV = 10;
randomV = true;
randomV = 'Metro';
if (typeof randomV === "string") {
    console.log(randomV.toUpperCase());
}
else {
    console.log("Error - A string was expected here.");
}
/*
공용 구조체 유형
여려 형식 중 하나일 수 있는 형식 지정
*/
function add(x, y) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    if (typeof x === 'string' && typeof y === 'string') {
        return x.concat(y);
    }
    throw new Error("Parameters must be numbers or strings");
}
console.log(add('one', 'two'));
console.log(add(1, 2));
console.log(add('one', 2));
var newManager = {
    employeeID: 12345,
    age: 34,
    stockPlan: true
};
console.log(newManager);
var diceRoll;
diceRoll = 1;
/**
 * 배열
 */
var list = [1, 2, 3];
var list2 = [1, 2, 3];
/**
 * 튜플
 */
var person1 = ["yein", 27];
