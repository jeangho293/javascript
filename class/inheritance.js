class Dog {
  constructor(name) {
    this.legs = 4;
    this.ears = 2;
    this.name = name;
    this.owner = 'Theo'
  }
}

class Cat {
  constructor(name) {
    this.legs = 4;
    this.ears = 2;
    this.name = name;
    this.eatting = 'mouse'
  }
}

class Fox {
  constructor(name) {
    this.legs = 4;
    this.ears = 2;
    this.name = name;
    this.lifeLocatoin = 'desert'
  }
}

// NOTE: 이 외의 동물들.... 중복되는 property들이 있는데 코드 생략을 위해 상속 기능을 사용한다.
// NOTE: legs, ears, name 이 각각 중복되는 property
class Animal {
  constructor(name) {
    this.legs = 4;
    this.ears = 2;
    this.name = name;
  }
}

class _Dog extends Animal {
  constructor(name) {
    super(name);
    this.owner = 'Theo'
  }
}

class _Cat extends Animal {
  constructor(name) {
    super(name);
    this.eatting = 'mouse'
  }
}

class _Fox extends Animal {
  constructor(name) {
    super(name);
    this.lifeLocation = 'desert'
  }
}

const fox = new Fox('fox');
const _fox = new _Fox('fox');

console.log(fox);
console.log(_fox);