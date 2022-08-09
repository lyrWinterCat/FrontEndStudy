// 4/5 여러가지 변수 및 변수의 범위

// console.log('hello') >>연결확인

// Java script variables(변수)
// var : 가장 느슨한 변수
// let - block scope (블록 범위)
// const - block scopre (블록 범위), constant (상수), 가장 엄격

// =============var===================

// var fruit = 'apple'
// console.log(fruit)

// var fruit; // declare 선언하고
// fruit = 'apple' // define 나중에 정의 가능
// console.log(fruit)

// var fruit = 'apple' //declare
// var fruit = 'banana' // declare 재선언 가능
// console.log(fruit)

// var person;
// var age=20

// if(age>18){
//     person = 'adult' // define 정의가능
// } else {
//     person = 'kids' // define 정의 가능
// }
// console.log(person)

// ==============let================

// let fruit; //declare 선언하고
// fruit = 'apple' //define 정의 가능
// console.log(fruit)

// let fruit = 'apple' // declare
// let fruit = 'banana' // declare 재선언 불가
// console.log(fruit) //>> 에러. 이미 선언된 것에 재선언 불가능


// let person;
// let age=20;

// if(age>18){
//     person = 'adult' // define 정의가능
// } else {
//     person = 'kids' // define 정의 가능
// }
// console.log(person) // 여기서는 가능 . 재정의가 아닌 단순 선언이기 때문.

// let fruit = 'apple' //declare 선언
// fruit = 'banana' //define 정의
// fruit = 'kiwi' // define 재정의 >>가능 

// console.log(fruit) // >> kiwi 출력

// ==============const================

// const fruit = 'apple'
// console.log(fruit) // 가능

// const fruit; // 단순 선언 불가. 선언과 동시에 값 할당을 해주어야 함. assignment(define)
// // 가장 많이 사용됨
// fruit='apple'
// console.log(fruit) // >> 에러

// const fruit='apple'
// const fruit='banana'
// console.log(fruit)// 에러. fruit에 재정의 불가

//-----------------------------------------------------------------------------------------

// 변수의 범위
// Global Scope (전역 범위) : 함수의 밖에서 정의된 변수의 범위
// Function (local) scope (함수 범위) : 함수 내에서 정의된 변수의 범위
// Block scope(블록 범위) >> let, const : 블록({}, 중괄호) 내에서 정의된 변수의 범위

// =======전역범위===========
// var fruit='apple' // global scope (전역 범위를 갖는다.)
// let fruit='apple' // global scope (전역 범위, 함수 접근 가능)
// const fruit = 'apple' // globap scope (전역범위)

// f()

// function f(){
//     console.log(fruit)
// }

// =======함수범위===========

// f()

// function f(){
//     // var fruit='apple' // function (local) scope. >> 함수 내에서만 접근가능
//     // let fruit='apple' // function (local) scope. 함수(지역)범위
//     // const fruit = 'apple' // 함수(지역)범위
// }
// console.log(fruit) // 에러. 정의되지 않음. 

//=====함수 밖에서 정의

// var fruit; // 가능
// let fruit; // 가능
// const fruit; // >>> 에러

// f()

// function f() {
//     fruit='peach'
// }
// console.log(fruit)

//----------------------

// let fruit='orange' // global

// f()
// function f(){
//     let fruit='banana'
//     console.log(fruit)
// }

// console.log(fruit) // 함수 내의 let에 접근 못하므로 orange // local

// // 변수명이 같아도 선언된 영역이 다르기 때문에 괜춘

//------------------------

// let fruit='orange' // global (전역 >> 함수 내에서 접근 가능)

// f()
// function f(){
//     // let fruit='banana' // >> 이걸 풀어준다면 밑 fruit이 banana로 찍힐 것
//     console.log(fruit) // >> orange 로 찍힘
// }

// console.log(fruit)

//-----------------------

// const fruit = 'cherry' //global 전역. 함수에 영향O
// // var보다 더욱 안전하게 const 를 많이 씀

// f()

// function f() {
//     // const fruit='peach'
//     console.log(fruit)
// }
// console.log(fruit)

// =======block 범위===========
// let, const

// {  // block (if, for loop)
//     var fruit1='apple'
//     let fruit2 = 'orange' // 밖에서
//     const fruit3 = 'peach' // 접근 불가능
// }
// console.log(fruit1)
// console.log(fruit2) // >>에러
// console.log(fruit3) // >>에러

//-------------- if, for 에서의 변수선언

// let age=20

// if(age>18) {
//     let person = 'adult' //var person이면 가능
// } else {
//     let person = 'kid' // let 이나 const는 불가능
// }
// console.log(person) // 에러. 해당 if와 else 절 안에서만 person에 접근 가능


// let age=20
// let person;
// // const person; >>  error

// if(age>18) {
//     person = 'adult' //var person이면 가능
// } else {
//     person = 'kid' // let 이나 const는 불가능
// }
// console.log(person) // 가능. 위에서 let person을 선언해주었기 때문에 값 할당만 {} 안에서 받는건 가능

//======================

// for (i=0; i<5; i++) { //block scope
//     var result=i; // ok
//     // let result=i; << error
// }
// console.log(result)


// let result=0;
// for (i=0; i<5; i++) { //block scope
//     result+=i; // ok
// }
// console.log(result) // 가능. for문 밖에서 선언을 하면 접근가능

//-----------------------------------------------------------------------------------------

// 함수 선언, 표현식

// function declaration 함수 선언식
// function expression 함수 표현식


// f() //실행가능
// function f() { // 함수 선언식, hoisting(정의가 위로 올라간다, 계양)
//     console.log('hello')
// }

//f() >> error
// var f = function(){ // function expression (함수 표현식), not hoisting
//     console.log('hello')
// }

// f() // 여기서는 실행 가능. 표현식 위로 갈 경우 실행X


// f() >> error
// var f = () => { //Arrow function . 자주쓰임. 익명함수를 좀더 짧게 난타냄. 계양X
//     console.log('hello')
// }
// f() // 여기서 실행 가능

//==========================

// var car={
//     name : '제네시스',
//     getName: function() {
//         // this
//         console.log(this) // car (method를 소유한 object)
//         return this.name;
//     }
// }
// console.log(car.getName())


// var car={
//     name : '제네시스',
//     getName: () => { //arrow function에서의 this는
//         // this
//         console.log(this) // window 가 나옴
//         return this.name;
//     }
// }
// console.log(car.getName())


// var f=()=> {
//     return 'hello'
// }
// 위의 함수식과 밑의 함수식은 같다.
// var f=()=>'hello'
// console.log(f())


// var f = d => 'hello'+d //인자가 하나일 때 () 생략 가능
// console.log(f('부평'))

// addEventListener('load',()=>{
//     console.log('hello')
// })


// 이런 형식으로 많이 씀
// const f = ()=> {
//     alert()
// }

// f()


//==========================================================================
// prototype and class
// Inheritance(상속)

// console.log

// var car = {
//     firstName : '아이오닉',
//     lastName : '현대',
//     fullName : function(){ //this => car
//         return this.lastName+this.firstName
//     }
// }
// console.log(car.fullName())


// var fruit='apple'
// console.log(fruit.toUpperCase()) // 상속받은 메서드

// console.log(fruit.__proto__) // 어떤 상속을 받은 메서드인지 확인 >> string object에서 상속


// var num=0;
// console.log(num.__proto__) // number object에서 상속
// console.log(num.__proto__.__proto__) // 가장 최상위 Object


// var arr=[]
// console.log(arr.__proto__) // array object
// console.log(arr.__proto__.__proto__) //최상위 object


// var fruit = 'melon'
// console.log(fruit.__proto__)
// console.log(fruit.toUpperCase()) // 상속을 받았기 때문에 쓸 수 있는 메소드임을 이해하고 넘어가기


// object constructor (객체 생성자)
// function Car (name, brand) {
//     this.carname = name;
//     this.brand = brand;
// }

// Car.prototype.origin='한국'

// var car = new Car('제네시스','현대')

// console.log(car)
// console.log(car.origin)


//============Synthatical sugar(문법적인 조미료)=================

// class Car extends Object{ //상속을 받으면 new car object를 만들었을 때 object에 속한 함수를 쓸 수 있다.
//     constructor(name,brand) {
//         this.name=name;
//         this.brand=brand;
//     }
// }
// var car = new Car('제네시스','현대')

// console.log(car)


//--------------------

var car = new String('제네시스') // 객체 생성자에 따른 생성
var car = '제네시스' // Java script에서는 이걸 더 권장
console.log(car)





