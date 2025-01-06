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

# HTML 비표준 속성 다루기

> HTML 속성은 주로 표준 속성을 활용하지만, 때로는 비표준 속성이 필요한 경우도 있다. 이 글에서는 비표준 속성의 활용법과, 더 안전한 대안인 data-\* 속성과 dataset 프로퍼티를 정리한다.

---

## **HTML 속성과 비표준 속성**

HTML 태그에 정의된 속성들은 대부분 표준 속성으로, HTML 표준에서 정의한 규칙에 따라 사용된다. 그러나 HTML 표준 속성만으로는 처리하기 어려운 상황에서 **비표준 속성**이 유용할 때가 있다.

아래 예시는 표준이 아닌 속성인 `field`와 `status`를 사용한 코드다.

### **예시 코드**

```html
<p>할 일: <b field="title"></b></p>
<p>담당자: <b field="manager"></b></p>
<p>상태: <b field="status"></b></p>
<div>
  상태 변경:
  <button class="btn" status="대기중">대기중</button
  ><button class="btn" status="진행중">진행중</button
  ><button class="btn" status="완료">완료</button>
</div>
```

---

## **비표준 속성 활용 방법**

### **1. 선택자로 활용**

CSS 선택자나 JavaScript의 `querySelector`를 사용해 비표준 속성을 선택할 수 있다.

```jsx
const fields = document.querySelectorAll("[field]");
console.log(fields);
```

CSS 선택자는 `[속성이름]` 형태로 작성하며, 특정 값을 가진 태그를 선택하려면 `[속성이름="값"]` 형태를 사용할 수 있다.

---

### **2. 데이터 표시**

객체 데이터를 기반으로 비표준 속성을 활용해 각 태그에 데이터를 매핑할 수 있다.

```jsx
const fields = document.querySelectorAll("[field]");
const task = {
  title: "프로젝트 기획",
  manager: "Alice, Bob",
  status: "",
};

for (let tag of fields) {
  const field = tag.getAttribute("field"); // 속성값 가져오기
  tag.textContent = task[field]; // 객체 값 매핑
}
```

---

### **3. 속성 기반으로 스타일 및 데이터 변경**

비표준 속성을 이용해 스타일을 변경하거나, 이벤트를 처리할 수 있다.

```jsx
const btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  const status = btn.getAttribute("status");
  btn.onclick = function () {
    fields[2].textContent = status; // 상태 변경
    fields[2].setAttribute("status", status); // 속성 값 업데이트
  };
}
```

---

## **비표준 속성의 위험성과 대안**

### **비표준 속성의 문제**

1. **표준 등록 가능성**

   비표준 속성이 표준으로 등록되면, 기존 코드와 충돌하거나 의도하지 않은 동작을 유발할 수 있다.

2. **예측 불가능성**

   브라우저에서 비표준 속성을 다르게 처리할 가능성이 있다.

---

### **안전한 대안: `data-*` 속성**

`data-*` 속성은 HTML5에서 도입된 속성으로, 비표준 데이터를 안전하게 다룰 수 있는 방법이다.

`data-`로 시작하는 모든 속성은 `dataset` 객체로 관리되며, JavaScript에서 안전하게 다룰 수 있다.

---

### **예시 코드**

### **HTML 구조**

```html
<p>할 일: <b data-field="title"></b></p>
<p>담당자: <b data-field="manager"></b></p>
<p>상태: <b data-field="status"></b></p>
<div>
  상태 변경:
  <button class="btn" data-status="대기중">대기중</button
  ><button class="btn" data-status="진행중">진행중</button
  ><button class="btn" data-status="완료">완료</button>
</div>
```

### **JavaScript 코드**

```jsx
const fields = document.querySelectorAll("[data-field]");
const task = {
  title: "프로젝트 기획",
  manager: "Alice, Bob",
  status: "",
};

// 태그와 데이터를 매핑
for (let tag of fields) {
  const field = tag.dataset.field; // dataset으로 속성 접근
  tag.textContent = task[field];
}

// 상태 변경 버튼 처리
const btns = document.querySelectorAll(".btn");
for (let btn of btns) {
  const status = btn.dataset.status; // dataset으로 속성 접근
  btn.onclick = function () {
    fields[2].textContent = status;
    fields[2].dataset.status = status;
  };
}
```

---

### **dataset 사용의 장점**

1. **표준 준수**

   `data-*` 속성은 HTML5 표준에 포함되므로 안전하다.

2. **간결한 접근**

   JavaScript에서 `dataset` 프로퍼티를 통해 속성에 쉽게 접근할 수 있다.

3. **유연성**

   비표준 속성을 사용할 때의 문제를 방지하면서, 다양한 데이터 요구를 처리할 수 있다.

---

## **요약**

비표준 속성은 상황에 따라 유용하게 사용될 수 있지만, HTML 표준 등록으로 인한 예기치 못한 문제를 유발할 가능성도 있다.

따라서 비표준 속성을 사용해야 할 경우에는 `data-*` 형식을 사용하는 것이 권장된다. `dataset` 프로퍼티를 활용해 데이터를 다루면, 가독성과 안전성을 모두 확보할 수 있다.
