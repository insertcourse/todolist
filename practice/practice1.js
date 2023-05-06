const getInput = () => {
    let cal = {}
    cal.firstValue = parseInt(prompt("처음 값을 입력하세여"))
    cal.op = prompt("연산자을 입력하세여")
    cal.secondValue = parseInt(prompt("두번쨰 값을 입력하세여"))

    return cal;
}
const getSolution = (obj) => {
    if(obj.op === "+"){
        alert(st + (obj.firstValue + obj.secondValue))
    }
    if(obj.op === "-"){
        alert(st + (obj.firstValue - obj.secondValue))
    }
    if(obj.op === "*"){
        alert(st + (obj.firstValue * obj.secondValue))
    }
    if(obj.op === "/"){
        alert(st + (obj.firstValue / obj.secondValue))
    }
}
// mission 1
const cal = getInput();

const st = `${cal.firstValue} ${cal.op} ${cal.secondValue} = `

getSolution(cal);
