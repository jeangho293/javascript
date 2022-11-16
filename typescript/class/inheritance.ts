interface PersonInterface {
  name: string;
  age: number;
}

interface AdultInterface extends PersonInterface {
  job: string;
  married: boolean;
}

interface TeenagerInterface extends PersonInterface {
  school: string;
}

// NOTE: Person 객체를 상속받는다.
class Person {
  public name: string;
  public age: number;
}

// NOTE: 성인 이라는 개념은 결국 사람이라는 개념의 범주안에 속한다. 그러므로 부모-사람, 자식-성인 과 마찬가지다.
class Adult extends Person {
  public job: string;
  public married: boolean;

  constructor(args: AdultInterface) {
    super();
    if (args) {
      this.name = args.name;  // Person 클래스가 가지고 있는 속성
      this.age = args.age;    // Person 클래스가 가지고 있는 속성
      this.job = args.job;
      this.married = args.married;
    }
  }
}

class Teenager extends Person {
  public school: string;

  constructor(args: TeenagerInterface) {
    super();
    if (args) {
      this.school = args.school;
      this.age = args.age;    // Person 클래스가 가지고 있는 속성
      this.name = args.name;  // Person 클래스가 가지고 있는 속성
    }
  }
}

const adult = new Adult({name: '철수', age: 21, job: 'programmer', married: false});
const teenager = new Teenager({name: '영희', age: 18, school: 'Seoul highSchool'});