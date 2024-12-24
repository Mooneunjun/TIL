# 이벤트 객체

> 이벤트 객체는 웹 페이지에서 특정 이벤트가 발생할 때 생성되는 객체로, 이벤트와 관련된 정보를 담고 있다. 이벤트 객체를 통해 발생한 이벤트의 세부적인 정보를 확인하고, 이를 기반으로 더 정교한 이벤트 처리가 가능하다.

---

## 이벤트 객체의 기본 개념

이벤트가 발생하면 **브라우저가 이벤트 객체를 생성**하고, 해당 이벤트를 처리하는 **이벤트 핸들러의 첫 번째 파라미터로 전달**한다.

### **예시 코드**

```jsx
const input = document.querySelector("#input");
const button = document.querySelector("#button");

input.addEventListener("keydown", (event) => {
  console.log("키보드 이벤트 발생:", event);
});

button.addEventListener("click", (event) => {
  console.log("마우스 이벤트 발생:", event);
});
```

### **결과**

1. 키보드를 누를 때:
   - `keydown` 이벤트 객체가 생성되어 콘솔에 출력된다.
2. 버튼을 클릭할 때:
   - `click` 이벤트 객체가 생성되어 콘솔에 출력된다.

---

## 이벤트 객체의 주요 프로퍼티

이벤트 객체는 매우 다양한 프로퍼티를 제공하며, 상황에 따라 유용하게 활용할 수 있다. **자주 사용되는 주요 프로퍼티**는 아래와 같다:

### 1. **`type`**

- 발생한 이벤트의 타입을 나타낸다.
- 예: `"click"`, `"keydown"`, `"mouseover"`

```jsx
button.addEventListener("click", (event) => {
  console.log("이벤트 타입:", event.type); // 출력: click
});
```

### 2. **`target`**

- 이벤트가 발생한 HTML 요소를 참조한다.
- 예: 사용자가 클릭한 버튼 또는 입력한 인풋 필드

```jsx
button.addEventListener("click", (event) => {
  console.log("이벤트가 발생한 요소:", event.target); // 출력: <button id="button">...</button>
});
```

---

## 이벤트 객체의 활용

### **1. 이벤트가 발생한 요소 수정**

`target` 프로퍼티를 활용하면 이벤트가 발생한 요소를 직접 다룰 수 있다.

```jsx
const button = document.querySelector("#button");

button.addEventListener("click", (event) => {
  event.target.textContent = "클릭됨!";
});
```

- 버튼을 클릭하면 텍스트가 "클릭됨!"으로 변경된다.

---

### **2. 키보드 이벤트에서 유용한 프로퍼티**

키보드 이벤트 객체에는 키와 관련된 정보를 제공하는 프로퍼티가 포함되어 있다.

- **`key`**: 눌린 키의 값을 나타냄 (예: `"a"`, `"Enter"`)
- **`code`**: 키보드에서의 물리적 키 위치를 나타냄 (예: `"KeyA"`, `"Space"`)

```jsx
document.addEventListener("keydown", (event) => {
  console.log("눌린 키:", event.key); // 예: a
  console.log("키 코드:", event.code); // 예: KeyA
});
```

---

### **3. 마우스 이벤트에서 유용한 프로퍼티**

마우스 이벤트 객체에는 마우스의 위치 및 버튼에 대한 정보를 제공하는 프로퍼티가 포함되어 있다.

- **`clientX`, `clientY`**: 화면 기준으로 마우스 포인터의 x, y 좌표
- **`button`**: 눌린 마우스 버튼 (왼쪽: `0`, 가운데: `1`, 오른쪽: `2`)

```jsx
document.addEventListener("click", (event) => {
  console.log("클릭한 위치 - X:", event.clientX, "Y:", event.clientY);
  console.log("눌린 버튼:", event.button); // 예: 0 (왼쪽 버튼)
});
```

---

## 주의 사항

1. **이벤트 핸들러에서 이벤트 객체의 이름은 자유롭다.**

   - 일반적으로 `event` 또는 `e`를 사용하지만 다른 이름도 가능하다.

   ```jsx
   button.addEventListener("click", (myEvent) => {
     console.log(myEvent.type); // click
   });
   ```

2. **필요한 프로퍼티만 활용한다.**
   - 이벤트 객체는 매우 많은 정보를 포함하고 있으므로 필요한 프로퍼티를 선택적으로 사용한다.
3. **익숙해질 때까지 검색하며 학습**
   - 모든 프로퍼티를 외울 필요는 없으며, 필요할 때 검색하거나 문서를 참조하여 사용하는 것이 효율적이다.

---

## 요약

- **이벤트 객체**는 특정 이벤트가 발생했을 때 생성되는 객체로, 이벤트와 관련된 다양한 정보를 제공한다.
- 이벤트 핸들러의 첫 번째 파라미터로 전달되며, 이를 통해 이벤트 타입, 발생 위치, 대상 요소 등의 정보를 활용할 수 있다.
- 주요 프로퍼티인 `type`, `target`, `key`, `clientX` 등을 상황에 맞게 사용하면 더 정교한 이벤트 처리가 가능하다.

---

---

# 이벤트 객체의 프로퍼티

> 이벤트 객체는 이벤트가 발생했을 때 자동으로 생성되며, 관련된 정보를 담고 있다. 이 객체는 이벤트 핸들러의 첫 번째 파라미터로 전달되며, 이벤트 타입에 따라 포함된 프로퍼티가 다르다. 이번 글에는 자주 사용되는 이벤트 객체의 프로퍼티를 정리한다.

---

## **공통 프로퍼티**

이 프로퍼티들은 이벤트 타입과 상관없이 모든 이벤트 객체에 포함되어 있다.

- **`type`**: 이벤트 이름을 나타냄. 예를 들어 `'click'`, `'keydown'`, `'mouseover'` 등이 있다.
- **`target`**: 이벤트가 발생한 요소를 가리킴.
- **`currentTarget`**: 이벤트 핸들러가 등록된 요소를 가리킴.
- **`timeStamp`**: 이벤트가 발생한 시간을 밀리초 단위로 제공 (페이지가 로드된 이후 경과한 시간).
- **`bubbles`**: 이벤트가 버블링 단계인지 여부를 나타내는 불리언 값.

---

## **마우스 이벤트 관련 프로퍼티**

마우스 이벤트는 마우스 클릭, 이동, 드래그 등과 관련된 프로퍼티를 제공한다.

- **`button`**: 누른 마우스 버튼을 나타냄.
  - `0`: 왼쪽 버튼
  - `1`: 가운데 버튼(휠)
  - `2`: 오른쪽 버튼
- **`clientX`, `clientY`**: 브라우저 표시 영역에서 마우스 커서의 위치.
- **`pageX`, `pageY`**: 문서 전체에서 마우스 커서의 위치.
- **`offsetX`, `offsetY`**: 이벤트 발생 요소를 기준으로 한 마우스 커서의 위치.
- **`screenX`, `screenY`**: 모니터 화면 내 마우스 커서의 위치.
- **`altKey`**, **`ctrlKey`**, **`shiftKey`**, **`metaKey`**: 특정 키(Alt, Ctrl, Shift, Meta)가 눌렸는지 여부를 나타내는 불리언 값.

---

## **키보드 이벤트 관련 프로퍼티**

키보드 이벤트는 키를 누르거나 떼는 동작과 관련된 정보를 제공한다.

- **`key`**: 누른 키의 값을 나타냄. 예: `'a'`, `'Enter'`.
- **`code`**: 누른 키의 물리적 위치를 나타냄. 예: `'KeyA'`, `'Enter'`.
- **`altKey`**, **`ctrlKey`**, **`shiftKey`**, **`metaKey`**: 마우스 이벤트와 동일하게, 특정 키가 눌렸는지 여부를 나타냄.

---

## **코드 예제**

### 키보드 이벤트 예제

```jsx
const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  console.log(`Key: ${event.key}`); // 누른 키의 값
  console.log(`Code: ${event.code}`); // 키의 물리적 위치
  console.log(
    `Alt: ${event.altKey}, Ctrl: ${event.ctrlKey}, Shift: ${event.shiftKey}`
  );
});
```

### 마우스 이벤트 예제

```jsx
const button = document.querySelector("button");

button.addEventListener("click", (event) => {
  console.log(`Button: ${event.button}`); // 누른 마우스 버튼
  console.log(`ClientX: ${event.clientX}, ClientY: ${event.clientY}`); // 브라우저 기준 위치
  console.log(`Target: ${event.target.tagName}`); // 이벤트 발생 요소
});
```

---

### **요약**

- 이벤트 객체는 이벤트가 발생했을 때 자동으로 생성되며, 이벤트와 관련된 정보를 포함한다.
- 공통 프로퍼티 외에도 이벤트 타입에 따라 고유한 프로퍼티가 추가된다.
- `type`과 `target`은 모든 이벤트에서 자주 사용되는 중요한 프로퍼티다.
- 마우스와 키보드 이벤트는 각각 커서 위치, 눌린 키 등의 세부 정보를 제공한다.

이벤트 객체의 각 프로퍼티는 상황에 따라 활용도가 다르므로, 필요할 때마다 공식 문서를 참고하거나 콘솔에 출력해 확인하는 것이 좋다.

---

## **추가 참고 자료**

이 글에서 다룬 프로퍼티는 자주 사용되는 주요 프로퍼티에 불과하며, 이벤트 객체에는 더 많은 프로퍼티들이 포함되어 있다. 아래 링크에서 각 이벤트 타입별로 더 자세한 정보를 확인할 수 있다:

- [이벤트 객체 공식 문서](https://developer.mozilla.org/ko/docs/Web/API/Event)
- [마우스 이벤트 자세히 보기](https://developer.mozilla.org/ko/docs/Web/API/MouseEvent)
- [키보드 이벤트 자세히 보기](https://developer.mozilla.org/ko/docs/Web/API/KeyboardEvent)
