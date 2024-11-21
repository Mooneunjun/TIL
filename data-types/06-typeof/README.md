# typeof 연산자

> 자바스크립트를 다루다 보면 내가 사용하는 값이나 변수의 자료형이 무엇인지 확인해야 할 때가 많다. 자바스크립트는 느슨한 자료형(loosely-typed) 언어라서 변수의 자료형이 자동으로 결정되는데, typeof 연산자를 사용하면 이 값이 어떤 자료형인지 쉽게 확인할 수 있다. typeof는 값을 판별해 자료형을 문자열로 반환하며, 숫자, 문자열, 불린 등 다양한 자료형을 확인할 때 유용하다.

---

### `typeof` 연산자 기본 사용법

`typeof` 연산자는 **`typeof`라는 키워드 뒤에 값을 입력**하면, 그 값의 자료형을 문자열로 반환한다. 예를 들어 숫자, 문자열, 불린과 같은 자료형은 `typeof`로 간단하게 확인할 수 있다.

```jsx
console.log(typeof 50); // "number"
console.log(typeof "Hello JS"); // "string"
console.log(typeof false); // "boolean"
```

자바스크립트는 불린, 숫자, 문자열 등의 기본 자료형을 다룰 때, `typeof`로 어떤 값인지 쉽게 확인할 수 있도록 해 준다. **`typeof`가 반환하는 값은 항상 문자열**이라는 점도 기억해 두자.

---

### 숫자와 문자열을 구분하기

`typeof` 연산자는 숫자와 문자열의 자료형을 확실히 구분해 준다. 특히 자바스크립트에서는 숫자를 표현할 때 **정수와 소수를 구분하지 않고** 모두 `number`로 인식한다는 특징이 있다. 다음 예시를 통해 숫자와 문자열을 `typeof`로 구분해 보자.

```jsx
console.log(typeof 42); // "number" (정수)
console.log(typeof 3.1415); // "number" (자바스크립트에서 정수와 소수는 구분하지 않음)
console.log(typeof "42"); // "string" (따옴표로 감싼 숫자는 문자열로 취급)
console.log(typeof `42`); // "string" (백틱을 사용해도 문자열로 취급)
```

여기서 자바스크립트는 숫자(`number`)와 문자열(`string`)을 확실하게 구분해 준다. **숫자는 `number`**, **따옴표나 백틱으로 감싸진 값은 `string`**으로 인식한다는 점이 중요하다.

---

### 변수와 함수의 자료형 확인하기

`typeof`는 값뿐만 아니라 **변수**나 **함수**의 자료형도 확인할 수 있다. 변수의 자료형은 할당된 값에 따라 다르게 나오며, 함수는 **`function`**이라는 특별한 자료형을 가진다. 아래 예제에서 확인해 보자.

```jsx
let greeting = "Hello, world!";
function displayGreeting() {
  return greeting;
}

console.log(typeof greeting); // "string" (greeting 변수에 문자열이 담겨 있음)
console.log(typeof displayGreeting); // "function" (displayGreeting은 함수이므로 "function" 출력)
```

위 예제에서 `greeting`은 문자열이므로 **`string`**이 반환되고, `displayGreeting`은 함수이므로 **`function`**이 반환된다. `typeof`를 사용하면 변수와 함수의 자료형도 쉽게 확인할 수 있다.

---

### 주의해야 할 부분: `typeof`의 우선순위와 연산 순서

`typeof`는 연산자이기 때문에, **다른 연산자와 함께 사용될 때 연산 순서에 주의**해야 한다. 자바스크립트에서 `typeof` 연산자는 **산술 연산자보다 우선순위가 높기 때문에, 다른 연산과 함께 사용될 때 예상과 다른 결과가 나올 수 있다**. 예제를 통해 확인해 보자.

```jsx
console.log(typeof "JavaScript" + " Language"); // "string Language"
console.log(typeof 7 - 2); // NaN (Not a Number)
```

### 우선순위 문제 이해하기

> 첫 번째 줄: "JavaScript"의 자료형은 string이고, typeof 연산자가 먼저 실행되어 \*typeof "JavaScript"가 "string"으로 반환된다. 그 결과 "string" + " Language"가 되면서 문자열 "string Language"가 출력된다.

> 두 번째 줄: typeof 7이 먼저 실행되어 "number" 문자열이 반환되고, 이어서 "number" - 2가 실행되면서 NaN이 발생한다. NaN은 숫자가 아닌 값을 대상으로 산술 연산을 수행하려 할 때 나타나는 값으로, 이 경우는 문자열 "number"와 숫자 2의 뺄셈이 불가능하기 때문에 NaN이 반환된 것이다.

---

### 우선순위 문제 해결하기: 괄호로 연산 순서 지정하기

이러한 우선순위 문제는 **괄호를 이용해 연산 순서를 명확하게 지정**하면 해결할 수 있다. 괄호를 사용해 우리가 원하는 순서대로 연산이 이루어지도록 만들어 보자.

```jsx
console.log(typeof ("JavaScript" + " Language")); // "string" (문자열을 합친 후 자료형 확인)
console.log(typeof (7 - 2)); // "number" (산술 연산을 먼저 수행하고 자료형 확인)
```

위처럼 괄호로 묶으면 **`("JavaScript" + " Language")`가 먼저 연산되어 "JavaScript Language"가 되고, 이후 `typeof`가 적용되어 "string"**이 반환된다. 두 번째 줄도 **`(7 - 2)`가 먼저 연산되어 숫자 `5`가 되고, `typeof`가 적용되어 "number"**가 반환된다. **괄호를 사용해 연산 순서를 명확히 설정하는 것은 복잡한 식을 다룰 때 유용한 팁**이다.

---

### 복잡한 자료형 확인 예제: 배열과 객체

자바스크립트에서 `typeof`를 사용할 때 주의해야 할 또 다른 부분은 배열과 객체다. 배열과 객체는 둘 다 `object`로 반환된다. 특히 배열의 경우 `object`로 나오기 때문에 이를 정확히 구분하려면 **Array.isArray()** 같은 추가적인 방법을 사용해야 한다.

```jsx
let arr = [1, 2, 3];
let obj = { name: "John", age: 30 };

console.log(typeof arr); // "object" (배열도 객체로 취급됨)
console.log(typeof obj); // "object" (객체는 당연히 "object"로 출력)
console.log(Array.isArray(arr)); // true (배열인지 정확히 확인할 때는 Array.isArray 사용)
```

`typeof`는 배열과 객체를 구분하지 않지만, `Array.isArray()`를 사용하면 배열 여부를 정확히 확인할 수 있다.

---

### 요약

> typeof는 값의 자료형을 문자열로 반환해 준다. 숫자는 number, 문자열은 string, 불린 값은 boolean으로 확인할 수 있다.숫자형은 정수와 소수를 구분하지 않고 모두 number로 표시되며, 따옴표나 백틱으로 감싼 값은 문자열(string)로 처리된다.typeof는 연산자이므로 다른 산술 연산자와 함께 사용할 때 우선순위를 고려해 괄호를 사용하여 연산 순서를 명확히 설정해야 한다.배열과 객체는 둘 다 object로 반환되므로, 배열인지 확인할 때는 Array.isArray()를 활용해야 한다.
>
> `typeof` 연산자는 자바스크립트의 자료형을 이해하고, 코드의 동작 방식을 파악하는 데 매우 중요한 도구다. 이를 통해 값을 더 정확하게 다루고, 자료형에 따른 예외 상황도 효과적으로 처리할 수 있다.
