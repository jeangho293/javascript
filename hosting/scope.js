/**
 * 호이스팅은 블록 스코프 단위로 이루어진다.
 */

let text = '문자입니다.'

function foo() {
  console.log(text);
  text = '문짜';         // 만약 그냥 `text = 문짜`이면...?
}

foo() // result ==> 호이스팅에 의해서 초기화 에러가 발생한다.