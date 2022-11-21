/**
 * 증가/증감 연산자
 */
let temp = 0;
++temp;   // temp = 1
temp++;   // temp = 2
--temp;   // temp = 1
temp--;   // temp = 0

// NOTE: ++/-- 의 위치에 띠른 반환 순서
let number = 0;

const frontPlus = ++number + 5;  // number + 1을 반한한 후 계산
console.log(frontPlus, number);  // frontPlus = 6


number = 0;
const behindPlus = number++ + 5; // number를 반환한 후 계산
console.log(behindPlus, number); // behindPlus = 5