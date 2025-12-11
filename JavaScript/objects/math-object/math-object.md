# 자바스크립트 `Math` 객체의 주요 메서드

> Math 객체는 자바스크립트의 내장 객체 중 하나로, 수학에서 사용하는 다양한 연산을 간단하게 처리할 수 있도록 도와준다. 절댓값, 최댓값, 제곱근, 거듭제곱 등의 기본적인 연산은 물론이고, 삼각 함수와 로그 계산 같은 고급 연산도 가능하다. 이 글에서는 자주 사용되는 Math 객체의 주요 메서드들과 각각의 사용 예제를 정리해본다.

---

## 절댓값 (Absolute Value)

`Math.abs(x)` 메서드는 숫자 `x`의 **절댓값(absolute value)**을 반환한다.

절댓값은 숫자의 부호를 무시하고 크기만 반환하는 값이다. 음수는 양수로 변환되고, 양수는 그대로 반환된다.

### 예제

```jsx
console.log(Math.abs(-10)); // 출력: 10
console.log(Math.abs(10)); // 출력: 10
console.log(Math.abs(0)); // 출력: 0
```

### 활용

절댓값은 거리 계산이나 값의 차이를 비교할 때 유용하다.

```jsx
const difference = Math.abs(10 - 25); // 두 값의 차이의 절댓값
console.log(difference); // 출력: 15
```

---

## 최댓값 (Maximum Value)

`Math.max` 메서드는 여러 숫자 중 **가장 큰 값**을 반환한다.

여러 개의 인수를 전달받아 비교하며, 반환 값은 가장 큰 숫자다.

### 예제

```jsx
console.log(Math.max(2, -1, 4, 5, 0)); // 출력: 5
console.log(Math.max(10, 50, 30)); // 출력: 50
```

### 배열에서 최댓값 찾기

배열의 최댓값을 구하려면 **스프레드 연산자**를 사용할 수 있다.

```jsx
const numbers = [3, 7, 1, -5, 4];
console.log(Math.max(...numbers)); // 출력: 7
```

---

## 최솟값 (Minimum Value)

`Math.min` 메서드는 여러 숫자 중 **가장 작은 값**을 반환한다.

`Math.max`와 동작 방식은 동일하지만, 반환 값은 최솟값이다.

### 예제

```jsx
console.log(Math.min(2, -1, 4, 5, 0)); // 출력: -1
console.log(Math.min(10, 50, 30)); // 출력: 10
```

### 배열에서 최솟값 찾기

배열의 최솟값도 `Math.min`과 스프레드 연산자를 이용해 구할 수 있다.

```jsx
const numbers = [3, 7, 1, -5, 4];
console.log(Math.min(...numbers)); // 출력: -5
```

---

## 거듭제곱 (Exponentiation)

`Math.pow(x, y)` 메서드는 숫자 `x`를 `y`번 거듭제곱한 결과를 반환한다.

예를 들어, `Math.pow(2, 3)`은 `2 * 2 * 2`를 계산한 값이다.

### 예제

```jsx
console.log(Math.pow(2, 3)); // 출력: 8 (2의 3승)
console.log(Math.pow(5, 2)); // 출력: 25 (5의 제곱)
```

---

## 제곱근 (Square Root)

`Math.sqrt(x)` 메서드는 숫자 `x`의 **제곱근(square root)**을 반환한다.

제곱근은 어떤 숫자를 제곱했을 때 원래 숫자가 되는 값이다.

### 예제

```jsx
console.log(Math.sqrt(25)); // 출력: 5 (5 * 5 = 25)
console.log(Math.sqrt(49)); // 출력: 7 (7 * 7 = 49)
console.log(Math.sqrt(2)); // 출력: 1.414... (2의 제곱근)
```

### 주의

제곱근의 대상이 음수라면 `NaN`이 반환된다.

```jsx
console.log(Math.sqrt(-4)); // 출력: NaN
```

---

## 반올림 (Rounding)

`Math.round(x)` 메서드는 숫자 `x`를 반올림하여 가장 가까운 정수를 반환한다.

소수점 부분이 `0.5` 이상이면 **올림**, 그렇지 않으면 **내림** 처리된다.

### 예제

```jsx
console.log(Math.round(2.3)); // 출력: 2
console.log(Math.round(2.5)); // 출력: 3
console.log(Math.round(-2.7)); // 출력: -3
```

---

## 버림 (Floor)과 올림 (Ceiling)

- **버림 (`Math.floor`)**: 숫자의 소수점 아래를 버리고, 가장 가까운 정수로 내린다.
- **올림 (`Math.ceil`)**: 소수점 아래를 올려서, 가장 가까운 정수로 올린다.

### 예제

```jsx
console.log(Math.floor(2.8)); // 출력: 2
console.log(Math.floor(-2.8)); // 출력: -3

console.log(Math.ceil(2.2)); // 출력: 3
console.log(Math.ceil(-2.2)); // 출력: -2
```

---

## 난수 생성 (Random Numbers)

`Math.random()` 메서드는 **0 이상 1 미만의 난수**를 반환한다.

난수는 매번 다른 값으로 생성되며, 특정 범위의 값이 필요할 때 변형해서 사용할 수 있다.

### 예제

```jsx
console.log(Math.random()); // 예: 0.4567839043
console.log(Math.random()); // 예: 0.8972345321
```

### 특정 범위의 난수 생성

1부터 10 사이의 정수를 생성하려면 아래와 같이 작성한다.

```jsx
const randomInt = Math.floor(Math.random() * 10) + 1;
console.log(randomInt); // 1~10 사이의 정수
```

---

## 그리고...

이뿐만 아니라 **삼각 함수 계산**이나 **로그 계산** 같은 고급 연산도 가능하다.

더 자세히 알고 싶다면 [MDN 문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Math)를 참고하자.

---

## 요약

> Math.abs(x): 숫자 x의 절댓값을 반환.Math.max(...values): 여러 값 중 최댓값을 반환.Math.min(...values): 여러 값 중 최솟값을 반환.Math.pow(x, y): 숫자 x의 y제곱을 반환.Math.sqrt(x): 숫자 x의 제곱근을 반환.Math.round(x): 숫자 x를 반올림한 값을 반환.Math.floor(x) / Math.ceil(x): 숫자 x를 각각 버림/올림.Math.random(): 0 이상 1 미만의 난수를 반환.

`Math` 객체는 수학 연산을 효율적으로 처리할 수 있는 유용한 도구다. 주요 메서드들을 이해하고 필요할 때마다 적절히 활용하자.
