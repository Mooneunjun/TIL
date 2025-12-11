# mouseenter & mouseleave

> 마우스 이동과 관련된 이벤트 타입에는 mouseover, mouseout, mouseenter, mouseleave가 있다. 이 네 가지 이벤트는 이름에서도 알 수 있듯이 마우스 포인터의 이동을 감지하는 역할을 한다. 이번에는 mouseover/mouseout과 mouseenter/mouseleave의 차이를 살펴보자.

---

### **1. 공통점**

- `*mouseover*`와 **`mouseenter`는 마우스 포인터가** 요소 밖에서 안으로 들어갈 때\*\* 발생.
- `*mouseout*`과 **`mouseleave`는 마우스 포인터가** 요소 안에서 밖으로 나갈 때\*\* 발생.

---

### **2. 주요 차이점**

### **(1) 버블링 여부**

- **`mouseover/mouseout`**: 버블링이 발생한다.
  - 이벤트가 발생한 요소뿐만 아니라 **자식 요소**로 전파될 수 있다.
  - 이로 인해 **이벤트 위임**과 같은 활용이 가능하다.
- **`mouseenter/mouseleave`**: 버블링이 발생하지 않는다.
  - 이벤트는 특정 요소에서만 발생하며, 자식 요소로 전파되지 않는다.

### **(2) 자식 요소 영역 계산**

- **`mouseover/mouseout`**:
  - **자식 요소의 영역을 포함**하여 이벤트가 발생한다.
  - 마우스가 자식 요소로 이동하거나, 자식 요소에서 부모 요소로 다시 이동할 때도 이벤트가 동작한다.
- **`mouseenter/mouseleave`**:
  - **자식 요소의 영역을 무시**하고 이벤트가 발생한다.
  - 마우스가 자식 요소로 이동하거나, 자식 요소에서 다시 부모 요소로 이동할 때는 이벤트가 발생하지 않는다.

---

### **3. 예제 코드**

### **HTML 구조**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Mouse Events Comparison</title>
    <style>
      .box {
        display: inline-block;
        width: 200px;
        height: 150px;
        margin: 20px;
        padding: 10px;
        border: 2px solid navy;
        background-color: lightblue;
        position: relative;
      }

      .title {
        display: block;
        margin-top: 10px;
        padding: 5px;
        background-color: white;
        border: 1px solid darkblue;
        text-align: center;
      }
    </style>
  </head>
  <body>
    <h1>Mouse Event Comparison</h1>
    <div id="box1" class="box">
      <span class="title">mouseover event count: 0</span>
    </div>
    <div id="box2" class="box">
      <span class="title">mouseenter event count: 0</span>
    </div>
    <script src="mouse-events-comparison.js"></script>
  </body>
</html>
```

### **JavaScript 코드**

```jsx
// HTML 요소 선택
const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");

let mouseoverCount = 0;
let mouseenterCount = 0;

// mouseover 이벤트 핸들러
box1.addEventListener("mouseover", () => {
  mouseoverCount++;
  const msg = `mouseover event count: ${mouseoverCount}`;
  box1.querySelector(".title").textContent = msg;
  console.log("mouseover 발생!");
});

// mouseenter 이벤트 핸들러
box2.addEventListener("mouseenter", () => {
  mouseenterCount++;
  const msg = `mouseenter event count: ${mouseenterCount}`;
  box2.querySelector(".title").textContent = msg;
  console.log("mouseenter 발생!");
});
```

---

### **4. 실행 결과와 분석**

### **1) `mouseover` 이벤트**

- **특징**: 자식 요소에서 이벤트가 발생할 때도 이벤트 핸들러가 동작.
- **결과**:
  - 부모 요소에 진입할 때 이벤트 발생.
  - 자식 요소로 이동 시에도 이벤트 발생.

### **2) `mouseenter` 이벤트**

- **특징**: 자식 요소로의 이동은 이벤트 발생에 영향을 미치지 않음.
- **결과**:
  - 부모 요소에 진입할 때만 이벤트 발생.
  - 자식 요소로 이동하거나 다시 부모 요소로 돌아와도 추가 이벤트는 발생하지 않음.

---

### **주의할 점**

1. **버블링의 유무를 고려한 선택**
   - 자식 요소까지 포함한 이벤트 처리가 필요하다면 *`*mouseover/mouseout\*`을 사용.
   - 특정 요소에만 제한적으로 이벤트를 처리하고 싶다면 *`*mouseenter/mouseleave\*`를 사용.
2. **이벤트 핸들러의 중복 호출 주의**
   - `mouseover`와 `mouseout`은 자식 요소로의 이동 시에도 이벤트가 발생하므로, 중복 호출 문제가 발생할 수 있다.
   - `mouseenter`와 `mouseleave`는 이러한 문제를 피할 수 있다.

---

### **요약**

- **`mouseover/mouseout`**: 버블링 발생, 자식 요소 영역까지 계산.
- **`mouseenter/mouseleave`**: 버블링 없음, 자식 요소 영역 무시.
- **활용**:
  - 자식 요소까지 이벤트 처리가 필요하면 **`mouseover/mouseout`**.
  - 특정 요소에만 이벤트 처리가 필요하면 **`mouseenter/mouseleave`**.
