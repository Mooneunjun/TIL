# 마우스 이벤트

> 마우스 버튼과 관련된 이벤트는 웹 페이지에서 사용자의 상호작용을 처리하는 데 매우 중요한 개념이다. 특히, 이벤트 객체의 `button` 프로퍼티를 활용하면 이벤트를 발생시킨 마우스 버튼을 확인할 수 있다. 자바스크립트에서 제공하는 다양한 마우스 이벤트 타입과 발생 순서를 이해하면 더욱 세밀하게 동작을 제어할 수 있다.

---

## **마우스 버튼과 이벤트 타입**

마우스 버튼을 구분하기 위해 이벤트 객체의 `button` 프로퍼티를 사용할 수 있다.

- **왼쪽 버튼**: `0`
- **가운데 버튼(휠)**: `1`
- **오른쪽 버튼**: `2`

### **주요 이벤트 타입**

- **`click`**: 왼쪽 버튼 클릭 시 발생.
- **`dblclick`**: 왼쪽 버튼을 빠르게 두 번 클릭 시 발생.
- **`contextmenu`**: 오른쪽 버튼 클릭 시 발생.
- **`mousedown`**: 마우스 버튼을 누르는 순간 발생.
- **`mouseup`**: 마우스 버튼을 눌렀다 떼는 순간 발생.

---

## **이벤트 발생 순서**

하나의 마우스 동작에서 여러 이벤트가 발생할 수 있다. 발생 순서를 잘 이해하면 이벤트 간의 충돌을 방지할 수 있다.

### **단일 클릭**

왼쪽 버튼 클릭 시 발생하는 이벤트는 다음과 같다:

1. **`mousedown`**
2. **`mouseup`**
3. **`click`**

### **더블 클릭**

왼쪽 버튼을 빠르게 두 번 클릭 시 발생하는 이벤트:

1. **`mousedown`** → **`mouseup`** → **`click`** (첫 번째 클릭)
2. **`mousedown`** → **`mouseup`** → **`click`** (두 번째 클릭)
3. **`dblclick`**

총 7개의 이벤트가 발생한다.

### **오른쪽 버튼 클릭**

오른쪽 버튼을 클릭하면 일반적으로 다음과 같은 이벤트가 발생한다:

- **`mousedown`**
- **`mouseup`**
- **`contextmenu`**

단, 운영 체제에 따라 순서가 달라질 수 있다:

- **Windows**: `mousedown` → `mouseup` → `contextmenu`
- **Mac**: `mousedown` → `contextmenu` → `mouseup`

---

## **예제 코드**

아래는 여러 마우스 이벤트를 처리하는 코드다:

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>마우스 이벤트</title>
  </head>
  <body>
    <button id="testButton">클릭하세요</button>

    <script>
      const button = document.getElementById("testButton");

      // 다양한 마우스 이벤트 처리
      button.addEventListener("mousedown", (event) => {
        console.log(`mousedown: ${event.button}`);
      });

      button.addEventListener("mouseup", (event) => {
        console.log(`mouseup: ${event.button}`);
      });

      button.addEventListener("click", () => {
        console.log("click");
      });

      button.addEventListener("dblclick", () => {
        console.log("dblclick");
      });

      button.addEventListener("contextmenu", (event) => {
        event.preventDefault(); // 기본 동작 방지
        console.log("contextmenu");
      });
    </script>
  </body>
</html>
```

---

## **주의할 점**

1. **이벤트 간 충돌 주의**

   예를 들어, `click`과 `dblclick` 이벤트를 함께 사용할 경우, 클릭 이벤트가 더블 클릭보다 먼저 발생한다. 의도하지 않은 동작을 방지하려면 순서와 동작을 명확히 설계해야 한다.

2. **운영 체제별 차이점**

   오른쪽 버튼 클릭 이벤트(`contextmenu`)의 발생 순서는 운영 체제에 따라 다를 수 있으므로 테스트 환경을 고려해야 한다.

3. **기본 동작 방지**

   `contextmenu`와 같은 이벤트는 기본 동작(예: 메뉴 창 띄우기)을 방지하기 위해 `event.preventDefault()`를 사용할 수 있다.

---

## **요약**

- **마우스 이벤트 객체**의 `button` 프로퍼티를 사용하면 눌린 마우스 버튼을 확인할 수 있다.
- 주요 이벤트 타입: `click`, `dblclick`, `contextmenu`, `mousedown`, `mouseup`.
- 단일 클릭과 더블 클릭 같은 하나의 동작에 여러 이벤트가 발생하며, 순서를 이해해야 충돌을 방지할 수 있다.
- 운영 체제에 따라 오른쪽 버튼 클릭의 이벤트 발생 순서가 다를 수 있다.
- `preventDefault` 메서드를 활용해 브라우저의 기본 동작을 막을 수 있다.
