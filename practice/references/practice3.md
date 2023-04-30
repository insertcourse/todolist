## DOM 핸들링

JS는 웹사이트를 동적으로 만들어주는데, 이를 이행하려면 먼저 DOM에 접근해야한답니다.  
DOM에 어떻게 접근하는지 알아보고, 이를 통해 어떤 일을 할 수 있는지, 그리고 이벤트에 대해 알아봅시다.

TMI긴한데.. 사실 제가 JS를 처음 배울 때는 맨날 console log만 찍고, 연산만 하고, if문, 반복문만 하고...  
도대체 이런 걸로 어떻게 웹사이트를 만드나 궁금했었어요. 리그오브레전드라는 게임을 아나요? 그 게임을 떠나서,  
여러가지의 게임들은 C++이라는 언어로 만들어졌답니다. 하지만 제가 C언어를 배울 땐 그런 소리를 듣고 생각했죠.  
"이런 것만 해서 어떻게 게임을 만들지?"  
그래서 실습이 중요하답니다. 저는 기본개념만 너무 다지기 시작하면 흥미가 떨어지더라구요. 사실 스위프트 공부를 포기한 이유가 그것 때문도 있답니다^^..  
어쨌든 이제부터 배운 것들을 응용해서, 여러분들이 진짜 생각하는 "자바스크립트로 웹을 만든다니!"를 해봅시다.

## DOM 접근하기

DOM에 접근한다는 말이 무슨 뜻일까요? 알고보면 그렇게 어려운 말은 아닙니다.  
바로 여러분이 짠 HTML태그에 JS로 접근하는 거죠. 그 태그와 JS를 연결하면, JS에서 HTML태그를 바꿀 수 있어요.  
그럼 어떻게 접근할 수 있을까요? 크게는 세 가지의 방법이 있습니다.

1. 태그의 아이디를 통해 접근하는 방법
2. 태그의 클래스를 통해 접근하는 방법
3. CSS 선택자로 접근하는 방법

백문이 불여일견이라고, 바로 예제를 볼게요.

```html
<!-- index.html -->
<body>
	<div class="box">
		<h1 id="greeting">Hi There!</h1>
	</div>
	<div class="box">
		<span id="introduce">I am Ubin.</span>
	</div>
	<script src="script.js"></script>
</body>
```

```js
/* script.js */
document.getElementById('greeting') // <h1 id="greeting">Hi There!</h1> 태그가 불러와집니다.
document.getElementsByClassName('box') // <div class="box"> 두 태그가 배열 형태로 불러와집니다.

document.querySelector('#introduce') // <span id="introduce">I am Ubin.</span> 태그가 불러와집니다.
document.querySelector('.box') // <div class="box"> 두 태그가 배열 형태로 불러와집니다.
document.querySelector('h1') // // <h1 id="greeting">Hi There!</h1> 태그가 불러와집니다.
```

이 세 가지의 함수를 통해 DOM에 접근할 수 있답니다. 함수는 이렇게 카멜 케이스로 작성하는게 원칙입니다.  
사실은 정말 직관적인 이름을 가지고 있는 함수에요. 풀어서 읽어볼까요?  
get element by id. 말그대로 id를 통해 element(요소, HTML태그)를 불러온다 라는 뜻입니다.  
get elements by class name. 말그대로 클래스명을 통해 요소를 불러온다는 뜻인데, class는 여러 태그에 중복 지정할 수 있기에 element 뒤에 s가 붙는답니다.  
query selector는 아까 말한 것처럼 css선택자로 접근해요. css에서 id나 class값을 사용할 때와 똑같이 사용할 수 있습니다.

이해가 됐나요? 이런 요소들을 불러와서 변수에 넣고, 그 변수를 핸들링해서 웹을 동적으로 만들 수 있답니다.

## JS로 동적인 웹사이트 만들기

JS에서 "I am Ubin."을 다른 이름으로 바꿔볼게요.

```js
const introduce = document.getElementById('introduce') // 변수명은 불러오는 이름과 달라도 상관없습니다.

introduce.innerText = 'my name is Seokjin!' // innerText라는 속성으로 문자를 바꿀 수 있습니다.
introduce.innerHTML = "<strong>I'm Sewon.</strong>" // innerHTML이라는 속성으로 HTML 태그를 넣을 수 있습니다.
```

어떤가요? 흥미가 좀 생기나요? 이해가 안된다면 구글링 혹은 바로 질문하세요!!  
이를 통해서 if문과 함께 시간에 따라 인사를 하는 프로그램도 만들 수 있겠죠? 예제를 봅시다.

```html
<body>
	<h1 id="timer"></h1>
</body>
```

```js
const timer = document.querySelector('#timer')
const date = new Date() // 현재 시간을 가져오는 문법입니다.
const hour = date.getHours() // date가 가지고 있는 함수로, 현재 몇 시인지를 가져옵니다.

if (hour > 6 && hour < 8) {
	timer.innerText = '좋은 아침입니다!'
} else if (hour < 16) {
	timer.innerText = '좋은 점심입니다!'
} else if (hour < 22) {
	timer.innerText = '좋은 저녁입니다!'
} else {
	timer.innerText + '빨리자세요 ㅡㅡ'
}
```

시간이 난다면 한번 직접 결과를 확인해보세요. 이제 조금 감이 올겁니다.

## 이벤트

이제 이벤트에 대해 알아보겠습니다. 버튼을 누르면 결과가 나오는 계산기를 짜봅시다.

```html
<!-- index.html -->
<body>
	<div>
		<h1>계산기</h1>
		<input type="text" id="num1" placeholder="계산할 첫 번째 값 입력" />
		<input type="text" id="operator" placeholder="연산자 입력" />
		<input type="text" id="num2" placeholder="계산할 두 번째 값 입력" />
		<button id="result_button">결과 보기</button>
		<h3 id="result"></h3>

		<script src="script.js"></script>
	</div>
</body>
```

```js
/* script.js */

const calc = { // 계산에 들어가는 값들을 객체로 묶어서 표현해보겠습니다.
	num1: document.getElementById('num1')
	num2: document.getElementById('num2')
	op: document.getElementById('operator')
}
const resultButton = document.getElementById('result_button')
const result = document.getElementById('result')

const onClickCalculator = () => { // 화살표 함수 표현법을 사용해볼게요. function을 사용해도 무관합니다.
	if (calc.op === '+') {
		// input 태그의 value는 가져온 document 요소의 value로 접근하여 가져올 수 있습니다.
		result.innerText = `${num1.value} + ${num2.value} = ${parseInt(num1.value) + parseInt(num2.value)}입니다.`
	} else if (calc.op === '-') {
		result.innerText = `${num1.value} - ${num2.value} = ${parseInt(num1.value) - parseInt(num2.value)}입니다.`
	} else if (calc.op === '*') {
		result.innerText = `${num1.value} x ${num2.value} = ${parseInt(num1.value) * parseInt(num2.value)}입니다.`
	} else if (calc.op === '%') {
		result.innerText = `${num1.value} % ${num2.value} = ${parseInt(num1.value) % parseInt(num2.value)}입니다.`
	} else {
		result.innerText = `${num1.value} / ${num2.value} = ${parseInt(num1.value) / parseInt(num2.value)}입니다.`
	}
}

resultButton.addEventListener('click', onClickCalculator) // add event listener, 이벤트를 생성한다는 의미입니다.

```

감이 오나요? 125번줄에서 우리가 입력한 값들을 계산해주는 간단한 함수를 작성해주었습니다.  
그리고 122번에서 정의한 result button 태그를 134번 줄에서 손을 조금 봐줬지요.  
add event listener, 말그대로 이벤트를 듣는자..?를 생성하는 함수랍니다.  
이 함수의 첫 번째 매개변수에는 이벤트의 이름이, 두 번째에는 함수가 들어간답니다.  
이렇게 이벤트가 생성이 되면 버튼을 눌렀을때 잘 작동이 될 겁니다. 시도해보세요!

이건 다른 이야기이긴 하지만, 140번줄과 같은 코드도 함수를 생성하지 않고 익명 함수로 대체할 수 있답니다.

```js
resultButton.addEventListener('click', function () {
	if (calc.op === '+') {
		result.innerText = `${num1.value} + ${num2.value} = ${parseInt(num1.value) + parseInt(num2.value)}입니다.`
	} else if (calc.op === '-') {
		result.innerText = `${num1.value} - ${num2.value} = ${parseInt(num1.value) - parseInt(num2.value)}입니다.`
	} else if (calc.op === '*') {
		result.innerText = `${num1.value} x ${num2.value} = ${parseInt(num1.value) * parseInt(num2.value)}입니다.`
	} else if (calc.op === '%') {
		result.innerText = `${num1.value} % ${num2.value} = ${parseInt(num1.value) % parseInt(num2.value)}입니다.`
	} else {
		result.innerText = `${num1.value} / ${num2.value} = ${parseInt(num1.value) / parseInt(num2.value)}입니다.`
	}
})

resultButton.addEventListener('click', () => {
	if (calc.op === '+') {
		result.innerText = `${num1.value} + ${num2.value} = ${parseInt(num1.value) + parseInt(num2.value)}입니다.`
	} else if (calc.op === '-') {
		result.innerText = `${num1.value} - ${num2.value} = ${parseInt(num1.value) - parseInt(num2.value)}입니다.`
	} else if (calc.op === '*') {
		result.innerText = `${num1.value} x ${num2.value} = ${parseInt(num1.value) * parseInt(num2.value)}입니다.`
	} else if (calc.op === '%') {
		result.innerText = `${num1.value} % ${num2.value} = ${parseInt(num1.value) % parseInt(num2.value)}입니다.`
	} else {
		result.innerText = `${num1.value} / ${num2.value} = ${parseInt(num1.value) / parseInt(num2.value)}입니다.`
	}
})
```

익명 함수 개념은 아직까지는 이런게 있구나 정도로만 알고, 코드를 봤을 때 "익명 함수다!"라고 판별할 정도만 알고 있으면 됩니다.  
사실 이걸 좀 쉽게 사용하는 방법이 있습니다. 함수를 정의해놓고 html에서 이벤트를 정의해주는 거죠. 예시를 볼게요.

```html
<div>
	...
	<button id="result_button" onclick="onClickCalculator()">결과 보기</button>
</div>
```

```js
const onClickCalculator = () => {
	if (calc.op === '+') {
		result.innerText = `${num1.value} + ${num2.value} = ${parseInt(num1.value) + parseInt(num2.value)}입니다.`
	} else if (calc.op === '-') {
		result.innerText = `${num1.value} - ${num2.value} = ${parseInt(num1.value) - parseInt(num2.value)}입니다.`
	} else if (calc.op === '*') {
		result.innerText = `${num1.value} x ${num2.value} = ${parseInt(num1.value) * parseInt(num2.value)}입니다.`
	} else if (calc.op === '%') {
		result.innerText = `${num1.value} % ${num2.value} = ${parseInt(num1.value) % parseInt(num2.value)}입니다.`
	} else {
		result.innerText = `${num1.value} / ${num2.value} = ${parseInt(num1.value) / parseInt(num2.value)}입니다.`
	}
}
```

이런 식으로 사용하면 훨씬 편하게 사용할 수 있답니다. 그래도 이벤트를 JS에서 생성하는 법도 알면 좋으니,  
메인 과제에서는 사용해도 상관이 없지만 이 챕터에서는 사용을 지양하도록 합시다.  
재미있지 않나요? 이 외에도 submit, change 등 여러가지의 이벤트들이 있답니다.  
저는 JS를 배우고나서 친구에게 추천을 받아 하이로우라는 간단한 미니게임을 만든 적이 있답니다. 기억이 새록새록 나네요.  
간단하게 다음으로 나올 랜덤한 카드가 제시된 카드보다 높은 카드인지, 낮은 카드인지 맞추는 미니게임이었답니다.  
그닥 질 높고 효율적인 코드는 아니었지만, 난생 처음 600줄 가량 되는 JS코드를 작성해서 미니게임을 만들었다는 사실이  
너무 행복하고 개발자라는 직업에 흥미가 생겨 지금의 저를 만들지 않았나 싶네요.

나중에 시간이 남거나, 모르는 부분이 있다면 작년의 제가 만들었던 아래의 코드를 봐도 됩니다! 참고로만 보세요 절대 좋은 코드는 아니랍니다 ㅎㅎ..  
<a href="https://github.com/Ubinquitous/HIGHLOW/blob/master/HIGHLOW/script.js">코드 링크</a>
<a href="https://ubinquitous.github.io/HIGHLOW/HIGHLOW/">게임 링크</a>

참고로 여기에는 localStorage라는 개념이 사용된답니다. 이 기능을 사용하면 새로고침해도 계속 웹사이트에 값이 남아있게 된답니다.

## 로컬 스토리지

말 나온 김에 배워봅시다. 글자를 입력하고, 그걸 저장하는 짧은 코드를 짜볼게요.  
로컬스토리지는 사용자 한명의 웹사이트에 값을 저장하는 기능이랍니다. 이를 통해서 게임을 만들고, 뭐 점수를 저장해놓는다던지 등,  
여러가지 기능을 제공할 수 있답니다. 참고로 로컬스토리지에는 문자열 형식으로 값들이 들어간답니다. 코드를 짜봅시다.

```html
<!-- index.html -->
<div>
	<input type="text" id="input__message" placeholder="메세지 입력" />
	<button id="save">저장하기</button>
	<h1 id="message"></h1>

	<script src="script.js"></script>
</div>
```

```js
/* script.js */
const input = document.getElementById('input__message')
const save = document.getElementById('save')
const message = document.getElementById('message')

// localStorage.getItem('text') !== ""과 비슷한 의미입니다. 값이 비어있지 않다면.. 이라는 뜻이죠.
if (localStorage.getItem('text')) {
	message.innerText = localStorage.getItem('text') // 로컬 스토리지에 있는 text라는 값이 있다면 메세지에 넣어줍니다.
}

save.addEventListener('click', () => {
	localStorage.setItem('text', input.value) // 로컬 스토리지에 text라는 이름으로 input의 값을 저장해준다는 의미입니다.
	message.innerText = input.value
})
```

좀 많이 어려울 수 있습니다. 이해가 안됐다면 로컬 스토리지는 개인적으로 공부하거나, 추가적으로 물어보세요.  
일주일에 다 때려박고 있는거 맞습니다 사실... 여러분은 제가 작년에 한 달 동안 독학한 내용들을 일주일만에 다하고 있는거랍니다..  
진짜진짜대단한거에용... 그니까 동기부여받고 열심히해봅시다. 로컬스토리지는 당장 이해하지 못해도 괜찮습니다!

자............이제 메인 과제인 투두리스트를 위한 문법을 배워봅시다....... 글만 850줄 쌩으로 쓰니 너무 힘드네요.  
빡셀테지만 정성을 위해서라도 열심히 따라가주시길 바랍니당....

## createElement, appendChild

createElement는 JS에서 HTML 태그를 추가할 수 있는 문법이랍니다.  
멋지지 않나요? 막 버튼을 누르면 새로운 HTML 태그가 나오는거에요!!  
바로 코드를 보겠습니다. 정말 쉬워요.

```html
<div id="box">
	<span>Hello? </span>
</div>
```

```js
const span = document.createElement('span') // 이런 식으로 생성과 동시에 변수에 할당할 수 있습니다.
const div = document.querySelector('#box') // 태그를 넣고싶은 위치의 상위 태그를 가져옵시다.

span.innerText = 'I am Ubin!'

div.appendChild(span) // append child, div 안에 만들어준 span을 넣는다는 뜻입니다.
```

끝이에요! 어떤가요? 생각보다 쉽죠? append child, 말그대로 자식을 추가한다는 뜻으로, 위치시키고 싶은 태그의  
부모 태그에 appendChild 함수를 사용해주면 된답니다. 이렇게 되면 box라는 id의 div 안에 span이 두 개 생기고,  
각각 "Hello? "와 "I am Ubin!"이라는 내용을 가지고 있겠죠? 또 요소를 지우는법을 알아봅시다. 정말 쉽답니다.

```js
const span = document.createElement('span') // 이런 식으로 생성과 동시에 변수에 할당할 수 있습니다.
const div = document.querySelector('#box') // 태그를 넣고싶은 위치의 상위 태그를 가져옵시다.

span.innerText = 'I am Ubin!'

div.appendChild(span) // append child, div 안에 만들어준 span을 넣는다는 뜻입니다.

span.addEventListener('click', onClickRemoveHTMLTag)

const onClickRemoveHTMLTag = (e) => {
	const span = e.target.parentElement // 매개변수로 e라는 이벤트를 받아서 타겟을 지정해줍니다.
	span.remove() // 그 타겟을 삭제합니다.
}
```

생각해보니 좀 어렵네요. 클릭하면 span을 삭제하는 문법이랍니다.  
298번 줄에서 받는 이벤트는, HTML태그가 가지고있는 고유 속성인데요, 이 속성을 통해 어떤 값을 지울지를 판별할 수 있습니다.  
299번줄의 parentElement 속성을 통해 값을 판별하고, 300번줄의 remove()함수를 통해 삭제해줍니다.  
어떤가요? 항상 말하는거지만 모르면 바로 질문!!! 정말 어려울 수 있습니당......

이제 메인 과제를 짜봅시다. todo 폴더 내에 있는 템플릿을 사용해서 나만의 투두리스트를 만들고, 풀 리퀘스트를 생성해봅시다.  
코드 컨벤션은 마땅히 없고, 저번에 리뷰받은 코드 리뷰들을 생각하며 좋은 코드를 작성하도록 합니다.  
처음부터 좋은 코드를 작성할 필요는 없으며, 처음엔 대충 작성한 후 리팩토링을 통해 코드의 질을 향상하는 것도 좋은 방법입니다.  
CSS는 마음대로, 자신의 개성대로 짜주세요!! CSS없으면 서운합니당 ㅎㅎ.. 제목도 막 "우빈이의 투두리스트" 이런식으로 달아줘도 됩니다.  
좀 오글거리긴하네요 ^^^^.... 코드를 설명하는 주석을 다는 것도 좋습니다!

힘들었을텐데 끝까지 봐줘서 고맙습니다! 이번 주 양이 많이 빡세죠..?? 그래도 여러분들으ㄹ 위해 900줄의 예제를 직접 하나하나 타이핑하여  
만든다는 것 정돈 알아주세용... 진자 책하나 써도 댈듯.ㅋ  
어쨌거나, 좋은 작품 기대하겠습니다! 화이팅!!
