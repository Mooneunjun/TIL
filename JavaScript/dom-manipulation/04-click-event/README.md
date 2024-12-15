# 이벤트와 버튼 클릭

> 웹 페이지에서 발생하는 대부분의 상호작용은 이벤트(event)라고 한다. 마우스를 움직이거나 키보드를 누르거나 페이지를 스크롤하는 동작 등이 모두 이벤트에 포함된다. 이 중에서도 가장 기본적이고 자주 사용되는 이벤트 중 하나는 마우스 클릭이다. 이번에는 버튼 클릭 이벤트를 처리하는 방법과 관련된 개념들을 정리한다.

---

### 클릭 이벤트의 기본 개념

### HTML 버튼 추가

HTML에서 클릭 이벤트를 처리할 버튼을 작성한다. `id` 속성을 추가해 특정 버튼을 구분할 수 있도록 한다.

```html
<button id="my-btn">Click Me</button>
```

`id` 속성은 JavaScript에서 요소를 쉽게 선택하기 위해 사용한다.

---

### 버튼 선택

JavaScript에서 버튼을 선택하기 위해 **`querySelector`** 메서드를 사용한다. 이 메서드는 CSS 선택자를 활용해 HTML 요소를 선택할 수 있다.

```jsx
const myBtn = document.querySelector("#my-btn");
```

이 코드로 `id`가 `my-btn`인 버튼을 선택할 수 있다.

---

### 클릭 이벤트 핸들러 추가

선택한 버튼에 **클릭 이벤트 핸들러**를 추가하면, 버튼을 클릭했을 때 특정 동작을 실행할 수 있다.

```jsx
myBtn.onclick = function () {
  console.log("Hello, JavaScript!");
};
```

이 코드를 실행하고 버튼을 클릭하면, 브라우저의 콘솔에 `"Hello, JavaScript!"`라는 메시지가 출력된다.

---

### 이벤트 핸들링의 기본 용어

1. **이벤트 핸들링(Event Handling):**

   이벤트가 발생했을 때 특정 동작을 수행하도록 코드를 작성하는 것을 말한다.

2. **이벤트 핸들러(Event Handler):**

   이벤트 발생 시 실행되는 함수를 의미한다. 위 코드에서 `function () { console.log("Hello, JavaScript!"); }`가 이벤트 핸들러에 해당한다.

---

### HTML에서 이벤트 처리

HTML 태그에 직접 이벤트를 작성할 수도 있다. 아래 코드는 버튼 태그 안에 `onclick` 속성을 추가해 클릭 이벤트를 처리한다.

```html
<button id="my-btn" onclick="console.log('Hello from HTML!')">Click Me</button>
```

버튼을 클릭하면, `"Hello from HTML!"`이라는 메시지가 콘솔에 출력된다.

---

### HTML에서 이벤트를 처리하는 방식의 문제점

HTML에 직접 이벤트 핸들러를 작성하는 방식은 간단해 보일 수 있지만, 실제로는 몇 가지 문제가 있다.

1. **가독성 저하**

   HTML 파일에 JavaScript 코드가 포함되면서 HTML의 구조를 파악하기 어렵게 만든다.

2. **유지보수 어려움**

   동작을 수정하거나 추가하려면 HTML과 JavaScript를 동시에 수정해야 하므로 유지보수가 번거로워진다.

3. **역할 분리 원칙 위반**

   HTML은 페이지의 구조를 담당하고, JavaScript는 동작을 담당해야 한다. 두 코드가 섞이면 일관성을 유지하기 어렵다.

---

### 권장 방식: JavaScript에서 이벤트 처리

이벤트를 처리할 때는 HTML과 JavaScript를 분리하는 것이 좋다. 아래는 올바른 이벤트 처리 방식의 예다.

```html
<!-- HTML 파일 -->
<button id="my-btn">Click Me</button>
```

```jsx
// JavaScript 파일
const myBtn = document.querySelector("#my-btn");

myBtn.onclick = function () {
  console.log("Hello, JavaScript!");
};
```

이 방식은 다음과 같은 장점이 있다.

- HTML과 JavaScript가 분리되어 코드의 가독성이 좋아진다.
- 동작을 수정하거나 추가할 때 유지보수가 쉬워진다.
- 복잡한 동작을 구현할 때도 코드의 일관성을 유지할 수 있다.

---

`myBtn.onclick`과 `myBtn.addEventListener("click", ...)`는 둘 다 이벤트 핸들러를 설정하는 방법이지만, **동작 방식**과 **사용성**에서 몇 가지 중요한 차이가 있다.

### **1. 이벤트 핸들러의 중복**

### `myBtn.onclick`

- **한 번에 하나의 핸들러만 설정 가능하다**:
  - 이전에 설정된 이벤트 핸들러가 새로 설정한 핸들러로 **덮어쓰인다**.
  ```jsx
  myBtn.onclick = function () {
    console.log("First handler");
  };
  myBtn.onclick = function () {
    console.log("Second handler");
  };
  // 출력: "Second handler" (첫 번째 핸들러는 덮어써진다)
  ```

### `myBtn.addEventListener("click", ...)`

- **여러 개의 핸들러를 등록 가능하다**:
  - 동일한 이벤트에 대해 여러 핸들러를 **중복으로 추가**할 수 있다.
  ```jsx
  myBtn.addEventListener("click", function () {
    console.log("First handler");
  });
  myBtn.addEventListener("click", function () {
    console.log("Second handler");
  });
  // 출력:
  // "First handler"
  // "Second handler"
  ```

---

### **2. 핸들러 제거**

### `myBtn.onclick`

- 이벤트 핸들러를 제거하려면 `myBtn.onclick = null`로 설정한다.
  ```jsx
  myBtn.onclick = function () {
    console.log("Button clicked");
  };
  myBtn.onclick = null; // 이벤트 핸들러 제거
  ```

### `myBtn.addEventListener("click", ...)`

- 특정 핸들러를 제거하려면 **참조가 동일한 함수**를 사용하여 제거해야 한다.
  ```jsx
  function handleClick() {
    console.log("Button clicked");
  }
  myBtn.addEventListener("click", handleClick);
  myBtn.removeEventListener("click", handleClick); // 이벤트 핸들러 제거
  ```

---

### **3. 한 번만 실행되는 이벤트**

### `myBtn.onclick`

- 기본적으로 이벤트는 버튼을 클릭할 때마다 실행된다.
- `once` 옵션이 없으므로, 한 번만 실행되게 하려면 별도의 로직을 구현해야 한다.

### `myBtn.addEventListener("click", ...)`

- `once` 옵션을 사용하여 이벤트를 한 번만 실행하도록 설정할 수 있다.
  ```jsx
  myBtn.addEventListener(
    "click",
    function () {
      console.log("This will run once");
    },
    { once: true }
  );
  ```

---

### **4. 이벤트 캡처 및 버블링 지원**

### `myBtn.onclick`

- 항상 **버블링 단계**에서만 작동한다.
- 이벤트 캡처 단계에서는 동작하지 않는다.

### `myBtn.addEventListener("click", ...)`

- **캡처 단계**에서 이벤트를 처리하도록 설정할 수 있다.
  ```jsx
  myBtn.addEventListener(
    "click",
    function () {
      console.log("Capture phase handler");
    },
    true
  ); // true: 캡처 단계에서 실행
  ```

---

### **5. 표준 준수와 유연성**

### `myBtn.onclick`

- 오래된 방식이며, HTML DOM Level 0 표준을 따른다.
- 기능이 단순하지만 유연성이 부족하다.

### `myBtn.addEventListener("click", ...)`

- 현대적인 방식이며, HTML DOM Level 2 이벤트 표준을 따른다.
- 이벤트 타입, 옵션 등 **더 많은 기능과 유연성**을 제공한다.

---

### **언제 어떤 방식을 사용해야 하나?**

| 상황                                  | 추천 방식                |
| ------------------------------------- | ------------------------ |
| 단순한 이벤트 핸들러가 필요할 때      | `myBtn.onclick`          |
| 동일 이벤트에 여러 핸들러가 필요할 때 | `myBtn.addEventListener` |
| 이벤트를 한 번만 실행해야 할 때       | `myBtn.addEventListener` |
| 캡처 단계에서 이벤트를 처리할 때      | `myBtn.addEventListener` |
| 오래된 코드와의 호환성이 필요할 때    | `myBtn.onclick`          |

---

### **결론**

- `onclick`은 단순하고 제한적인 이벤트 핸들링 방식이다.
- `addEventListener`는 **여러 핸들러 추가**, **캡처 단계 지원**, **옵션 설정** 등 현대적인 기능을 제공하여 더 유연하고 강력한 방식이다. **새로운 코드**를 작성할 때는 가능하면 `addEventListener`를 사용하는 것이 좋다.

---

### 요약

- **이벤트(Event):** 웹 페이지에서 발생하는 모든 상호작용(클릭, 키 입력 등).
- **이벤트 핸들링(Event Handling):** 이벤트 발생 시 특정 동작을 수행하도록 코드를 작성하는 것.
- **이벤트 핸들러(Event Handler):** 이벤트가 발생했을 때 실행되는 함수.
- **추천 방식:** JavaScript 파일에서 이벤트를 처리해 HTML과 JavaScript 코드를 분리하자.
