/**
 * 타입의 종류에 대해서 알아보자.
 */
console.log(typeof(1));  // result: number
console.log(typeof('이것은 문자열입니다.'));   // result: string
console.log(typeof({ a: '객체입니다.'}));  // result: object
console.log(typeof([1,2,3])); // result: object
console.log(typeof(true));    // result: boolean
console.log(typeof(undefined)); // result: undefined
console.log(typeof(null)); // result: object
console.log(typeof(Symbol('심볼입니다.')));  // result: symbol
console.log(typeof(function (){})); // result: function --> 함수 또한 object 중 하나이다.
