// mission 1
//1단계 - 계산기 만들기
const input1 = parseInt(prompt('값을 입력하세요'));
const input2 = prompt('부호를 입력하세요')
const input3 = parseInt(prompt('값을 입력하세요'));
if(input2 == '+'){
  alert(input1 + '+' + input3 +'는'+ (input1+input3) + '입니다')
}else if(input2 == '-'){
  alert(input1 + '-' + input3 + '는' + (input1-input3) + '입니다')
}else if(input2 == '*'){
  alert(input1 + '*' + input3 + '는' + (input1*input3) + '입니다')
}else if(input2 == '%'){
  alert(input1 + '%' + input3 + '는' + (input1%input3) + '입니다')
}else if(input == '/'){
  alert(input1 + '/' + input3 + '는' + (input1/input3) + '입니다')
}else{
  alert('계산할수없습니다')
}

//2단계 - 함수로 분리하기
function getInput(){
  const input1 = parseInt(prompt('값을 입력하세요'));
  const input2 = prompt('부호를 입력하세요')
  const input3 = parseInt(prompt('값을 입력하세요'));
}
function getValue(){
  if(input2 == '+'){
    alert(input1 + '+' + input3 +'는'+ (input1+input3) + '입니다')
  }else if(input2 == '-'){
    alert(input1 + '-' + input3 + '는' + (input1-input3) + '입니다')
  }else if(input2 == '*'){
    alert(input1 + '*' + input3 + '는' + (input1*input3) + '입니다')
  }else if(input2 == '%'){
    alert(input1 + '%' + input3 + '는' + (input1%input3) + '입니다')
  }else if(input == '/'){
    alert(input1 + '/' + input3 + '는' + (input1/input3) + '입니다')
  }else{
    alert('계산할수없습니다')
  }
}
getInput()
getValue()

//3단계 - 객체 사용해보기
//첫번째 계산할 값과 계산할 부호, 두번째 계산할 값들을 한 변수 안에 객체로 묶어서 사용해봅시다.
const cal = {
  firstInput: 'input1',
  calculation: 'input2',
  secondInput: 'input3'
}
console.log(firstInput + calculation + secondInput + '=' + (firstInput + calculation +secondInput))

//4단계 - 화살표 함수 익히기 
const sum = (input1, input2, input3) => input1+input2+input3;
console.log(sum)
