## 기본 문법 다지기

인서트 미션 2에 오신 걸 환영합니다~  
이번에도 저번과 동일하게 풀리퀘스트를 통해 미션을 제출할 예정입니다!  
미션2에서는 자바스크립트의 기본적인 문법과, 다양한 표현법에 대해 알아볼겁니다.  
그리고 예제도 직접 만들어보고, 마지막으로 나만의 투두리스트를 만들어볼겁니다!

JS를 시작하기 전에, HTML, CSS가 대략 어떻게 브라우저에서 작동하는지 알아봅시다.

### 브라우저

먼저 브라우저는 무엇이 있을까요?? 시중에는 여러 브라우저가 있습니다.  
Microsoft Edge, Chrome, Safari, Whale, FireFox, Ofera 등.. 들어봤나요?

그렇다면 저희가 저번에 꺾쇠를 사용해 짠 HTML 태그가 어떻게 브라우저에서 이쁘게 나올까요?  
C언어에서는 컴파일러가 파일을 컴파일한다는 개념이 있답니다. HTML은 어떨까요?  
HTML은 각 브라우저들이 문서를 해석한답니다. HTML태그는 무슨 코드로 시작했었죠?

```html
<!DOCTYPE html>
<html>
	...
</html>
```

이 "DOCTYPE html"코드로 시작했답니다. 기억이 나나요?  
이것은 브라우저 (인터넷상에서 웹에 연결시켜 주는 소프트웨어)가 문서를 읽을때,  
말그대로 "이 문서의 type이 HTML입니다!"라는 것을 알려주는 코드입니다.

브라우저는 렌더링 엔진 ( HTML과 CSS을 읽을 수 있는 문서로 표시하는 소프트웨어 )  
을 가지고 그 엔진을 통해서 코드를 읽게 됩니다.  
HTML 파서와, CSS 파서등의 엔진이 코드를 웹사이트 문서로 변환해줍니다.

이렇게 웹사이트가 생성되면 그걸 토대로 브라우저는 사용자에게 웹페이지를 표시한답니다..!  
그래서 위에서 말한 문서, 즉 웹페이지를 Document Object Model, 줄여서 DOM이라고 합니다.

### 자바스크립트 동작 원리

그럼 만약 브라우저가 자바스크립트(이하 JS) 코드를 만나면 어떻게 처리할까요?  
브라우저는 JS 코드를 읽었을 때, 렌더링을 멈추고 JS엔진에게 권한을 줍니다.  
그런 다음, JS 엔진이 코드를 돌리는거죠.

JS 코드는 HTML 파일 내에 \<script>\</script> 태그를 열어 안에 작성합니다.  
하나의 예시를 보겠습니다.

```html
<head></head>
<body>
	<script>
		const siyeon = document.getElementById('kimsiyeon0223')
		siyeon.innerText = 'Hi, siyeon!'

		const yoyoung = document.getElementById('yoyoung13')
		yoyoung.innnerText = 'Hi, yoyoung!'
	</script>

	<div>
		<span id="kimsiyeon0223">Hello</span>
		<span id="yoyoung13">Hello</span>
	</div>
</body>
```

다음과 같은 코드가 있다고 생각해보세요. 브라우저가 자바스크립트 코드를 만나면 해석을 멈춘다고 했죠?  
근데 다음과 같은 태그에선, 브라우저가 문서를 읽다가 \<script>태그를 만나니까 해석을 멈추고 JS엔진이 코드를 읽을거에요.
그런데 어떤 문제가 생길까요?

아직 kimsiyeon0223, yoyoung13이라는 아이디를 가진 span 코드를 브라우저가  
읽지 않았는데 그 태그를 불러오는 자바스크립트 코드가 실행이 된거죠!  
요즘은 브라우저들이 똑똑해서 body 위에 script태그를 사용해도 문서를 잘 읽지만, 가끔 본인이 자바스크립트로 코딩을 할 때 위의 오류가 날 수도 있답니다!
그럼 어떻게 적어야할까요?

```html
<head></head>
<body>
	<div>
		<span id="kimsiyeon0223">Hello</span>
		<span id="yoyoung13">Hello</span>
	</div>

	<script>
		const siyeon = document.getElementById('kimsiyeon0223')
		siyeon.innerText = 'Hi, siyeon!'

		const yoyoung = document.getElementById('yoyoung13')
		yoyoung.innnerText = 'Hi, yoyoung!'
	</script>
</body>
```

이렇게 불러와야 문제가 없겠죠? 자바스크립트에선 HTML 태그를 불러오지만,  
HTML은 자바스크립트를 불러오는 코드가 없으니, 훨씬 안정적이고 좋은 코드입니다.  
그렇다면 자바스크립트에서는 어떤 작업을 할 수 있을까요?

### 라이브러리와 프레임워크

위에서 말한 것처럼, 태그를 가져와서 태그 안에 있는 내용을 바꾼다던지,  
혹은 글자의 색이나 배경의 색, 높이나 간격 등의 스타일도 바꿀 수 있습니다!

자바스크립트에서 선언한 변수를 HTML 태그에 보여줄 수도 있겠죠? 그렇다면 자바스크립트에서  
백엔드에게 데이터를 달라고 요청한 다음, 받아서 HTML 태그에 띄울 수도 있을겁니다!!

이런 의미에서 자바스크립트를 사용한답니다. 그럼 많은 사람들이 사용하는 리액트는 뭘까요?  
JS에서 HTML 태그를 더 쉽게 바꾸도록 도와주는게 React에요.  
React는 JS에서 추가적인 기능을 지원해주는 도구라고 생각하면 편해요.

라이브러리와 프레임워크의 차이점에 대해 들어본 적이 있나요?  
간략히 설명하자면, 라이브러리는 개발자에게 더욱 많은 기능들을 제공해주는 도구랍니다.  
라이브러리가 도구라면, 프레임워크는 팀원이라고 생각하면 편해요.

프레임워크는 프레임워크가 정한대로 개발자가 규칙을 따라 코딩을 해야 한다는 특징이 있어요.  
이렇게 말하면 라이브러리가 더 좋다고 생각할 수 있지만, 생각해보세요!  
프레임워크가 우리가 많이 반복하는 귀찮은 작업을 대신 해준다면 더 편하겠죠?

이정도로 알아보고, 제가 하고 싶은 말은 React는 JS의 라이브러리입니다.  
개발자에게 JS로 동적인 화면을 만드는 것을 더욱 쉽게 코딩할 수 있도록 도와준답니다.  
그러니까 JS의 라이브러리는 React.JS고 이 React.JS의 프레임워크는 Next.JS의 머시기...  
대충 아 그런게 있구나 정도로만 생각하면돼요!!

어쨌든 곧 배울 리액트를 이렇구나~ 정도로만 알아두시고. 자바스크립트로 다시 넘어가봅시다.

### console 사용하기

모든 언어를 처음 배울 때, 출력하는 법부터 배우는게 국룰이죠!!  
그럼 저희도 출력하는 방법을 먼저 배워봅시다. 자바스크립트에는 콘솔이라는 친구가 있어요.  
콘솔은 굉장히 유용하게 사용되고, 디버깅할 때 필요하니까 꼭 알아야해요.

콘솔을 써봅시다! 사용법은 간단해요. console.log() 함수를 사용해서 출력하면 된답니다!!

참고로 자바스크립트는 세미콜론을 사용해도 되고, 사용하지 않아도 됩니다.  
곧 배울 타입스크립트에서는 세미콜론을 사용하지 않는게 원칙이니 사용하지 맙시다.  
또한 앞으로 배울 indirect function expression 문법에서, 세미콜론이 있고 없고의  
차이점이 얼마나 큰 영향을 끼치는 지도 간단하게 알아볼겁니다.

우리그럼 Hello, World! 를 출력해봅시다..!

```js
console.log('Hello, World!') // Hello, World!
```

이렇게 작성하면 콘솔에 Hello, World가 출력된답니다.  
콘솔을 확인하는 방법은 다양한데요, 저는 이 사이트를 추천할게요.  
https://codepen.io/pen/?editors=0002  
여기에 들어가면 설정 없이 코드를 작성하면 결과를 얻을 수 있답니다!!  
직접 들어가서 콘솔을 찍어보고 확인 후 다시 와보세요!  
추가적으로 코드펜을 사용할 때, 자동 실행이 거슬린다면  
Settings -> Behavior -> Auto-Updating Preview를 OFF로 설정해주세요.  
그럼 원할 때 Run 버튼을 클릭해 실행시킬 수 있답니다.

좋아요! C언어에서는 무조건 문자열은 쌍따옴표로 써야하죠? JS에는 그런게 없어요. 작은따옴표를 쓰든, 큰 따옴표를 쓰든
원하는 대로 사용하면 된답니다. 저는 개인적으로 작은 따옴표를 선호해요. 쌍따옴표 칠라면 시프트눌러야되잖아요. 저는 손가락힘이 업서서...^^........  
물론 여러분은 원하는대로 사용하면 됩니다!

### 변수

이제 변수를 배워볼까요? C언어에서 int, float 이런 자료형을 처음할 때 배우죠?  
자바스크립트에서는 조금 더 변수 선언이 명시적이고 간단합니다.  
먼저, 변수 선언 방법을 알아볼게요. JS 변수 선언 방법은 총 세 가지가 있습니다.

바로 var, let, const랍니다. 특징은 다음과 같아요.

- let으로 선언한 변수는 값을 새로 대입할 수 있는 일반 변수에요.
- const는 상수를 말합니다. constant의 줄임말이에요.  
  const 변수는 선언과 동시에만 대입을 할 수 있어요.
- var는 옛날 JS 문법으로, 지금은 사용하지 않아요. 단점이 있으니 꼭 사용하지 않기!

결론은 const 많이, let 조금, var 절대 사용하지 않기로 생각하면 될 것 같아요.  
만약 변하지 않아도 되는 값이 let으로 선언되어있다면, 여러모로 곤란할 수 있을거에요.

```js
const PI = 3.141592
```

다음과 같은 변수는 꼭 상수여야 하기에, 이런 변수를 let으로 선언했다가 실수로 다른 값을  
대입하면.. 만약 큰 프로젝트에서 그런 실수를 했다면 오류를 쉽게 찾기 어렵겠죠?

예제를 좀 보여줄게요.

```js
var A = 'Hello, World!'
A = 'Hello, Strong World!'
A = 'Hello, Very Strong World!'

let B = 'Morning Exercise is Good!'
B = 'Morning Exercise is bad!'
B = 'Morning Exercise is Very bad!!!!!'

const C = 'This Variable is constant.'

C = 'Changed' // Uncaught TypeError: Assignment to constant variable.
```

이해가 되나요? 자바스크립트는 특이하게 변수의 자료형을 적어주지 않고,  
var, let, const 이 키워드 세 개만으로 변수를 선언한답니다.  
그럼 이제 자바스크립트의 자료형에 대해 알아볼게요.

JS에는 string, number, boolean, undefined, NaN, null, function, object 등의 타입이 있답니다.  
JS 엔진은 똑똑해서, 변수에 어떤 값이 선언되는지에 따라 자동으로 어떤 자료형인지를 추론하는 "타입 추론" 기능이 있습니다.

위에서 설명한 여러가지 자료형들을 예제와 함께 설명해볼게요.

```js
// number. 숫자값이 들어갑니다.
let t1 = 3
console.log(t1) // 3

// string. 문자나 문자열이 들어갑니다.
let t2 = 'Hi.'
console.log(t2) // Hi.

// boolean. true와 false가 들어갑니다.
let t3 = true
console.log(t3) // true

let t4 = false
console.log(t3) // false

if (t3 == false) {
	console.log('t3 is false.') // 출력되지않음.
}
if (t4 == false) {
	console.log('t4 is false.') // t4 is false
}

// undefined. 찾을 수 없는 값을 의미해요. 접근할 수 없는 값을 불러오려하면 이 친구가 뜹니다.
let t5 = undefined
console.log(t3) // true

// null. 없는 값, 또는 값의 부재를 의미해요. 말 그대로 값이 없음을 의미합니다.
let t6 = null
console.log(t6) // null

// NaN. Not a Number의 줄임말이에요. 숫자값이 아닌데 강제로 숫자로 바꾸려할 때 나오는 값입니다.
let t7 = NaN
console.log(t7) // NaN

// 문자값을 강제로 숫자로 바꿔볼게요.
let t8 = 'I am not number!'

// parse int, int로 값을 바꾼다는 의미.
let t9 = parseInt(t8)
console.log(t9) // NaN

// function. 함수라는 뜻인데, 일종의 블록이라고 생각하면 편해요. 함수를 호출할 때마다 중괄호 안에 있는 모든 문장들을 실행시켜줍니다.

function t10() {
	console.log('t10 is called.')
	console.log('wow!')
} // 선언될 때는 실행되지 않습니다.

t10() // 다음과 같이 호출할수있답니다.

// t10 is called.
// wow!

// object. 여러가지 값을 담을 수 있답니다.
// 도트 연산자(.)를 사용해서 값을 꺼낼 수 있답니다.
// 처음엔 좀 난해할 수 있지만 한번 사용하고 넘어갈게요. 잘모르겠음 구글링하거나 직접 연락하기!!.

let person = {
	name: 'Park Ubin',
	age: 17,
	gender: 'MAN',
}

let dog = {
	name: 'bbobbi',
	breed: 'Pomeranian',
	isCute: true,
}

// 다음과 같이 여러가지의 속성을 변수 하나에 담을 수 있습니다.

console.log(person.age) // 17
console.log(dog.isCute) // true
console.log(person.name) // Park Ubin
```

object는 한국어로 객체라고도 한답니다.  
객체 지향이 이런 식의 객체를 통해 프로그래밍하는 프로그래밍 방식이랍니다.  
참고로 자바스크립트의 객체와 자바의 객체는 형식이 많이 달라요.  
그렇구나 정도로만 알고있으면 됩니다.

어떻게, 할만한가요? 어려우면 PR에 솔직하게 어렵다고 이야기해도 되고,  
쉬우면 쉽다고 남겨주세요~ 또 궁금한 점이 생기면 바로바로 질문해도 됩니다~

### 연산자

연산자는 C언어랑 똑같아요. 딱히 다른거 없습니다. 다음 코드에서 모르는 연산이 있으면  
검색을 통해 찾아보세요!

```js
console.log(3 + 5) // 8
console.log(14 - 3) // 11
console.log(8 * 3) // 24
console.log(8 / 3) // 2.6666666666666665 이건 C언어와 다르게 바로 소수점으로 바뀝니다.
console.log(8 % 3) // 2

const T1 = 2
const T2 = 8

console.log(T1 + T2) // 10
console.log(T1 - T2) // -6
console.log(T1 * T2) // 16
console.log(T1 / T2) // 0.25
console.log(T1 % T2) // 2

const ubin = {
	name: 'park ubin',
	age: 18,
}

const sewon = {
	name: 'gwon sewon',
	grade: 2,
	class: 2,
}

console.log(ubin.age + sewon.grade) // 20
```

이해가 되나요? 모르겠음 바로 물어보세요.  
이제 if문, for문 해봅시다. 이것도 똑같아요~  
밑의 코드들은 직접 정답을 맞춰봅시다!

```js
const H1 = 21 
const H2 = 5 + H1

if (H1 <= 20) {
	console.log('A') 
} else if (H1 > 20 && H1 < 25) {
	console.log('B')
} else {
	console.log('C')
}
//B

if (H2 === 26 || H2 === 21) {
	console.log('D')
}
//D
for (let i = 0; i < 8; i++) {
	console.log(i)
}
```
//7
### 템플릿 리터럴

좋아요. 마지막으로 하나만 더 배워봅시다. 바로 템플릿 리터럴이라는 친구입니다.  
우리가 문자열과 변수를 섞어서 사용해야 할때, + 연산자를 사용하죠?

```js
const myname = 'Park Ubin'
console.log('제 이름은 ' + myname + '입니다.') // 제 이름은 Park Ubin 입니다.
```

이 문장읉 템플릿 리터럴이라는 문법을 통해 더욱 간편하고 쉽게 바꿀 수 있습니다.  
템플릿 리터럴은 문자열 내에서 변수를 사용할 수 있는 문법이랍니다.  
문자열을 백틱, 즉 `` <- 로 감싸고, 변수를 사용하고싶을 땐 ${} <- 이렇게 적고,  
중괄호 안에 변수를 넣어주면 됩니다. 위의 코드를 이렇게 바꿔볼게요.

```js
console.log(`제 이름은 ${myname}입니다.`) // 제 이름은 Park Ubin 입니다.
```

어떤가요? 복잡하게 + 연산자를 쓰지 않고도 깔끔하게 변수와 문자열을 섞어 쓸 수 있죠?  
필수적으로 사용하는 문법이니 꼭 알고 익혀두길 바랍니다.

### Mission 1

이정도면 JS의 절반은 배웠네요! 장합니다~ 이제 간단한 챌린지를 하나 할거에요.

사용자에게 값을 입력받아서 계산값을 띄워주는 계산기 프로그램을 만들어봅시다.  
총 4단계가 있는데, 한 파일에 코드를 단계별로 나누어 작성해봅시다!  
실습은 코드펜에서 한다음에 잘 작동하면 파일로 옮겨서 커밋하면됩니다.  
이제 챌린지에 대해서 알아봅시다..!!

```js
let input = prompt()
```

prompt() 함수로 사용자에게 알림창을 통해서 값을 입력받을 수 있어요.

### 1단계 - 계산기 만들기

prompt()함수로 계산할 첫 번째 값 한개,  
계산할 부호 (+, -, \*, %, /) 한개,  
두번째로 계산할 값 한개씩 총 세 개를 받아요.

받은 값을 변수에 저장한 다음, if문을 통해 부호를 판별해 결과값을 alert로 띄워줍시다.
예를들어 3, -, 2를 받으면 alert로 "3-2는 1입니다." 이렇게 띄우는 코드를 작성해보세요!

힌트는 prompt()는 무조건 string으로 입력을 받습니다.  
위 예제에서 사용한 parseInt라는 함수가 도움이 될 겁니다.

### 2단계 - 함수로 분리하기

이 기능을 다 구현했다면 기능을 함수로 분리해서 만들어봅시다.
입력을 받아서 변수에 저장하는 함수 하나,  
입력값들을 계산해서 alert창으로 띄우는 함수까지 총 두 개 만들어서 실행해봅니다.

### 3단계 - 객체 사용해보기

첫번째 계산할 값과 계산할 부호, 두번째 계산할 값들을 한 변수 안에 객체로 묶어서 사용해봅시다.

### 4단계 - 화살표 함수 익히기

기존에 있던 함수를 화살표 함수로 바꿔서 사용해봅시다.  
화살표 함수는 직접 구글링해서 알아보면 좋을 것 같습니당. 화이팅!!!
