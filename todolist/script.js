// 화이팅
const addTodo = () => {
  // 부모 요소 가져오기

  // 날짜와 할 일 요소 가져오기
  const date = document.getElementById("date");
  const todo = document.getElementById("todo");
  if (!date.value || !todo.value) {
    alert("입력해");
    return;
  }

  // 새로운 할 일 요소 만들기
  const child = document.createElement("div");
  child.classList.add("box");
  child.addEventListener("click", onClickRemoveHTMLTag);

  // 날짜 요소 만들기
  const dateEl = document.createElement("span");
  dateEl.classList.add("dates");
  dateEl.innerText = date.value;

  // 할 일 요소 만들기
  const todoEl = document.createElement("span");
  todoEl.classList.add("todolist");
  todoEl.innerText = todo.value;

  const parents = getParents(new Date(date.value));
  // 할 일 요소를 부모 요소에 추가하기
  child.appendChild(dateEl);
  child.appendChild(todoEl);
  parents.after(child);

  date.value = null;
  todo.value = null;
};

const onClickRemoveHTMLTag = (e) => {
  const div = e.target;
  if (div.classList[0] === "box") div.remove();
};

const getParents = (date) => {
  const ch = document.getElementsByClassName("dates");
  let top = null;
  for (let a of ch) {
    const pDate = new Date(a.innerText);
    if (date > pDate) {
      top = a.parentElement;
      break;
    }
  }
  if (top === null) top = document.getElementById("boxes");
  return top;
};
