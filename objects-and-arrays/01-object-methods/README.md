> 객체는 연관성 있는 여러 값을 묶을 때 유용하지만, 함수도 함께 묶어 둘 수 있다는 점이 유용하다. 객체의 프로퍼티는 어떤 자료형이든 저장할 수 있기 때문에 함수 역시 객체의 프로퍼티 값으로 저장할 수 있는데, 이때 객체 내부에 함수가 포함된 프로퍼티를 메서드(Method)라고 부른다.

### 메서드 정의하기

객체에 메서드를 정의하려면, 함수 표현식을 사용해 프로퍼티 값에 함수를 할당하면 된다. 일반 함수와는 달리, 함수 이름을 따로 적지 않아도 되고 프로퍼티 네임이 함수의 이름 역할을 대신해준다.

```jsx
const greetings = {
  sayHello: function () {
    console.log("Hello!");
  },
  sayGoodbye: function () {
    console.log("Goodbye!");
  },
};

// 메서드 호출
greetings.sayHello(); // "Hello!"
greetings.sayGoodbye(); // "Goodbye!"
```

이렇게 `greetings` 객체에 두 개의 메서드인 `sayHello`와 `sayGoodbye`가 정의된 것이다. 메서드는 일반 프로퍼티에 접근하듯이 **점 표기법**을 사용해 접근하고, 함수 호출처럼 괄호를 열고 닫아 사용한다.

### 파라미터가 있는 메서드

메서드에 파라미터가 필요한 경우에는 함수처럼 소괄호 안에 파라미터를 정의하면 된다. 호출할 때는 파라미터 값을 괄호 안에 넣어 전달하면 된다.

```jsx
const greetings = {
  sayHello: function (name) {
    console.log(`Hello, ${name}!`);
  },
};

// 메서드 호출
greetings.sayHello("Alice"); // "Hello, Alice!"
```

### 메서드 사용의 의미

함수를 객체 내부의 메서드로 정의해두면 그 객체와 관련된 고유한 동작처럼 사용할 수 있다. 예를 들어, `console.log()`에서 `log`는 `console` 객체의 메서드로, 콘솔 출력과 관련된 고유한 동작을 수행하도록 설계된 것이다.

```jsx
console.log("This is a console message"); // 'console' 객체의 메서드 'log'
```

메서드는 점 표기법 외에도 **대괄호 표기법**으로도 접근할 수 있다. 다만, 대괄호 표기법을 사용할 때는 소괄호를 열어 함수 호출을 하는 순서에 유의해야 한다.

```jsx
greetings["sayHello"]("Alice"); // "Hello, Alice!"
```

### 메서드를 활용한 객체의 고유한 동작 표현

메서드는 객체의 고유한 동작을 수행하는 함수로서 의미가 있다. 예를 들어, 사각형과 삼각형 객체가 각각 자신의 넓이를 구하는 메서드를 가질 때, 같은 이름의 메서드라도 각 객체에 맞는 동작을 수행할 수 있다.

```jsx
const rectangle = {
  width: 10,
  height: 20,
  getArea: function () {
    return rectangle.width * rectangle.height;
  },
};

const triangle = {
  witdh: 10,
  height: 20,
  getArea: function () {
    return (triangle.witdh * triangle.height) / 2;
  },
};

console.log(`Rectangle area: ${rectangle.getArea()}`); // Rectangle area: 200
console.log(`Triangle area: ${triangle.getArea()}`); // Triangle area: 100
```

여기서 `getArea`라는 이름의 메서드가 각각의 객체에 정의되어 있지만, 메서드를 호출할 때는 해당 객체의 고유한 동작으로 처리되므로 이름 충돌이나 복잡한 조건 없이 사용이 가능하다.

### 요약

> 메서드를 사용하는 이유
>
> - **고유한 동작**을 수행할 수 있다. 객체의 고유한 행동을 나타내므로, 의미적으로 직관적이다.
> - **이름 중복**을 피할 수 있다. 객체 내부에서만 사용하는 메서드이므로, 전역적으로 이름이 충돌하지 않는다.
> - **코드 가독성**이 높아진다. 객체와 관련된 함수들을 그 객체 내부에 정의하여 코드의 의미가 더욱 명확해진다.
