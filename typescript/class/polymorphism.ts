class Shape {
  public width: number;
  public height: number;

  // NOTE: 일반적으로 넓이를 구하는 공식은 가로 * 세로
  public getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height
  }
}

// NOTE: 다형성을 위한 명렁어는 implements
class Triangle implements Shape {
  public width: number;
  public height: number;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // NOTE: 오버라이딩으로 삼각형의 넓이를 구하는 공식인 가로 * 세로 / 2 로 재정의해준다.
  public getArea(): number {
    return this.height * this.width / 2;
  }

}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea()); // result: 50

const triangle = new Triangle(10, 5);
console.log(triangle.getArea()); // result: 25

