# JS Study

**나만의 자바스크립트 공부하는 저장소입니다.**  
JavaScript 학습 자료와 예제를 정리하고 기록하는 공간입니다. 자바스크립트를 배우면서 필요한 개념, 예제 코드 등을 이곳에 모아둘 예정입니다. 이 레포지토리에는 프로젝트가 포함되지 않으며, 프로젝트는 별도로 관리합니다.

This is **my personal JavaScript study repository.**  
It’s a space for organizing and recording JavaScript study materials and examples. I will collect essential concepts, code examples, and practice exercises here as I learn JavaScript. Note that this repository will not include projects, as they will be managed separately.

## Velog 시리즈 / Velog Series

JavaScript 학습 과정과 자료는 Velog 시리즈로도 정리하고 있습니다. 아래 링크를 통해 스터디 블로그 글을 볼 수 있습니다.

[JavaScript 자바스크립트 기초 시리즈 - MOON.DEVELOG](https://velog.io/@moon_dev/series/JavaScript-자바스크립트)

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=moon_dev)](https://velog-readme-stats.vercel.app/api/redirect?name=moon_dev)

## 목차 / Contents

- [학습 목록 / Study Topics](#학습-목록--study-topics)
- [규칙 / Rules](#규칙--rules)
- [커밋 컨벤션 / Commit Conventions](#커밋-컨벤션--commit-conventions)
- [폴더명 규칙 / Folder Naming Rules](#폴더명-규칙--folder-naming-rules)

## 학습 목록 / Study Topics

JavaScript 학습에 필요한 개념과 예제들을 다음과 같은 카테고리로 분류하여 정리합니다.

- **기본 문법 및 개념 / Basic Syntax and Concepts**
- **변수와 데이터 타입 / Variables and Data Types**
- **연산자와 제어 흐름 / Operators and Control Flow**
- **함수와 스코프 / Functions and Scope**
- **객체와 배열 / Objects and Arrays**
- **DOM 조작 / DOM Manipulation**
- **ES6+ 기능 / ES6+ Features**
- **연습 문제 / Practice Exercises**

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

### 폴더 구조 예시:

- **`기본 문법 및 개념` / `basic-syntax-and-concepts`**  
  자바스크립트의 기본 문법과 개념을 다룹니다.
- **`변수와 데이터 타입` / `variables-and-data-types`**  
  변수 선언, 할당, 다양한 데이터 타입(숫자, 문자열, 불리언 등)을 다룹니다.
- **`연산자와 제어 흐름` / `operators-and-control-flow`**  
  연산자와 조건문, 반복문 등 제어 흐름 관련 내용을 다룹니다.
- **`함수와 스코프` / `functions-and-scope`**  
  함수 정의, 호출, 스코프(전역, 지역 스코프 등)를 다룹니다.
- **`객체와 배열` / `objects-and-arrays`**  
  객체(Object)와 배열(Array)의 생성 및 활용 방법을 다룹니다.
- **`dom 조작` / `dom-manipulation`**  
  DOM(Document Object Model)을 조작하는 방법을 다룹니다.
- **`es6+ 기능` / `es6-plus-features`**  
  ES6 이후에 추가된 최신 기능들을 다룹니다.
- **`연습 문제` / `practice-exercises`**  
  각 주제별로 연습 문제나 코딩 테스트 문제를 포함합니다.

---

### 현재 폴더 구조

js-study
├── README.md
├── basic-syntax-and-concepts
│ ├── 00-hello-world
│ │ └── hello-world.html
│ ├── 01-alert
│ │ └── alert.html
│ └── 02-semicolon
│ ├── semicolon.html
│ └── semicolon.js
├── functions-and-scope
│ ├── 00-functions
│ │ ├── functions.js
│ │ ├── parameter.js
│ │ └── return.js
│ └── exercises
│ ├── functions-exercises.js
│ └── return-exercises.js
├── operators-and-control-flow
│ ├── 00-arithmetic-operators
│ │ └── arithmetic-operations.js
│ └── 01-boolean-algebra
│ ├── or-operation.js
│ ├── and-operation.js
│ └── not-operation.js
├── template
│ ├── index.html
│ └── script.js
└── variables-and-data-types
├── 00-number
│ └── number.js
├── 01-string
│ └── string.js
├── 02-boolean
│ └── boolean.js
├── 03-let
│ └── let.js
└── exercises
└── variables-exercises.js
