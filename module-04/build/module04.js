"use strict";
/**TypeScript에서 함수 만들기 */
/*명명함수*/
//코드가 실행되기 전에 실행 컨텍스트에 미리 로드된다.
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(3, 4));
/*익명 함수 */
//실행되기 전에 실행 컨텍스트에 미리 르도 되지 않고 코드가 발견되면 로드된다.
let addNumbers = function (x, y) {
    return x + y;
};
console.log(addNumbers(1, 2));
let sum = function (input) {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
console.log(sum([1, 2, 3, 4, 5]));
/*화살표 함수 */
//익명함수를 정의하는 줄임 구문을 제공한다. 간결하다는 특성 떄문에 화살표 함수는 주로 간단하 함수와 일부 이벤트 처리 시나리오에서 사용됨
//함수 키워드를 생략하고 매개 변수와 함수 본문 사이에 => 추가한다.
let addNumbers1 = function (x, y) {
    return x + y;
};
let addNumbers2 = (x, y) => x + y;
console.log("화살표 함수" + addNumbers2(2, 3));
let sum2 = (input) => {
    let total = 0;
    for (let i = 0; i < input.length; i++) {
        if (isNaN(input[i])) {
            continue;
        }
        total += Number(input[i]);
    }
    return total;
};
/**연습 */
function displayAlert(message) {
    alert("This message is " + message);
}
console.log(displayAlert("바보"));
