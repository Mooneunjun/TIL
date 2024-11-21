# 자바스크립트의 첫 걸음

> JavaScript를 처음 배울 때, 가장 기초적인 코드를 작성해 보면서 JavaScript가 어떻게 작동하는지 이해하는 게 중요한 것 같다. 이번에는 JavaScript의 기본 구조를 살펴보고, 간단한 코드를 작성해서 브라우저에서 실행해 보려고 한다.

## 첫 코드: Hello, World!

프로그래밍을 시작할 때 자주 작성하는 코드인 “Hello, World!“는 기본적인 JavaScript 작동 방식을 이해하는 데 도움을 준다. 브라우저에서 간단히 메시지를 출력하는 방법을 배워보자.

**HTML에 JavaScript 추가하기**

HTML 문서에 JavaScript를 추가하려면 `<script>` 태그를 사용한다. `<script>` 태그는 `<body>` 태그 안쪽이나, 페이지의 맨 아래에 위치하는 게 좋다. 페이지 로딩 후 JavaScript가 실행되도록 보장하기 위해서다.

**예제 코드: HTML과 JavaScript**

아래는 HTML과 JavaScript가 함께 있는 가장 기본적인 예제다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My First JavaScript Code</title>
  </head>
  <body>
    <h1>첫 번째 자바스크립트 코드</h1>
    <p>콘솔에서 "Hello, World!" 메시지를 확인해보자.</p>
    <script>
      // 콘솔에 메시지를 출력한다
      console.log("Hello, World!");
    </script>
  </body>
</html>
```

위 코드를 브라우저에서 열어본 다음, 개발자 도구(크롬에서는 **F12** 키 또는 **Ctrl + Shift + J** / **Command + Option + J**)를 열고 콘솔 탭을 확인해보면 “Hello, World!” 메시지가 출력된 것을 볼 수 있다.

> 코드 설명
>
> - console.log(): JavaScript에서 콘솔에 메시지를 출력할 때 사용하는 가장 기본적인 명령어다. 여기서는 "Hello, World!"라는 문자열을 콘솔에 출력한다.
> - 태그: JavaScript 코드는 항상 `<script>` 태그 안에 작성해야 한다. 이 태그가 포함된 부분에서 JavaScript가 실행된다.

> 코드 실습
>
> 위 코드를 작성한 후, 실제로 브라우저에서 어떻게 실행되는지 확인해보는 것이 중요하다.
>
> - HTML 파일을 저장하고, 브라우저에서 파일을 연다.
> - 개발자 도구의 콘솔 탭을 열어 “Hello, World!” 메시지가 잘 출력되는지 확인한다.

## 추가 실습: 경고창 띄우기

console.log 외에도 JavaScript에서는 다양한 방법으로 메시지를 표시할 수 있다. 예를 들어, alert를 사용해 브라우저 경고창을 띄울 수 있다. 다음은 alert를 활용한 예제다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Alert Example</title>
  </head>
  <body>
    <h1>JavaScript Alert Example</h1>
    <script>
      // 경고창에 메시지를 표시한다
      alert("Hello, World!");
    </script>
  </body>
</html>
```

이번에는 브라우저에서 파일을 열면 경고창으로 “Hello, World!” 메시지가 나타난다. JavaScript를 사용하여 이렇게 간단히 사용자에게 메시지를 전달할 수 있다.

## 요약

JavaScript는 `<script>`태그 안에 작성하여 HTML에 추가할 수 있으며, `console.log()` 나 `alert()` 같은 명령어를 통해 기본적인 메시지 출력이 가능하다. 이 예제는 JavaScript의 기본적인 사용법을 익히는 첫걸음이다. 앞으로 더 복잡한 기능들을 통해 웹 페이지를 더욱 동적이고 인터랙티브하게 만들어 나갈 수 있을 거라고 기대한다.

이렇게 간단한 코드를 통해 JavaScript와 친해지고, 앞으로 더 복잡한 기능을 구현할 준비가 된 것이다.

> 참고자료
>
> [[mozilla] - JavaScript 기본, "Hello world" 예시](https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
