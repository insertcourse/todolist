// 화이팅 
//화이팅팅
const button = document.getElementById('inputForm--button'); //+버튼
let add = document.getElementById('inputForm--add'); //todolist추가
let remove = document.getElementById('delete'); //모두삭제
let result = document.getElementById('addTodo--text') //입력 창 

function addTodo(){
    if(add.value==false){ //value = input에서 입력 값을 가져올 때 사용하는 것!!!!!!
        alert('내용을 입력하세요!');
    }else{
    let list = document.createElement("li"); 
    list.innerText = add.value;
    result.appendChild(list); 
    add.value = "";     //입력창 초기화!!
}
}

function allClearList(){
        result.innerText='';                 
}

button.addEventListener('click', addTodo);
remove.addEventListener('click', allClearList);




