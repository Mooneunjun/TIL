# css 선택자로 요소를 선택하기

> HTML 요소를 선택하는 방법 중 가장 간편하고 유연한 방법은 CSS 선택자를 사용하는 것이다. querySelector와 querySelectorAll 메서드는 CSS 선택자를 활용해 HTML 요소를 선택할 수 있도록 해준다.

---

### `querySelector` 메서드

`querySelector`는 CSS 선택자를 사용해 **첫 번째 요소 하나**를 선택한다.

### 기본 문법

```jsx
const element = document.querySelector("CSS 선택자");
```

- **CSS 선택자:** `id`, `class`, 태그 이름 등 CSS에서 사용하는 선택자를 그대로 사용.
- **반환값:** 선택된 요소(첫 번째 요소만 반환).

---

### 사용 예제

HTML 코드:

```html
<div id="my-number">123</div>
<div class="color-btn">Red</div>
<div class="color-btn">Blue</div>
```

JavaScript 코드:

```jsx
// id를 선택
const myNumber = document.querySelector("#my-number");
console.log(myNumber); // <div id="my-number">123</div>

// 클래스를 선택 (첫 번째 요소만 반환)
const firstColorBtn = document.querySelector(".color-btn");
console.log(firstColorBtn); // <div class="color-btn">Red</div>

// 태그 이름을 선택
const firstDiv = document.querySelector("div");
console.log(firstDiv); // <div id="my-number">123</div>
```

---

### `querySelectorAll` 메서드

`querySelectorAll`은 CSS 선택자를 사용해 **모든 일치하는 요소들**을 선택한다.

### 기본 문법

```jsx
const elements = document.querySelectorAll("CSS 선택자");
```

- **CSS 선택자:** `id`, `class`, 태그 이름 등 CSS에서 사용하는 선택자를 그대로 사용.
- **반환값:** 선택된 요소들의 **NodeList**.

---

### 사용 예제

HTML 코드:

```html
<div class="color-btn">Red</div>
<div class="color-btn">Blue</div>
<div class="color-btn">Green</div>
```

JavaScript 코드:

```jsx
// 모든 클래스를 선택
const colorBtns = document.querySelectorAll(".color-btn");
console.log(colorBtns);
// 출력: NodeList(3) [div.color-btn, div.color-btn, div.color-btn]

// forEach를 사용해 순회
colorBtns.forEach((btn) => {
  console.log(btn);
});
// 출력:
// <div class="color-btn">Red</div>
// <div class="color-btn">Blue</div>
// <div class="color-btn">Green</div>
```

---

### `querySelector` vs `querySelectorAll`

| 메서드             | 역할                           | 반환값                 |
| ------------------ | ------------------------------ | ---------------------- |
| `querySelector`    | 일치하는 **첫 번째 요소** 선택 | 단일 요소 (`Element`)  |
| `querySelectorAll` | 일치하는 **모든 요소** 선택    | 여러 요소 (`NodeList`) |

---

### `querySelector`와 다른 메서드 비교

| 메서드                                          | 공통점 / 차이점                                                                                                                                   |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`querySelector` vs `getElementById`**         | - `querySelector("#id")`는 `getElementById("id")`와 동일한 결과를 반환.- 하지만 `querySelector`는 다양한 CSS 선택자 사용 가능.                    |
| **`querySelector` vs `getElementsByClassName`** | - `querySelector(".class")`는 **첫 번째 요소만** 반환.- `querySelectorAll(".class")`는 `getElementsByClassName`과 비슷하지만 반환값이 `NodeList`. |
| **`HTMLCollection` vs `NodeList`**              | - `getElementsByClassName`은 `HTMLCollection` 반환.- `querySelectorAll`은 `NodeList` 반환.- `NodeList`는 배열 메서드(예: `forEach`) 사용 가능.    |

---

### 주의사항

1. **`querySelector`는 첫 번째 요소만 선택**
   - 클래스를 선택했는데 첫 번째 요소만 반환된다면, 여러 요소를 다루려면 반드시 `querySelectorAll`을 사용해야 한다.
2. **`NodeList`와 `HTMLCollection`의 차이**
   - `querySelectorAll`이 반환하는 `NodeList`는 배열 메서드(`forEach`, `map` 등)를 사용할 수 있다.
   - `HTMLCollection`은 배열 메서드를 사용할 수 없고, 유사 배열 형태로만 동작한다.

---

### 요약

- `querySelector`와 `querySelectorAll`은 CSS 선택자를 사용해 태그를 선택할 수 있는 강력한 메서드다.
- `querySelector`는 첫 번째 요소를 반환하며, `querySelectorAll`은 모든 요소를 선택해 `NodeList`를 반환한다.
- 유연한 선택이 필요하거나, 짧고 간결한 코드를 원한다면 `querySelector` 계열 메서드를 사용하는 것이 더 편리하다.

다른 사람이 작성한 코드에서 `getElementById`나 `getElementsByClassName`이 사용된 경우도 있으니, 다양한 메서드를 이해하고 유연하게 활용하자!
