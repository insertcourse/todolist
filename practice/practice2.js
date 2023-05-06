// mission 2
//제가엄청나게좋아하는라면가게를... 만들어 보겟습니다..

const input = {
    kind: prompt('원하는 라면 풀네임을 써 주세요! (마침표없이,띄어쓰기두)'),
    money: parseInt(prompt('가지고계신 돈을 적어주세요. (ex. 5000원)'))
};

function noodle(input) {
    let price;
    let result;
    
    if (!input.kind) {
        alert('종류가 입력되지 않았는데요...');
        return; // early return
    }
    
    if (input.kind === '진라면') {
        price = 1200;
        result = input.money - 1200;
    }
    if (input.kind === '열라면') {
        price = 1300;
        result = input.money - 1300;
    } 
    if (input.kind === '불닭볶음면') {
        price = 1800;
        result = input.money - 1800;
    } 
    if (input.kind === '너구리') {
        price = 1200;
        result = input.money - 1200;
    } 
    if (input.kind === '안성탕면') {
        price = 900;
        result = input.money - 900;
    } 
    if (input.kind === '비빔면') {
        price = 1000;
        result = input.money - 1000;
    } 
    if (input.kind === '틈새라면') {
        price = 1200;
        result = input.money - 1200;
    } 
    if (input.kind === '왕뚜껑') {
        price = 1100;
        result = input.money - 1100;
    }
        return { price, result };
}
    // 다른 종류의 라면에 대한 가격 및 결과 계산


const { price, result } = noodle(input);

result === 0 ? alert('주문 취소됐습니당..') : (result < 0 ? alert('한도 초과입니다!!!!') : alert(`${input.kind}은 ${price}원이므로 ${result}원이 거스름돈입니다.`));
