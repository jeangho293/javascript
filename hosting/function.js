/**
 * 익명함수와 선언형 함수의 호이스팅
 */

foo = function () {
  console.log('익명함수 입니다.');
}

function foo() {
  console.log('선언형함수 입니다.');
}

foo() // result ==> ?


/**
 * 선언형 함수는 호이스팅에 의해서 최상단에 코드가 존재하는 것과 마찬가지로 실제 코드실행순서는..
 */
function hostedFoo() {
  console.log('선언적함수 입니다.');
}

hostedFoo = function () {
  console.log('익  명함수 입니다.');
}

hostedFoo();