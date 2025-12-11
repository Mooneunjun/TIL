/**
 * [스크롤 이벤트 처리]
 *
 * > 스크롤 이벤트 감지
 * window.scrollY: 현재 스크롤 위치 확인
 * 특정 위치에서 요소 스타일 변경
 * 스크롤 방향 감지
 */

// 네비게이션 바 요소 선택
const navbar = document.querySelector(".navbar");

// 이전 스크롤 위치 저장 변수
let lastScrollY = 0;

// 스크롤 이벤트 등록
window.addEventListener("scroll", () => {
    console.log(`현재 스크롤 위치: ${window.scrollY}px`);

    // 특정 위치(30px) 이상 스크롤 시 클래스 추가 및 제거
    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // 스크롤 방향 감지
    if (window.scrollY > lastScrollY) {
        console.log("스크롤 내림");
    } else {
        console.log("스크롤 올림");
    }

    lastScrollY = window.scrollY;
});