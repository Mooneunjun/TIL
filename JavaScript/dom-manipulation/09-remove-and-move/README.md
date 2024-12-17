# 노드 삭제와 이동하기

> HTML 문서에서 특정 노드를 삭제하거나 다른 위치로 이동시키는 것은 웹 페이지를 동적으로 조작하는 데 필수적인 기능이다. DOM 트리에서 노드를 삭제하거나 이동하는 방법은 매우 직관적이지만, 적절한 메서드를 사용하는 것이 중요하다. DOM에서는 이런 작업을 수행하기 위해 여러 메서드와 프로퍼티를 제공한다.

---

## **1. 노드 삭제**

노드를 삭제하려면 **`remove()`** 메서드를 사용한다. 이 메서드는 선택한 요소를 DOM 트리에서 완전히 제거한다.

### **예제: 노드 삭제**

### **HTML 구조**

```html
<h2>오늘 할 일</h2>
<ul id="today">
  <li>책 읽기</li>
  <li>코드 작성</li>
  <li>운동하기</li>
</ul>
```

### **JavaScript 코드**

```jsx
// '오늘 할 일' 목록 선택
const todayList = document.querySelector("#today");

// 첫 번째 자식 요소 삭제
todayList.children[0].remove(); // '책 읽기' 삭제

// 두 번째 자식 요소 삭제
todayList.children[1].remove(); // '운동하기' 삭제
```

### **설명**

- **`remove()`**: 선택한 요소를 DOM에서 제거한다.
- **`children`**: 부모 노드의 자식 요소를 인덱스를 통해 접근할 수 있다.

---

## **2. 노드 이동**

노드를 이동시킬 때는 **`append`, `prepend`, `before`, `after`** 메서드를 활용한다. 이 메서드들은 기존의 노드를 새로운 위치로 옮기며, 복사가 아닌 **이동**을 수행한다.

### **2-1. 부모 노드의 마지막에 노드 추가: `append()`**

`append()` 메서드는 특정 노드를 부모 노드의 **마지막 자식 요소**로 이동시킨다.

### **예제: 노드 이동**

```jsx
const todayList = document.querySelector("#today"); // '오늘 할 일' 선택
const tomorrowList = document.querySelector("#tomorrow"); // '내일 할 일' 선택

// '내일 할 일'의 첫 번째 자식 요소를 '오늘 할 일' 마지막에 추가
const moveItem = tomorrowList.children[0]; // '코드 작성'
todayList.append(moveItem);
```

---

### **2-2. 부모 노드의 첫 번째에 노드 추가: `prepend()`**

`prepend()`는 노드를 부모 노드의 **첫 번째 자식 요소**로 이동시킨다.

### **예제**

```jsx
// '오늘 할 일'의 첫 번째에 새로운 요소 추가
const newItem = document.createElement("li");
newItem.textContent = "산책하기";

todayList.prepend(newItem);
```

---

### **2-3. 형제 노드 앞뒤에 추가: `before()`와 `after()`**

- `*before()*`와 **`after()`** 메서드는 선택한 노드의 **앞이나 뒤**에 노드를 추가한다.

### **예제: 형제 노드 이동**

```jsx
const moveItem = todayList.children[1]; // '운동하기'
const referenceItem = todayList.children[0]; // '산책하기'

// '운동하기'를 '산책하기' 뒤에 추가
referenceItem.after(moveItem);

// '운동하기'를 '산책하기' 앞에 추가
referenceItem.before(moveItem);
```

---

## **3. 노드 삭제와 이동 시 주의사항**

1. **삭제된 노드는 복구할 수 없다**
   - `remove()` 메서드로 노드를 삭제하면 DOM에서 완전히 제거된다.
2. **노드 이동은 새로운 위치로 옮겨진다**
   - 노드를 이동할 때는 복사본이 남지 않고 기존 노드가 제거되며 새로운 위치로 이동된다.
3. **노드 선택 방법**
   - **`children`**: 부모 노드의 자식 요소를 인덱스 기반으로 접근할 수 있다.
   - **`querySelector`**: 명확한 선택자를 통해 특정 요소를 선택할 수 있다.

---

## **4. 요약**

| **메서드**      | **설명**                               | **사용 예시**                   |
| --------------- | -------------------------------------- | ------------------------------- |
| **`remove()`**  | 선택한 노드를 삭제                     | `node.remove()`                 |
| **`append()`**  | 부모 노드의 마지막 자식으로 노드 추가  | `parent.append(child)`          |
| **`prepend()`** | 부모 노드의 첫 번째 자식으로 노드 추가 | `parent.prepend(child)`         |
| **`before()`**  | 기준 노드 앞에 형제 노드 추가          | `referenceNode.before(newNode)` |
| **`after()`**   | 기준 노드 뒤에 형제 노드 추가          | `referenceNode.after(newNode)`  |

---

## **결론**

노드를 삭제하려면 `remove()` 메서드를 사용하고, 노드를 다른 위치로 이동하려면 `append`, `prepend`, `before`, `after` 메서드를 사용하면 된다. 노드를 삭제하거나 이동할 때는 구조와 상황을 명확히 이해하고 적절한 메서드를 선택해야 한다.
