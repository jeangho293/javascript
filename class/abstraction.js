const person1 = {
  name: 'Theo',
  age: '20',
  sayMyName: () => {
    console.log('hi...?');
  }
};

const person2 = {
  name: 'Lucy',
  age: '21',
  sayMyName: () => {
    console.log('hi...?');
  }
};

const person3 = {
  name: 'king',
  age: '40',
  sayMyName: () => {
    console.log('hi...?');
  }
}

// NOTE: person1, person2, person3가 가지는 property 동일한데 일일이 객체를 만들어나가기엔 유지 보수 및 개발 코스트가 상당하다..
// NOTE: 그렇기에 Person class로 추상화시킨다. 즉 공통으로 지니고있는 property, method를 정리할 수 있다.
console.log(person1);
console.log(person2);
person3.sayMyName()

console.log('-------------Class----------------');

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayMyName() {
    console.log(this.name);
  }
}

const _person1 = new Person('Theo', 20);
const _person2 = new Person('Lucy', 21);
const _person3 = new Person('king', 40);

console.log(_person1);
console.log(_person2);
_person3.sayMyName()

