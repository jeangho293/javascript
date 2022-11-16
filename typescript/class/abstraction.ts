// NOTE: TV 라는 개념을 하나의 객체로 추상화하였다.
class TV {
  public brand: string;
  public price: number;
  public volume: number;

  constructor({brand, price}: {brand: string, price: number}) {
    this.brand = brand;
    this.price = price;
    this.volume = 0;
  }

  volumeUp() {
    return ++this.volume;
  }

  volumeDown() {
   if (this.volume !== 0) {
     return --this.volume;
   }
  }
}

const samsungTV = new TV({brand: 'samsung', price: 1200000});
console.log(samsungTV) // TV { brand: 'samsung', price: 1200000, volume: 0 }
samsungTV.volumeUp();  // volume: 1
samsungTV.volumeUp();  // volume: 2
samsungTV.volumeUp();  // volume: 3
console.log(samsungTV.volume); // volume: 3
samsungTV.volumeDown();  // volume: 2
samsungTV.volumeDown();  // volume: 1
console.log(samsungTV.volume); // result: 1


