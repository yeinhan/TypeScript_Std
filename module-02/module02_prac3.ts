/* EXERCISE 3
   TODO: In the following code, implement an enum type called Season that represents 
   the constants "Fall", "Winter", "Spring", and "Summer". Then, update the function so 
   you can pass in the season by referencing an item in the enum, for example 
   Season.Fall, instead of the literal string "Fall". */

//    "Fall", "Winter”, "Spring, "Summer” 상수를 나타내는 enum 형식 Season을 구현합니다.

// enum의 항목을 참조하여 시즌을 전달(예: 리터럴 문자열 "Fall" 대신 Season.Fall 전달)할 수 있도록 함수를 업데이트합니다.
    enum Season {
        Fall,
        Winter,
        Spring,
        Summer
    };

   function whichMonths(season: Season) {
    let monthsInSeason: string;
    switch (season) {
        case Season.Fall:
            monthsInSeason = "September to November";
            break;
        case Season.Winter:
            monthsInSeason = "December to February";
            break;
        case Season.Spring:
            monthsInSeason = "March to May";
            break;
        case Season.Summer:
            monthsInSeason = "June to August";
    }
    return monthsInSeason;
}

console.log(whichMonths(Season.Spring));