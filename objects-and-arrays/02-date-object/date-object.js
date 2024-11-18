// 1. 현재 날짜와 시간 생성
console.log("=== 1. 현재 날짜와 시간 ===");
const currentDate = new Date();
console.log(currentDate); // 생성된 시점의 날짜와 시간이 출력됨
console.log("\n");

// 2. 타임스탬프를 이용한 특정 시간 생성
console.log("=== 2. 밀리초를 기준으로 특정 시간 생성 ===");
const timestampDate = new Date(1000); // 1970년 1월 1일 00:00:01 (UTC 기준)
console.log(timestampDate);
console.log("\n");

// 3. 문자열로 날짜 객체 생성
console.log("=== 3. 문자열로 날짜 객체 생성 ===");
const stringDate = new Date("2017-05-18"); // 날짜만 지정
console.log(stringDate);

const preciseDate = new Date("2017-05-18T19:11:16"); // 날짜와 시간을 모두 포함
console.log(preciseDate);
console.log("\n");

// 4. 연도/월/일/시/분/초를 개별 입력
console.log("=== 4. 연도, 월, 일, 시, 분, 초로 생성 ===");
const customDate = new Date(2017, 4, 18, 19, 11, 16); // 월은 0부터 시작 (4는 5월)
console.log(customDate);
console.log("\n");

// 5. 타임스탬프 얻기
console.log("=== 5. 타임스탬프 얻기 ===");
const myDate = new Date();
console.log(myDate.getTime()); // 1970년 1월 1일 0시 기준 밀리초
console.log("\n");

// 6. 날짜와 시간 분리
console.log("=== 6. 날짜와 시간 분리 ===");
const detailedDate = new Date();
console.log(`연도: ${detailedDate.getFullYear()}`); // 연도
console.log(`월: ${detailedDate.getMonth() + 1}`); // 월 (0부터 시작하므로 +1)
console.log(`일: ${detailedDate.getDate()}`); // 일자
console.log(`요일: ${detailedDate.getDay()}`); // 요일 (0: 일요일)
console.log(`시간: ${detailedDate.getHours()}`); // 시
console.log(`분: ${detailedDate.getMinutes()}`); // 분
console.log(`초: ${detailedDate.getSeconds()}`); // 초
console.log("\n");

// 7. 날짜 계산
console.log("=== 7. 날짜 계산 ===");
const now = new Date();
const tomorrow = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 하루 뒤
console.log("현재 시간:", now);
console.log("내일 같은 시간:", tomorrow);
console.log("\n");
