/**
 * 변수 var 는 값을 할당되기전에 호출이 가능하나 undefined로 나온다.
 * var 는 호이스팅에 의해 선언과 동시에 변수가 할당이 된다.
 * var varTest = undefined;
 * console.log(varTest);
 * varTest = 2;
 */
console.log(varTest); // result => 에러는 발생하지않고 undefined 가 리턴된다.
var varTest = 2;


/**
 * 변수 let 은 값을 할당되기전에 호출하면 에러를 발생시킨다.
 * let 은 호이스팅에 의해 선언 (let foo;) 라는 코드가 상위에 존재하고 실제 값을 할당하는 코드가 존재하기전까지는 접근할 수 없다.
 * 그리고 값을 할당하기전까지 접근할 수 없는 구역을 TDZ(Time Dead Zone)라고 부른다.
 * let foo;
 * ... 로직들     foo의 TDZ
 * ... 로직들     foo의 TDZ
 * console.log(foo); foo의 TDZ
 * foo = 1
 */
console.log(foo);  // result => error: 초기화 에러
let foo = 1;
