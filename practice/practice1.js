// mission 1
const first = parseInt(prompt("계산할 첫 번째 값 입력:"));
const second = prompt("계산할 부호 입력 (+, -, *, /, %):");
const third = parseInt(prompt("계산할 두 번째 값 입력:"));
let = result;

if (second === "+") {
    result = first + third;
} else if (second=== "-") {
    result = first - third;
} else if (second === "*") {
    result = first * third;
} else if (operator === "/") {
    result = first / third;
} else if (operator === "%") {
    result = first % third;
}

alert(`${first}${second}${third}는 ${result}입니다.`);