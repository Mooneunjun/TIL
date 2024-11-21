# 🌐 JS Study

**나만의 자바스크립트 공부하는 저장소입니다.**  
JavaScript 학습 자료와 예제를 정리하고 기록하는 공간입니다. 자바스크립트를 배우면서 필요한 개념, 예제 코드 등을 이곳에 모아둘 예정입니다. 이 레포지토리에는 프로젝트가 포함되지 않으며, 프로젝트는 별도로 관리합니다.

## 📚 Velog 시리즈 / Velog Series

JavaScript 학습 과정과 자료는 Velog 시리즈로도 정리하고 있습니다. 아래 링크를 통해 스터디 블로그 글을 볼 수 있습니다.

[JavaScript 자바스크립트 기초 시리즈 - MOON.DEVLOG](https://velog.io/@moon_dev/series/JavaScript-자바스크립트)

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=moon_dev)](https://velog.io/@moon_dev/series)

## 📖 목차 / Contents

- [학습 목록 / Study Topics](#학습-목록--study-topics)
- [규칙 / Rules](#규칙--rules)
- [커밋 컨벤션 / Commit Conventions](#커밋-컨벤션--commit-conventions)
- [폴더명 규칙 / Folder Naming Rules](#폴더명-규칙--folder-naming-rules)

## 학습 목록 / Study Topics

JavaScript 학습에 필요한 개념과 예제들을 다음과 같은 카테고리로 분류하여 정리합니다.

- **`기본 문법 및 개념` / `basic-syntax-and-concepts`**
  자바스크립트의 기본적인 실행 흐름과 개념을 다룹니다. 예를 들어 `hello world`, `alert`, `세미콜론` 등의 기본 사례를 포함합니다.

- **`변수와 상수` / `variables`**
  변수 선언, 할당 및 수정 가능 여부를 포함하여 `let`, `const`, `var`와 같은 변수 선언 키워드를 다룹니다.

- **`데이터 타입` / `data-types`**
  데이터 타입의 종류와 변환 방법을 다룹니다. 숫자, 문자열, 불리언, `null` 및 `undefined`에 대한 내용을 포함합니다.

- **`연산자` / `operators`**
  산술, 불리언, 할당 연산자 및 `typeof`와 같은 연산자에 대한 내용을 다룹니다.

- **`제어 흐름` / `control-flow`**
  조건문(`if`, `switch`), 반복문(`for`, `while`), `break`, `continue` 등을 포함하여 프로그램의 흐름을 제어하는 방법을 다룹니다.

- **`함수와 스코프` / `functions-and-scope`**
  함수의 정의 및 호출 방법과 스코프(전역, 지역 및 블록 스코프)를 다룹니다.

- **`객체` / `objects`**
  객체의 생성, 접근, 메서드 및 내장 객체(`Date` 포함)를 다룹니다.

- **`배열` / `arrays`**
  배열의 생성, 조작 메서드(`push`, `pop` 등), 반복문과의 조합을 다룹니다.

- **`es6+ 기능` / `es6-plus-features`**
  `arrow functions`, `template literals`, `destructuring`, `spread/rest` 연산자 등 최신 문법과 기능을 다룹니다.

- **`DOM 조작` / `dom-manipulation`**
  DOM 요소 선택, 변경, 이벤트 처리 등을 다룹니다.

- **`연습 문제` / `practice-exercises`**
  각 주제에 대한 연습 문제를 제공하며, 코딩 테스트 문제를 포함합니다.

## 규칙 / Rules

- 모든 학습 자료는 해당 주제별로 폴더에 정리하여 관리합니다.
- 예제 코드는 각 주제의 개념을 이해하기 쉽게 간단하게 작성합니다.
- 내용이 확장되는 경우 별도의 파일로 나누어 구성합니다.

## 커밋 컨벤션 / Commit Conventions

일관된 커밋 메시지를 사용하여 변경 사항을 명확하게 관리합니다. 아래의 커밋 컨벤션을 따라주세요:

- **Add**: 새로운 자료나 파일을 추가할 때  
  예: `Add basic JavaScript syntax notes`
- **Update**: 기존 파일에 내용을 업데이트할 때  
  예: `Update examples for array methods`
- **Fix**: 코드 또는 내용의 오류를 수정할 때  
  예: `Fix typo in variable types section`
- **Remove**: 불필요한 파일이나 내용을 삭제할 때  
  예: `Remove outdated notes on ES5`

## 폴더명 규칙 / Folder Naming Rules

폴더 이름은 해당 주제를 명확하게 알 수 있도록 **소문자**와 **하이픈(-)**을 사용하여 작성합니다. 이렇게 하면 폴더 구조가 일관성 있게 관리되고, 내용을 쉽게 찾을 수 있습니다.

---

## 🗂️ 현재 폴더 구조:

```plaintext
js-study
├── arrays
│   └── 00-arrays
├── basic-syntax-and-concepts
│   ├── 00-hello-world
│   ├── 01-alert
│   └── 02-semicolon
├── control-flow
│   ├── 00-if-statements
│   ├── 01-switch-statements
│   ├── 02-for-loop
│   ├── 03-while-loop
│   ├── 04-break-continue
│   └── 05-for-in-loop
├── data-types
│   ├── 00-number
│   ├── 01-string
│   ├── 02-boolean
│   ├── 04-type-conversion
│   └── 05-null-and-undefined
├── functions-and-scope
│   ├── 00-functions
│   └── 01-scope
├── objects
│   ├── 00-objects
│   ├── 01-object-methods
│   └── 02-date-object
├── operators
│   ├── 00-arithmetic-operators
│   ├── 01-boolean-operators
│   ├── 02-typeof-operators
│   └── 03-assignment-operators
└── variables
    ├── 00-let
    └── 01-const
```
