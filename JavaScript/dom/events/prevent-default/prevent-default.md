# 브라우저의 기본 동작

> HTML 태그와 브라우저는 각 요소에 다양한 기본 동작을 제공한다. 이러한 동작은 사용자 경험을 풍부하게 하지만, 때로는 원하는 동작을 구현하기 위해 이러한 기본 동작을 제어해야 할 필요가 있다.

## 기본 동작 예시

1. **`<a>` 태그**
   - 클릭하면 `href` 속성에 설정된 주소로 페이지가 이동.
   - 외부 링크나 내부 링크를 구현할 때 유용하다.
2. **`<input>` 태그**
   - **텍스트 타입**: 클릭 시 포커스가 설정되고 키보드 입력이 가능해짐.
   - **체크박스 타입**: 클릭 시 체크 상태가 토글됨.
3. **일반 텍스트**
   - 사용자가 드래그하면 텍스트가 선택 영역으로 표시됨.
4. **마우스 오른쪽 클릭**
   - 옵션 메뉴가 표시되어 사용자가 다양한 동작(복사, 저장 등)을 수행할 수 있음.
5. **폼 제출**
   - 버튼 클릭 시 폼 데이터가 서버로 전송됨.

이 외에도 브라우저는 각 태그와 상황에 따라 다양한 기본 동작을 제공한다.

---

## 기본 동작 막기

**`preventDefault()`** 메서드를 사용하면 특정 이벤트의 기본 동작을 막을 수 있다. 이 메서드는 이벤트가 발생했을 때 브라우저가 수행하는 기본적인 동작을 차단한다.

### 예제 1: 링크 이동 방지

아래 코드는 링크 클릭 시 기본 동작(페이지 이동)을 막고 경고창을 띄운다:

```html
<a href="https://example.com" id="myLink">Example</a>
<script>
  document.getElementById("myLink").addEventListener("click", (event) => {
    event.preventDefault(); // 기본 동작 막기
    alert("지금은 이동할 수 없습니다.");
  });
</script>
```

- **결과**: 링크를 클릭해도 페이지 이동 대신 경고창이 뜬다.

### 예제 2: 체크박스로 텍스트 입력 막기

체크박스 클릭 시 텍스트 입력창의 활성화 상태를 제어하는 예제:

```html
<input type="checkbox" id="myCheckbox" />
<label for="myCheckbox">체크박스</label>
<input type="text" id="myInput" placeholder="입력 가능" />
<script>
  document.getElementById("myCheckbox").addEventListener("click", (event) => {
    const input = document.getElementById("myInput");
    if (event.target.checked) {
      input.disabled = true;
      input.placeholder = "입력 불가";
    } else {
      input.disabled = false;
      input.placeholder = "입력 가능";
    }
  });
</script>
```

- **결과**: 체크박스를 클릭하면 입력창이 비활성화되거나 활성화된다.

### 예제 3: 마우스 오른쪽 클릭 방지

마우스 오른쪽 클릭 시 기본 동작(컨텍스트 메뉴 열기)을 막는 예제:

```html
<div id="noRightClick">오른쪽 클릭 금지 영역</div>
<script>
  document
    .getElementById("noRightClick")
    .addEventListener("contextmenu", (event) => {
      event.preventDefault(); // 기본 동작 막기
      alert("오른쪽 클릭이 방지되었습니다.");
    });
</script>
```

- **결과**: 지정된 영역에서 마우스 오른쪽 클릭이 방지되고 경고창이 뜬다.

### 예제 4: 폼 제출 방지

폼 제출 버튼 클릭 시 데이터를 전송하지 않고 사용자 정의 동작을 수행하는 예제:

```html
<form id="myForm">
  <input type="text" placeholder="이름 입력" />
  <button type="submit">제출</button>
</form>
<script>
  document.getElementById("myForm").addEventListener("submit", (event) => {
    event.preventDefault(); // 기본 동작 막기
    alert("폼 제출이 방지되었습니다.");
  });
</script>
```

- **결과**: 버튼을 클릭해도 폼 데이터가 서버로 전송되지 않고 경고창이 뜬다.

---

## 주의점

브라우저의 기본 동작을 막을 때는 다음 사항을 고려해야 한다:

1. **태그의 고유 역할과 의미 유지**
   - HTML 태그는 고유의 의미와 역할을 가지고 있다.
   - 불필요하게 기본 동작을 막으면 접근성과 사용자 경험이 저하될 수 있다.
2. **필요한 경우에만 사용**
   - `preventDefault()`는 반드시 필요한 상황에서만 사용해야 한다.
   - 예를 들어, 기본 동작을 막는 것이 사용자 흐름에 긍정적인 영향을 줄 때 활용한다.

---

## 요약

- 브라우저는 각 태그와 상황에 따라 다양한 기본 동작을 제공한다.
- **`preventDefault()`** 메서드를 사용하면 특정 이벤트의 기본 동작을 막을 수 있다.
- 기본 동작을 막는 것은 신중해야 하며, 태그의 고유 역할과 사용자 경험을 저해하지 않도록 주의해야 한다.
