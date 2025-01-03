# 캡처링과 이벤트 흐름

> 이벤트는 단순히 발생하고 끝나는 것이 아니라 특정한 흐름을 따라 진행된다. DOM 표준 이벤트 모델은 다음과 같은 3단계로 이벤트 전파를 정의한다:
>
> 1. **캡처링 단계 (Capturing phase)**: 이벤트가 최상위 요소(`window`)에서 시작해 이벤트가 발생한 대상(`target`)으로 내려오는 과정.
> 2. **타깃 단계 (Target phase)**: 이벤트가 실제로 발생한 요소에서 처리되는 단계.
> 3. **버블링 단계 (Bubbling phase)**: 이벤트가 발생한 요소에서 시작해 최상위 요소로 다시 올라가는 과정.

---

## **캡처링이란?**

캡처링은 이벤트가 발생했을 때 **`window` 객체에서 시작해 이벤트가 발생한 요소(`target`)로 내려오는 이벤트 전파 방식**이다. 버블링과는 반대 방향으로 진행되며, 주로 특정한 상황에서 사용된다.

### **캡처링 단계와 버블링 단계의 차이**

!https://velog.velcdn.com/images/moon_dev/post/73885903-c410-4618-bf9f-a27b6c3921e1/image.png

| **특징**               | **캡처링 단계**                                     | **버블링 단계**                                    |
| ---------------------- | --------------------------------------------------- | -------------------------------------------------- |
| **전파 방향**          | 최상위(`window`) → 이벤트 발생 요소(`target`)       | 이벤트 발생 요소(`target`) → 최상위(`window`)      |
| **일반적인 활용**      | 잘 사용되지 않음                                    | 자주 사용됨                                        |
| **이벤트 핸들러 등록** | `addEventListener`의 세 번째 매개변수에 `true` 전달 | 기본값으로 동작 (세 번째 매개변수 생략 시 `false`) |

---

## **캡처링 단계에서 이벤트 핸들러 등록하기**

캡처링 단계에서 이벤트 핸들러를 동작시키려면, `addEventListener`의 세 번째 매개변수로 `true` 또는 `{ capture: true }`를 전달해야 한다.

### **예제**

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <title>캡처링 예제</title>
  </head>
  <body>
    <div>
      DIV
      <ul>
        UL
        <li>LI</li>
      </ul>
    </div>
    <script>
      for (let elem of document.querySelectorAll("*")) {
        // 캡처링 단계
        elem.addEventListener(
          "click",
          (e) => alert(`캡처링 단계: ${elem.tagName}`),
          true
        );
        // 버블링 단계
        elem.addEventListener("click", (e) =>
          alert(`버블링 단계: ${elem.tagName}`)
        );
      }
    </script>
  </body>
</html>
```

**코드 설명**:

- **캡처링 단계**: `true`를 전달한 이벤트 핸들러는 상위 요소에서 하위 요소로 이벤트가 전파될 때 동작.
- **버블링 단계**: 기본값으로 동작하며, 하위 요소에서 상위 요소로 이벤트가 전파될 때 동작.

**실행 결과**:

- `LI` 요소를 클릭했을 경우:
  1. 캡처링 단계: `HTML → BODY → DIV → UL → LI`
  2. 버블링 단계: `LI → UL → DIV → BODY → HTML`

---

## **캡처링 사용 예시**

### **특정 요소에 도달하기 전 이벤트 처리**

캡처링 단계에서 이벤트를 처리하면 특정 요소에 도달하기 전 부모 요소에서 미리 이벤트를 처리할 수 있다.

```jsx
document.body.addEventListener(
  "click",
  (e) => {
    console.log("캡처링 단계에서 실행!");
    if (e.target.tagName === "DIV") {
      console.log("DIV 클릭 방지!");
      e.stopPropagation(); // 이벤트 전파 중단
    }
  },
  true
);
```

---

## **캡처링과 버블링 비교**

캡처링 단계와 버블링 단계의 이벤트 순서를 이해하면 다음과 같은 이점을 얻을 수 있다:

- 이벤트 흐름을 더 명확히 파악할 수 있다.
- 특정 상황에서 효율적으로 이벤트를 처리할 수 있다.
- 다단계 상호작용이 필요한 복잡한 UI를 설계할 때 도움이 된다.

---

## 요약

- **이벤트 전파**는 캡처링, 타깃, 버블링 단계로 이루어진다.
- **캡처링 단계**는 상위 요소에서 하위 요소로 이벤트가 전파되는 과정이다.
- `addEventListener`의 세 번째 매개변수로 `true` 또는 `{ capture: true }`를 전달하면 캡처링 단계에서 이벤트 핸들러를 실행할 수 있다.
- 캡처링은 실사용 빈도는 낮지만, 복잡한 이벤트 처리가 필요한 상황에서는 유용하게 활용될 수 있다.
