class People {
  public name: string;
  public gender: string;
  private age: number; // NOTE: age는 private 속성으로 클래스 내부에서만 사용이 가능하다.

  constructor({name, gender, age}: { name: string, gender: string, age: number}) {
    this.gender = gender;
    this.age = age;
    this.name = name;
  }
}

const 철수 = new People({name: '철수', gender: 'man', age: 21});
console.log(철수.name);   // result: 철수
console.log(철수.gender); // result: man
// console.log(철수.age);    // Error => private 속성이므로 클래스 외부에서는 접근이 불가능하다.
