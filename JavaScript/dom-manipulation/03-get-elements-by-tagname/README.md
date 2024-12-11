# HTML 요소를 태그 이름으로 선택하기

> HTML 문서에서 태그 이름을 기준으로 요소를 선택해야 할 때, document.getElementsByTagName 메서드를 사용할 수 있다. 이는 태그 이름에 따라 요소들을 한꺼번에 선택하는 기능을 제공한다. 이번에는 이 메서드의 활용법과 주의점을 알아보자.

---

### `getElementsByTagName` 메서드

### 기본 문법

```jsx
const elements = document.getElementsByTagName("태그이름");
```

- `태그이름`: 선택하려는 HTML 태그의 이름을 문자열로 전달.
- 반환값: 선택된 요소들의 **HTMLCollection**.

---

### 사용 예제

HTML 문서에서 `button` 태그를 선택하는 코드:

```jsx
const btns = document.getElementsByTagName("button");
console.log(btns);
```

결과는 다음과 같이, 문서 내에 있는 모든 `button` 태그가 포함된 **HTMLCollection** 형태로 반환된다.

!https://velog.velcdn.com/images/moon_dev/post/d5ec0460-676a-4f43-86c0-6f1474bde251/image.png

---

### 모든 태그 선택하기

특별히 `*`를 전달하면 문서의 **모든 태그**를 선택할 수 있다.

```jsx
const allTags = document.getElementsByTagName("*");
console.log(allTags);
```

이 경우 HTML 문서 내의 모든 태그들이 반환된다. 하지만, 이는 매우 광범위한 선택이므로 실수를 유발할 가능성이 크다.

---

### `getElementsByTagName`와 `getElementsByClassName`의 공통점

- **복수 요소 선택:** 여러 요소를 한꺼번에 선택하므로 메서드 이름에 `Elements`에 **`s`**가 붙어 있다.
- **반환값:** 두 메서드 모두 `HTMLCollection`을 반환.
- **유사 배열:** 반환된 `HTMLCollection`은 배열처럼 보이지만, 배열 메서드(`push`, `splice` 등`)는 사용할 수 없다.

---

### 활용 사례

`getElementsByTagName`은 특정 태그를 한꺼번에 다뤄야 할 때 유용하다. 예를 들어, 문서 내 모든 `button` 태그의 텍스트를 출력해 보자.

### HTML 예제

```html
<button>Button 1</button><button>Button 2</button>
```

### JavaScript 예제

```jsx
const buttons = document.getElementsByTagName("button");

// for...of 루프를 활용해 각 버튼 출력
for (const button of buttons) {
  console.log(button);
}
// 출력:
// <button>Button 1</button>
// <button>Button 2</button>
```

---

### 주의사항

1. **태그 이름은 유일하지 않다**
   - 태그 이름은 문서 내에서 중복될 수 있으므로, 선택 범위가 너무 넓어질 가능성이 크다.
2. **모든 태그를 선택하는 건 비추천**
   - `*` 를 사용해 모든 태그를 선택하면 코드가 복잡해지고 실수를 유발할 가능성이 있다.
   - 명확한 의도가 없다면, `getElementsByTagName`보다 `getElementById`나 `getElementsByClassName` 같은 메서드가 더 적합하다.

---

### 요약

- `document.getElementsByTagName`는 태그 이름을 기준으로 요소를 선택한다.
- 반환값은 `HTMLCollection`이며, 유사 배열 형태로 제공된다.
- 특정 태그를 다뤄야 할 때는 유용하지만, 범위가 너무 넓어지지 않도록 주의해야 한다.
- 모든 요소를 선택하는 `*` 는 특별한 의도가 없다면 사용하지 않는 것이 좋다.
