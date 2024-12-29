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
   - 이벤트가 발생한 요소에 등록된 이벤트 핸들러가 실행됨.
   - 이후 동일한 이벤트 타입의 핸들러가 부모 요소에 등록되어 있으면 순차적으로 실행됨.
   - 이 과정은 최상위 요소(`window` 객체)에 도달할 때까지 반복된다.
2. **예제 코드**

```html
<div id="content">
  <div id="list"><div id="item">클릭하세요</div></div>
</div>
```

```jsx
// 각 요소에 이벤트 핸들러 등록
const content = document.getElementById("content");
const list = document.getElementById("list");
const item = document.getElementById("item");

content.addEventListener("click", () => console.log("Content 클릭"));
list.addEventListener("click", () => console.log("List 클릭"));
item.addEventListener("click", () => console.log("Item 클릭"));
```

**출력 결과:**

- `item` 클릭 시: `Item 클릭` → `List 클릭` → `Content 클릭`
- `list` 클릭 시: `List 클릭` → `Content 클릭`
- `content` 클릭 시: `Content 클릭`

---

### 이벤트 객체의 `target`과 `currentTarget`

버블링 과정에서 헷갈리기 쉬운 점은 이벤트 객체의 `target`과 `currentTarget`의 역할이다.

1. **`target`**
   - 이벤트가 최초로 발생한 요소를 가리킨다.
   - 버블링이 발생해도 변하지 않는다.
2. **`currentTarget`**
   - 현재 실행 중인 이벤트 핸들러가 등록된 요소를 가리킨다.
   - 버블링 단계에 따라 변할 수 있다.

**코드 예제:**

```jsx
item.addEventListener("click", (event) => {
  console.log("Target:", event.target); // 최초 클릭된 요소
  console.log("CurrentTarget:", event.currentTarget); // 현재 핸들러가 동작하는 요소
});
```

---

### 이벤트 버블링 멈추기

버블링을 멈추려면 이벤트 객체의 `stopPropagation` 메서드를 사용하면 된다.

1. **사용 예제**

```jsx
item.addEventListener("click", (event) => {
  console.log("Item 클릭");
  event.stopPropagation(); // 버블링 중단
});
```

**출력 결과:**

- `item` 클릭 시: `Item 클릭`
- `list`와 `content` 핸들러는 실행되지 않음.

1. **주의점**
   - 불필요하게 버블링을 멈추는 것은 피해야 한다.
   - 예를 들어, 상위 요소에서 문서 전체를 대상으로 하는 이벤트 핸들러가 필요한 경우 특정 요소에서 버블링이 막히면 의도한 동작이 방해받을 수 있다.

---

### 요약

- 이벤트 버블링은 이벤트가 발생한 요소부터 부모 요소로 전파되는 과정이다.
- 이벤트 객체의 `target`은 최초 이벤트가 발생한 요소를, `currentTarget`은 현재 핸들러가 동작하는 요소를 나타낸다.
- `stopPropagation`을 사용해 버블링을 멈출 수 있지만, 필요한 경우에만 사용해야 한다.
