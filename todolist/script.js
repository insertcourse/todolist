// 화이팅

//응원메세지
const CheerMassage = document.querySelector(".cheer");
function onclick(){
    const change = prompt("응원 메세지를 입력해주세용");

    if(change==""){
        alert("입력되지 않았어요ㅠㅠ 다시 돌아가세요");
    }else{
        CheerMassage.innerHTML=change;
    }
}
CheerMassage.addEventListener("click", onclick);


//월요일 계획
const DayMassage1 = document.querySelector(".day1--massage");
function onclick(){
    const change = prompt("월요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage1.innerHTML=change;
    }
}
DayMassage1.addEventListener("click", onclick);


//화요일 계획
const DayMassage2 = document.querySelector(".day2--massage");
function onclick(){
    const change = prompt("화요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage2.innerHTML=change;
    }
}
DayMassage2.addEventListener("click", onclick);


//수요일 계획
const DayMassage3 = document.querySelector(".day3--massage");
function onclick(){
    const change = prompt("수요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage3.innerHTML=change;
    }
}
DayMassage3.addEventListener("click", onclick);


//목요일 계획
const DayMassage4 = document.querySelector(".day4--massage");
function onclick(){
    const change = prompt("목요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage4.innerHTML=change;
    }
}
DayMassage4.addEventListener("click", onclick);


//금요일 계획
const DayMassage5 = document.querySelector(".day5--massage");
function onclick(){
    const change = prompt("금요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage5.innerHTML=change;
    }
}
DayMassage5.addEventListener("click", onclick);


//토요일 계획
const DayMassage6 = document.querySelector(".day6--massage");
function onclick(){
    const change = prompt("토요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage6.innerHTML=change;
    }
}
DayMassage6.addEventListener("click", onclick);


//일요일 계획
const DayMassage7 = document.querySelector(".day7--massage");
function onclick(){
    const change = prompt("일요일 계획을 써주세요!");

    if(change==""){
        alert("입력되지 않았어요ㅜㅜ 다시 돌아가세요");
    }else{
        DayMassage7.innerHTML=change;
    }
}
DayMassage7.addEventListener("click", onclick);