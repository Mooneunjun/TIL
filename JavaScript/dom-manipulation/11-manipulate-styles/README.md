# HTML 스타일 다루기

> HTML 요소의 스타일을 자바스크립트로 조작하는 방법은 크게 두 가지로 나눌 수 있다.
>
> 첫 번째는 요소의 `style` 프로퍼티를 활용해 직접 스타일을 추가하거나 변경하는 방식이고, 두 번째는 CSS 클래스를 미리 정의하고, 자바스크립트로 클래스를 추가하거나 제거하는 방식이다.

---

## **스타일 프로퍼티 활용**

`style` 프로퍼티는 특정 HTML 요소의 스타일을 직접적으로 수정할 수 있도록 해준다. 이 프로퍼티는 CSS 속성명을 **카멜 표기법**으로 작성해야 한다.

### **사용 예시**

```jsx
const today = document.querySelector("#today");

// 텍스트 꾸미기
today.children[0].style.textDecoration = "line-through";

// 배경색 변경
today.children[0].style.backgroundColor = "lightgray";
```

### **주의 사항**

1. **CSS 속성명 작성법**
   - `background-color` → `backgroundColor`
   - `text-decoration` → `textDecoration`
2. **우선순위 문제**

   스타일 프로퍼티로 설정한 스타일은 HTML의 `style` 속성에 직접 추가되며, CSS 우선순위가 높아지는 문제가 발생할 수 있다.

3. **반복 코드 문제**

   여러 요소에 동일한 스타일을 적용하려면 중복된 코드가 많아질 수 있다.

---

## **CSS 클래스 활용**

HTML 요소의 스타일은 CSS 클래스를 미리 정의해두고, 자바스크립트로 클래스를 추가하거나 제거하는 방식으로 관리하는 것이 권장된다.

**CSS 파일 예시**

```css
.done {
  text-decoration: line-through;
  background-color: lightgray;
}

.highlight {
  color: red;
}
```

클래스는 `className` 프로퍼티나 `classList` 객체를 통해 조작할 수 있다.

### **1. `className`으로 클래스 전체 변경**

`className`은 HTML 요소의 클래스 속성을 통째로 변경한다.

```jsx
const tomorrow = document.querySelector("#tomorrow");

// 클래스 값 변경
tomorrow.children[0].className = "done";
```

**단점:**

클래스 전체가 변경되므로 기존 클래스가 사라진다.

예를 들어, 기존 클래스가 `"item important"`인 경우, 변경 후에는 `"done"`만 남게 된다.

---

### **2. `classList`로 클래스 부분 수정**

`classList`는 클래스 속성을 배열처럼 다룰 수 있게 해주는 객체다. 이를 통해 개별 클래스를 추가하거나 제거할 수 있다.

- **클래스 추가: `add`**
  ```jsx
  tomorrow.children[1].classList.add("done", "highlight");
  ```
  - 쉼표로 구분해 여러 클래스를 추가할 수 있다.
  - 동일한 클래스는 중복되지 않는다.
- **클래스 제거: `remove`**
  ```jsx
  tomorrow.children[1].classList.remove("highlight");
  ```
- **클래스 토글: `toggle**toggle` 메서드는 클래스가 없으면 추가, 있으면 제거하는 역할을 한다. 두 번째 매개변수로 `true`나 `false`를 전달해 동작을 강제할 수도 있다.
  ```jsx
  tomorrow.children[1].classList.toggle("done");
  ```
  ```jsx
  // 강제 추가
  tomorrow.children[1].classList.toggle("done", true);

  // 강제 제거
  tomorrow.children[1].classList.toggle("done", false);
  ```

---

## **CSS 관리의 효율성**

1. **가독성과 유지 보수성**

   CSS 파일에서 스타일을 정의하고, 자바스크립트에서는 클래스를 추가/제거만 하므로 코드가 간결해진다.

2. **반복 코드 감소**

   동일한 스타일을 여러 요소에 쉽게 적용할 수 있다.

3. **권장 방식**

   스타일 프로퍼티는 예외적인 상황에서만 사용하고, CSS 클래스 기반으로 스타일을 관리하는 것이 적합하다.

---

## **요약**

- 스타일을 직접 변경하려면 `style` 프로퍼티를 사용한다.하지만 CSS 우선순위 문제와 코드 중복이 발생할 수 있다.
- 클래스 기반 스타일 변경은 `className`과 `classList`를 활용한다.
  - `className`: 클래스 전체를 변경.
  - `classList`: 클래스를 추가(`add`), 제거(`remove`), 또는 토글(`toggle`) 가능.

스타일 관리에서는 **CSS 파일에서 스타일 정의 + 자바스크립트로 클래스 조작** 방식을 활용하는 것이 바람직하다.
