# 이벤트 핸들러

> 이벤트 핸들러는 특정 동작이 발생했을 때 실행되는 함수로, 사용자의 행동에 따라 동적으로 반응하는 웹 페이지를 만들기 위해 필수적인 개념이다. JavaScript에서는 여러 방식으로 이벤트 핸들러를 등록하고 관리할 수 있으며, 각각의 방법에는 장단점이 존재한다.

---

## **이벤트 핸들러란?**

이벤트 핸들러는 특정 이벤트가 발생했을 때 실행되는 함수다. 예를 들어, 버튼을 클릭하거나 키보드를 누르는 등의 동작에 반응하여 특정 코드를 실행하려면 이벤트 핸들러를 등록해야 한다.

---

## **이벤트 핸들러 등록 방법**

JavaScript에서 이벤트 핸들러를 등록하는 주요 방법에는 다음이 있다:

### **1. HTML 태그에 직접 등록하기**

HTML 요소의 속성에 이벤트 핸들러를 작성하는 방식이다.

```html
<button onclick="alert('Button clicked!')">클릭</button>
```

- **장점**: 간단하고 이해하기 쉽다.
- **단점**: HTML과 JavaScript 코드가 혼재되어 유지보수와 가독성이 떨어진다.

### **2. DOM 요소의 이벤트 프로퍼티 활용하기**

JavaScript에서 DOM 요소를 선택한 뒤 이벤트 핸들러를 등록하는 방식이다.

```jsx
const button = document.querySelector("button");
button.onclick = function () {
  console.log("Button clicked!");
};
```

- **장점**: JavaScript 파일 내에서 코드 관리 가능.
- **단점**: 하나의 이벤트 핸들러만 등록 가능. 기존 핸들러를 덮어쓴다.

### **3. `addEventListener` 메서드 활용하기**

가장 권장되는 방식으로, 하나의 요소에 여러 개의 이벤트 핸들러를 독립적으로 등록할 수 있다.

```jsx
const button = document.querySelector("button");

function handleClick1() {
  console.log("Event 1");
}

function handleClick2() {
  console.log("Event 2");
}

// 이벤트 핸들러 등록
button.addEventListener("click", handleClick1);
button.addEventListener("click", handleClick2);
```

- **장점**: 다수의 이벤트 핸들러를 등록 가능하며, 특정 핸들러를 삭제할 수 있다.
- **단점**: 이벤트를 삭제하려면 핸들러를 참조할 수 있어야 한다.

---

## **`addEventListener` 메서드의 작동 원리**

`addEventListener` 메서드는 DOM 요소에 이벤트 핸들러를 등록할 수 있는 가장 강력한 도구다.

### **사용법**

```jsx
element.addEventListener(eventType, handler[, options]);

```

- **`eventType`**: 이벤트의 종류를 나타내는 문자열 (예: `'click'`, `'keydown'`, `'mouseover'` 등).
- **`handler`**: 이벤트가 발생했을 때 실행될 함수.
- **`options`** *(선택 사항)*: 이벤트 동작을 제어하는 옵션 객체. 대표적으로 `once`, `capture`, `passive` 등이 있다.

### **핸들러 삭제하기**

`addEventListener`로 등록한 이벤트 핸들러는 `removeEventListener`로 삭제할 수 있다.

```jsx
button.removeEventListener("click", handleClick1);
```

- **중요**: 삭제하려면 `addEventListener`로 등록할 때 사용했던 동일한 핸들러 함수가 필요하다.

### **주의 사항**

1. **익명 함수 사용 금지**:

   ```jsx
   button.addEventListener("click", function () {
     console.log("This handler cannot be removed");
   });
   // 삭제 불가
   ```

   - 이유: 동일한 함수 참조가 불가능하기 때문이다.

2. **핸들러 호출 방식**:

   ```jsx
   button.addEventListener("click", handleClick1); // 올바른 방식
   button.addEventListener("click", handleClick1()); // 잘못된 방식
   ```

   - `handleClick1()`처럼 소괄호를 붙이면 이벤트 등록 시점에서 함수가 실행되어 버린다.

---

## **`addEventListener`의 옵션**

옵션 객체를 사용하면 이벤트의 동작을 세부적으로 제어할 수 있다.

- **`once`**: 이벤트를 한 번만 실행한 뒤 자동으로 제거한다.
  ```jsx
  button.addEventListener("click", handleClick1, { once: true });
  ```
- **`capture`**: 이벤트가 캡처 단계에서 실행되도록 설정한다.
- **`passive`**: 스크롤 이벤트에서 성능을 최적화하기 위해 사용된다.

---

## 요약

- **이벤트 핸들러**는 특정 이벤트가 발생했을 때 실행되는 함수다.
- `addEventListener`는 가장 강력하고 권장되는 이벤트 등록 방식이다.
- 핸들러 삭제를 위해서는 참조 가능한 함수로 등록해야 한다.
- `addEventListener`의 옵션을 활용하면 더욱 세부적으로 이벤트를 제어할 수 있다.
