// 화이팅 
//화이팅팅
const button = document.getElementById('inputForm--button'); //+버튼
let add = document.getElementById('inputForm--add'); //todolist추가
let remove = document.getElementById('delete'); //모두삭제
let result = document.getElementById('addTodo--text') //입력 창 

function addTodo(){
    if(!add.value){ //value = input에서 입력 값을 가져올 때 사용하는 것!!!!!!
        alert('내용을 입력하세요!');
    }else{
        let list = document.createElement("li");
        let del = document.createElement('button');
        list.innerHTML = add.value;
        result.appendChild(list);
        list.appendChild(del);       
        del.innerText = "x";      
        del.style = "font-size: 20px; border: none; display: flex; margin: 8px 10px 0 auto; cursor: pointer;"
        del.addEventListener("click", deleteList); 
        add.value = ""; //초기화

}
}

function enterkey() {
    if (event.keyCode == 13) {
        addTodo(); //enter 키 눌렀을 때 addTodo 함수 실행
    }
}

function deleteList(e){ //삭제 버튼(x) 클릭시 
    let remove1 = e.target.parentElement;  //선택한 목록 한개만 지우기
    remove1.remove();
}

function allClearList(){
        result.innerText='';  //할 일 입력햇을 때 입력창 초기화하기ㅇ     
}

button.addEventListener('click', addTodo);
remove.addEventListener('click', allClearList);
