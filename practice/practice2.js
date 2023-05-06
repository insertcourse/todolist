// mission 2
//제가 처음 코드를 짜다가 막혀서 다른 코드를 짰는데 그 막혔던 코드를 선배님께서 알려주신 덕분에 해결을 해버려서 코드 2개 올리겠습니다..
//1
const input1 = prompt('나이를 입력하세용1')
const input2 = prompt('나이를 입력하세용2')
if(input1 === input2){ //strict Equal Operator
  alert('우왕! 동갑이네요~!')
 //input1 === input2 ? console.log('우왕! 동갑이네요~!') : console.log('동갑 아니에요ㅜ')  가능
}
else if(input1.length === 0){
  //if(!input1.length) 와 if(!input) 가능
  alert('오잉? 입력되지 않았네요ㅜㅜ')
}
else if(input1 > input2){
  alert('1이 나이가 더 많네요!')
}
else if(input1 < input2){
  alert('2가 나이가 더 많네요!')
}
else if(input1 === 0){
  alert('오잉? 입력되지 않았네요ㅜㅜ')
  //위 문장을 console.log(!!0) 이라고 표현할 수 있지 않을까요..?
}
else{
  alert('흥 돌아가세요')
}

// //2
// //나이 비교하기
// const input1 = prompt('나이를 입력하세용1')
// const input2 = prompt('나이를 입력하세용2')
// if(input1 === input2){ //strict Equal Operator
//   alert('우왕! 동갑이네요~!')
//  //input1 === input2 ? console.log('우왕! 동갑이네요~!') : console.log('동갑 아니에요ㅜ')  가능
// }
// else if(input1 > input2){
//   alert('1이 나이가 더 많네요!')
// }
// else if(input1 < input2){
//   alert('2가 나이가 더 많네요!')
// }
// else if(input1 <= 0){
//   alert('오잉? 입력되지 않았네요ㅜㅜ')
//   //위 문장을 console.log(!!0) 이라고 표현할 수 있지 않을까요..?
// }
// else{
//   alert('흥 돌아가세요')
// }


