> 자바스크립트에서 console.log 같은 함수도 사실은 내장 객체인 console의 한 기능이다. 이렇게 자바스크립트는 특정 기능을 수행하기 위한 다양한 내장 객체들을 제공한다.

> 왜냐하면 자바스크립트는 거의 모든 것이 객체로 이루어져 있기 때문이다. 이러한 내장 객체들은 특정 작업을 간단히 처리할 수 있도록 이미 만들어진 도구 세트라고 볼 수 있다.
>
> 그중 하나가 바로 **`Date` 객체**다. 날짜와 시간을 다루는 기능은 자바스크립트에서 꼭 필요한 작업 중 하나인데, 이걸 `Date` 객체로 간편하게 처리할 수 있다.

---

### `Date` 객체의 역할

자바스크립트에서 날짜와 시간은 모두 **`Date` 객체**로 다뤄진다. 현재 시간을 확인하거나 특정 날짜를 표현하고, 시간 간격을 계산하는 것까지 모두 이 객체로 가능하다.

`Date` 객체를 이용하면 복잡한 시간 계산도 한결 간단해지며, 다양한 시간 관련 작업을 효율적으로 처리할 수 있다.

예를 들어 날짜를 문자열로 변환하거나, 특정 시간 차이를 계산하는 것도 모두 이 객체로 해결 가능하다.

---

### `Date` 객체 생성하기

### 1. 현재 날짜와 시간으로 생성

```jsx
const myDate = new Date();
console.log(myDate); // 생성된 순간의 날짜와 시간 출력
```

`new Date()`를 호출하면, **현재 시간을 기준**으로 한 `Date` 객체를 생성한다.

출력값은 실행 환경에 따라 다르다:

- **Node.js 환경**:
  ```jsx
  2024-11-18T13:57:18.970Z
  ```
  > Node.js 환경는 기본적으로 UTC 기준 ISO 8601 형식으로 출력됨.
- **브라우저 콘솔**:
  ```jsx
  Mon Nov 18 2024 22:57:18 GMT+0900 (대한민국 표준시)
  ```
  > 브라우저는 로컬 시간대(KST)를 기준으로 출력함.

---

### 2. 특정 시간을 기준으로 생성 (밀리초 단위)

```jsx
const myDate = new Date(1000);
console.log(myDate); // 1970년 1월 1일 00:00:01 (UTC 기준)
```

- `Date` 생성자에 숫자를 넣으면 **UTC 기준 1970년 1월 1일 0시**에서 지정한 밀리초 만큼의 시간 차이를 나타내는 객체를 만든다.
- 위 예제에서는 1000 밀리초(= 1초)를 기준으로 하므로 `1970-01-01 00:00:01`의 시간을 나타낸다.

---

### 3. 날짜를 문자열로 생성

```jsx
const myDate = new Date("2017-05-18");
console.log(myDate); // Thu May 18 2017 00:00:00 GMT+0900 (Korean Standard Time)
```

- 문자열로 날짜를 지정하면, 해당 날짜의 `Date` 객체를 생성한다.
- 위 코드에서는 `2017년 5월 18일 자정`을 나타낸다.

시간까지 포함하려면 문자열에 `T`와 함께 24시간 표기로 작성한다:

```jsx
const myDate = new Date("2017-05-18T19:11:16");
console.log(myDate); // Thu May 18 2017 19:11:16 GMT+0900 (Korean Standard Time)
```

- `T`는 날짜와 시간을 구분하는 문자로 사용된다.
- 예제에서는 2017년 5월 18일 **오후 7시 11분 16초**의 시간 객체를 생성한다.

---

### 4. 연도/월/일/시/분/초를 개별 입력

```jsx
const myDate = new Date(2017, 4, 18, 19, 11, 16);
console.log(myDate); // Thu May 18 2017 19:11:16 GMT+0900 (Korean Standard Time)
```

- 숫자로 연도, 월, 일, 시, 분, 초를 직접 입력할 수 있다.

> 주의: 월(month) 값은 0부터 시작한다. 즉, 4는 5월이다.

---

### `getTime` 메서드로 타임스탬프 얻기

```jsx
const myDate = new Date();
console.log(myDate.getTime()); // 1970년 1월 1일 0시 기준 밀리초
```

- `getTime()` 메서드는 `Date` 객체가 **1970년 1월 1일 0시(UTC 기준)**에서 몇 밀리초가 지났는지를 반환한다.
- 이 값을 **타임스탬프(timestamp)**라고 부른다.

타임스탬프는 시간 차이를 계산할 때 유용하다:

```jsx
const start = new Date(); // 현재 시간
setTimeout(() => {
  const end = new Date(); // 일정 시간 뒤의 현재 시간
  console.log(`경과 시간: ${end.getTime() - start.getTime()} 밀리초`);
}, 1000); // 1초 대기
```

### 날짜와 시간 분리하기

`Date` 객체는 날짜와 시간의 세부 정보를 추출하는 다양한 메서드를 제공한다:

- **`getFullYear()`**: 연도 반환
- **`getMonth()`**: 월 반환 (0부터 시작)
- **`getDate()`**: 날짜 반환
- **`getDay()`**: 요일 반환 (0: 일요일, 1: 월요일, ...)
- **`getHours()`**: 시간 반환
- **`getMinutes()`**: 분 반환
- **`getSeconds()`**: 초 반환

예제:

```jsx
const myDate = new Date();
console.log(`연도: ${myDate.getFullYear()}`); // 현재 연도
console.log(`월: ${myDate.getMonth() + 1}`); // 현재 월 (1월 보정)
console.log(`일: ${myDate.getDate()}`); // 오늘 날짜
console.log(`요일: ${myDate.getDay()}`); // 오늘 요일 (0: 일요일)
console.log(`시간: ${myDate.getHours()}`); // 현재 시
console.log(`분: ${myDate.getMinutes()}`); // 현재 분
console.log(`초: ${myDate.getSeconds()}`); // 현재 초
```

### 날짜 계산하기

`Date` 객체는 **시간 덧셈 및 뺄셈**이 가능하다. 예를 들어:

```jsx
const now = new Date(); // 현재 시간
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 하루(24시간) 뒤
console.log(tomorrow); // 내일 같은 시간 출력
```

---

### `Date` 객체 수정하기

### `set` 메서드로 수정

`Date` 객체는 생성된 후에도 수정 가능하다. 이를 위해 `set`으로 시작하는 다양한 메서드가 제공된다:

```jsx
javascript
코드 복사
let myDate = new Date(2017, 4, 18, 19, 11, 16);

myDate.setFullYear(2002); // 연도 변경
myDate.setMonth(6); // 월 변경 (7월)
myDate.setDate(20); // 일 변경
console.log(myDate); // Sat Jul 20 2002 19:11:16

```

**사용 가능한 메서드 목록**:

- `setFullYear(year, [month], [date])`
- `setMonth(month, [date])`
- `setDate(date)`
- `setHours(hour, [min], [sec], [ms])`
- `setMinutes(min, [sec], [ms])`
- `setSeconds(sec, [ms])`
- `setMilliseconds(ms)`
- `setTime(milliseconds)`

---

### 날짜와 시간 간단히 표현하기

`Date` 객체에는 간단히 날짜와 시간을 표현할 수 있는 메서드도 있다:

```jsx
let myDate = new Date();

console.log(myDate.toLocaleDateString()); // 날짜 정보만 출력 (년. 월. 일)
console.log(myDate.toLocaleTimeString()); // 시간 정보만 출력 (시:분:초)
console.log(myDate.toLocaleString()); // 날짜와 시간 모두 출력 (년. 월. 일 시:분:초)
```

---

### `Date` 객체의 자동 수정 기능

`Date` 객체는 범위를 벗어나는 값을 입력하면 자동으로 날짜를 조정한다:

```jsx
let myDate = new Date(1988, 0, 32); // 1988년 1월 32일은 없음
console.log(myDate); // Mon Feb 01 1988 00:00:00
```

---

### `Date.now()`로 현재 시간 가져오기

`Date.now()`는 호출 시점의 타임스탬프를 반환한다. 새로운 객체를 생성하지 않아도 현재 시간을 즉시 확인 가능하다:

```jsx
console.log(Date.now()); // 현재 시점의 타임스탬프
```

---

### Date 객체와 형변환

`Date` 객체는 다른 자료형으로 변환이 가능하다:

```jsx
let myDate = new Date(2017, 4, 18);

console.log(typeof myDate); // "object"
console.log(String(myDate)); // 날짜를 문자열로 변환
console.log(Number(myDate)); // 타임스탬프 반환
console.log(Boolean(myDate)); // true
```

---

### Date 객체로 시간 차이 계산하기

`Date` 객체끼리 사칙연산이 가능하다. 두 날짜의 시간 차이를 계산할 때 유용하다:

```jsx
let myDate1 = new Date(2017, 4, 18);
let myDate2 = new Date(2017, 4, 19);

let timeDiff = myDate2 - myDate1; // 밀리초 단위 시간 차이
console.log(timeDiff); // 86400000 (ms, 하루)
console.log(timeDiff / 1000); // 86400 (초)
console.log(timeDiff / 1000 / 60); // 1440 (분)
console.log(timeDiff / 1000 / 60 / 60); // 24 (시간)
console.log(timeDiff / 1000 / 60 / 60 / 24); // 1 (일)
```

---

### 다양한 날짜 문자열 형식

날짜 문자열을 다양한 형식으로 생성할 수 있다:

```jsx
let date1 = new Date("12/15/1999 05:25:30");
let date2 = new Date("December 15, 1999 05:25:30");
let date3 = new Date("Dec 15 1999 05:25:30");
console.log(date1, date2, date3);
```

> 주의: 브라우저 및 시간대에 따라 결과가 달라질 수 있으므로,
>
> **ISO 8601** 형식(`YYYY-MM-DDThh:mm:ss`)을 사용하는 것을 권장.

---

---

### 주의사항

1. **`getMonth()`는 0부터 시작**월 값을 가져올 때는 반드시 +1을 해야 올바른 월이 출력된다.
2. **`getDate()`와 `getDay()`를 혼동하지 말 것**
   - `getDate()`: 날짜 (일자)
   - `getDay()`: 요일 (0: 일요일, ..., 6: 토요일)

---

### 요약

> Date 객체는 현재 시간, 특정 날짜, 시간 계산 등 다양한 작업에 활용 가능하다.Date의 메서드를 잘 활용하면 복잡한 시간 연산도 손쉽게 처리할 수 있다.기본적인 개념을 익히면 D-Day 계산기나 일정 관리 도구 같은 간단한 응용 프로그램도 쉽게 만들 수 있다.
