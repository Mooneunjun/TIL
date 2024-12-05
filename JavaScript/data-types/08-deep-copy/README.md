> 자바스크립트에서 참조형 값(객체, 배열 등)을 변수에 할당하면 값이 아니라 메모리 주소가 할당된다는 걸 배웠다. 그래서 참조형 값을 복사하거나 수정할 때 원본 데이터도 영향을 받을 수 있다는 특징이 있다. 이번에는 배열과 객체를 복사하는 다양한 방법과 이를 활용한 코드를 정리해 본다.

---

### 배열 복사

배열은 참조형 값이라 단순히 할당하면 값이 아니라 주소가 복사된다. 아래 예제를 보자.

```jsx
const numbers1 = [1, 2, 3];
const numbers2 = numbers1;

numbers2.push(4);

console.log(numbers1); // [1, 2, 3, 4]
console.log(numbers2); // [1, 2, 3, 4]
```

`numbers2`를 수정했는데 `numbers1`도 같이 변경됐다. 이것은 `numbers2`가 `numbers1`과 동일한 메모리 주소를 참조하고 있기 때문이다.

### 배열 복사 해결 방법: `slice` 메서드

`slice` 메서드를 사용하면 배열을 복사할 수 있다. 파라미터 없이 호출하면 배열의 모든 요소를 복사한다.

```jsx
const numbers1 = [1, 2, 3];
const numbers2 = numbers1.slice();

numbers2.push(4);

console.log(numbers1); // [1, 2, 3]
console.log(numbers2); // [1, 2, 3, 4]
```

`numbers2`만 변경됐고 `numbers1`은 영향을 받지 않았다.

---

### 객체 복사

객체에도 동일한 원리가 적용된다. 단순히 객체를 다른 변수에 할당하면 원본 객체와 새로운 변수 모두 동일한 메모리 주소를 참조한다.

```jsx
const course1 = { title: "JavaScript Basics" };
const course2 = course1;

course2.title = "Advanced JavaScript";

console.log(course1.title); // Advanced JavaScript
console.log(course2.title); // Advanced JavaScript
```

`course2`를 수정했더니 `course1`도 변경됐다.

### 객체 복사 해결 방법 1: `Object.assign`

`Object.assign`을 사용하면 객체를 복사할 수 있다.

```jsx
const course1 = { title: "JavaScript Basics" };
const course2 = Object.assign({}, course1);

course2.title = "Advanced JavaScript";

console.log(course1.title); // JavaScript Basics
console.log(course2.title); // Advanced JavaScript
```

### 객체 복사 해결 방법 2: `for...in` 반복문

`for...in` 반복문을 사용해서 객체를 복사할 수도 있다.

```jsx
function copyObject(obj) {
  const newObj = {};
  for (let key in obj) {
    newObj[key] = obj[key];
  }
  return newObj;
}

const course1 = { title: "JavaScript Basics" };
const course2 = copyObject(course1);

course2.title = "Advanced JavaScript";

console.log(course1.title); // JavaScript Basics
console.log(course2.title); // Advanced JavaScript
```

---

### 중첩된 데이터 구조의 문제

위 방법들로 배열과 객체를 복사할 수 있지만, 중첩된 객체나 배열이 있는 경우엔 문제가 발생한다.

```jsx
const course1 = {
  title: "JavaScript Basics",
  prerequisites: ["HTML", "CSS"],
};

const course2 = Object.assign({}, course1);

course2.prerequisites.push("Python");

console.log(course1.prerequisites); // ["HTML", "CSS", "Python"]
console.log(course2.prerequisites); // ["HTML", "CSS", "Python"]
```

`prerequisites`는 배열이라서 메모리 주소만 복사됐기 때문에 `course2`를 수정하면 `course1`도 영향을 받는다.

### 해결 방법: 깊은 복사(Deep Copy)

깊은 복사는 중첩된 데이터까지 복사하는 것이다. 이 글에서는 간단히 문제를 지적하고, 자세한 내용은 추후 다루기로 한다. 간단한 해결 방법으로는 JSON을 활용할 수 있다.

```jsx
const course1 = {
  title: "JavaScript Basics",
  prerequisites: ["HTML", "CSS"],
};

const course2 = JSON.parse(JSON.stringify(course1));

course2.prerequisites.push("Python");

console.log(course1.prerequisites); // ["HTML", "CSS"]
console.log(course2.prerequisites); // ["HTML", "CSS", "Python"]
```

---

### 요약

- 참조형 값(배열, 객체)은 메모리 주소를 공유하기 때문에 직접 복사하면 원본도 영향을 받는다.
- 배열 복사는 `slice` 메서드로, 객체 복사는 `Object.assign`이나 `for...in`으로 해결할 수 있다.
- 중첩된 데이터 구조를 복사하려면 깊은 복사(Deep Copy)가 필요하다. 간단한 방법으로 `JSON.parse(JSON.stringify(obj))`를 사용할 수 있다.
- 깊은 복사는 더 복잡한 상황에서 문제가 될 수 있으므로 상황에 따라 적합한 방법을 선택해야 한다.
