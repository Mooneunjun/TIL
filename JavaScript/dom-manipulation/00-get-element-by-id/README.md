# HTML 태그를 id 속성으로 선택하기

> HTML 태그를 다루거나 사용자와 상호작용을 구현하려면 먼저 **선택하고자 하는 태그를 정확히 지정**해야 한다. 이번에는 **`id` 속성**을 사용해 HTML 태그를 선택하는 방법을 정리한다.

---

### `getElementById` 메서드

JavaScript에서 `id` 속성으로 요소를 선택하려면 **`document.getElementById()`** 메서드를 사용한다. 이 메서드는 말 그대로 "아이디 속성을 통해 특정 요소를 가져오는 메서드"다.

### 기본 문법

```jsx
const element = document.getElementById("id값");
```

- `document`: HTML 문서를 나타내는 JavaScript 객체.
- `getElementById`: `id` 속성을 통해 요소를 가져오는 메서드.
- `"id값"`: 가져오고자 하는 요소의 `id` 속성을 문자열로 전달.

---

### 실제 사용 예제

HTML 코드와 JavaScript 코드를 연결해 실제 동작을 확인해보자.

### HTML 예제 코드

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getElementById Example</title>
  </head>
  <body>
    <div id="my-number">0</div>
    <div id="btns">
      <button id="decrease">-</button>
      <button id="increase">+</button>
    </div>
    <script src="index.js"></script>
  </body>
</html>
```

### JavaScript 코드

```jsx
// 특정 태그를 선택하기
const myNumberTag = document.getElementById("my-number"); // 'my-number' ID를 가진 태그 선택
console.log(myNumberTag); // <div id="my-number">0</div>

// 또 다른 태그 선택하기
const btnsTag = document.getElementById("btns"); // 'btns' ID를 가진 태그 선택
console.log(btnsTag);
// <div id="btns">...</div>
// 내부에 포함된 모든 내용이 함께 출력됨

// 존재하지 않는 ID를 선택했을 때
const nonexistentTag = document.getElementById("nonexistent");
console.log(nonexistentTag); // null
```

---

### 중요한 특징과 주의할 점

1. **아이디 값은 고유해야 한다**
   - HTML에서 `id` 속성은 문서 내에서 고유한 값을 가져야 한다.
   - 동일한 `id`를 여러 요소에 할당하면 예기치 않은 동작이 발생할 수 있다.
2. **선택한 요소의 모든 내용 접근 가능**
   - 선택된 태그뿐만 아니라 해당 태그 내부의 모든 내용까지 함께 가져온다.
3. **존재하지 않는 `id`를 선택하면**
   - `document.getElementById`로 존재하지 않는 `id`를 선택하면 `null`을 반환한다.

---

### 요약

- `document.getElementById` 메서드는 **HTML 문서에서 특정 `id`를 가진 요소를 가져오기 위해 사용**된다.
- `id` 속성은 고유해야 하며, 이를 활용하면 명확하고 직관적으로 요소를 선택할 수 있다.
- 선택한 요소가 없으면 `null`이 반환되므로, 이 값에 대한 처리가 필요할 수 있다.

다음 스터디에서는 다른 방법으로 태그를 선택하는 메서드(예: 클래스, 태그 이름 등)를 알아보자!
