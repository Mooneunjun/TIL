# for…of 반복문

> 자바스크립트에서 배열은 순서대로 인덱스를 가지고 있는 자료구조다. 배열의 이런 특징 덕분에 반복문으로 각 요소를 순회하며 작업하기가 쉽다. 가장 기본적인 반복문인 for문부터, 보다 간결하고 직관적인 for...of까지 다양한 반복문을 활용할 수 있다.

---

### 기본 반복문: `for`

배열을 순회하는 가장 기본적인 방법은 `for`문을 사용하는 것이다. 배열의 인덱스와 `length` 속성을 조합해 배열의 각 요소에 접근할 수 있다.

### 예제: `for`문을 사용한 배열 순회

```jsx
const fruits = ["사과", "바나나", "체리"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
```

**출력 결과**:

```
사과
바나나
체리

```

이 방식은 배열의 인덱스를 다뤄야 할 때 유용하다. 하지만 배열의 길이를 조건식으로 확인하고, 인덱스를 하나씩 증가시키며 요소에 접근해야 하므로 다소 번거롭고 코드가 길어진다.

---

### 간결한 반복문: `for...of`

`for...of`는 배열 같은 **이터러블 객체**를 순회하기 위한 반복문이다. 기존의 `for`문처럼 배열의 길이나 인덱스를 따로 관리할 필요 없이, 배열의 각 요소를 직접 참조할 수 있다.

### `for...of` 기본 구조

```jsx
for (변수 of 배열) {
  // 반복 실행될 동작
}
```

- **변수**: 반복문이 실행될 때 배열의 각 요소가 순차적으로 할당된다.
- **배열**: 순회할 배열.

### 예제: `for...of`를 사용한 배열 순회

```jsx
const fruits = ["사과", "바나나", "체리"];

for (const fruit of fruits) {
  console.log(fruit);
}
```

**출력 결과**:

```
사과
바나나
체리
```

### 장점

1. **코드 간결성**: 배열의 길이나 인덱스를 직접 관리할 필요가 없다.
2. **가독성**: 반복문의 목적이 배열 요소의 순회라는 점이 명확히 드러난다.

`for...of`는 배열의 각 요소를 대상으로 작업을 수행할 때 특히 유용하다. 예를 들어, 각 요소를 출력하거나, 조건에 따라 특정 동작을 수행할 때 코드가 훨씬 간결해진다.

---

### `for...of`와 `for...in`의 차이

자바스크립트에서 `for...in`은 객체의 프로퍼티를 순회하기 위한 반복문이다. 배열도 객체의 일종이므로 `for...in`을 사용할 수 있다. 하지만 배열에는 권장되지 않는다.

### 예제: 배열에서 `for...in` 사용

```jsx
const fruits = ["사과", "바나나", "체리"];

for (const key in fruits) {
  console.log(key, fruits[key]);
}
```

**출력 결과**:

```
0 사과
1 바나나
2 체리

```

`for...in`은 배열의 **인덱스**를 반환한다. 이를 활용해 배열 요소에 접근할 수 있지만, 배열에 추가된 속성까지 순회할 위험이 있다.

### 배열에서 `for...in` 사용의 문제점

```jsx
fruits.customProperty = "추가 속성";

for (const key in fruits) {
  console.log(key);
}
```

**출력 결과**:

```
0
1
2
customProperty
```

`customProperty`는 배열 요소가 아니지만, `for...in` 반복문에 의해 순회된다. 이런 문제는 예기치 못한 동작을 초래할 수 있다. 따라서 배열을 순회할 때는 `for...in` 대신 `for`문이나 `for...of`를 사용하는 것이 더 적합하다.

---

### 배열이 객체인 점을 활용한 팁

배열도 자바스크립트의 객체로 간주되므로, `for...in`을 통해 순회하는 것이 가능하다. 하지만 이 방식은 안전하지 않다. 특히 배열의 메서드나 `length`와 같은 속성까지 순회 대상에 포함될 수 있기 때문이다.

### 권장되는 방식

배열을 다룰 때는 `for`문이나 `for...of`를 사용하는 것이 안전하다. 이 둘의 차이는 다음과 같다:

1. **배열의 인덱스를 활용**하고 싶다면 `for`문을 사용한다.
2. **배열의 각 요소를 순회**하는 것이 목적이라면 `for...of`를 사용한다.

---

### 요약

> for문은 배열의 길이나 인덱스를 직접 다뤄야 할 때 유용하다.for...of는 배열의 각 요소를 순회하기에 가장 적합하며, 간결하고 가독성이 높다.for...in은 배열에서 사용할 경우, 배열의 속성까지 순회할 위험이 있으므로 권장되지 않는다.

배열 반복문을 사용할 때는 **상황에 맞는 반복문**을 선택해야 한다. 간단한 배열 순회 작업에는 `for...of`를, 인덱스가 필요한 작업에는 `for`문을, 객체의 프로퍼티를 순회할 때는 `for...in`을 사용하는 것이 올바른 접근이다.