# 웹 브라우저와 객체

> JavaScript는 원래 웹 브라우저를 다루기 위해 등장한 프로그래밍 언어다. JavaScript에서 브라우저는 window 객체로 표현된다. 이 window 객체를 통해 브라우저의 정보를 얻거나 제어할 수 있다. 동시에, window는 JavaScript에서 전역 객체(Global Object)로도 작동한다.

---

### `window` 객체 살펴보기

### `window` 객체 출력

`console.log(window)`를 실행하면, 브라우저의 정보를 담고 있는 거대한 객체가 출력된다.

```jsx
console.log(window);
```

`window` 객체 안에는 다양한 프로퍼티와 메서드가 포함되어 있다. 이 객체를 활용하면 브라우저의 동작을 제어하거나 정보를 얻을 수 있다.

---

### 주요 프로퍼티와 메서드

1. **브라우저 창 크기 정보: `innerWidth`와 `innerHeight`**

   - `window.innerWidth`: 브라우저 탭의 너비를 반환.
   - `window.innerHeight`: 브라우저 탭의 높이를 반환.

   ```jsx
   console.log("Width:", window.innerWidth);
   console.log("Height:", window.innerHeight);
   ```

   브라우저 창 크기를 변경하면 이 값도 함께 변한다.

2. **새 창 열기: `window.open`**

   - `window.open(url, target, specs)`: 새 브라우저 창을 열 수 있다.

   ```jsx
   const newWindow = window.open(
     "https://example.com",
     "_blank",
     "width=500,height=500"
   );
   ```

3. **창 닫기: `window.close`**

   - `window.close()`: 특정 창을 닫는다.새로 열린 창에서 호출해야 효과가 있다.

   ```jsx
   newWindow.close();
   ```

4. **`document`와 `console`**

   - `window.document`: HTML 문서를 대변하는 객체.
   - `window.console`: 개발자 도구의 콘솔을 대변하는 객체.

   ```jsx
   console.log(window.document); // HTMLDocument 객체
   console.log(window.console); // Console 객체
   ```

   `document`와 `console`은 `window` 객체의 하위 프로퍼티다.

---

### `window`는 전역 객체(Global Object)

`window`는 JavaScript에서 **전역 객체(Global Object)**로도 작동한다. 전역 객체는 모든 코드에서 접근 가능한 최상위 객체를 의미한다. 모든 내장 객체와 함수들이 이 `window` 객체에 포함되어 있다.

- **예시**: `console.log`는 사실 `window.console.log`와 동일하다.`window` 객체는 명시적으로 작성하지 않아도 기본적으로 참조된다.
  ```jsx
  console.log("Hello, World!");
  window.console.log("Hello, World!"); // 동일한 결과
  ```

---

### 요약

1. **`window` 객체**
   - 브라우저의 정보를 얻거나 제어할 수 있는 객체.
   - `innerWidth`, `innerHeight`, `open`, `close` 등의 프로퍼티와 메서드를 제공한다.
2. **전역 객체(Global Object)**
   - JavaScript의 최상위 객체.
   - 모든 내장 객체와 함수가 포함되어 있으며, 명시적으로 `window`를 작성하지 않아도 참조된다.
3. **활용**
   - 브라우저 제어, 화면 크기 확인, DOM(Document Object Model) 접근 등 다양한 작업에 활용된다.
