// 다크모드 여부를 저장하는 변수
var isDarkMode  = true

// isDarkMode가 true일 때 다크모드입니다 출력
if isDarkMode {
    print("다크모드입니다")
} else { 
    print("다크모드가 아닙니다")
}

let title = !isDarkMode ? "다크모드가 아닙니다" : "다크모드입니다"
// isDarkMode가 true -> 앞의 문자열 선택
// isDarkMode가 false -> 뒤의 문자열 선택
print(title)

let title2 = !isDarkMode ? "다크모드입니다" : "다크모드가 아닙니다"
// isDarkMode가 true -> 뒤의 문자열 선택
// isDarkMode가 false -> 앞의 문자열 선택
print(title2)