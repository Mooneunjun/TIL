# 요소 노드의 주요 프로퍼티

> HTML 문서를 객체로 표현한 DOM(Document Object Model)의 요소 노드(Element Node)는 다양한 프로퍼티를 가지고 있다.
>
> 그중에서도 자주 사용되는 **`innerHTML`**, **`outerHTML`**, **`textContent`**는 DOM 요소의 내용을 다루는 데 필수적이다.

---

## 1. **`innerHTML`**

- `*innerHTML*`은 요소 안의 HTML 콘텐츠를 **문자열로 반환**하거나 **수정**할 수 있는 프로퍼티다.

### 1) 요소의 HTML 확인

- **특징**: 요소 내부의 모든 HTML 코드를 반환하며, 태그와 태그 사이의 줄바꿈, 들여쓰기 같은 공백도 포함된다.

### 예제:

```jsx
const listItem = document.querySelector("#item1");
console.log(listItem.innerHTML);
// 출력: "Item 1"
```

HTML:

```html
<ul id="list">
  <li id="item1">Item 1</li>
</ul>
```

### 2) 요소의 HTML 수정

- `*innerHTML*`에 값을 할당하면, 요소 내부의 HTML 콘텐츠가 완전히 변경된다.

```jsx
listItem.innerHTML = "<strong>Updated Item 1</strong>";
console.log(listItem.innerHTML);
// 출력: "<strong>Updated Item 1</strong>"
```

### 3) 기존 HTML에 추가

기존 HTML 내용 뒤에 추가하려면 **덧셈 할당 연산자 (`+=`)**를 사용할 수 있다.

```jsx
listItem.innerHTML += "<em> (new)</em>";
console.log(listItem.innerHTML);
// 출력: "<strong>Updated Item 1</strong><em> (new)</em>"
```

---

## 2. **`outerHTML`**

- `*outerHTML*`은 *`*innerHTML\*`과 비슷하지만, 요소 자체를 포함한 HTML 전체를 반환하거나 수정할 수 있다.

### 1) 요소의 HTML 확인

- **특징**: 요소 전체를 포함한 HTML 코드를 반환한다. 줄바꿈과 들여쓰기 같은 공백도 포함된다.

### 예제:

```jsx
const list = document.querySelector("#list");
console.log(list.outerHTML);
/*
출력:
<ul id="list">
  <li id="item1">Item 1</li>
</ul>
*/
```

### 2) 요소의 HTML 수정

- `*outerHTML*`에 값을 할당하면, **해당 요소 자체가 교체**된다.

이는 요소 내부 콘텐츠만 변경하는 **`innerHTML`**과의 주요 차이점이다.

```jsx
list.outerHTML = '<p id="newElement">New Element</p>';
console.log(document.querySelector("#newElement"));
// 출력: <p id="newElement">New Element</p>
```

### 주의:

- `*outerHTML*`로 값을 수정하면 원래의 요소가 제거되고 새로운 요소로 대체된다.

---

## 3. **`textContent`**

- `*textContent*`는 요소 내부의 **텍스트만** 반환하거나 수정할 수 있는 프로퍼티다.

HTML 태그는 무시되며 텍스트만 추출된다.

### 1) 텍스트 확인

- **특징**: HTML 태그는 제거되고 텍스트만 반환된다.

### 예제:

```jsx
const listItem = document.querySelector("#item1");
console.log(listItem.textContent);
// 출력: "Item 1"
```

### 2) 텍스트 수정

- `*textContent*`에 값을 할당하면, 기존 내용을 대체하고 텍스트만 설정된다.

```jsx
listItem.textContent = "Updated Text";
console.log(listItem.textContent);
// 출력: "Updated Text"
```

### 3) HTML 무시

- `*textContent*`는 HTML 태그처럼 보이는 문자열도 단순 텍스트로 처리한다.

```jsx
listItem.textContent = "<strong>HTML Tag?</strong>";
console.log(listItem.textContent);
// 출력: "<strong>HTML Tag?</strong>"
```

---

## **`innerHTML` vs `textContent`**

| **프로퍼티**      | **특징**                                                       | **활용 예시**                                                          |
| ----------------- | -------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **`innerHTML`**   | HTML 콘텐츠를 포함. 태그 구조를 유지하고 활용 가능.            | HTML 콘텐츠 추가, 수정. HTML 태그 사용 가능.                           |
| **`textContent`** | HTML을 무시하고 순수 텍스트만 반환. 특수 문자도 텍스트로 처리. | 사용자 입력 값을 텍스트로 출력하거나, HTML 코드 삽입을 방지할 때 사용. |

---

### 요약

1. **`innerHTML`**:
   - 요소 내부의 HTML 코드를 문자열로 반환하거나 수정.
   - 기존 HTML에 추가하려면 `+=` 연산자를 사용.
2. **`outerHTML`**:
   - 요소 자체를 포함한 HTML 코드를 반환하거나 수정.
   - 수정 시 기존 요소가 완전히 대체됨.
3. **`textContent`**:
   - HTML 태그를 무시하고 순수 텍스트만 반환하거나 수정.
   - HTML 코드 삽입을 방지하고 텍스트를 안전하게 출력할 때 유용.
