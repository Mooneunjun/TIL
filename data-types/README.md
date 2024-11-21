# 자료형(Data Types) 이해하기

> 프로그래밍을 시작하기에 앞서 자료형을 이해하는 것은 굉장히 중요한 부분이라고 할 수 있다. 자료형이란 컴퓨터에서 사용되는 값의 유형을 의미한다. JavaScript에서는 다양한 자료형을 사용할 수 있는데, 이번 글에서는 숫자(Number), 문자열(String), 불린(Boolean) 자료형에 대해 정리해 보았다.

## 프로그래밍이란? 컴퓨터 = 복잡한 계산기

프로그래밍은 컴퓨터를 통해 **복잡한 계산을 하는 것**이라고 생각할 수 있다. 계산기는 **숫자(Number)**로 계산을 하지만, JavaScript로 프로그래밍할 때는 훨씬 다양한 값들을 사용할 수 있다. 이러한 값들의 유형을 **자료형(Data type)**이라고 부른다.

```jsx
"자료형"; // 문자열 (String)
16; // 숫자 (Number)
false[(3, 6, 9)]; // 불린 (Boolean) // 배열 (Array)
```

자료형의 종류를 이해하는 것은 프로그래밍을 할 때 중요한 기초가 된다. 우선, 가장 기본적인 자료형인 **숫자(Number)**부터 살펴보자.

## 1. 숫자(Number)

JavaScript에서 숫자 자료형은 크게 두 가지로 나눌 수 있다: **정수(Integer)**와 **소수(Floating Point)**.

- **정수 (Integer)**: 0, -1, 5와 같이 소수점이 없는 수. 음의 정수와 양의 정수, 그리고 0이 포함된다.

```jsx
let positiveInt = 10; // 양의 정수
let negativeInt = -8; // 음의 정수
let zero = 0; // 0
```

이런 **숫자형(Number)** 데이터들은 기본적으로 **사칙연산**이 가능하다.

## 2. 문자열(String)

**문자열**은 문자들이 연결된 값의 집합이다. 영어로 **String**이라고 부르며, 큰따옴표(`"`)나 작은따옴표(`'`)로 감싸서 표현한다.

`”Hello”`, `‘World’`말 그대로 이렇게 큰따옴표나 작은따옴표를 앞뒤로 감싸서 표현하는 형태를 문자열이라고 부른다

```jsx
let greeting = "Hello";
let name = "World";
```

여기서 주의해야 할 점은 **양 끝의 따옴표 모양을 통일**해야 한다는 것이다. 예를 들어, 시작할 때 큰따옴표를 사용했다면, 끝날 때도 큰따옴표로 닫아야 한다. 그렇지 않으면 처음 시작한 따옴표와 동일한 따옴표를 종료 지점으로 계속해서 찾으려고 하는데 경우에 따라서는 **예상치 못한 오류**가 발생할 수 있으니 이런 부분은 주의해서 사용할 필요가 있다.

또한, **문자열(String)**은 **더하기 기호 (`+`)**를 통해 서로 연결할 수 있다.

```jsx
let message = "Hello" + " " + "World"; // "Hello World"
```

!https://velog.velcdn.com/images/moon_dev/post/ec079aff-75d3-4e8d-912f-7192f73923e2/image.png

이처럼 **문자열을 더하는 것**은 숫자를 더하는 것과 다르게, 두 문자열을 **이어붙이는 역할**을 한다. 이 때문에 처음 프로그래밍을 배울 때는 숫자와 문자열을 더하는 방식이 헷갈릴 수 있으니 주의가 필요하다.

## 3. 불린(Boolean)

**불린(Boolean)**은 **참(true)**과 **거짓(false)**을 표현하기 위한 자료형이다. 다른 자료형과는 다르게 **단 두 개의 값만을 가질 수 있다**.

```jsx
let isJavaScriptFun = true;
let isTired = false;
```

불린 값은 주로 **조건문**에서 사용되며, 어떤 조건이 **참인지 거짓인지**를 평가하는 데 활용된다. 예를 들어

```jsx
let isGreater = 10 > 5; // true
let isSmaller = 5 > 10; // false
```

!https://velog.velcdn.com/images/moon_dev/post/72dac0bb-a764-4bd5-aeb0-9fc93be60aab/image.png

`10 > 5`는 **참(true)**이기 때문에 `isGreater`는 `true`가 되고, `5 > 10`은 **거짓(false)**이므로 `isSmaller`는 `false`가 된다.

!https://velog.velcdn.com/images/moon_dev/post/4b6921bf-b1ca-49c8-bac4-7542c2521774/image.png

> 자료형은 프로그래밍의 기초 중의 기초다. 숫자(Number), 문자열(String), 불린(Boolean)은 가장 기본적인 자료형으로, 이를 이해하고 활용하는 것은 앞으로 다양한 프로그래밍 작업을 수행하는 데 매우 중요하다. 특히, 자료형의 특성을 잘 이해해 두면 오류를 줄이고 코드를 더욱 잘 작성할 수 있다. 이제 자료형에 대해 이해했으니, 이를 바탕으로 더 다양한 예제를 만들어 보면서 익숙해져야겠다.

> [Github 정리내용](https://github.com/Mooneunjun/js-study)
