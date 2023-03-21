# 키워드 학습

## var, let, const
- `var`
  - 
  - var변수가 함수 외부에서 선언될 때의 범위는 전역
  - var가 함수 내에서 선언될 때는 해당 함수 내에서만 사용 가능
  - var 변수는 재선언되고, 업데이트될 수 있다
  - var를 실수로 함수 내부/외부에 중복 선언할 수 있기 때문에 사용을 지양한다
```javascript
// 아래 모두 순서대로 입력해도 가능
var index = 1;
var index = 2;
index = 3;
```

- `let`
  - let은 업데이트될 수 있지만, 재선언은 불가능
  - let의 키워드는 초기화되지 않는다. 선언 이전에 let 변수를 사용하려고 시도하면 `Reference Error(참조 오류`) 발생
```javascript
// 이건 불가능
let index = 1;
let index = 2;
```

- `const`
  - 상수처럼 사용
  - 업데이트도, 재선언도 불가능
  - 선언시 초기화 해야 한다

- [Var, Let, Const의 차이점은?](https://www.freecodecamp.org/korean/news/var-let-constyi-caijeomeun/)
- [var, let, const 차이점](https://velog.io/@bathingape/JavaScript-var-let-const-%EC%B0%A8%EC%9D%B4%EC%A0%90)
- [let, const와 블록 레벨 스코프](https://poiemaweb.com/es6-block-scope)