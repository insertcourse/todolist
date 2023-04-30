### 표현식에 따른 코드 유지보수

자바스크립트의 다양한 문법 표현에 대해서 알아보겠습니다.  
이런 여러가지의 표현식을 잘 알고있어야 더욱 짧고 가독성 좋은 코드를 짤 수 있답니다.

### Strict Equal Operator

먼저 이퀄 연산자에 대해 자세히 알아봅시다.  
자바스크립트는 매우 멍청한 언어이기 때문에,  
문자열 1과 숫자 1등, 자료형이 다른 값을 비교해도 true라고 뜬답니다.

```js
console.log('1' == 1) // true
console.log(true == 1) // true
```

이렇게 된다면 문제가 반드시 생길겁니다.  
만약 몇 천 줄의 코드를 짰는데, 변수들이 잘못 들어가서 false가 떠야하는 로직이  
이런 식으로 true가 뜨면 분명 예상치 못한 값이 나오겠죠?

그래서 사용하는게 Strict Equal Operator입니다.  
사용법은 == 으로 비교하던 값을, === 이렇게 '='을 3개 써서 비교해주면 됩니다.

그렇게 되면 다른 언어들처럼, 정상적인 비교를 시켜줍니다.

```js
console.log('1' === 1) // false
console.log(true === 1) // false
console.log(1 === 1) // true
```

그래서 무조건 == 연산자보다는 === 연산자를 지향하는게 좋은 프로그래밍 방법입니다.  
다음은 다양한 표현식, 즉 코드를 얼마나 줄일 수 있는지에 대해 알아볼게요.

여러가지 표현을 통해 코드의 가독성을 높이고 간결하게 작성할 수 있는게 엄청난 능력입니다.  
다음은 문자열의 길이가 0인지 판별하는 3가지의 코드에요.

### NOT Operator

```js
const userName = 'ubin'

if (userName.length !== 0) console.log('이름이 입력되지 않았어요.')
if (!userName.length) console.log('이름이 입력되지 않았어요.')
if (!userName) console.log('이름이 입력되지 않았어요.')
```

위 세 가지의 if문은 모두 똑같은 작동을 합니다.  
!연산자는 값이 false면 true를, true면 false를 반환해요.  
이 특성을 통해 "~이 아니라면"이라는 문장의 조건문을 만들 수 있겠죠?

이런 코딩 방식은 현업에서 매우 많이 사용합니다.  
실제 부마위키의 문서 생성 확인 코드를 가져왔어요. 밑의 코드를 볼게요.

```js
if (['?', '/', '"', '\\'].includes(docs.title)) return alert('문서명에는 물음표나 쌍따옴표, 슬래시나 역슬래시를 넣을 수 없습니다.')
if (!isLogined) return alert('로그인 후 이용 가능한 서비스입니다.')
if (!docs.enroll) return alert('연도를 선택해주세요!')
if (!docs.title) return alert('문서의 이름을 정해주세요!')
if (!docs.docsType) return alert('문서의 분류를 선택해주세요!')
```

여유가 있다면 부마위키에 들어가서 칸을 비우고 문서 생성을 시도해보세요.  
빈 칸을 막는 로직은 다음과 같이 이루어져 있답니다.

재미있지 않나요? 다음은 삼항연산자와 조건부연산에 대해 알아봅시다.

### 삼항 연산자

삼항 연산자는 if문을 짧게 사용할 수 있는 문법이에요.  
알아두면 김선생님의 프로그래밍 수업에서도 잘 써먹을 수 있을거에요.

문법은 다음과 같이 사용해요.

```js
a ? b : c
```

조금 풀어써볼게요.

```js
(조건식) ? (참이면 실행되는 문) : (거짓이면 실행되는 문)
```

이런 식으로 if문을 짧게 사용할 수 있답니다.  
끝이에요. 직접 사용해봅시다.

```js
const variable = 3

// 이 코드를
if (variable > 0) {
	console.log('variable is bigger than zero.')
} else {
	console.log('zero is bigger than variable or equal.')
}

// 삼항연산자를 사용해서 이렇게 바꿀 수 있어요.
variable > 0 ? console.log('variable is bigger than zero.') : console.log('zero is bigger than variable or equal.')
```

이해되나요? 다음은 조건부 렌더링에 대해 알아볼게요.  
진도 정말 빠른겁니다 멘탈붕괴 안와도 돼요!! 어려운거 맞아요!  
모르면 바로 질문하기!!!

### 조건부 렌더링

이건 정말 간단해요. & 연산자, 즉 앤드 연산자를 알고 있나요?  
컴퓨터구조 시간에도 배운 연산자이죠?  
AND 연산자는 두 대상이 모두 true여야 true를 반환하는 연산자죠.  
하나라도 false면 바로 false를 반환합니다.

JS에서도 이 문법을 유용하게 사용할 수 있습니다.

```js
console.log(false && false) // false
console.log(false && true) // false
console.log(true && false) // false
console.log(true && true) // true
```

그럼 이 문법을 어떻게 사용할 수 있을까요?  
바로 어떤 값이 참이면, 어떤 로직을 실행시키고 싶을 때 사용할 수 있습니다.

```js
const A = 3

A === 3 && console.log('A is Three.')
```

이런 식으로. 그럼 실제 부마위키의 코드를 보여줄게요.

```jsx
isLogined && (
	<a href="/create">
		{/* 실제로 이렇게 작성하면 에러가 발생합니다. 다음에 jsx라는 문법을 배워볼거에요. */}
		<img src="logo.svg" alt="" />
		<span>문서 생성</span>
	</a>
)
```

이런 식으로 유저가 isLogined 되어있다면 문서 생성 아이콘을 보여주는 로직이에요.  
시간이 있다면, 직접 부마위키에서 로그인/로그아웃을 한 후 확인해보세요.  
흥미가 있다면, 다음에도 부마위키 코드 일부를 뜯어서 설명할게요!

어떻게 쓰는지 이해가 되나요? 이걸 이용해서 좋은 코드를 작성할 수 있겠죠?

### Double Exclamation Marks

마지막으로 Double Exclamation Marks에 대해 알아볼게요.  
Double Exclamation Marks Operator, 편하게 느낌표두개 연산자라고 할게요.

느낌표두개 연산자는 확실한 결과를 알아야할 때 사용하는 연산자에요.  
0이나 false, undefined, NaN, null, ''같은 애매하거나 사용할 수 없는 값을 false로 걸러주는 연산자입니다.

```js
console.log(!!0) // false
console.log(!!false) // false
console.log(!!undefined) // false
console.log(!!NaN) // false
console.log(!!null) // false
console.log(!!'') // false

console.log(!!3) // true
console.log(!!true) // true
console.log(!!'Hello') // true
```

이해가 되나요?
부마위키의 코드를 보여줄게요.

```js
return { isLogined: !!userInfo }
```

코드가 이해가 가나요? userInfo가 확실하게 있는 값이라면  
isLogined에 true를, 아니라면 false를 리턴하는 문장이랍니다.  
이런 식으로 JS에서는 다양한 방식으로 코드를 작성할 수 있답니다!

### Mision 2

두 번째 과제는 간단합니다! 나만의 예제를 만들어서,  
위에서 이야기한 Strict Equal 연산자와 조건부 연산자와 삼항 연산자,  
Double Exclamation Marks 연산자를 모두 한 번씩 이상 사용해봅시다.

예제는 무엇이 되든 상관없어요. 나이를 비교하는 프로그램이라던지,  
과일가게 프로그램이라던지, 나만의 예제를 작성해주세요~!!!

이제 제일 중요한 한 단계 남았습니다! 조금만 힘내요!!
