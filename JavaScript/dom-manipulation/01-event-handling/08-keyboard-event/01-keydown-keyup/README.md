> 키보드 이벤트는 사용자가 키보드에서 입력한 동작을 감지하고 처리하는 데 사용된다.

---

### **키보드 이벤트 타입**

키보드 이벤트에는 세 가지 주요 타입이 있다:

- **`keydown`**: 키를 누르는 순간 발생.
- **`keypress`**: 키를 눌렀을 때 발생 (웹 표준에서 권장하지 않음).
- **`keyup`**: 키를 떼는 순간 발생.

### **이벤트 타입의 특징**

- **`keydown`**: 모든 키에서 발생하며, 사용자가 키를 누르는 순간부터 감지한다.
- **`keypress`**: 알파벳, 숫자, 스페이스바 등 출력 가능한 키에서만 발생하며, 기능 키(예: `Esc`, `Shift`)에서는 동작하지 않는다.
- **`keyup`**: 키를 떼는 순간 발생하며, 모든 키에서 감지된다.

---

### **이벤트 객체의 주요 프로퍼티**

키보드 이벤트 객체는 입력된 키에 대한 다양한 정보를 담고 있다. 자주 사용되는 두 가지 프로퍼티는 다음과 같다:

### **1. `key`**

- 사용자가 입력한 **키 값**을 나타낸다.
- 예: 소문자 "a"를 누르면 `"a"`, 대문자 "A"를 누르면 `"A"`.

### **2. `code`**

- 키보드에서 눌린 **키의 물리적 위치**를 나타낸다.
- 예: 왼쪽 `Shift`와 오른쪽 `Shift`는 동일한 `key` 값을 가지지만, `code` 값은 각각 `ShiftLeft`, `ShiftRight`로 다르다.

---

### **예제: 키보드 이벤트 감지하기**

다음은 키보드 이벤트의 타입과 프로퍼티를 콘솔에 출력하는 간단한 코드다.

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>Keyboard Event</title>
  </head>
  <body>
    <input type="text" id="keyboard-input" placeholder="키를 입력해보세요" />
    <script>
      const input = document.querySelector("#keyboard-input");

      function handleKeyEvent(event) {
        console.log(`Event Type: ${event.type}`);
        console.log(`Key: ${event.key}`);
        console.log(`Code: ${event.code}`);
        console.log("--------------------------------");
      }

      input.addEventListener("keydown", handleKeyEvent);
      input.addEventListener("keyup", handleKeyEvent);
    </script>
  </body>
</html>
```

---

### **키보드 이벤트의 주의점**

### **1. `keypress`는 권장되지 않음**

- 출력 가능한 키에서만 동작하며, 일부 언어나 키보드 환경에서는 동작하지 않는 문제가 있다.
- **대안**: `keydown` 이벤트를 사용.

### **2. 이벤트 반복**

- 키를 계속 누르고 있을 경우, `keydown` 이벤트는 반복적으로 발생하지만 `keyup`은 키를 떼는 순간 한 번만 발생.

---

### **활용 예제**

### **1. 특정 키에 따라 동작 정의**

```html
<script>
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      console.log("Enter 키가 눌렸습니다!");
    } else if (event.key === "Escape") {
      console.log("Escape 키가 눌렸습니다!");
    }
  });
</script>
```

### **2. 대소문자 구분 입력 확인**

```html
<script>
  input.addEventListener("keydown", (event) => {
    if (event.key === event.key.toUpperCase()) {
      console.log("대문자 입력!");
    } else {
      console.log("소문자 입력!");
    }
  });
</script>
```

---

## **요약**

1. **주요 이벤트 타입**
   - `keydown`: 모든 키에서 발생.
   - `keypress`: 출력 가능한 키에서만 발생 (권장되지 않음).
   - `keyup`: 키를 떼는 순간 발생.
2. **주요 프로퍼티**
   - `key`: 입력된 키 값을 나타냄.
   - `code`: 키보드의 물리적 위치를 나타냄.
3. **활용**
   - 특정 키에 따라 동작을 정의하거나, 대소문자와 같은 입력 조건을 처리할 수 있다.
4. **주의점**
   - `keypress`는 사용을 피하고 `keydown`을 사용하는 것이 좋다.
