// '오늘 할 일'과 '내일 할 일' 리스트 선택
const todayList = document.querySelector("#today");
const tomorrowList = document.querySelector("#tomorrow");

// ------------------------
// 1. 노드 삭제: remove()
// ------------------------

// '오늘 할 일'의 첫 번째 항목 삭제
const firstItem = todayList.children[0]; // '책 읽기'
firstItem.remove();

// '내일 할 일'의 마지막 항목 삭제
const lastItem = tomorrowList.children[tomorrowList.children.length - 1]; // '장보기'
lastItem.remove();

// ------------------------
// 2. 노드 이동
// ------------------------

// 2-1. append(): 부모 노드의 마지막 자식 요소로 이동
const moveToToday = tomorrowList.children[0]; // '코드 작성'
todayList.append(moveToToday);

// 2-2. prepend(): 부모 노드의 첫 번째 자식 요소로 이동
const moveToTomorrow = todayList.children[1]; // '고양이 화장실 청소'
tomorrowList.prepend(moveToTomorrow);

// 2-3. before(): 기준 노드의 앞에 추가
const referenceNode = todayList.children[0]; // '운동하기'
const moveNode = tomorrowList.children[1]; // '친구와 점심'
referenceNode.before(moveNode);

// 2-4. after(): 기준 노드의 뒤에 추가
const anotherReference = todayList.children[1]; // '운동하기'
const anotherMoveNode = tomorrowList.children[0]; // '고양이 화장실 청소'
anotherReference.after(anotherMoveNode);

// ------------------------
// 3. 결과 확인
// ------------------------
console.log("오늘 할 일:", todayList.innerHTML);
console.log("내일 할 일:", tomorrowList.innerHTML);
