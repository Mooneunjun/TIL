# DOM(Document Object Model)

> DOM은 "Document Object Model"의 약자로, 한국어로는 문서 객체 모델이라고 한다. DOM은 웹 브라우저에 표시되는 HTML 문서를 객체로 표현한 모델이다. 이를 통해 JavaScript로 웹 페이지를 자유롭게 조작하거나 동적으로 콘텐츠를 추가할 수 있다.

---

### DOM의 구조와 역할

1. **웹 페이지는 HTML 문서로 표현**
   - HTML 문서에서 작성된 모든 요소(태그, 속성, 텍스트 등)가 DOM에서 객체로 표현된다.
   - DOM은 웹 문서를 객체화한 구조로, 각 요소는 JavaScript로 접근 및 조작 가능하다.
2. **`document` 객체**
   - DOM의 진입점 역할을 하는 최상위 객체.
   - `document` 객체를 통해 HTML 문서의 모든 요소에 접근하거나 수정할 수 있다.

---

### DOM 객체 출력하기

### 1. `document` 객체 출력

`console.log(document)`를 사용하면 HTML 문서 전체가 출력된다.

```jsx
console.log(document);
```

출력 결과는 HTML 태그 형태로 나타나며, 이는 DOM이 HTML 문서를 그대로 표현하고 있음을 보여준다.

### 2. 자료형 확인

`typeof` 연산자를 사용하면 `document`의 자료형은 `object`로 표시된다.

```jsx
console.log(typeof document); // "object"
```

---

### DOM 객체를 프로퍼티 형태로 확인하기

DOM 객체를 HTML 태그 형태가 아닌 **객체 형태**로 확인하려면 `console.dir()` 메서드를 사용한다.

```jsx
console.dir(document);
```

`console.dir()`은 DOM 객체 내부의 다양한 프로퍼티와 메서드를 구조적으로 출력해 준다. 이를 통해 DOM 요소가 가진 프로퍼티를 탐색하고, 활용할 수 있다.

---

### DOM 요소 접근 및 조작

### 1. DOM 요소 선택

`document.querySelector`를 사용해 특정 요소를 선택할 수 있다.

아래는 `id`가 `title`인 요소를 선택하는 코드다.

```jsx
const title = document.querySelector("#title");
console.log(title); // <h1 id="title">...</h1>
```

### 2. DOM 요소의 프로퍼티 확인

DOM 요소를 선택한 뒤 점(`.`)을 찍어보면, 해당 요소가 가진 다양한 프로퍼티와 메서드가 출력된다.

이를 통해 DOM 요소가 가진 속성을 탐색하고 사용할 수 있다.

```jsx
console.dir(title);
```

출력된 프로퍼티 중에는 `innerHTML`, `textContent`, `style` 등 다양한 속성이 포함되어 있으며, 이를 활용해 DOM 요소를 조작할 수 있다.

---

### 예시: DOM 요소 스타일 조작하기

DOM 요소의 `style` 프로퍼티를 사용하면, 선택한 요소의 스타일을 JavaScript로 변경할 수 있다.

### 1. 스타일 변경

`style` 프로퍼티를 사용해 `title` 요소의 글자 색상을 빨간색으로 변경하는 코드:

```jsx
title.style.color = "blue";
```

이 코드는 `title` 요소의 텍스트 색상을 즉시 변경한다.

### 2. `style` 프로퍼티 탐색과 활용

`style` 프로퍼티는 DOM 요소의 CSS 스타일을 변경할 수 있는 객체로, 다양한 CSS 속성들을 프로퍼티로 포함하고 있다.

`console.dir(title.style)`로 출력하면 `color`, `backgroundColor`, `fontSize` 등 사용 가능한 CSS 속성을 확인할 수 있다.

```jsx
console.dir(title.style);
// 출력: Style 객체
// { color: "", backgroundColor: "", fontSize: "", ... }
```

### 3. 점진적으로 프로퍼티를 탐색하며 조작

1. 선택한 요소의 프로퍼티를 탐색.
2. `style` 프로퍼티에 접근해 원하는 속성을 변경.

```jsx
title.style.fontSize = "24px"; // 글자 크기를 24px로 변경
title.style.backgroundColor = "yellow"; // 배경색을 노란색으로 변경
```

이처럼 점진적으로 프로퍼티를 탐색하고 활용하면 DOM 요소의 다양한 속성을 유연하게 변경할 수 있다.

---

### 요약

- **DOM**은 HTML 문서를 객체화한 구조로, JavaScript로 웹 페이지를 조작할 수 있다.
- **`document` 객체**는 DOM의 진입점으로, 모든 HTML 요소에 접근하거나 수정할 수 있다.
- **DOM 탐색 및 조작**:
  - `console.log`와 `console.dir`로 DOM 구조와 프로퍼티를 확인.
  - `querySelector`로 DOM 요소를 선택하고, 프로퍼티를 활용해 조작 가능.
