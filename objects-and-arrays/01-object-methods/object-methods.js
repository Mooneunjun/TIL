// 객체에 메서드를 정의하고 사용하는 예제

// greetings 객체: 여러 메서드를 정의한 예제
const greetings = {
  sayHello: function () {
    console.log("Hello!");
  },
  sayGoodbye: function () {
    console.log("Goodbye!");
  },
  sayHelloTo: function (name) {
    console.log(`Hello, ${name}!`);
  },
};

// 메서드 호출 예제
greetings.sayHello(); // "Hello!"
greetings.sayGoodbye(); // "Goodbye!"
greetings.sayHelloTo("Alice"); // "Hello, Alice!"

// console.log() 메서드와의 비교
console.log("This is a console message"); // 'console' 객체의 메서드 'log'

// 사각형과 삼각형 객체 예제
const rectangle = {
  width: 10,
  height: 20,
  getArea: function () {
    return this.width * this.height;
  },
};

const triangle = {
  base: 10,
  height: 20,
  getArea: function () {
    return (this.base * this.height) / 2;
  },
};

// 사각형과 삼각형 넓이 계산 예제
console.log(`Rectangle area: ${rectangle.getArea()}`); // Rectangle area: 200
console.log(`Triangle area: ${triangle.getArea()}`); // Triangle area: 100
