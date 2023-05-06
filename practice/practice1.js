// mission 1
//1단계 - 계산기 만들기
const value1 = parseInt(prompt('값을 입력하세요'))
const oper = prompt('부호를 입력하세요')
const value2 = parseInt(prompt('값을 입력하세요'))
if(oper == '+'){
  alert(value1 + '+' + value2 +'는'+ (value1+value2) + '입니다')
}else if(oper == '-'){
  alert(value1 + '-' + value2 + '는' + (value1-value2) + '입니다')
}else if(oper == '*'){
  alert(value1 + '*' + value2 + '는' + (value1*value2) + '입니다')
}else if(oper == '%'){
  alert(value1 + '%' + value2 + '는' + (value1%value2) + '입니다')
}else if(oper == '/'){
  alert(value1 + '/' + value2 + '는' + (value1/value2) + '입니다')
}else{
  alert('계산할수없습니다')
}

//2단계 - 함수로 분리하기
function getInput(){
  const value1 = parseInt(prompt('값을 입력하세요'));
  const oper = prompt('부호를 입력하세요')
  const value2 = parseInt(prompt('값을 입력하세요'));
}
function getValue(){
  if(oper == '+'){
    alert(value1 + '+' + value2 +'는'+ (value1+value2) + '입니다')
  }else if(oper == '-'){
    alert(value1 + '-' + value2 + '는' + (value1-value2) + '입니다')
  }else if(oper == '*'){
    alert(value1 + '*' + value2 + '는' + (value1*value2) + '입니다')
  }else if(oper == '%'){
    alert(value1 + '%' + value2 + '는' + (value1%value2) + '입니다')
  }else if(oper == '/'){
    alert(value1 + '/' + value2 + '는' + (value1/value2) + '입니다')
  }else{
    alert('계산할수없습니다')
  }
}


//3단계 - 객체 사용해보기
//첫번째 계산할 값과 계산할 부호, 두번째 계산할 값들을 한 변수 안에 객체로 묶어서 사용해봅시다.
const cal = {
  firstInput: 'value1',
  calculation: 'oper',
  secondInput: 'value2'
}
console.log(firstInput + calculation + secondInput + '=' + (firstInput + calculation +secondInput))

//4단계 - 화살표 함수 익히기 
const sum = (value1, oper, value2) => value1+oper+value2;
console.log(sum)
