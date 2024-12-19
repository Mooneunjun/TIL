# HTML 속성 다루기

> HTML 문서에서 브라우저가 DOM 트리를 생성하면, HTML 태그와 속성들은 DOM 요소의 프로퍼티로 변환된다. 하지만 모든 HTML 속성이 DOM 프로퍼티로 변환되는 것은 아니며, DOM 프로퍼티와 HTML 속성의 이름이 다를 수 있다는 점도 주의해야 한다.

---

## **1. HTML 속성과 DOM 프로퍼티의 관계**

### **1.1 HTML 속성은 DOM 프로퍼티로 변환된다**

HTML의 표준 속성들은 DOM 요소의 프로퍼티로 자동 변환된다.

예를 들어, `id`, `src`, `alt` 등의 속성은 DOM 프로퍼티로 접근할 수 있다.

```jsx
const element = document.querySelector("#example");
console.log(element.id); // "example"
```

### **1.2 DOM 프로퍼티로 변환되지 않는 속성**

HTML 표준 속성이 아닌 경우, DOM 프로퍼티로 변환되지 않는다.

예를 들어, `<ol>` 태그에 `href` 속성을 추가했을 경우, 이는 DOM 프로퍼티로 접근할 수 없다.

```html
<ol id="tomorrow" href="https://example.com"></ol>
```

```jsx
const element = document.querySelector("#tomorrow");
console.log(element.href); // undefined
```

### **1.3 DOM 프로퍼티 이름이 다른 경우**

일부 HTML 속성은 DOM 프로퍼티에서 이름이 다르게 설정된다.

대표적으로 `class` 속성은 DOM에서 `className` 프로퍼티로 접근해야 한다.

```jsx
const element = document.querySelector("#tomorrow");
console.log(element.className); // 클래스 값 출력
```

---

## **2. DOM 메서드로 HTML 속성 다루기**

DOM 프로퍼티로 접근할 수 없는 HTML 속성도 DOM 메서드를 활용하면 제어할 수 있다.

### **2.1 속성 읽기: `getAttribute`**

`getAttribute` 메서드는 HTML 속성을 읽어온다. 표준 및 비표준 속성 모두 접근할 수 있다.

```jsx
const element = document.querySelector("#tomorrow");

// 표준 속성 읽기
console.log(element.getAttribute("id")); // "tomorrow"

// 비표준 속성 읽기
console.log(element.getAttribute("href")); // "https://example.com"

// class 속성 읽기
console.log(element.getAttribute("class")); // 클래스 값 출력
```

### **2.2 속성 추가 및 수정: `setAttribute`**

`setAttribute` 메서드는 HTML 속성을 추가하거나 수정한다.

첫 번째 매개변수로 속성 이름, 두 번째 매개변수로 속성 값을 전달한다.

```jsx
const element = document.querySelector("#tomorrow");

// 새로운 속성 추가
element.setAttribute("data-category", "todo");

// 기존 속성 수정
element.setAttribute("id", "next-day");

console.log(element.outerHTML);
```

### **2.3 속성 삭제: `removeAttribute`**

`removeAttribute` 메서드는 HTML 속성을 제거한다.

속성 이름을 문자열로 전달하면 해당 속성이 삭제된다.

```jsx
const element = document.querySelector("#tomorrow");

// 속성 삭제
element.removeAttribute("href");
element.removeAttribute("class");

console.log(element.outerHTML);
```

---

## **3. DOM 프로퍼티와 HTML 속성의 차이**

### **3.1 HTML 속성은 초기값**

HTML 속성은 DOM 트리가 생성될 때 초기에 설정된 값을 가진다.

예를 들어, `<input value="default">`는 초기 속성값이 `"default"`이다.

### **3.2 DOM 프로퍼티는 현재 상태**

DOM 프로퍼티는 실제 DOM 트리에서 해당 요소의 현재 상태를 나타낸다.

예를 들어, `<input>` 태그에 사용자가 입력한 값은 DOM 프로퍼티에서만 확인할 수 있다.

---

## **4. 주의 사항**

### **4.1 HTML 속성은 대소문자를 구분하지 않는다**

속성 이름에 대문자가 포함되어 있어도 DOM 메서드는 올바르게 동작한다.

예: `"data-CATEGORY"`와 `"data-category"`는 동일하게 처리된다.

### **4.2 DOM 프로퍼티와 HTML 속성의 이름 차이**

`class` 속성은 DOM에서 `className`으로 접근해야 한다.

DOM과 HTML 간의 이름 차이를 인지하고 적절한 메서드와 프로퍼티를 사용해야 한다.

### **4.3 DOM 메서드는 표준과 비표준 속성을 모두 지원**

DOM 프로퍼티로 접근할 수 없는 속성도 DOM 메서드를 통해 제어할 수 있다.

---

## **5. 요약**

| **메서드**            | **설명**                        | **사용 예시**                                |
| --------------------- | ------------------------------- | -------------------------------------------- |
| **`getAttribute`**    | HTML 속성 값을 가져온다         | `element.getAttribute("id")`                 |
| **`setAttribute`**    | HTML 속성을 추가하거나 수정한다 | `element.setAttribute("class", "new-class")` |
| **`removeAttribute`** | HTML 속성을 제거한다            | `element.removeAttribute("class")`           |

---

## **결론**

HTML 속성과 DOM 프로퍼티는 밀접하게 연결되어 있지만, DOM 메서드를 통해 표준 및 비표준 속성을 모두 다룰 수 있다.

`getAttribute`, `setAttribute`, `removeAttribute` 메서드를 활용해 HTML 속성을 추가, 수정, 삭제하며 유연하게 DOM을 조작할 수 있다.
