// 웹의 개발자모드, console창에 입력하기
// console.log('hello world');

// window 는 생략 가능, console창에 입력하는 또다른방법
// window.document.getElementById('root').innerHTML='<h1>hello world</h1>';

// 주석처리 ctrl + /

// console.log(1)
// // console.log(2) >> 이중 주석처리 가능
// console.log(3)

// java script html css '//'만 붙이면 주석처리 가능

/*

여러줄 주석처리

*/

// window 메소드 중 하나. 알림창으로 내용을 보여준다.
// alert('hello world')

//-----------------------------------------------------------------------------------

// Data type (데이터 타입)
// var : variable (변수)

// var str >>> declaration . 변수 선언,정의
//         = 'car' >>> assignment 변수 할당
// var str = 'car' //string, 문자.  "" 이나 '' 안에 선언
// var num = 2022  // number
// var bool = true // boolean 참 또는 거짓 (true or false)
// var bool2 = false; //boolean
// var nothing = null; // object 타입. 값이 없다는 뜻.

// var something; // 변수 명은 있으나 값을 할당하지 않은 경우. >>> undefined으로 출력됨 (정의되지 않음)
// var something=undefined; //위와 같은 뜻

// //typeof + 변수명 = 데이터 타입 반환
// console.log(typeof str) //str의 타입은 string이다. 라고 console창에 표시
// console.log(typeof num)
// console.log(typeof bool)
// console.log(typeof nothing) // object 타입
// console.log(something)

// var x = '89'
// var y = 'true'
// var z = 'false'

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)
// // >>> 모두 string 타입. ''나 "" 안에 들어가면 모두 문자로 인식

// var txt = "I'm good";
// // var txt2 = "I"m good"; >> " ' ' " 는 되지만 같은 종류의 따옴표를 중복해서 쓰면 오류남
// console.log(txt)

//-----------------------------------------------------------------------------------

// Operator (연산자)
// Arithmetic operator : 수리 연산자
// Assigment operator : 할당 연산자
// Comparison operator : 비교 연산자
// Logical operator : 논리 연산자

//-----------------------------------------------------------------------------------

// Arithmetic operator (수리연산자)

// + , - , * , ** , / , % , ++ , --
// 더하기, 빼기, 곱하기, 제곱, 나누기, 나머지, 1증가, 1감소

// 예시

// var x=8;
// var y=9;

// console.log(x+y)
// console.log(x-y)
// console.log(x*y)
// console.log(x/y)

// x=3; // 재정의 가능
// y=30;
// console.log(x**2)
// console.log(y/x) // 나누기 한 후의 몫
// console.log(y%x) // 나누기 한 후의 나머지, Remaider

// x++; // increment 증가
// y--; // decrement 감소
// console.log(x,y)

// var str = 'hello'
// var num = 2022

// console.log(str+num) // 문자와 숫자 연산 >>> 더하면 연결됨
// console.log(typeof(str+num)) // 문자열이 됨
// // console.log(typeof str + num) // typeof str + num >>> string2022. 잘못된 코드 (괄호를 넣어주어야함)
// var space = ' '
// var str2 = "world"

// console.log(str+space+str2) // 문자열끼리 + 연산 가능 (연결됨)
// console.log(typeof(str+space+str2))

// -------------------------------------------------------------------------------------------

// Assignment operator 할당연산자
// 변수에 값을 할당할 때 쓰는 연산자
// =, +=, -=, *=, /=, %=, **=

// // =
// var str = 'car'

// // +=, -=, *=, /=, %=, **=
// var x = 10;
// x+=5 //선언된 x값에 5를 더한다. // x=x+5 를 줄인 연산자
// console.log(x) // 15
// x = 10;
// x-=3;
// console.log(x) //7
// x = 10;
// x*=5
// console.log(x) // 50
// x = 10;
// x/=5
// console.log(x) //2
// x = 10;
// x%=5
// console.log(x) //0
// x = 10;
// x**=2
// console.log(x) //100

// 도큐먼트를 써서 어떻게 할당연산자를 쓰는지 확인

// document.getElementById('root').innerHTML = 'hello'
// document.getElementById('root').innerHTML += ' world' // 밑의 두문장을 하나로 줄인 것

// document.getElementById('root').innerHTML =
// document.getElementById('root').innerHTML +' world'

//----------------------------------------------------------------------------------------------

// Comparison operator 비교연산자

// ==, ===, !=, !==, > , < , >= , <= 

// var x = 1
// var y = 5
// var result = x==y // == 같니 != 다르니

// console.log(result) // boolean형으로 반환. false

// var str = '8'
// var num = 8
// var result2 = str==num //value 비교
// var result3 = str===num // value and type 비교. 더 엄격한 비교. 더 정확하다. === / !==
// var result4 = str != num
// var result5 = str !== num 

// console.log(result2) // true ==는 값만 비교.
// console.log(result3) // false ===는 데이터 타입까지 비교
// console.log(result4) // false 값이 일치하기 때문.
// console.log(result5) // true 값과 타입이 다르기 때문. 

// ----------------------------------------------------------------------------------------------

// Logical operator 논리연산자
// && || !

// && and (그리고)
// var n=3
// if(n>1 && n>2) {
//     console.log('good')
// } else {
//     console.log('bad')
// }
// // >> good (true && true = true)

// var str='8'
// if(str==8 && str<10) {
//     console.log('good')
// } else {
//     console.log('bad')
// }

// >> good (타입이 다르더라도 value를 기준으로 비교하기때문에 참)
// >> 단, if 조건을 str===8로 줄 경우 거짓이 되므로 bad 출력 (false&&true =  false)


// || or (또는)
// var str = '8'
// if (str ===8 || str>5) {
//     console.log('good')
// } else {
//     console.log('bad')
// }
// >> good (false || true) >> true


// ! not (부정)

// var x = 8
// var y = 9
// var result = x == y
// console.log(result) // >>false
// console.log(!result) // >> true 

// var result = !(x == y)
// console.log(result) // true

// var nothing = null;

// if(nothing) {
//     console.log('good')
// }else {
//     console.log('bad')
// }
// // bad >> *boolean에서 null은 false로 취급한다.*

// var something; // 선언O 할당 X

// if(something) {
//     console.log('good')
// }else {
//     console.log('bad')
// }
// // bad >> undefined도 boolean에서는 false로 취급
// // true로 만들고 싶으면 if절 조건을 (!something) 으로 주거나
// // if(something===undefined) 으로 주면 됨

// --------------------------------------------------------------------------------------------

// condition (조건문)
// if , switch 

// var carPrice = 1000;

// if(carPrice > 2000) {
//     console.log('비싸..') // if(조건문)이 참일경우 실행
// } else {
//     console.log('살 만 한데??') // if(조건문)이 거짓일 경우 실행
// }


// carPrice=1300
// if(carPrice > 2000) {
//     console.log('비싸다')
// }else if(carPrice > 1500) {
//     console.log('조금 비싸네')
// } else if(carPrice > 1000) {
//     console.log('사볼까??')
// } else {
//     console.log('싸다!!')
// }
// // else if >>> 조건 추가
// // 위에서부터 조건에 맞는지 걸러짐. 첫번째 if조건이 참>> 멈추고 거기서 실행
// // 첫번째 if 조건이 거짓 >> else if 조건문으로 내려옴 참 >> 멈추고 거기서 실행
// // 첫번째, 두번째 조건문이 거짓 >> 세번째 else if 문으로 내려옴 참 >> 멈추고 거기서 실행
// // 이런식으로 else if 문은 쭉쭉 조건을 타고 내려옴

//---------------------------------------------------------------------------------------------

// switch (스위치문)

// var num = 10

// switch (num) {
//     case 5 :
//         console.log('five')
//         break;
//     case 7 : 
//         console.log('seven')
//         break;
//     case 8 :
//         console.log('eight')
//         break;
//     default : // 조건을 만족하지 않는 경우
//         console.log('sorry..')
// }

//---------------------------------------------------------------------------------------------

// for loop (for 반복문)

// var i;
// for (i=1; i<=10; i+=2) {
//     console.log(i)
// }
// // 변수 선언 할당 따로하기

// for(var i=1; i<=10; i++) {
//     console.log(i)
// }
// // 변수 선언 할당 같이하기

// // ===========참고==================

// // 변수 선언과 할당은 따로 할 수도 있음
// var str;
// str = 'hello'
// console.log(str)

// ---------------------------------------------------------------------------------------------

// while loop (while 반복문)

// var i=0;
// while(i<10) {
//     i++
//     console.log(i)
// }

// ---------------------------------------------------------------------------------------------

// Object (객체) ** 중요개념**

//property and method 속성과 메소드를 가짐

// var car = {
//     name : '레이' ,
//     brand : '기아자동차'
// } //객체를 넣을 때는 brace{}를 사용해서 정의를 함
// // brace {key : value, ...} >>> 이런 형식으로 정의

// console.log(car)
// // car 라는 객체를 하나 만듦

// console.log(car.name)
// console.log(car["name"])

// console.log(car.brand)
// console.log(car['brand'])
// // car 객체의 name에 접근(object의 속성접근은 . 을 찍으면 됨)
// // [] 안에 '' 나 ""로 접근할 수도 있음

//----------------------------------------------------------------------------------------------

// function (함수)

// function declaration 함수 정의


// // >> 함수 정의(declare)
// function myFunction() {
//     console.log('hello')
// }

// // 함수 실행(호출, invoke)
// myFunction()

// // 함수 정의2
// var myFunction = function() {
//     console.log('hello~')
// }
// // 함수 호출
// myFunction()


// // defining function (console을 정의하는 방식이 다름 )

// // function declaration (함수 선언식, functioni 함수이름())
// function myFunction() {}

// // function expressions(함수 표현식, 변수에 담는다.)
// var myFunction = function(){}
// //             = 뒤의 이름없는 함수 >> 익명함수


// // 함수 정의와 동시에 실행
// // self-invoke (자체호출함수)
// // 익명함수 = function () {}
// // (익명함수)();
// (function() {
//     console.log('hello')
// })

// ===================================================================

// function myFunction() {
//     return 'hello!!'
// }

// console.log(myFunction()) // >> 리턴한 값으로 콘솔에 찍기

// // console.log(myFunction) >> 함수 정의


// // 함수 변수에 담아서 선언하기
// var x = myFunction()
// console.log(x)

//=====================================================================

// function myFunction(data) { // parameter (데이터 받아오기)
//     return data
// }

// console.log(myFunction('hello~~')) // argument (실제 들어간 값. 함수 인자)


// function myFunction2(a,b) { // 두개 이상의 값을 받아올 때는 ,로 구분
//     return a+b
// }
// var result = myFunction2(5,10)
// console.log(result)

// // function expresssion(함수 표현식)
// var myFunction3 = function(a,b) {
//     return a*b
// }
// // assignment (값 할당)
// var result2 = myFunction3(5,2)

// console.log(result2)

// var car = {
//     name : '제네시스' , //property. 속성
//     color : '검정' , // property. 속성
//     cost : function() { // method. 값이 함수인 것
//         return 2000
//     }
// }

// console.log(car)
// console.log(car.name)
// console.log(car.color)
// // console.log(car.cost) // declaration. 함수 정의
// console.log(car.cost()) // invoke. 2000 . 이렇게 해야 return값 출력

// function myfunction() {
//     console.log('hello!~!~')
// }

// window.myfunction() // 함수가 윈도우의 메서드가 됨


// car.cost() // method 메서드
// window.myfunction() // function 함수 (object에서  메서드보다 더 큰 개념) (window의 메서드 = 함수)

// ---------------------------------------------------------------------------------------------

// Array (배열)

// [] square bracket (대괄호)
var fruits = ['사과','배','귤']
var numbers = [1,3,5,7]
var mix = [1,'사과',2,'배']

console.log(fruits)
console.log(numbers)
console.log(mix)

var cars = [
    {name : '레이', color : '은색'}, // index 0
    {name : '제네시스', color : '검정색'}, // index 1
    {name : '볼보', color : '흰색'} // index 2

]
console.log(cars)
console.log(cars[2]) // object 볼보 접근 : [index]로 접근
console.log(cars[2].color) // 볼보의 color에 접근

console.log(cars.length) // 몇개의 object가 있는가 확인 >>>3
