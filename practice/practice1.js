// mission 1
// const value1 = parseInt(prompt("계산할 첫 번째 값 입력:"));
// const sign = prompt("계산할 부호 입력 (+, -, *, /, %):");
// const value2 = parseInt(prompt("계산할 두 번째 값 입력:"));
// let result;

// if (sign === "+") {
//     result = value1 + value2;
// } else if (sign=== "-") {
//     result = value1 - value2;
// } else if (sign === "*") {
//     result = value1 * value2;
// } else if (sign === "/") {
//     result = value1 / value2;
// } else if (sign === "%") {
//     result = value1 % value2;
// }

// alert(`${value1}${sign}${value2}는 ${result}입니다.`);



//2단계
// function input() {

// const value1 = parseInt(prompt("계산할 첫 번째 값 입력:"));
// const sign = prompt("계산할 부호 입력 (+, -, *, /, %):");
// const value2 = parseInt(prompt("계산할 두 번째 값 입력:"));

//     return [value1, sing, value2]; //이것을 해주지 않으면 input함수가 끝나면서 값이 소멸함.(구글링햇습니다..)
// }

// function calculate(value1, sign, value2) {
//     let result;
    

// if (sign === "+") {
//     result = value1 + value2;
// } else if (sign=== "-") {
//     result = value1 - value2;
// } else if (sign === "*") {
//     result = value1 * value2;
// } else if (sign === "/") {
//     result = value1 / value2;
// } else if (sign === "%") {
//     result = value1 % value2;
// }

// alert(`${value1}${sign}${value2}는 ${result}입니다.`);
// }

// calculate();





//3단계
// function getInput() {
//     const input = {
//          value1 = parseInt(prompt("계산할 첫 번째 값 입력:"));
//          sign = prompt("계산할 부호 입력 (+, -, *, /, %):");
//          value2 = parseInt(prompt("계산할 두 번째 값 입력:"));
//          return input;
// }

// function calculate(input) {
//     let result;
    
//     if (input.sign === "+") {
//         result = input.value1 + input.value2;
//     } else if (input.sign === "-") {
//         result = input.value1 - input.value2;
//     } else if (input.sign === "*") {
//       result = input.value1 * input.value2;
//     } else if (input.sign === "/") {
//         result = input.value1 / input.value2;
//     } else if (input.sign === "%") {
//         result = input.value1 % input.value2;
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
        value1: parseInt(prompt("첫번째 값을 입력하세요.")),
        sign: prompt("연산자를 입력하세요 (+, -, *, /, % 중 하나)"),
        value2: parseInt(prompt("두번째 값을 입력하세요."))
    };
    return input;
};

const calculate = (input) => {
    let result;

    if (input.sign === "+") {
        result = input.value1 + input.value2;
    } else if (input.sign === "-") {
        result = input.value1 - input.value2;
    } else if (input.sign === "*") {
        result = input.value1 * input.value2;
    } else if (input.sign === "/") {
        result = input.value1 / input.value2;
    } else if (input.sign === "%") {
        result = input.value1 % input.value2;
        return;
    }

    return result;
    };

    const input = getInput();
    const result = calculate(input);

    if (!!result) {
    alert(`${input.value1} ${input.sign} ${input.value2}는 ${result}입니다.`);
    }