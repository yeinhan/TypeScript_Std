/**TypeScript에서 함수 만들기 */

/*명명함수*/
//코드가 실행되기 전에 실행 컨텍스트에 미리 로드된다.
function addNumber(x:number, y:number):number{
    return x + y;
}

// console.log(addNumber(3,4))

/*익명 함수 */
//실행되기 전에 실행 컨텍스트에 미리 르도 되지 않고 코드가 발견되면 로드된다.
let addNumbers = function(x:number, y:number): number {
    return x + y;
}

// console.log(addNumbers(1,2))

let sum = function (input:number []):number {
    let total: number = 0;
    for(let i=0; i<input.length; i++){
        if(isNaN(input[i])){
            continue
        }
        total += Number(input[i])
    }

    return total;
}

// console.log(sum([1,2,3,4,5]))

/*화살표 함수 */
//익명함수를 정의하는 줄임 구문을 제공한다. 간결하다는 특성 떄문에 화살표 함수는 주로 간단하 함수와 일부 이벤트 처리 시나리오에서 사용됨
//함수 키워드를 생략하고 매개 변수와 함수 본문 사이에 => 추가한다.
let addNumbers1 = function (x: number, y:number): number {
    return x + y;
}

let addNumbers2 = (x:number, y:number): number => x+y;

// console.log("화살표 함수" + addNumbers2(2,3))

let sum2 = (input:number []):number => {
    let total: number = 0;
    for(let i=0; i<input.length; i++){
        if(isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }

    return total;
}

/**연습 */
function displayAlert(message: string){
    console.log("This message is "+ message);
}

// console.log(displayAlert("바보"))

/*선택적 매개 변수 */
function addNumberSelect(x:number, y?: number) : number {
    if(y == undefined){
        return x;
    }else {
        return x + y;
    }
}

console.log(addNumberSelect(1))
console.log(addNumberSelect(1,2))

/*기본매개변수 */
function addNumbersDefault(x:number, y = 25): number {
    return x + y;
}

console.log(addNumbersDefault(1))
console.log(addNumbersDefault(1,5))

/*Reset 매개변수
 */
//매개변수가 얼마나 많이 쓰일지 모를 때 사용. 원하는만큼 사용해도되고 안사용해도 된다.
let addNumbersReset = (firstNumber:number, ...restofNumbers: number[]): number => {
    let total: number = firstNumber;
    for(let counter = 0; counter < restofNumbers.length; counter++){
        if(isNaN(restofNumbers[counter])){
            continue;
        }
        total += Number(restofNumbers[counter]);
    }
    return total;
}

console.log(addNumbersReset(1,2,3,4,5,6,7))
console.log(addNumbersReset(2));
// addNumbersReset(2,3,"tree")

/**분해 개체 매개 변수 */
//함수 매개변수는 위치이며 함수에 정의된 순서대로 전달되어야한다.
//위치 매개 변수는 선택적 또는 동일한 데이터 형식의 여러 매개변수를 사용하여 함수를 호출할 때 코드를 덜 읽을 수 잇게 만들 수 있다.

interface Message {
    text: string;
    sender: string;
}

function displayMessage({text, sender}: Message){
    console.log(`Message from ${sender}: ${text}`);
}

displayMessage({sender: 'yein', text: 'hello, world'})

/**함수 형식 정의 */
// type calculator = (x: number, y:number) => number;
interface calculator {
    (x: number, y: number): number
}

let addNumbersType: calculator = (x:number, y:number) => x+y;
let substrNumbersType: calculator = (x:number, y:number) => x - y;

console.log(addNumbersType(3,4));
console.log(substrNumbersType(5,3))

let doCalculator = (operation: "add" | "subtract"): calculator => {
    if(operation == "add"){
        return addNumbersType
    }else {
        return substrNumbersType
    }
}

console.log(doCalculator('subtract')(10,2))