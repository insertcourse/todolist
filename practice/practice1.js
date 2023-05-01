// mission 1
// const first = parseInt(prompt("계산할 첫 번째 값 입력:"));
// const second = prompt("계산할 부호 입력 (+, -, *, /, %):");
// const third = parseInt(prompt("계산할 두 번째 값 입력:"));
// let = result;

// if (second === "+") {
//     result = first + third;
// } else if (second=== "-") {
//     result = first - third;
// } else if (second === "*") {
//     result = first * third;
// } else if (operator === "/") {
//     result = first / third;
// } else if (operator === "%") {
//     result = first % third;
// }

// alert(`${first}${second}${third}는 ${result}입니다.`);



//2단계
// function input() {

//     const first = parseInt(prompt("계산할 첫 번째 값 입력:"));
//     const second = prompt("계산할 부호 입력 (+, -, *, /, %):");
//     const third = parseInt(prompt("계산할 두 번째 값 입력:"));
    
//     return [first, operator, second]; //이것을 해주지 않으면 input함수가 끝나면서 값이 소멸함.(구글링햇습니다..)
// }

// function calculate(first, second, third) {
//     let result;
    

//     if (second === "+") {
//         result = first + third;
//     } else if (second === "-") {
//         result = first - third;
//     } else if (second === "*") {
//         result = first * third;
//     } else if (second === "/") {
//         result = first / third;
//     } else if (second === "%") {
//         result = first % third;
//         return;
//     }

//     alert(`${first}${second}${third}는 ${result}입니다.`);
// }

// calculate();





//3단계
// function getInput() {
//     const input = {
//         first: parseInt(prompt("첫번째 값을 입력하세요.")),
//         second: prompt("연산자를 입력하세요 (+, -, *, /, % 중 하나)"),
//         third: parseInt(prompt("두번째 값을 입력하세요."))
//     };
//     return input;
// }

// function calculate(input) {
//     let result;
    
//     if (input.second === "+") {
//         result = input.first + input.third;
//     } else if (input.second === "-") {
//         result = input.first - input.third;
//     } else if (input.second === "*") {
//       result = input.first * input.third;
//     } else if (input.second === "/") {
//         result = input.first / input.third;
//     } else if (input.second === "%") {
//         result = input.first % input.third;
//         return;
//     }

//     return result;
//     }
    
//     const input = getInput();
//     const result = calculate(input);

//     if (result !== undefined) {//값이 있는 경우에만 실행.
//     alert(`${input.first} ${input.second} ${input.third}는 ${result}입니다.`);
//     }


//4단계
const getInput = () => {
    const input = {
        first: parseInt(prompt("첫번째 값을 입력하세요.")),
        second: prompt("연산자를 입력하세요 (+, -, *, /, % 중 하나)"),
        third: parseInt(prompt("두번째 값을 입력하세요."))
    };
    return input;
};

const calculate = (input) => {
    let result;

    if (input.second === "+") {
        result = input.first + input.third;
    } else if (input.second === "-") {
        result = input.first - input.third;
    } else if (input.second === "*") {
        result = input.first * input.third;
    } else if (input.second === "/") {
        result = input.first / input.third;
    } else if (input.second === "%") {
        result = input.first % input.third;
        return;
    }

    return result;
    };

    const input = getInput();
    const result = calculate(input);

    if (result !== undefined) {
    alert(`${input.first} ${input.second} ${input.third}는 ${result}입니다.`);
    }