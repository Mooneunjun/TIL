const list = document.querySelector("#list");
const addButton = document.querySelector("#add");

// 이벤트 위임
list.addEventListener("click", (event) => {
  const target = event.target;

  // "item" 클래스가 있는 요소만 동작
  if (target.classList.contains("item")) {
    target.classList.toggle("done");
  }
});

// 새로운 아이템 추가
addButton.addEventListener("click", () => {
  const newItem = document.createElement("li");
  newItem.className = "item";
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
});
