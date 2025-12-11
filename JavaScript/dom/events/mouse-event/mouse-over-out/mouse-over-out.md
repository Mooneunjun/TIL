# 마우스 이동 이벤트 II - mouseover, mouseout

> 마우스 이벤트는 사용자의 동작을 감지하고 처리하는 데 중요한 역할을 한다. 이번에는 마우스 포인터가 특정 요소 안으로 들어가거나 밖으로 나갈 때 발생하는 이벤트인 **`mouseover`**와 **`mouseout`** 이벤트에 대해 다뤄본다.

---

### **마우스 오버와 마우스 아웃 이벤트란?**

- **`mouseover`**: 마우스 포인터가 요소 위로 올라올 때 발생하는 이벤트.
- **`mouseout`**: 마우스 포인터가 요소 밖으로 나갈 때 발생하는 이벤트.

이 두 이벤트는 요소 안으로 들어가거나 밖으로 나가는 마우스 포인터를 감지하는 데 사용된다. 하지만 이벤트 버블링의 특성 때문에, 자식 요소에서 발생한 이벤트도 부모 요소로 전파될 수 있다.

---

### **기본 동작 예제**

아래 코드는 마우스 오버와 마우스 아웃 이벤트를 감지하고, 이벤트 객체의 **`type`** 프로퍼티를 출력하는 간단한 예제다.

### **예제: 마우스 오버와 아웃 감지**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Mouse Events</title>
    <style>
      .box {
        width: 150px;
        height: 150px;
        background-color: lightblue;
        margin: 20px;
        display: inline-block;
        text-align: center;
        line-height: 150px;
        border: 1px solid navy;
      }
      .highlight {
        background-color: lightgreen;
      }
    </style>
  </head>
  <body>
    <div class="box" id="box1">Box 1</div>
    <div class="box" id="box2">Box 2</div>

    <script>
      const boxes = document.querySelectorAll(".box");

      boxes.forEach((box) => {
        box.addEventListener("mouseover", (event) => {
          console.log(`${event.type} 이벤트 발생: ${event.target.id}`);
        });

        box.addEventListener("mouseout", (event) => {
          console.log(`${event.type} 이벤트 발생: ${event.target.id}`);
        });
      });
    </script>
  </body>
</html>
```

- **설명**:
  - `mouseover`: 마우스가 요소 위로 올라올 때 발생.
  - `mouseout`: 마우스가 요소 밖으로 나갈 때 발생.
  - 콘솔에 이벤트 타입과 대상 요소의 `id`가 출력된다.

---

### **이벤트 버블링과 주의점**

`mouseover`와 `mouseout` 이벤트는 이벤트 버블링이 발생한다. 즉, 자식 요소 위로 마우스가 이동하거나 벗어날 때 부모 요소에서도 이벤트가 발생한다. 이를 이해하기 위해 다음 예제를 보자.

### **예제: 이벤트 버블링**

```html
<script>
  const parent = document.querySelector("#box1");

  parent.addEventListener("mouseover", () => {
    console.log("부모 요소에서 mouseover 발생");
  });

  parent.addEventListener("mouseout", () => {
    console.log("부모 요소에서 mouseout 발생");
  });
</script>
```

- **설명**:
  - 자식 요소로 마우스가 이동할 때도 부모 요소의 `mouseover` 이벤트가 발생한다.
  - 자식 요소 밖으로 나갈 때도 부모 요소의 `mouseout` 이벤트가 발생한다.

---

### **`relatedTarget` 프로퍼티**

마우스 이벤트에서 자주 사용되는 **`relatedTarget`** 프로퍼티는 **마우스가 이동하기 직전 또는 직후에 위치했던 요소**를 나타낸다.

- **`mouseover`**: 마우스가 이동하기 직전의 요소를 나타냄.
- **`mouseout`**: 마우스가 이동한 직후의 요소를 나타냄.

### **예제: 이동 경로 추적**

```html
<script>
  const box = document.querySelector("#box2");

  box.addEventListener("mouseover", (event) => {
    console.log(
      `mouseover: from ${event.relatedTarget?.id || "null"} to ${
        event.target.id
      }`
    );
  });

  box.addEventListener("mouseout", (event) => {
    console.log(
      `mouseout: from ${event.target.id} to ${
        event.relatedTarget?.id || "null"
      }`
    );
  });
</script>
```

- **설명**:
  - `relatedTarget`은 마우스가 어디서 왔고 어디로 이동했는지를 추적할 수 있다.
  - `?.`는 **옵셔널 체이닝**으로, 요소가 없을 때도 에러 없이 `null`을 반환한다.

---

### **`mouseover`와 `mouseout`의 활용**

1. **시각적 강조**
   - `mouseover`와 `mouseout` 이벤트를 사용하여 특정 요소를 강조하거나 스타일을 변경할 수 있다.

### **예제: 스타일 변경**

```html
<script>
  box.addEventListener("mouseover", () => {
    box.classList.add("highlight");
  });

  box.addEventListener("mouseout", () => {
    box.classList.remove("highlight");
  });
</script>
```

---

### **주의 사항**

- **버블링으로 인한 혼란**:
  - 이벤트 버블링 때문에 의도하지 않은 요소에서 이벤트가 발생할 수 있다.
  - 필요한 경우 `event.target`과 `event.currentTarget`을 비교해 원하는 요소에서만 동작하도록 설정해야 한다.
- **`relatedTarget` 사용 시 주의**:
  - `relatedTarget` 값이 `null`일 수 있으므로 조건부 체크를 추가해야 한다.

---

## **요약**

1. **`mouseover`와 `mouseout`**:
   - 특정 요소 위로 마우스가 올라오거나 벗어날 때 발생하는 이벤트.
2. **`relatedTarget`**:
   - 마우스 이동 경로를 파악할 수 있는 이벤트 객체 프로퍼티.
3. **활용**:
   - 스타일 변경, 강조 효과 등 다양한 UI 개선에 사용.
4. **주의**:
   - 이벤트 버블링을 잘 이해하고 필요에 따라 `event.target`과 `event.currentTarget`을 활용.
