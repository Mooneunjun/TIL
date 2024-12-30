# 이벤트 버블링(Event Bubbling)

HTML과 CSS로 간단한 구조를 만들고, JavaScript로 각 요소에 클릭 이벤트 핸들러를 등록했을 때 예상하지 못한 동작이 발생할 수 있다. 예를 들어:

1. **타이틀을 클릭하면** 타이틀 이벤트 핸들러뿐만 아니라 부모 요소인 콘텐츠의 이벤트 핸들러도 동작.
2. **리스트를 클릭하면** 리스트와 콘텐츠 이벤트 핸들러가 동작.
3. **아이템을 클릭하면** 아이템, 리스트, 콘텐츠 이벤트 핸들러가 모두 동작.

위와 같은 현상의 원인을 이벤트 버블링이라고 부른다.

---

### 이벤트 버블링이란?

> 이벤트 버블링은 특정 요소에서 이벤트가 발생했을 때 해당 이벤트가 부모 요소로 전달되며 최상위 요소까지 전파되는 동작을 의미한다. 이 동작은 이벤트가 발생한 자식 요소부터 부모 요소로 "거품처럼" 올라간다고 해서 버블링(Bubbling)이라는 이름이 붙었다.

1. **동작 원리**

- **이벤트 발생**: 사용자가 특정 요소를 클릭하거나 동작을 수행.
- **이벤트 실행**: 해당 요소에 등록된 이벤트 핸들러 실행.
- **상위 요소로 전파**: 부모 요소로 이벤트가 전달되며 이벤트 핸들러가 실행됨.
- **최상위까지 전파**: 계속 상위 요소로 이동하며 `window` 객체에 도달.

버블링은 물속에서 올라오는 거품과 비슷한 동작 원리를 가지고 있어 이러한 이름이 붙었다.

---

1. **예제 코드**

```html
<div id="content">
  <div id="list">
    <div id="item">Item</div>
  </div>
</div>
```

```jsx
// 각 요소에 이벤트 핸들러 등록
const content = document.querySelector("#content");
const list = document.querySelector("#list");
const item = document.querySelector("#item");

content.addEventListener("click", () => console.log("Content 클릭!"));
list.addEventListener("click", () => console.log("List 클릭!"));
item.addEventListener("click", () => console.log("Item 클릭!"));
```

**출력 결과:**

- `item` 클릭 시: `Item 클릭` → `List 클릭` → `Content 클릭`
- `list` 클릭 시: `List 클릭` → `Content 클릭`
- `content` 클릭 시: `Content 클릭`

이벤트 버블링에 의해 `item`에서 시작된 이벤트가 부모인 `list`, 그리고 그 상위인 `content`로 전파되며 핸들러가 실행된다.

---

## **이벤트 객체를 활용한 정보 확인**

이벤트 핸들러에 전달되는 이벤트 객체는 이벤트와 관련된 다양한 정보를 담고 있다. 이를 활용해 이벤트의 원래 발생 요소, 핸들러가 등록된 요소 등을 확인할 수 있다.

### **주요 프로퍼티**

1. **`target`**
   - 이벤트가 실제로 발생한 요소.
   - 예: 사용자가 클릭한 요소.
2. **`currentTarget`**
   - 현재 실행 중인 이벤트 핸들러가 등록된 요소.

### **예제**

```jsx
item.addEventListener("click", (event) => {
  console.log("Target:", event.target); // 클릭된 실제 요소
  console.log("Current Target:", event.currentTarget); // 현재 실행 중인 핸들러가 등록된 요소
});
```

**출력 결과**

- `event.target`: `#item`
- `event.currentTarget`: `#item`

부모 요소의 핸들러에서도 `target`은 변하지 않고 최초의 이벤트 발생 요소를 가리킨다.

---

## **이벤트 버블링 멈추기**

특정 상황에서 버블링을 멈추고 싶다면 `event.stopPropagation()` 메서드를 활용한다.

### **예제**

```jsx
item.addEventListener("click", (event) => {
  console.log("Item 클릭!");
  event.stopPropagation(); // 버블링 중단
});

list.addEventListener("click", () => console.log("List 클릭!"));
content.addEventListener("click", () => console.log("Content 클릭!"));
```

**출력 결과**

`Item`을 클릭했을 때:

- `Item 클릭!`

`event.stopPropagation()`에 의해 이벤트가 부모 요소로 전파되지 않는다.

**주의점**

- 불필요하게 버블링을 멈추는 것은 피해야 한다.
- 예를 들어, 상위 요소에서 문서 전체를 대상으로 하는 이벤트 핸들러가 필요한 경우 특정 요소에서 버블링이 막히면 의도한 동작이 방해받을 수 있다.

---

## **버블링을 멈추면 생길 수 있는 문제**

버블링을 중단하면 부모 요소에서 처리해야 할 이벤트가 실행되지 않을 수 있다. 예를 들어, 전체 페이지에서 특정 동작을 감지하는 이벤트 핸들러가 있다면, 버블링 중단 구간에서는 의도한 동작이 실행되지 않을 수 있다.

### **예제 문제**

```jsx
document.body.addEventListener("click", () => console.log("Body 클릭!"));

item.addEventListener("click", (event) => {
  console.log("Item 클릭!");
  event.stopPropagation();
});
```

위 코드에서 `item`을 클릭하면 `body`에 등록된 핸들러는 동작하지 않는다.

---

## **요약**

1. **이벤트 버블링**: 이벤트가 자식 요소에서 부모 요소로 전파되는 과정.
2. **`event.target`과 `event.currentTarget`**: 이벤트 발생 요소와 핸들러가 등록된 요소를 구분.
3. **버블링 중단**: `event.stopPropagation()`으로 이벤트 전파를 멈출 수 있다.
4. **주의 사항**: 버블링을 멈추는 것은 제한적으로 사용해야 하며, 이벤트 설계를 명확히 해야 한다.
