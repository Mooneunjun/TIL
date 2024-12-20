# 배열 (Array)

> 자바스크립트에서 배열은 여러 값들을 하나의 묶음으로 표현할 때 사용하는 데이터 구조다. 객체와 비슷하지만, 배열은 순서가 중요할 때 주로 사용된다. 배열의 각 값들은 요소(Element)라고 하며, 각 요소는 인덱스(Index)라는 숫자를 통해 접근할 수 있다.

---

### 객체 vs 배열: 차이점

- **객체**는 각 값을 **프로퍼티 네임**으로 식별.
- **배열**은 각 값을 **순서(인덱스)**로 식별.

---

### 배열의 선언과 기본 사용법

### 배열 선언

배열은 **대괄호 `[]`**로 생성하며, 각 요소는 쉼표 `,`로 구분한다.

```jsx
// 배열 선언
const courseRanking = [
  "자바스크립트 프로그래밍 기초",
  "파이썬 프로그래밍 기초",
  "컴퓨터 개론",
  "웹 개발 입문",
];
```

위 코드에서 `courseRanking` 배열은 총 4개의 요소를 가지고 있다.

---

### 배열의 특징

1. 배열은 **순서를 가지는 값들의 묶음**이다.
2. 배열 안에 있는 각 값(요소)은 고유한 **인덱스(Index)**를 가진다.
   - **인덱스는 0부터 시작**한다.
   - 첫 번째 요소: 인덱스 `0`
   - 두 번째 요소: 인덱스 `1`
   - ...
3. 배열의 요소는 **대괄호 표기법**을 통해 접근 가능하다.

---

### 배열의 요소 접근 (인덱싱)

배열 요소에 접근할 때는 배열 이름 뒤에 **대괄호**를 사용하고, 대괄호 안에 원하는 인덱스를 넣는다. 이를 **인덱싱(Indexing)**이라고 부른다.

### 예제 코드

```jsx
console.log(courseRanking[0]); // 자바스크립트 프로그래밍 기초
console.log(courseRanking[2]); // 컴퓨터 개론
console.log(courseRanking[3 - 1]); // 컴퓨터 개론 (계산식도 가능)
```

### 주의 사항

- **인덱스는 0부터 시작**한다.
  - `courseRanking[0]`은 첫 번째 요소에 접근.
  - `courseRanking[2]`는 세 번째 요소에 접근.

---

### 배열의 활용 예시

배열은 **순서가 중요한 데이터**를 표현할 때 특히 유용하다.

예를 들어:

1. **순위**: 강의 순위, 운동 경기 기록, 음악 차트 등.

   ```jsx
   const ranking = ["1위", "2위", "3위"];
   ```

2. **노선**: 공항철도 노선, 버스 정류장 순서.

   ```jsx
   const subwayLine = ["김포공항", "홍대입구", "서울역"];
   ```

3. **시리즈**: 소설 시리즈, 영화 시리즈.

   ```jsx
   const movieSeries = [
     "어벤져스",
     "어벤져스: 에이지 오브 울트론",
     "어벤져스: 엔드게임",
   ];
   ```

4. **묶음**: 과일 목록, 세트 메뉴.

   ```jsx
   const fruits = ["사과", "바나나", "복숭아"];
   const menuSet = ["짜장면", "탕수육", "군만두"];
   ```

---

### 배열을 사용하는 이유

1. **순서가 중요한 데이터 표현**: 배열은 요소의 순서를 유지하며, 인덱스를 통해 쉽게 접근 가능하다.
2. **코드 간결화**: 객체보다 간단하게 여러 데이터를 관리할 수 있다.
3. **다양한 활용**: 배열은 단순한 데이터 묶음부터 복잡한 구조까지 다양한 상황에서 활용 가능하다.

---

### 요약

> 배열은 순서가 중요한 데이터를 표현할 때 사용된다.대괄호 []와 \*쉼표 ,를 사용해 배열을 선언한다.요소에 접근할 때는 대괄호 표기법을 사용하며, 인덱스는 0부터 시작한다.랭킹, 노선, 시리즈 등 순서가 중요한 데이터 외에도, 단순한 값 묶음 표현에도 유용하다.

배열은 자바스크립트에서 가장 많이 사용되는 데이터 구조 중 하나로, 앞으로 배열과 관련된 다양한 활용법을 익히면 더 효율적으로 코드를 작성할 수 있다.

# 배열 다루기

> 배열은 순서가 중요한 데이터를 저장할 때 사용하는 자바스크립트의 데이터 구조다.
>
> 하지만 배열은 단순히 여러 데이터를 묶는 데 그치지 않고, **다양한 프로퍼티와 메서드**를 제공해 데이터를 유연하게 다룰 수 있다.

---

### 배열도 객체?

먼저 배열이 자바스크립트에서 어떤 종류의 데이터인지 살펴보자.

배열을 선언하고, `typeof` 연산자로 자료형을 확인해보자:

```jsx
const members = ["프로그래밍", "자바스크립트", "배열"];
console.log(typeof members); // "object"
```

출력 결과는 `"object"`다.

배열도 사실 자바스크립트에서 미리 만들어둔 **특별한 객체**라는 뜻이다.

- **배열의 특징**:
  1. **순서를 유지**하며 데이터를 저장.
  2. 각 요소(Element)는 **인덱스(Index)**로 접근 가능.
  3. **배열의 길이**는 자동으로 관리됨.

즉, 배열은 객체의 특징을 가지면서도 데이터를 순서대로 관리할 수 있는 **고유한 데이터 구조**다.

---

### 배열의 주요 프로퍼티: `length`

배열의 `length` 프로퍼티는 배열이 가지고 있는 **요소의 개수**를 알려준다.

이 값은 배열을 생성하거나 수정할 때 자동으로 갱신된다.

```jsx
const members = ["프로그래밍", "자바스크립트", "배열"];
console.log(members.length); // 3
```

---

### `length` 활용 예제: 마지막 요소 접근

배열의 인덱스는 **0부터 시작**한다.

따라서 마지막 요소에 접근하려면 `length - 1`을 사용하면 된다:

```jsx
const members = ["프로그래밍", "자바스크립트", "배열"];
console.log(members[members.length - 1]); // "배열"
```

---

### `length`를 통한 배열 확장

`length`는 배열의 길이를 늘리거나 줄이는 데도 사용될 수 있다.

배열의 길이를 직접 변경하면, 배열의 크기가 확장되거나 축소된다:

```jsx
const members = ["프로그래밍", "자바스크립트"];
members.length = 5;
console.log(members); // ["프로그래밍", "자바스크립트", <3 empty items>]

members.length = 1;
console.log(members); // ["프로그래밍"]
```

- **주의**: 배열 길이를 늘릴 경우, 새로 추가된 요소는 `undefined` 대신 `<empty>`로 표시된다.
- 이는 "비어 있는 자리"만 추가된 것이며, 실제 값이 들어간 것은 아님.

---

### 배열의 요소 추가와 수정

배열은 객체처럼 **존재하지 않는 인덱스**에 값을 할당하면 새 요소를 추가할 수 있다.

또한 이미 존재하는 요소에 값을 할당하면 기존 값을 수정한다.

### 요소 추가

```jsx
const members = ["프로그래밍", "자바스크립트"];
members[2] = "배열"; // 새로운 요소 추가
console.log(members); // ["프로그래밍", "자바스크립트", "배열"]
```

### 요소 수정

```jsx
members[1] = "웹 개발"; // 기존 요소 수정
console.log(members); // ["프로그래밍", "웹 개발", "배열"]
```

---

### 주의: 인덱스를 건너뛰어 추가할 경우

존재하지 않는 인덱스에 값을 추가할 때, 중간에 **비어 있는 요소(`<empty>`)**가 생길 수 있다:

```jsx
members[5] = "학습";
console.log(members);
// ["프로그래밍", "웹 개발", "배열", <2 empty items>, "학습"]

console.log(members[4]); // undefined
console.log(members.length); // 6
```

- **빈 요소와 `undefined`의 차이**:
  - **`undefined`**: 명시적으로 값을 지정하지 않은 상태.
  - **빈 요소(`<empty>`)**: 배열에 자리만 있고 값이 없는 상태.

---

### 배열의 요소 삭제

### 1. `delete` 연산자

`delete`를 사용하면 요소의 값은 삭제되지만, 자리 자체는 남는다:

```jsx
delete members[1];
console.log(members);
// ["프로그래밍", <empty>, "배열", <2 empty items>, "학습"]

console.log(members.length); // 6 (길이는 변하지 않음)
```

### 2. 완전한 삭제를 위한 메서드 사용

배열의 요소를 완전히 제거하려면 배열의 메서드(`splice`, `pop` 등)를 사용하는 것이 더 적합하다.

이 부분은 다음 글에서 다룰 예정이다.

---

### 배열과 객체의 차이점

- **객체**: 각 데이터가 **이름(프로퍼티 네임)**으로 구분됨.
- **배열**: 데이터가 **순서(인덱스)**로 구분됨.

객체는 데이터를 **구조적으로** 관리할 때 유리하고,

배열은 데이터를 **순서대로** 관리할 때 유리하다.

---

### 배열을 사용할 때의 실수 방지

1. **`length`는 자동으로 갱신되지만, 중간에 비어 있는 요소를 주의해야 함.**
2. **인덱스를 건너뛰어 추가하지 않도록 신경 쓸 것.**
3. **요소 삭제 시 `delete`는 완전히 제거되지 않음**.

---

### 요약

> 배열은 자바스크립트의 특별한 객체로, 순서가 중요한 데이터를 저장할 때 사용한다.배열의 length 프로퍼티는 요소의 개수를 알려주며, 배열 크기를 변경할 수도 있다.존재하지 않는 인덱스에 값을 할당하면 새 요소가 추가되지만, 중간에 빈 요소(<empty>)가 생길 수 있다.요소를 삭제할 때 delete를 사용할 경우 자리만 남고 완전히 제거되지 않으므로, 배열 메서드를 사용하는 것이 더 적합하다.

배열은 자바스크립트에서 가장 강력한 데이터 구조 중 하나다. 배열의 동작 원리와 특징을 이해하면 더욱 효율적으로 데이터를 다룰 수 있다! 🚀
