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