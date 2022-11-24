function setTime(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`${time} 후에 실행되었습니다.`);
      resolve()
    }, time)

  })
}

async function foo() {
  console.log(1);  // 1
  await setTime(1000); // 2, 만약 await가 없다면 비동기 동작으로 마지막에 출력이 되게된다.
  console.log(2); // 3
}

foo();
