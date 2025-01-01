# 이벤트 위임 (Event Delegation)

> 이벤트 위임은 부모 요소에 이벤트를 등록해 자식 요소에서 발생한 이벤트를 처리하는 기법이다.
>
> 이 기법을 활용하면 새로운 자식 요소가 추가되거나 제거되어도 이벤트 핸들러를 다시 등록할 필요가 없어 코드를 더 간결하고 유연하게 관리할 수 있다.
>
> 버블링을 활용하기 때문에 성능 측면에서도 유리하다.

---

## **문제 상황**

```html
<ul id="list">
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
</ul>
<button id="add">Add Item</button>
```

```jsx
const list = document.querySelector("#list");

// 각 아이템에 개별 이벤트 핸들러 등록
for (let item of list.children) {
  item.addEventListener("click", () => {
    item.classList.toggle("done");
  });
}
```

위 코드는 초기 상태에서는 정상적으로 동작한다.

각 `<li>` 아이템을 클릭하면 `done` 클래스가 토글되며 스타일이 변경된다.

하지만 새롭게 추가된 아이템에는 이벤트 핸들러가 동작하지 않는다.

```jsx
// 새로운 아이템 추가
const newItem = document.createElement("li");
newItem.className = "item";
newItem.textContent = "New Item";
list.appendChild(newItem);
// 새로 추가된 아이템에는 이벤트 핸들러가 동작하지 않음
```

---

## **해결책: 이벤트 위임**

이벤트 위임은 자식 요소에 개별적으로 이벤트 핸들러를 등록하지 않고, 부모 요소에 단 하나의 핸들러를 등록하는 방식이다.

버블링을 활용해 부모 요소에서 자식 요소의 이벤트를 처리할 수 있다.

### **이벤트 위임 코드**

```jsx
const list = document.querySelector("#list");

// 부모 요소에 이벤트 핸들러 등록
list.addEventListener("click", (event) => {
  const target = event.target;

  // 클릭된 요소가 "item" 클래스가 있는 <li>인지 확인
  if (target.classList.contains("item")) {
    target.classList.toggle("done");
  }
});
```

### **동작 과정**

1. **클릭 이벤트 발생:** 클릭된 요소에서 이벤트가 발생.
2. **버블링 발생:** 클릭된 요소에서 이벤트가 상위 요소로 전파.
3. **`event.target` 사용:** 이벤트 객체의 `target` 프로퍼티를 사용해 이벤트가 발생한 요소를 식별.
4. **조건 처리:** 클릭된 요소가 원하는 자식 요소인지 확인 후, 해당 요소에만 동작 실행.

---

## **장점**

1. **유연성:** 새로운 자식 요소가 추가되어도 부모 요소의 이벤트 핸들러로 처리 가능.
2. **코드 간소화:** 자식 요소 각각에 이벤트 핸들러를 등록하지 않아 코드가 간결해짐.
3. **성능 향상:** 이벤트 핸들러를 한 번만 등록하므로 메모리 사용량 감소.

---

## **예외 처리: 부모 요소 클릭 시 문제**

이벤트 위임에서는 부모 요소에도 이벤트가 등록되기 때문에, 자식 요소 외의 영역을 클릭했을 때도 이벤트가 발생할 수 있다.

```jsx
// 부모 요소 클릭 시 불필요한 동작 발생
list.addEventListener("click", (event) => {
  const target = event.target;
  target.classList.toggle("done");
});
```

### **해결 방법**

`event.target`을 통해 이벤트가 발생한 요소가 의도한 자식 요소인지 확인.

```jsx
list.addEventListener("click", (event) => {
  const target = event.target;

  // "item" 클래스가 있는 자식 요소에서만 동작
  if (target.classList.contains("item")) {
    target.classList.toggle("done");
  }
});
```

---

## **실제 동작 예제**

```jsx
const list = document.querySelector("#list");
const addButton = document.querySelector("#add");

// 이벤트 위임 활용
list.addEventListener("click", (event) => {
  const target = event.target;

  // 아이템만 클릭했을 때 동작
  if (target.classList.contains("item")) {
    target.classList.toggle("done");
  }
});

// 새로운 아이템 추가
addButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.className = "item";
  newItem.textContent = "New Item";
  list.appendChild(newItem);
});
```

---

## **주의 사항**

1. **이벤트 버블링 방지:**자식 요소 중 특정 이벤트에서 `stopPropagation()`이 호출되면, 버블링이 중단되어 이벤트 위임이 제대로 동작하지 않을 수 있다.가급적 버블링을 막는 사용은 피하는 것이 좋다.
2. **명확한 타깃 확인:**자식 요소 외에 부모 요소 클릭 시 이벤트가 발생하지 않도록 조건 처리 필요.

---

## **요약**

- 이벤트 위임은 부모 요소에 이벤트 핸들러를 등록하여 자식 요소의 이벤트를 처리하는 방식이다.
- 이를 통해 코드의 간결성과 성능 향상을 도모할 수 있다.
- 자식 요소 외의 불필요한 영역에 이벤트가 발생하지 않도록 조건 처리를 잘 설계해야 한다.
