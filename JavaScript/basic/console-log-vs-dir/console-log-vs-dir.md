> JavaScript의 console 객체는 다양한 디버깅 메서드를 제공한다. 그중 console.log와 console.dir 메서드는 값을 출력하는 데 자주 사용되지만, 출력 방식과 초점이 다르다. 아래에서 두 메서드의 차이점을 정리하고, 다양한 예제를 통해 비교해 보았다.

---

### 1. `console.log`와 `console.dir`의 공통점

- 두 메서드 모두 콘솔에 값을 출력하는 역할을 한다.
- 파라미터로 전달받은 값을 출력한다.

---

### 2. `console.log`와 `console.dir`의 차이점

!https://velog.velcdn.com/images/moon_dev/post/bdb6c6d1-5d7e-4610-a3ca-80b696a05a54/image.png

### **1. 출력하는 자료형의 차이**

`console.log`는 전달받은 값을 **기본 자료형**의 형태로 출력한다.

`console.dir`은 전달받은 값을 **문자열 표시 형식**으로 출력한다.

```jsx
const str = "Hello";
const num = 123;
const bool = true;

console.log("--- str ---");
console.log(str); // Hello
console.dir(str); // "Hello"

console.log("--- num ---");
console.log(num); // 123
console.dir(num); // 123

console.log("--- bool ---");
console.log(bool); // true
console.dir(bool); // true
```

---

### **2. log는 값 자체에, dir은 객체의 속성에 초점**

- **`console.log`**: 전달받은 값 자체를 출력.
- **`console.dir`**: 객체의 **속성**에 초점을 맞춰 출력.객체나 함수의 속성을 확인할 때 `console.dir`이 더 유용하다.

```jsx
const obj = {
  name: "Sample",
  email: "sample@example.com",
};

function func() {
  console.log("This is a function!");
}

console.log("--- obj ---");
console.log(obj); // {name: 'Sample', email: 'sample@example.com'}
console.dir(obj); // {name: 'Sample', email: 'sample@example.com'}

console.log("--- func ---");
console.log(func); // This is a function!
console.dir(func); // Function: func (속성 출력 가능)
```

---

### **3. log는 여러 값을 출력, dir은 첫 번째 값만 출력**

- **`console.log`**: 여러 값을 쉼표로 구분해 전달하면, 모두 출력.
- **`console.dir`**: 첫 번째 값만 출력.

```jsx
const str = "Hello";
const num = 123;

console.log(str, num); // Hello 123
console.dir(str, num); // "Hello" (첫 번째 값만 출력)
```

---

### **4. DOM 객체 출력 방식**

DOM 객체를 출력할 때 두 메서드의 차이가 가장 두드러진다.

- **`console.log`**: DOM 요소를 **HTML 태그 형태**로 출력.
- **`console.dir`**: DOM 요소를 **객체 형태**로 출력.

```jsx
const myDOM = document.body;

console.log(myDOM); // <body>...</body>
console.dir(myDOM); // 객체로 출력, 모든 속성 표시 가능
```

---

### 요약

| **특징**              | **`console.log`**                   | **`console.dir`**              |
| --------------------- | ----------------------------------- | ------------------------------ |
| **출력 초점**         | 값 자체에 초점                      | 객체의 속성에 초점             |
| **여러 값 출력 가능** | 지원함                              | 첫 번째 값만 출력              |
| **DOM 출력**          | HTML 태그 형태 출력                 | 객체 형태 출력                 |
| **유용한 경우**       | 기본 자료형이나 값 자체를 확인할 때 | 객체 속성이나 DOM 요소 탐색 시 |

---

### 활용 방법

- **`console.log`**: 값 자체를 확인하고 싶을 때 사용.
- **`console.dir`**: 객체의 속성이나 DOM 요소를 탐색하고 싶을 때 사용.

두 메서드의 차이를 이해하고 상황에 맞게 선택적으로 사용하면 디버깅을 더 효과적으로 할 수 있다.
