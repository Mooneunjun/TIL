## **스크롤 이벤트 (scroll Event)**

웹 문서에서 스크롤이 발생하면 scroll 이벤트가 발생한다. 기본적으로 웹 문서의 크기가 브라우저 창보다 클 경우 스크롤이 자동으로 생성되며, CSS를 이용해 특정 요소에 스크롤을 추가할 수도 있다.

---

### **1. 스크롤 이벤트 감지하기**

일반적으로 스크롤 이벤트는 **브라우저를 대변하는 window 객체**에 등록하는 경우가 많다.

```
window.addEventListener("scroll", () => {
  console.log("스크롤 이벤트 발생");
});
```

✅ **결과**: 웹 문서에서 스크롤이 발생할 때마다 콘솔에 "스크롤 이벤트 발생"이 출력된다.

---

### **2. 현재 스크롤 위치 확인하기**

스크롤 이벤트를 활용할 때 window 객체의 프로퍼티를 자주 사용한다.

```
window.addEventListener("scroll", () => {
  console.log(`현재 스크롤 위치: ${window.scrollY}px`);
});
```

✅ **결과**: 현재 **문서의 맨 위에서부터 몇 픽셀** 만큼 스크롤했는지를 콘솔에 출력.

---

### **3. 특정 위치에서 요소 스타일 변경하기**

스크롤 이벤트를 활용하여 특정 위치를 기준으로 요소의 스타일을 변경할 수 있다.

```
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
```

✅ **결과**:

•	**30px 이상 스크롤**하면 .navbar 요소에 scrolled 클래스 추가 → 그림자 효과 적용

•	**30px 이하로 스크롤**하면 클래스 제거 → 원래 상태로 복귀

```
.scrolled {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

---

### **4. 스크롤 방향 감지하기**

스크롤을 내릴 때와 올릴 때 다른 동작을 수행할 수도 있다.

```
let lastScrollY = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    console.log("스크롤 내림");
  } else {
    console.log("스크롤 올림");
  }
  lastScrollY = window.scrollY;
});
```

✅ **결과**:

•	아래로 스크롤하면 "스크롤 내림"

•	위로 스크롤하면 "스크롤 올림"

---

### **요약**

•	scroll 이벤트는 **웹 문서가 스크롤될 때마다 발생**한다.

•	window.scrollY를 활용하여 **현재 스크롤 위치를 확인**할 수 있다.

•	특정 위치 이상 스크롤되면 **요소에 클래스를 추가하거나 제거**할 수 있다.

•	**스크롤 방향을 감지**하여 위/아래 이동에 따라 다른 동작을 수행할 수 있다.

이렇게 스크롤 이벤트를 활용하면 다양한 UI 효과를 구현할 수 있다.