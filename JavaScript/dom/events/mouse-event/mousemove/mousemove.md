# 마우스 이동 이벤트 I - mousemove

마우스 이동과 관련된 주요 이벤트는 다음과 같다:

- **`mousemove`**: 마우스가 움직일 때 발생.
- **`mouseover`**: 마우스 포인터가 요소 위로 올라갈 때 발생.
- **`mouseout`**: 마우스 포인터가 요소 밖으로 벗어날 때 발생.

> 마우스 이벤트는 웹 페이지에서 사용자 동작을 감지하고 처리하는 데 중요한 역할을 한다. 이번 글에서는 마우스 이동과 관련된 주요 이벤트 타입과 이벤트 객체의 위치 정보를 정리했다.

---

## **`mousemove` 이벤트**

`mousemove` 이벤트는 마우스가 이동할 때마다 발생한다. 이 이벤트를 활용하면 마우스 이동에 따라 동작을 정의할 수 있다. 가장 간단한 활용은 마우스가 움직일 때 메시지를 출력하는 것이다.

### **예제: 마우스 이동 감지**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Mouse Move</title>
    <style>
      #box {
        width: 300px;
        height: 300px;
        background-color: lightblue;
        margin: 50px auto;
        text-align: center;
        line-height: 300px;
        font-size: 1.2rem;
        color: darkblue;
        border: 2px solid navy;
      }
    </style>
  </head>
  <body>
    <div id="box">마우스를 움직여보세요.</div>
    <script>
      const box = document.querySelector("#box");

      box.addEventListener("mousemove", () => {
        console.log("마우스가 움직이고 있습니다.");
      });
    </script>
  </body>
</html>
```

### **예제 설명 및 동작**

- **이벤트 핸들러**: `mousemove` 이벤트를 `box`에 등록했으며, 마우스가 이동할 때마다 콘솔에 메시지가 출력된다.
- **동작 결과**: 페이지를 실행하고 박스 위에 마우스를 움직이면, "마우스가 움직이고 있습니다."라는 메시지가 콘솔에 반복적으로 출력된다.

---

## **이벤트 객체의 위치 정보**

`mousemove` 이벤트에서는 이벤트 객체를 통해 마우스의 위치를 확인할 수 있다. 위치 정보를 제공하는 주요 프로퍼티는 다음과 같다:

- **`clientX`, `clientY`**: 브라우저 **뷰포트 기준** 위치.
- **`pageX`, `pageY`**: **문서 기준** 위치(스크롤 포함).
- **`offsetX`, `offsetY`**: **이벤트 발생 요소 기준** 위치.

### **예제: 위치 정보 출력**

```html
<script>
  box.addEventListener("mousemove", (event) => {
    console.log(`Client - X: ${event.clientX}, Y: ${event.clientY}`);
    console.log(`Page - X: ${event.pageX}, Y: ${event.pageY}`);
    console.log(`Offset - X: ${event.offsetX}, Y: ${event.offsetY}`);
  });
</script>
```

### **예제 설명 및 동작**

- **핸들러 동작**:
  - `clientX`, `clientY`: 현재 브라우저 창 기준으로 마우스 위치를 표시한다.
  - `pageX`, `pageY`: 문서 전체 기준(스크롤 포함)으로 마우스 위치를 표시한다.
  - `offsetX`, `offsetY`: 마우스 위치를 이벤트가 발생한 요소 기준으로 계산해 출력한다.
- **동작 결과**: 박스 위에서 마우스를 움직이면 콘솔에 위 세 가지 위치 정보가 출력된다.

---

## **위치 정보를 활용한 동작 제어**

위치 정보를 활용하면 특정 위치에서 동작을 정의하거나, 마우스 이동 방향을 계산할 수 있다.

### **예제: 특정 위치 도달 시 동작 변경**

```html
<script>
  const targetX = 150; // 특정 X 좌표
  const targetY = 150; // 특정 Y 좌표

  box.addEventListener("mousemove", (event) => {
    if (event.clientX > targetX && event.clientY > targetY) {
      box.style.backgroundColor = "lightgreen";
    } else {
      box.style.backgroundColor = "lightblue";
    }
  });
</script>
```

### **예제 설명 및 동작**

- **핸들러 동작**:
  - 마우스 위치가 특정 좌표 `(150, 150)`을 초과하면 `box`의 배경색을 연두색으로 변경한다.
  - 특정 위치를 벗어나면 다시 원래 배경색인 연한 파란색으로 돌아간다.
- **동작 결과**: 박스 내부의 특정 영역에서만 배경색이 변경되며, 그 외 영역에서는 기본 배경색이 유지된다.

---

## **주의 사항**

1. **이벤트 발생 빈도**:
   - `mousemove` 이벤트는 매우 자주 발생하므로, 이벤트 핸들러 내에 무거운 작업(예: 복잡한 DOM 조작이나 데이터 처리)을 넣지 않는다. 필요하면 `throttle` 또는 `debounce`를 사용해 호출 빈도를 조절한다.
2. **스크롤 위치와 좌표 계산**:
   - `clientX`는 브라우저 화면 기준이고, `pageX`는 스크롤을 포함한 문서 전체 기준이다. 동작에 맞는 프로퍼티를 선택적으로 활용해야 한다.
3. **이벤트 대상 구분**:
   - 이벤트 대상이 특정 요소에만 제한되도록 하려면 `event.target`이나 `currentTarget`을 활용해 조건을 추가한다.

---

## **요약**

1. **마우스 이동 이벤트**:
   - `mousemove` 이벤트는 마우스 이동 시 발생하며, 이벤트 객체로 위치 정보를 제공한다.
2. **위치 정보 프로퍼티**:
   - `clientX`, `pageX`, `offsetX` 등 위치 기준에 따라 다양한 정보를 제공한다.
3. **실제 응용**:
   - 특정 위치에서 동작 정의.
   - 마우스 이동 방향 계산.
4. **주의할 점**:
   - 빈번한 이벤트 호출로 성능 문제가 발생하지 않도록 최적화해야 한다.

---

# client, page, offset의 차이

> 마우스 이벤트를 다룰 때 이벤트 객체가 제공하는 여러 프로퍼티 중 `client`, `page`, `offset`는 마우스의 위치 정보를 담고 있다. 이 세 가지는 서로 다른 기준을 사용하여 좌표를 계산하기 때문에, 차이를 명확히 이해하고 상황에 맞게 사용하는 것이 중요하다.

---

### **`clientX`, `clientY`**

`clientX`와 `clientY`는 현재 **브라우저 화면, 즉 클라이언트 영역 내**에서 마우스의 좌표를 나타낸다.

클라이언트 영역이란 브라우저가 콘텐츠를 표시할 수 있는 영역으로, 스크롤이 적용된 상태라면 현재 보여지는 화면 부분만을 의미한다.

- **`clientX`**: 브라우저 화면(뷰포트) 내에서 마우스의 X 좌표.
- **`clientY`**: 브라우저 화면(뷰포트) 내에서 마우스의 Y 좌표.

이 값들은 화면에 보이는 부분만을 기준으로 계산되며, 화면의 **좌측 상단** 모서리를 (0, 0)으로 한다. 따라서 스크롤이 있어도 보여지는 영역의 좌표는 변하지 않는다.

### **예제**

```jsx
document.addEventListener("mousemove", (event) => {
  console.log(`Client - X: ${event.clientX}, Y: ${event.clientY}`);
});
```

> 이 코드는 마우스가 움직일 때 브라우저 화면 내에서의 좌표를 출력한다. 스크롤 위치와는 무관하게 현재 화면에 보이는 범위에서의 좌표를 계산한다.

---

### **`pageX`, `pageY`**

`pageX`와 `pageY`는 **전체 문서(document)를 기준**으로 마우스의 좌표를 나타낸다.

전체 문서 기준이라는 것은, 현재 보이지 않는 영역까지 포함한 스크롤된 상태를 고려한 좌표를 의미한다. 따라서 스크롤이 적용된 경우, 스크롤 위치를 포함한 정확한 위치를 계산할 수 있다.

- **`pageX`**: 문서 전체 기준으로 마우스의 X 좌표.
- **`pageY`**: 문서 전체 기준으로 마우스의 Y 좌표.

스크롤이 적용되었을 때는 클라이언트 영역의 좌표와는 다른 값을 가진다.

### **예제**

```jsx
document.addEventListener("mousemove", (event) => {
  console.log(`Page - X: ${event.pageX}, Y: ${event.pageY}`);
});
```

> 스크롤 위치를 포함하여 문서 기준으로 마우스 위치를 출력한다. 전체 문서에서의 좌표를 필요로 할 때 유용하다.

---

### **`offsetX`, `offsetY`**

`offsetX`와 `offsetY`는 **이벤트가 발생한 타겟 요소(target)를 기준**으로 마우스의 위치를 나타낸다.

이벤트가 발생한 요소의 좌측 상단 모서리가 (0, 0)으로 설정되며, 해당 요소 안에서의 상대적인 위치를 계산한다.

- **`offsetX`**: 이벤트 발생 타겟 요소 내에서 마우스의 X 좌표.
- **`offsetY`**: 이벤트 발생 타겟 요소 내에서 마우스의 Y 좌표.

이 프로퍼티는 특정 요소 내부에서 마우스의 상대적인 좌표를 필요로 할 때 매우 유용하다.

### **예제**

```jsx
const box = document.querySelector("#box");
box.addEventListener("mousemove", (event) => {
  console.log(`Offset - X: ${event.offsetX}, Y: ${event.offsetY}`);
});
```

> 마우스가 특정 요소 안에서 이동할 때의 상대적인 좌표를 출력한다.

---

### **차이점 요약**

| 프로퍼티    | 기준                       | 스크롤 포함 여부 |
| ----------- | -------------------------- | ---------------- |
| `clientX/Y` | 브라우저 화면(뷰포트) 기준 | 포함하지 않음    |
| `pageX/Y`   | 문서 전체 기준             | 포함함           |
| `offsetX/Y` | 이벤트 발생 타겟 요소 기준 | 포함하지 않음    |

---

## **활용 예제**

### **특정 위치에서 동작 변경**

마우스가 특정 위치에 도달했을 때 동작을 바꾸는 간단한 코드.

```jsx
const box = document.querySelector("#box");
box.addEventListener("mousemove", (event) => {
  if (event.offsetX > 150) {
    box.style.backgroundColor = "lightgreen";
  } else {
    box.style.backgroundColor = "lightblue";
  }
});
```

---

### **스크롤 위치를 포함한 좌표 계산**

문서 기준의 정확한 위치를 계산하여 특정 동작을 정의.

```jsx
document.addEventListener("mousemove", (event) => {
  const position = event.pageX + window.scrollX;
  console.log(`스크롤을 포함한 X 좌표: ${position}`);
});
```

---

### **마우스 이동 방향 파악**

현재 위치와 이전 위치를 비교해 마우스의 이동 방향을 계산.

```jsx
let prevX = 0;
let prevY = 0;

document.addEventListener("mousemove", (event) => {
  const directionX = event.clientX > prevX ? "오른쪽" : "왼쪽";
  const directionY = event.clientY > prevY ? "아래쪽" : "위쪽";

  console.log(`X 방향: ${directionX}, Y 방향: ${directionY}`);
  prevX = event.clientX;
  prevY = event.clientY;
});
```

---

### **주의 사항**

1. **스크롤 여부에 따른 좌표 차이**
   - `client`와 `page`는 스크롤 여부에 따라 다른 값을 반환한다. 전체 문서 기준인지, 현재 보이는 화면 기준인지 명확히 이해하고 사용해야 한다.
2. **타겟 요소의 중요성**
   - `offset`은 이벤트가 발생한 요소를 기준으로 계산되므로, 이벤트 타겟이 달라지면 값도 바뀔 수 있다.

---

!https://velog.velcdn.com/images/moon_dev/post/001bbcdc-fd09-4dd1-8f7a-4872a0454975/image.png

### **요약**

- **`client`**: 브라우저 화면(뷰포트)을 기준으로 계산되며, 스크롤 위치는 포함되지 않는다.
- **`page`**: 문서 전체를 기준으로 계산되며, 스크롤 위치가 포함된다.
- **`offset`**: 이벤트가 발생한 타겟 요소를 기준으로 계산된다.
- **활용**: 마우스의 위치 정보를 기반으로 다양한 동작을 구현할 수 있다.
- **주의 사항**: 스크롤 여부와 타겟 요소의 기준을 정확히 이해하고 적절한 프로퍼티를 사용해야 한다.
