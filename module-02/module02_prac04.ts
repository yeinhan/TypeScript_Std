/* EXERCISE 4
   TODO: Declare the array as the type to match the type of the items in the array. */

//    배열의 항목 형식과 일치하는 형식으로 배열을 선언합니다.

   let randomNumbers: number[] = [];
   let nextNumber: number;
   for (let i = 0; i < 10; i++) {
    nextNumber = Math.floor(Math.random() * (100 - 1)) + 1;
    randomNumbers.push(nextNumber);
    }
   
   console.log(randomNumbers);