# 유사 배열(Array-Like Object)

> 유사 배열, 영어로 Array-Like Object는 이름 그대로 배열과 유사한 구조를 가진 객체를 의미한다. 배열처럼 보이지만, 완전한 배열은 아니다. HTML 태그를 다룰 때 자주 마주치는 HTMLCollection이나 NodeList 같은 객체가 대표적인 유사 배열이다.

---

### 유사 배열의 특징

유사 배열이라고 부르기 위해 갖춰야 할 조건과 특징은 다음과 같다.

---

### 1. 숫자 형태의 인덱싱이 가능하다

유사 배열은 배열처럼 **0부터 시작하는 숫자 형태의 인덱스**를 통해 요소에 접근할 수 있다.

```jsx
const arrayLike = {
  0: "red",
  1: "blue",
  2: "green",
  length: 3,
};

console.log(arrayLike[0]); // "red"
console.log(arrayLike[1]); // "blue"
```

인덱싱이 가능하다는 점에서 배열과 비슷해 보인다.

---

### 2. `length` 프로퍼티를 가진다

배열은 `length` 프로퍼티를 통해 요소의 개수를 확인할 수 있다. 유사 배열도 이와 마찬가지로 `length` 프로퍼티를 가져야 한다.

```jsx
console.log(arrayLike.length); // 3
```

만약 숫자 형태의 인덱스가 있어도 `length` 프로퍼티가 없다면, 그것은 유사 배열이 아니라 **숫자 형태의 키를 가진 일반 객체**로 볼 수 있다.

---

### 3. 배열의 기본 메서드를 사용할 수 없다

유사 배열은 배열과 비슷하지만, 배열이 아니기 때문에 **배열의 기본 메서드(예: `push`, `splice`)**를 사용할 수 없다.

```jsx
try {
  arrayLike.push("yellow"); // Error: arrayLike.push is not a function
} catch (e) {
  console.log(e.message);
}
```

이 때문에 유사 배열의 요소를 수정하거나 삭제하는 작업은 배열보다 더 까다롭다.

---

### 4. `Array.isArray(유사배열)`은 `false`를 반환한다

유사 배열은 배열처럼 보이지만 배열은 아니기 때문에, `Array.isArray` 메서드를 사용하면 `false`가 반환된다.

(`Array` 객체의 `isArray` 메소드는 파라미터로 전달한 값이 배열인지 아닌지를 평가해서 그 결과를 불린 형태의 값으로 리턴해주는 메소드이다.)

```jsx
console.log(Array.isArray(arrayLike)); // false
```

---

### 다양한 유사 배열의 사례

유사 배열은 다양한 형태로 존재한다. 예를 들어:

1. **HTMLCollection**
   - `getElementsByClassName`이나 `getElementsByTagName`으로 선택한 요소들의 집합.
2. **NodeList**
   - `querySelectorAll`로 선택한 요소들의 집합.
3. **함수의 `arguments` 객체**
   - 함수 내부에서 전달받은 인수들을 유사 배열로 관리.

```jsx
function exampleFunction() {
  console.log(arguments); // 유사 배열 형태
  console.log(arguments[0]); // 첫 번째 인수
  console.log(arguments.length); // 인수의 개수
}

exampleFunction("red", "blue", "green");
// 출력:
// { 0: "red", 1: "blue", 2: "green", length: 3 }
// "red"
// 3
```

---

### 유사 배열을 배열처럼 다루기

유사 배열은 배열 메서드를 사용할 수 없지만, **배열로 변환**하면 배열 메서드를 활용할 수 있다.

### 1. `Array.from`을 사용

```jsx
const array = Array.from(arrayLike);
console.log(array); // ["red", "blue", "green"]
console.log(Array.isArray(array)); // true
```

### 2. 스프레드 연산자 사용

```jsx
const array = [...arrayLike];
console.log(array); // ["red", "blue", "green"]
```

---

### 주의사항

1. **유사 배열마다 특징이 다르다**
   - 예를 들어, `HTMLCollection`은 `for...of` 루프를 사용할 수 있지만, `arguments` 객체는 사용할 수 없다.
2. **직접 구현 가능**
   - 유사 배열을 직접 만들어 배열처럼 동작하게 하거나, 특별한 메서드를 추가해 활용할 수도 있다.

---

### 요약

- 유사 배열은 배열과 비슷하지만 완전히 동일하지 않은 객체를 의미한다.
- 주요 특징:
  1. 숫자 형태의 인덱싱 가능.
  2. `length` 프로퍼티를 가짐.
  3. 배열 메서드를 사용할 수 없음.
  4. `Array.isArray` 결과가 `false`.
- 다양한 유사 배열을 다룰 때는 배열로 변환해 작업을 쉽게 처리할 수 있다.

유사 배열의 특징을 이해하면, HTMLCollection이나 NodeList 같은 객체를 더 효율적으로 다룰 수 있을 것이다!
