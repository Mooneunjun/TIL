# 마우스 이동 이벤트

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
