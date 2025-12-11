# input 태그 다루기

## **`<input>` 태그와 이벤트**

`<input>` 태그는 다양한 타입을 통해 사용자 입력을 받을 수 있는 HTML 요소로, 아래와 같은 타입들이 자주 사용된다:

- **`text`**: 일반적인 텍스트 입력.
- **`password`**: 입력 값을 숨기는 패스워드 타입.
- **`checkbox`**: 체크 가능한 입력.
- **`button`**: 클릭 가능한 버튼.

---

## **포커스와 관련된 이벤트**

포커스 이벤트는 `<input>` 요소가 사용자 동작(키보드, 마우스 등)에 반응하여 활성화되거나 비활성화될 때 발생한다.

### **이벤트 타입**

- **`focusin`**: 요소에 포커스가 들어올 때 발생.
- **`focusout`**: 요소에서 포커스가 빠져나갈 때 발생.
- **`focus`**: 포커스가 들어올 때 발생(버블링 X).
- **`blur`**: 포커스가 빠져나갈 때 발생(버블링 X).

---

### **예제 1: 포커스 이벤트 핸들러**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Focus Events</title>
    <style>
      input {
        display: block;
        margin: 20px 0;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }
    </style>
  </head>
  <body>
    <form id="form">
      <input type="text" id="username" placeholder="사용자 이름 입력" />
      <input type="password" id="password" placeholder="비밀번호 입력" />
    </form>
    <script>
      const form = document.getElementById("form");
      const inputs = form.querySelectorAll("input");

      function logFocusEvent(e) {
        console.log(`Event: ${e.type}, Target: ${e.target.id}`);
      }

      inputs.forEach((input) => {
        input.addEventListener("focusin", logFocusEvent);
        input.addEventListener("focusout", logFocusEvent);
      });
    </script>
  </body>
</html>
```

---

## **입력과 관련된 이벤트**

### **이벤트 타입**

- **`input`**: 입력값이 변경되는 즉시 발생.
- **`change`**: 입력값이 변경된 후, 입력이 완료되었을 때 발생(포커스가 빠져나가거나 엔터를 누른 경우).

---

### **예제 2: 입력 이벤트 핸들러**

```html
<script>
  const usernameInput = document.getElementById("username");

  usernameInput.addEventListener("input", (e) => {
    console.log(`Input Event: ${e.target.value}`);
  });

  usernameInput.addEventListener("change", (e) => {
    console.log(`Change Event: ${e.target.value}`);
  });
</script>
```

- **`input` 이벤트**는 사용자가 값을 입력하는 순간마다 호출된다.
- **`change` 이벤트**는 입력 완료 후 값이 변경된 상태에서 호출된다.

---

## **포커스와 입력 이벤트의 차이점 및 활용**

1. **포커스 이벤트**
   - *`focusin`과 `focusout`*은 이벤트 위임을 통해 여러 요소를 효율적으로 관리할 수 있다.
   - *`focus`와 `blur`*는 버블링되지 않으므로 특정 요소에만 적용된다.
2. **입력 이벤트**
   - 실시간으로 값이 변경되는 동작이 필요하다면 `input` 이벤트를 활용.
   - 값의 최종 변경 여부를 확인하려면 `change` 이벤트를 사용.

---

### **예제 3: 포커스와 입력 이벤트 통합**

```html
<script>
  form.addEventListener("focusin", (e) => {
    console.log(`${e.target.id}에 포커스가 들어왔습니다.`);
  });

  form.addEventListener("focusout", (e) => {
    console.log(`${e.target.id}에서 포커스가 빠져나갔습니다.`);
  });

  usernameInput.addEventListener("input", (e) => {
    console.log(`현재 입력 중: ${e.target.value}`);
  });

  usernameInput.addEventListener("change", (e) => {
    console.log(`최종 입력 값: ${e.target.value}`);
  });
</script>
```

---

## **주의 사항**

1. **포커스와 블러 이벤트의 버블링**
   - *`focus`*와 \**`blur`*는 버블링되지 않으므로 이벤트 위임에 사용 불가.
   - 다수의 요소를 효율적으로 다룰 때는 \**`focusin`과 `focusout`*을 사용.
2. **`change` 이벤트**
   - 포커스가 빠져나가거나 엔터를 눌러야만 발생하므로 실시간 동작에는 부적합.

---

## **요약**

- `<input>` 태그는 다양한 타입을 가지며, 주로 포커스와 입력 이벤트로 다룰 수 있다.
- **포커스 이벤트**:
  - `focusin`, `focusout`은 버블링이 가능해 이벤트 위임에 적합.
  - `focus`, `blur`는 특정 요소에만 적용되며 버블링되지 않는다.
- **입력 이벤트**:
  - `input`은 실시간 동작에 적합.
  - `change`는 최종 값 변경 확인 시 유용.
