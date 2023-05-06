// 화이팅

//응원메세지
const CheerMassage = document.querySelector(".cheer");
function onclick(){
    const change = prompt("응원 메세지를 입력해주세용");

    if(!change){
        alert("입력되지 않았어요ㅠㅠ 다시 돌아가세요");
    }else{
        CheerMassage.innerHTML=change;
    }
}
CheerMassage.addEventListener("click", onclick);


//월요일 계획
const DayMassage1 = document.querySelector(".Day1Massage");
function onClickAddTodoMonday(){
    const change = prompt("월요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage1.innerHTML=change;
    }
}
DayMassage1.addEventListener("click", onClickAddTodoMonday);

function MD(){
    document.getElementById("DayMassage1").value='';
}


//화요일 계획
const DayMassage2 = document.querySelector(".Day2Massage");
function onClickAddTodoTuesday(){
    const change = prompt("화요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage2.innerHTML=change;
    }
}
DayMassage2.addEventListener("click", onClickAddTodoTuesday);

function TuD(){
    document.getElementById("DayMassage2").value='';
}


//수요일 계획
const DayMassage3 = document.querySelector(".Day3Massage");
function onClickAddTodoWednsday(){
    const change = prompt("수요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage3.innerHTML=change;
    }
}
DayMassage3.addEventListener("click", onClickAddTodoWednsday);

function WD(){
    document.getElementById("DayMassage2").value='';
}


//목요일 계획
const DayMassage4 = document.querySelector(".Day4Massage");
function onClickAddTodoThursday(){
    const change = prompt("목요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage4.innerHTML=change;
    }
}
DayMassage4.addEventListener("click", onClickAddTodoThursday);

function ThD(){
    document.getElementById("DayMassage2").value='';
}


//금요일 계획
const DayMassage5 = document.querySelector(".Day5Massage");
function onClickAddTodoFriday(){
    const change = prompt("금요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage5.innerHTML=change;
    }
}
DayMassage5.addEventListener("click", onClickAddTodoFriday);

function FD(){
    document.getElementById("DayMassage2").value='';
}


//토요일 계획
const DayMassage6 = document.querySelector(".Day6Massage");
function onClickAddTodoSaturday(){
    const change = prompt("토요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage6.innerHTML=change;
    }
}
DayMassage6.addEventListener("click", onClickAddTodoSaturday);

function SaD(){
    document.getElementById("DayMassage2").value='';
}


//일요일 계획
const DayMassage7 = document.querySelector(".Day7Massage");
function onClickAddTodoSunday(){
    const change = prompt("일요일 계획을 써주세요!");

    if(!change){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage7.innerHTML=change;
    }
}
DayMassage7.addEventListener("click", onClickAddTodoSunday);

function SuD(){
    document.getElementById("DayMassage2").value='';
}