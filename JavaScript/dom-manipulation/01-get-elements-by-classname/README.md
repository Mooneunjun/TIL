# HTML 요소를 class 속성으로 선택하기

> `id` 속성을 활용해 하나의 태그를 선택하는 방법이 있다. 하지만 여러 요소를 동시에 선택해야 하는 경우라면 `id`로는 한계가 있다. HTML 문서에서 여러 요소를 동시에 선택해야 하는 경우, `class` 속성을 활용하는 것이 가장 적합하다. CSS에서 클래스 이름으로 여러 요소의 스타일을 한꺼번에 적용하듯, JavaScript에서도 클래스 이름을 사용해 여러 요소를 한 번에 선택할 수 있다. 이때 사용하는 메서드가 바로 **`getElementsByClassName`**이다.

---

### `getElementsByClassName` 메서드란?

`getElementsByClassName` 메서드는 특정 클래스 이름을 가진 요소들을 선택할 수 있다. 여러 요소를 선택하는 메서드이기 때문에 반환값은 하나의 요소가 아닌 **HTMLCollection** 형태다.

### 기본 문법

```jsx
const elements = document.getElementsByClassName("class-name");
```

- `document`: HTML 문서를 나타내는 객체.
- `getElementsByClassName`: 특정 클래스 이름을 가진 요소들을 선택하는 메서드.
- `"class-name"`: 선택하려는 요소의 클래스 이름.

---

### HTML 문서와 연동

아래와 같은 HTML 문서가 있다고 가정하자.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>getElementsByClassName Example</title>
  </head>
  <body>
    <div class="color-btn red">Red</div>
    <div class="color-btn blue">Blue</div>
    <div class="color-btn green">Green</div>
    <script src="get-elements-by-classname.js"></script>
  </body>
</html>
```

---

### 여러 요소 선택하기

`getElementsByClassName` 메서드를 사용해 클래스 이름이 `color-btn`인 요소들을 선택해 보자.

```jsx
// 연동된 get-elements-by-classname.js 파일
const colorBtns = document.getElementsByClassName("color-btn");
console.log(colorBtns);
```

결과는 다음과 같다.

```
HTMLCollection(3) [div.color-btn.red, div.color-btn.blue, div.color-btn.green]
```

여기서 `HTMLCollection`이라는 것을 볼 수 있는데, 이것은 배열처럼 보이지만 배열이 아니다. 따라서 배열의 메서드(예: `push`, `splice`)는 사용할 수 없지만, 다음과 같은 작업은 가능하다.

---

### 개별 요소에 접근하기

`HTMLCollection`은 인덱스를 사용해 특정 요소에 접근할 수 있다. 아래 코드는 첫 번째 요소와 두 번째 요소를 출력하는 예제다.

```jsx
console.log(colorBtns[0]); // <div class="color-btn red">Red</div>
console.log(colorBtns[1]); // <div class="color-btn blue">Blue</div>
```

또한, `length` 속성을 사용해 컬렉션에 포함된 요소의 개수를 확인할 수도 있다.

```jsx
console.log(colorBtns.length); // 3
```

---

### `for...of` 루프를 활용한 요소 순회

`HTMLCollection`은 `for...of` 루프를 통해 요소를 순회할 수 있다. 이를 활용해 선택된 각 요소를 출력해 보자.

```jsx
for (const btn of colorBtns) {
  console.log(btn);
}
// 출력:
// <div class="color-btn red">Red</div>
// <div class="color-btn blue">Blue</div>
// <div class="color-btn green">Green</div>
```

---

### HTML 문서에서의 순서 유지

`HTMLCollection`은 문서의 **위에서 아래로 읽은 순서**를 따른다. 요소가 HTML에서 작성된 순서대로 컬렉션에 포함되며, 요소의 깊이(중첩)는 상관없다. 예를 들어, `blue` 클래스 요소를 깊이 중첩시켜도 결과는 변하지 않는다.

```html
<div>
  <div class="color-btn blue">Blue</div>
</div>
<div class="color-btn green">Green</div>
<div class="color-btn red">Red</div>
```

이 상태에서 `colorBtns[0]`을 출력하면 여전히 `blue` 요소가 나온다.

---

### 존재하지 않는 클래스 선택

만약 존재하지 않는 클래스 이름으로 요소를 선택하면 어떻게 될까? `getElementsByClassName` 메서드는 **빈 `HTMLCollection`**을 반환한다.

```jsx
const nonexistentElements = document.getElementsByClassName("nonexistent");
console.log(nonexistentElements); // HTMLCollection []
console.log(nonexistentElements.length); // 0
```

`null`이 아니라 빈 컬렉션이 반환된다는 점을 기억하자.

---

### 클래스가 하나인 경우

클래스가 하나인 경우에도 결과는 동일하다. 단 하나의 요소라도 `HTMLCollection`으로 반환되며, 개별 요소에 접근하려면 인덱스를 사용해야 한다.

```jsx
const singleElement = document.getElementsByClassName("red");
console.log(singleElement[0]); // <div class="color-btn red">Red</div>
```

---

### 요약

- `getElementsByClassName` 메서드는 **특정 클래스 이름을 가진 여러 요소를 선택**할 때 유용하다.
- 반환값은 `HTMLCollection`이며, 배열처럼 보이지만 배열은 아니다.
- `HTMLCollection`은 인덱스와 `length` 속성을 활용할 수 있으며, `for...of`로 순회가 가능하다.
- 존재하지 않는 클래스를 선택하면 빈 `HTMLCollection`이 반환된다.
