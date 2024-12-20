# DOM 트리와 노드의 개념

> DOM(Document Object Model)은 HTML 문서를 객체화한 구조로, 각 HTML 태그와 그 안의 내용을 노드(Node)로 표현한다. DOM의 계층적 구조는 DOM 트리로 비유되며, 이를 이해하면 HTML 문서의 태그와 내용을 더욱 효과적으로 조작할 수 있다.

---

### 1. DOM 트리 구조와 노드의 관계

HTML 문서는 계층 구조로 이루어져 있으며, DOM 트리로 표현된다. 이 구조는 각 태그를 **노드(Node)**로 변환하여 표현한다.

### DOM 트리의 구성

!https://velog.velcdn.com/images/moon_dev/post/ca539c3f-6008-40ce-86ac-40ef766c00f4/image.png

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Example</title>
  </head>
  <body>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <script src="script.js"></script>
  </body>
</html>
```

위 HTML 문서를 DOM 트리로 표현하면 다음과 같다:

1. **`document`**: DOM 트리의 최상위 노드.
2. **`html`**: `document`의 자식 노드이자 최상위 요소 노드.
3. `*head*`와 **`body`**: `html`의 자식 노드이며 형제 관계.
4. `head`의 자식: `<meta>` 태그와 `<title>` 태그.
5. `body`의 자식: `<h1>`, `<h2>`, `<script>` 태그.

### 노드의 관계 용어

- **부모 노드(Parent Node)**: 특정 노드를 포함하는 상위 노드.
- **자식 노드(Child Node)**: 특정 노드에 포함된 하위 노드.
- **형제 노드(Sibling Node)**: 같은 부모를 공유하는 노드.

### 관계 예시

- `<body>`는 `<h1>`의 **부모 노드**.
- `<h1>`과 `<h2>`는 서로 **형제 노드**.
- `<h1>`은 자식 노드이며, 텍스트인 `"Heading 1"`은 **텍스트 노드**로 `<h1>`의 자식.

---

### 2. 노드의 타입

DOM 트리를 구성하는 **노드(Node)**는 여러 가지 타입이 있다. 그중에서 가장 중요한 두 가지는 **요소 노드(Element Node)**와 **텍스트 노드(Text Node)**이다.

### **1) 요소 노드 (Element Node)**

- HTML 태그를 표현하는 노드.
- 다른 노드를 포함하거나 자식 노드를 가질 수 있다.
- 예: `<html>`, `<head>`, `<body>`, `<h1>`, `<script>`.

### **2) 텍스트 노드 (Text Node)**

- HTML 태그 안의 텍스트를 표현하는 노드.
- 항상 **요소 노드의 자식 노드**로 존재.
- 스스로는 자식 노드를 가질 수 없다.

### **3) 잎 노드 (Leaf Node)**

- 텍스트 노드는 추가로 하위 노드를 가질 수 없는 구조적 특성 때문에 **잎 노드(Leaf Node)**로 불린다.
- **잎 노드**는 DOM 트리에서 나뭇잎에 해당하는 위치를 가진다.

### **4) 기타 노드**

- **주석 노드(Comment Node)**: HTML 주석을 표현.
  ```html
  <!-- This is a comment -->
  ```
- **문서 노드(Document Node)**: 문서 전체를 표현하는 최상위 노드.

---

### 3. DOM 트리의 노드 타입과 사용 빈도

DOM은 총 **12가지 노드 타입**으로 구성되지만, 실제로 자주 사용되는 것은 다음 두 가지이다:

1. **요소 노드(Element Node)**

   대부분의 DOM 조작은 요소 노드에서 이루어진다.

2. **텍스트 노드(Text Node)**

   요소 노드 안의 텍스트를 다룰 때 사용된다.

그 외의 노드 타입은 특정 상황에서만 사용되며, 사용 빈도가 낮다.

DOM 트리는 주로 요소 노드와 텍스트 노드로 구성되므로, 이 두 타입에 대한 이해가 가장 중요하다.

---

### 요약

1. **DOM 트리**는 HTML 문서를 계층적으로 표현한 구조이며, 각 구성 요소를 **노드(Node)**로 나타낸다.
2. **노드의 관계**:
   - 부모, 자식, 형제 관계로 연결된다.
3. **주요 노드 타입**:
   - 요소 노드(Element Node): HTML 태그를 표현.
   - 텍스트 노드(Text Node): HTML 태그 안의 텍스트를 표현.
   - 잎 노드(Leaf Node): 추가 자식을 가지지 않는 노드.
4. **12가지 노드 타입 중** 대부분의 DOM은 요소 노드와 텍스트 노드로 구성된다.

---

# DOM 트리 내 요소와 노드 탐색

DOM(Document Object Model)을 다룰 때, 특정 요소나 노드를 선택하고 조작하려면 **DOM 트리** 내에서 노드를 탐색할 수 있는 프로퍼티를 활용하는 것이 중요하다. 이번 글에서는 요소 노드와 모든 노드에 대해 사용할 수 있는 탐색 프로퍼티를 정리하고, DOM 트리 구조와 노드 생성 과정, `nodeType`을 활용한 노드 구분 방법 등을 추가로 살펴본다.

---

### 1. **요소 노드 탐색 프로퍼티**

- \*요소 노드(Element Node)\*\*는 HTML 태그를 표현하는 노드로, 일반적으로 가장 많이 다루는 대상이다. 요소 노드 간의 관계를 기반으로 탐색할 때 사용되는 주요 프로퍼티는 다음과 같다:

| **프로퍼티**                         | **유형**       | **설명**                                            |
| ------------------------------------ | -------------- | --------------------------------------------------- |
| **`element.children`**               | 자식 요소 노드 | 요소의 자식 요소들을 포함한 **HTMLCollection** 반환 |
| **`element.firstElementChild`**      | 자식 요소 노드 | 요소의 첫 번째 자식 요소 반환                       |
| **`element.lastElementChild`**       | 자식 요소 노드 | 요소의 마지막 자식 요소 반환                        |
| **`element.parentElement`**          | 부모 요소 노드 | 요소의 부모 요소 반환                               |
| **`element.previousElementSibling`** | 형제 요소 노드 | 요소의 **이전 형제 요소** 반환                      |
| **`element.nextElementSibling`**     | 형제 요소 노드 | 요소의 **다음 형제 요소** 반환                      |

### 예제: 요소 노드 탐색

HTML 구조:

```html
<div id="content">
  <h1 id="title">JavaScript</h1>
  <ul id="list">
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
  </ul>
</div>
```

JavaScript:

```jsx
const content = document.querySelector("#content");

// 자식 요소 탐색
console.log(content.children); // HTMLCollection [h1, ul]
console.log(content.firstElementChild); // <h1 id="title">JavaScript</h1>
console.log(content.lastElementChild); // <ul id="list">...</ul>

// 부모 요소 탐색
const title = document.querySelector("#title");
console.log(title.parentElement); // <div id="content">...</div>

// 형제 요소 탐색
const list = document.querySelector("#list");
console.log(list.previousElementSibling); // <h1 id="title">JavaScript</h1>
console.log(list.nextElementSibling); // null
```

---

### 2. **모든 노드 탐색 프로퍼티**

모든 노드(All Node)에 대해 공통적으로 사용할 수 있는 탐색 프로퍼티는 다음과 같다:

| **프로퍼티**               | **유형**       | **설명**                        |
| -------------------------- | -------------- | ------------------------------- |
| **`node.childNodes`**      | 자식 노드      | 모든 자식 노드(NodeList)를 반환 |
| **`node.firstChild`**      | 자식 노드      | 첫 번째 자식 노드 반환          |
| **`node.lastChild`**       | 자식 노드      | 마지막 자식 노드 반환           |
| **`node.parentNode`**      | 부모 노드      | 부모 노드 반환                  |
| **`node.previousSibling`** | 형제 노드      | 이전 형제 노드 반환             |
| **`node.nextSibling`**     | 다음 형제 노드 | 다음 형제 노드 반환             |

### 주요 차이점

- 요소 노드 탐색 프로퍼티(`children`, `firstElementChild` 등)는 HTML 태그(요소 노드)만 반환.
- 모든 노드 탐색 프로퍼티(`childNodes`, `firstChild` 등)는 텍스트 노드, 주석 노드 등도 포함.

---

### 3. **`parentNode`와 `parentElement`의 차이**

| **프로퍼티**        | **설명**            | **특징**                                                            |
| ------------------- | ------------------- | ------------------------------------------------------------------- |
| **`parentNode`**    | 부모 노드 반환      | 모든 노드에서 사용 가능. 부모가 요소 노드가 아닐 수도 있음.         |
| **`parentElement`** | 부모 요소 노드 반환 | 부모가 **요소 노드**인 경우에만 반환. 요소가 아닌 경우 `null` 반환. |

### 예제:

```jsx
const textNode = document.querySelector("p").firstChild; // 텍스트 노드
console.log(textNode.parentNode); // <p>...</p> (부모 노드)
console.log(textNode.parentElement); // <p>...</p> (부모 요소 노드)

const bodyNode = document.body;
console.log(bodyNode.parentNode); // <html>...</html>
console.log(bodyNode.parentElement); // <html>...</html>
```

---

### 4. **DOM 트리 생성 과정**

브라우저가 HTML 문서를 해석하며 DOM 트리를 생성할 때, 각 코드의 역할에 따라 다양한 노드 타입이 만들어진다.

- **HTML 태그** → **요소 노드(Element Node)**
- **텍스트** → **텍스트 노드(Text Node)**
- **주석** → **주석 노드(Comment Node)**

### DOM 트리 예시

HTML 코드:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript</title>
  </head>
  <body>
    I Love JavaScript
    <!-- This is a comment -->
  </body>
</html>
```

DOM 트리:

```
Document
├── html (Element Node)
│   ├── head (Element Node)
│   │   └── title (Element Node)
│   │       └── JavaScript (Text Node)
│   └── body (Element Node)
│       ├── I Love JavaScript (Text Node)
│       └── This is a comment (Comment Node)

```

---

### 5. **`nodeType`으로 노드 타입 구분**

**`nodeType`** 속성을 사용하면 노드 타입을 숫자로 확인할 수 있다.

| **`nodeType` 값** | **설명**                 |
| ----------------- | ------------------------ |
| `1`               | 요소 노드 (Element Node) |
| `3`               | 텍스트 노드 (Text Node)  |
| `8`               | 주석 노드 (Comment Node) |

### 예제:

```jsx
const elementNode = document.querySelector("#content");
const textNode = elementNode.firstChild;

console.log(elementNode.nodeType); // 1 (요소 노드)
console.log(textNode.nodeType); // 3 (텍스트 노드)
```

---

### 6. **텍스트 노드 주의점**

DOM 트리 생성 시, HTML 코드의 들여쓰기나 줄바꿈도 **텍스트 노드**로 간주된다.

이로 인해 모든 노드 탐색 프로퍼티를 사용할 경우 의도치 않게 공백 노드를 선택할 수 있다.

### 문제 상황

```html
<div>
  <p>Text</p>
</div>
```

JavaScript:

```jsx
const div = document.querySelector("div");
console.log(div.childNodes); // NodeList(3): [Text, p, Text]
```

- 첫 번째와 세 번째 `Text` 노드는 줄바꿈과 공백으로 인해 생성된 텍스트 노드다.

---

### 요약

1. **요소 노드 탐색**: `children`, `firstElementChild`, `parentElement` 등.
2. **모든 노드 탐색**: `childNodes`, `firstChild`, `parentNode` 등.
3. **`parentNode`와 `parentElement`**:
   - 요소 노드만 필요하면 `parentElement` 사용.
4. **`nodeType` 활용**: 노드의 타입(요소, 텍스트, 주석)을 판별.
5. **텍스트 노드 주의**: 공백이나 줄바꿈도 텍스트 노드로 생성될 수 있음.
