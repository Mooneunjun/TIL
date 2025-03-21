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

---

---

# 이벤트 종류 개요

> JavaScript에서는 사용자의 동작에 따라 다양한 이벤트를 활용하여 동적으로 반응하는 웹 페이지를 만들 수 있다. 이번에는 주요 이벤트 타입들을 정리하고, 각각이 어떤 상황에서 발생하는지 살펴본다.

---

## 마우스 이벤트

사용자의 마우스 조작에 반응하는 이벤트다.

| **이벤트 타입** | **설명**                                             |
| --------------- | ---------------------------------------------------- |
| `mousedown`     | 마우스 버튼을 누르는 순간                            |
| `mouseup`       | 마우스 버튼을 눌렀다 떼는 순간                       |
| `click`         | 왼쪽 버튼을 클릭한 순간                              |
| `dblclick`      | 왼쪽 버튼을 빠르게 두 번 클릭한 순간                 |
| `contextmenu`   | 오른쪽 버튼을 클릭한 순간                            |
| `mousemove`     | 마우스를 움직이는 순간                               |
| `mouseover`     | 마우스 포인터가 요소 위로 올라온 순간                |
| `mouseout`      | 마우스 포인터가 요소에서 벗어나는 순간               |
| `mouseenter`    | 마우스 포인터가 요소 위로 올라온 순간 (버블링 없음)  |
| `mouseleave`    | 마우스 포인터가 요소에서 벗어나는 순간 (버블링 없음) |

---

## 키보드 이벤트

키보드의 입력과 관련된 이벤트다.

| **이벤트 타입** | **설명**                                                            |
| --------------- | ------------------------------------------------------------------- |
| `keydown`       | 키보드의 버튼을 누르는 순간                                         |
| `keypress`      | 키보드의 버튼을 누르는 순간 ('a', '5' 등 출력 가능한 키에서만 동작) |
| `keyup`         | 키보드의 버튼을 눌렀다 떼는 순간                                    |

---

## 포커스 이벤트

입력 요소가 활성화되거나 비활성화될 때 발생하는 이벤트다.

| **이벤트 타입** | **설명**                                          |
| --------------- | ------------------------------------------------- |
| `focusin`       | 요소에 포커스가 되는 순간                         |
| `focusout`      | 요소로부터 포커스가 빠져나가는 순간               |
| `focus`         | 요소에 포커스가 되는 순간 (버블링 없음)           |
| `blur`          | 요소로부터 포커스가 빠져나가는 순간 (버블링 없음) |

---

## 입력 이벤트

입력 필드에서 값이 변경되거나 특정 동작이 발생할 때 사용한다.

| **이벤트 타입** | **설명**                         |
| --------------- | -------------------------------- |
| `change`        | 입력된 값이 바뀌는 순간          |
| `input`         | 값이 입력되는 순간               |
| `select`        | 입력 양식의 하나가 선택되는 순간 |
| `submit`        | 폼을 전송하는 순간               |

---

## 스크롤 이벤트

페이지나 요소 내에서 스크롤이 발생할 때 반응한다.

| **이벤트 타입** | **설명**              |
| --------------- | --------------------- |
| `scroll`        | 스크롤 바가 움직일 때 |

---

## 윈도우 창 이벤트

브라우저 창의 크기 변경 등과 관련된 이벤트다.

| **이벤트 타입** | **설명**                       |
| --------------- | ------------------------------ |
| `resize`        | 윈도우 사이즈를 움직일 때 발생 |

---

## 요약

이벤트는 **마우스, 키보드, 포커스, 입력, 스크롤, 창 크기 변경** 등 다양한 상황에서 발생할 수 있다. 각각의 이벤트는 **적절한 상황에서 활용**될 때 웹 페이지의 동적 인터랙션을 강화할 수 있다. 필요한 이벤트 타입을 미리 알아두고, 적재적소에 활용하는 것이 중요하다.

---

# 이벤트의 핵심 개념 정리

> JavaScript에서 이벤트는 웹 페이지의 동작을 제어하는 중요한 요소다. 이번 글에서는 이벤트 핸들러 등록부터 이벤트 위임, 브라우저 기본 동작 제어까지 주요 개념들을 정리한다.

---

### **1. 이벤트 핸들러 등록하기**

이벤트 핸들러는 특정 동작(이벤트)이 발생했을 때 실행되는 함수다. JavaScript에서 이벤트 핸들러를 등록하는 방법은 여러 가지가 있지만, 가장 권장되는 방법은 `addEventListener` 메서드를 사용하는 것이다.

```jsx
// 버튼 클릭 이벤트 등록
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

---

### **2. 이벤트 핸들러 삭제하기**

등록된 이벤트 핸들러는 `removeEventListener` 메서드를 사용하여 삭제할 수 있다. 주의할 점은 삭제하려면 동일한 함수 참조가 필요하다.

```jsx
function handleClick() {
  console.log("Button clicked!");
}

// 이벤트 등록
button.addEventListener("click", handleClick);

// 이벤트 삭제
button.removeEventListener("click", handleClick);
```

---

### **3. 이벤트 객체 (Event Object)**

이벤트가 발생하면 이벤트 핸들러는 이벤트에 대한 상세 정보를 담은 **이벤트 객체**를 전달받는다. 이벤트 객체는 다양한 프로퍼티를 포함하며, 아래와 같은 주요 정보를 제공한다:

- `type`: 이벤트의 타입(예: `click`, `keydown`).
- `target`: 이벤트가 발생한 요소.
- `currentTarget`: 이벤트 핸들러가 등록된 요소.
- `bubbles`: 이벤트 버블링 여부.
- `preventDefault`: 브라우저의 기본 동작 차단.

```jsx
button.addEventListener("click", (event) => {
  console.log("Event type:", event.type); // click
  console.log("Target element:", event.target); // 클릭된 요소
});
```

---

### **4. 이벤트 버블링 (Event Bubbling)**

이벤트는 발생한 요소에서 시작해 부모 요소로 전파된다. 이를 **이벤트 버블링**이라고 한다. 이벤트 버블링은 기본적으로 활성화되어 있으며, 이를 이용하면 이벤트를 효율적으로 관리할 수 있다.

```html
<div id="parent">
  <button id="child">Click me</button>
</div>
```

```jsx
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked!");
});

document.getElementById("child").addEventListener("click", () => {
  console.log("Child clicked!");
});
```

- **결과**: `Child clicked!` → `Parent clicked!`

### **버블링 막기**

`stopPropagation` 메서드를 사용하면 이벤트 전파를 막을 수 있다.

```jsx
document.getElementById("child").addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Child clicked!");
});
```

- **결과**: `Parent clicked!`는 호출되지 않는다.

---

### **5. 이벤트 위임 (Event Delegation)**

이벤트 버블링을 활용하면, 부모 요소에서 자식 요소의 이벤트를 효율적으로 처리할 수 있다. 이를 **이벤트 위임**이라고 한다.

```jsx
document.getElementById("parent").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    console.log("Button clicked!");
  }
});
```

- **장점**: 자식 요소가 동적으로 추가되어도 이벤트를 다시 등록할 필요가 없다.

---

### **6. 브라우저의 기본 동작**

브라우저는 각 HTML 요소에 대해 기본 동작을 제공한다. 예를 들어:

- `<a>` 태그: 클릭 시 링크로 이동.
- `<form>` 태그: 제출 시 페이지 리로드.
- `<input>` 태그: 커서 포커스.

### **기본 동작 차단**

`preventDefault` 메서드를 사용하면 기본 동작을 차단할 수 있다.

```jsx
document.querySelector("a").addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Link click prevented!");
});
```

- **결과**: 링크 이동이 차단되고 콘솔 메시지가 출력된다.

---

## 요약

- **이벤트 핸들러 등록**: `addEventListener`를 사용.
- **이벤트 핸들러 삭제**: `removeEventListener`로 동일한 함수 참조 필요.
- **이벤트 객체**: 이벤트 정보와 동작 제어를 위한 다양한 프로퍼티 제공.
- **이벤트 버블링**: 자식 요소에서 부모 요소로 이벤트 전파.
- **이벤트 위임**: 부모 요소에서 자식 요소 이벤트를 효율적으로 관리.
- **기본 동작 차단**: `preventDefault`를 통해 불필요한 동작 차단.
