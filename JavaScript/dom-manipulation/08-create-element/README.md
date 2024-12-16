# DOM 메서드를 활용한 요소 추가

> HTML 구조를 수정하거나 콘텐츠를 추가하는 전통적인 방법으로 innerHTML과 outerHTML을 사용하는 경우가 많다. 하지만 이러한 방식은 몇 가지 단점을 가지고 있다:

- **`innerHTML`의 단점**:
  - 기존 내용을 덮어쓰므로 이전 내용을 보존하려면 기존 데이터를 다시 참조해야 한다.
  - 실수로 기존 데이터를 잃을 위험이 있다.
- **`outerHTML`의 단점**:
  - 요소 자체를 대체하기 때문에 기존 요소가 DOM 트리에서 제거된다.
  - 새로운 요소를 다시 선택해야 하는 번거로움이 있다.

이러한 문제를 해결하기 위해 DOM 메서드를 사용해 **새로운 요소를 생성하고 특정 위치에 추가하는 방법**이 더욱 효율적이다.

---

## 1. 요소 노드 생성

**`document.createElement()`** 메서드를 사용하면 원하는 태그 이름으로 새로운 요소 노드를 생성할 수 있다.

이 메서드는 단순히 빈 요소를 반환하며, 이후 꾸미기와 삽입 단계를 통해 요소를 완성하게 된다.

### 예제 코드:

```jsx
const newElement = document.createElement("li"); // 새로운 <li> 태그 생성
console.log(newElement); // <li></li>
```

---

## 2. 요소 꾸미기

생성된 요소에 텍스트를 추가하거나, HTML 콘텐츠 및 스타일을 설정하는 단계다.

- **텍스트 추가**: *`*textContent\*`를 사용
- **HTML 추가**: *`*innerHTML\*`을 사용
- **속성 추가**: **`setAttribute`**, **`classList`**, **`style`** 등을 사용

### 예제 코드:

```jsx
newElement.textContent = "내일 할 일"; // 텍스트 추가
newElement.setAttribute("id", "todo-item"); // id 속성 추가
newElement.style.color = "blue"; // 스타일 추가
console.log(newElement);
// 출력: <li id="todo-item" style="color: blue;">내일 할 일</li>
```

---

## 3. 요소 삽입

생성된 요소를 DOM 트리에 추가하여 화면에 반영하는 단계다.

DOM 메서드를 활용하면 기존 문서를 덮어쓰지 않고도 특정 위치에 요소를 삽입할 수 있다.

### 주요 삽입 메서드

| **메서드**    | **설명**                                   |
| ------------- | ------------------------------------------ |
| **`prepend`** | 부모 요소의 **첫 번째 자식 노드**로 추가   |
| **`append`**  | 부모 요소의 **마지막 자식 노드**로 추가    |
| **`before`**  | 호출한 요소 **바로 앞**에 형제 노드로 추가 |
| **`after`**   | 호출한 요소 **바로 뒤**에 형제 노드로 추가 |

---

### 요소 추가 예제

### HTML 구조:

```html
<ul id="todo">
  <li>오늘 할 일</li>
</ul>
```

### JavaScript:

```jsx
// <ul> 요소 선택
const todoList = document.querySelector("#todo");

// 1단계: 새로운 <li> 요소 생성
const newItem = document.createElement("li");

// 2단계: 요소 꾸미기
newItem.textContent = "내일 할 일";
newItem.style.fontWeight = "bold";

// 3단계: 요소 삽입
todoList.append(newItem); // 마지막에 추가
console.log(todoList.innerHTML);
/*
출력:
<ul id="todo">
  <li>오늘 할 일</li>
  <li style="font-weight: bold;">내일 할 일</li>
</ul>
*/
```

---

### 문자열을 이용한 텍스트 노드 추가

삽입 메서드는 단순히 요소 노드뿐만 아니라 **문자열**을 파라미터로 받아 텍스트 노드를 생성할 수도 있다.

### 예제 코드:

```jsx
todoList.prepend("첫 번째 할 일 - "); // 텍스트를 첫 번째로 추가
todoList.append(" - 마지막 항목"); // 텍스트를 마지막에 추가
```

### 결과:

```html
<ul id="todo">
  첫 번째 할 일 -
  <li>오늘 할 일</li>
  <li style="font-weight: bold;">내일 할 일</li>
  - 마지막 항목
</ul>
```

---

### 여러 개의 요소를 한 번에 추가하기

삽입 메서드는 **여러 개의 요소나 문자열**을 한꺼번에 추가할 수도 있다.

이때 전달된 값들은 **전달 순서대로** 삽입된다.

### 예제 코드:

```jsx
const item1 = document.createElement("li");
item1.textContent = "새로운 할 일 1";

const item2 = document.createElement("li");
item2.textContent = "새로운 할 일 2";

// 여러 개의 요소를 append
todoList.append(item1, item2);
```

### 결과:

```html
<ul id="todo">
  첫 번째 할 일 -
  <li>오늘 할 일</li>
  <li style="font-weight: bold;">내일 할 일</li>
  <li>새로운 할 일 1</li>
  <li>새로운 할 일 2</li>
  - 마지막 항목
</ul>
```

---

### 삽입 순서와 동작

- `*prepend*`와 **`before`는 앞에 삽입되지만,** 여러 개의 값을 전달\*\*하면 순서대로 추가된다.

이로 인해 **역순으로 삽입**될 것이라는 오해를 종종 받지만, 실제로는 **전달된 순서 그대로 추가**된다는 점에 주의하자.

### 예제 코드:

```jsx
todoList.prepend("A", "B", "C");
// 출력: "A", "B", "C"가 순서대로 삽입
```

### 결과:

```html
<ul id="todo">
  A B C 첫 번째 할 일 -
  <li>오늘 할 일</li>
  ...
</ul>
```

---

### 요약

1. **`innerHTML`과 `outerHTML`의 단점**:
   - 기존 내용을 덮어쓸 위험이 있다.
   - `outerHTML`은 요소를 완전히 대체하므로 새로 찾는 작업이 필요하다.
2. **요소 추가 3단계**:
   - **요소 생성**: `document.createElement`
   - **요소 꾸미기**: `textContent`, `innerHTML`, `setAttribute` 등 활용
   - **요소 삽입**: `prepend`, `append`, `before`, `after` 등 활용
3. **삽입 메서드의 특징**:
   - 문자열도 추가 가능하며, 여러 개의 값을 순서대로 삽입한다.
