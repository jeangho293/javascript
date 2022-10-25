class Shape {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getArea() {
    return this.x * this.y;
  }

}

class Rectangle extends Shape{
  constructor(x, y) {
    super(x, y);
  }
}

class Triangle extends Shape{
  constructor(x, y) {
    super(x, y);
  }
}

// NOTE: 사각형의 넓이는 세로 * 가로
const rectangle = new Rectangle(2,5);
console.log('rect='+rectangle.getArea());

// NOTE: 삼각형의 넓이는 세로 * 가로 / 2
const triangle = new Triangle(2, 5);
console.log('tri='+triangle.getArea()); // result: 10 으로 shape을 그대로 상속받아왔다...

// TODO: 타입스크립트로 implements 구현