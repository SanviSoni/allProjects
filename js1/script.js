// var a = 10
// var b = 20
// console.log (  " the value of  is " , a*b)=

//

// console.log ( typeof 1 )

// console.log(  typeof "@dkdj")

// console.log (typeof false)

// var a ;
// console.log(a)  (UNDEFINDED)

// var a = 12;
// a = null;
// console.log(a)  (null )


// let a = 66;
// let b = 2;
// let sum =  ( a**b)
// console.log( sum);



// let a = 34 ;

// let res = a*=4;
// let res = a-=4;
// let res = a/=4;
// let res = a %=4;

// console.log (res);



// console.log("" || null || 0 );
// console.log(  "" && null && 0);

// console.log("hi" ||true || 1 );
// console.log("hi" && true && 1 );
// // &&(and) , || (or)

// simple if

// if(condition){
//     statement
// }

// if(age >= 18) {

//     console.log("CAN VOTE");
// }

// simple if else

// if(condition){

// if statement }

// else(conditon){
//     statement
// }

// else{}


// multiple if-else / ladder if-else

// if (condition ) {
//       if statement
// }

// else if( condition){


// }


// if(n > 0) {
//     positive
// }else  if(n<0) {

//     negative
// }else if (n === 0){
//     zero
// }else {
//     invalid input
// }


// nested if-else = ek if else ke ander if -else hone ko nested if else bol te hai

// nested -> ladder (converting nested into ladder)

// if(n > 0 && n=== even) {

//     even statement
// }  else if ( n > 0 && n=== odd) {

//     odd statement
// }



// n = 0
// if (n > 0 && n%2 === 0){

//     console.log("even number")

// }else if (n > 0 && n%2 !== 0) {
//     console.log("odd number")

// }else {console.log("invalid number")}


// a = 0

// if( a > 0 ){
//     console.log("number is posisitive ");

// }else  if(a < 0  ) {
//     console.log("number is negative");

// }else if (a === 0 ){
//     console.log("number is zero");


// }else { console.log("undefined");}

// converting one if else condition into expression is called ternery operator

// let n = 6;
// if(n % 2 === 0){
//     console.log("even");}
//     else {
//         console.log("odd");
//     }

// syntax
// result = condition ? if-message: else-message

// ternery operator -> mainly used in simple if esle

// let result = n % 2 === 0 ? "even" : "odd";

// console.log(result);


// Iterrative statement

// switch for knowledge
// 1. Loop Variable -> to put variable stop/ start
// 2. Condition exp  ->
// 3.Update loop -> for updation of loop
// 4. Body of loop ->


// while loop syntax
// 1st - loop variable
// 2nd - while(condition exp)
// 3rd - body of loop
// 4th - updation


// let i = 1;


// while(i < 11){
//     console.log(i);
//     ++i;}



// let i = 1;

// do{
//     console.log(i);
//     ++i;
//  } while(i < 11);DK

// print all the number Between 0 to 10 and if number is 5 print laddu



// for(var a = 1 ; a <= 100 ; a++  )

// { if (a%5 == 0 ) {

//     console.log("laddu")

// }
// else {
//     console.log(a);
// }
// }

// for( var a = 0 ; a <= 100; a++){
//     if(a % 2 == 0){
//         console.log(a);
//     }
// }

// var num =  prompt( "give a number ")


// for( var a = 0 ; a<= num ; a++){
// if(  a% 2 == 0){
//     console.log(a);
// }}


// for(  var a = 1 ; a<= 100; a++){
//     if( a % 5 == 0 ){
//         console.log("laddu");

//     }else {
//         console.log(a);
//     }
// }

// var num = prompt("number dedo bhaiya")
// for( a = 0 ; a<= num ; a++){
//     if ( a % 2 == 0){
//         console.log(a);
//     }
//
// jab tak hame pta nhi hai ki loop kab khatam hoga tab while or do while ka use krna chahiye.
// when we know what is the itration( kab tak loop chalega ) count of loop is then we use for loop
// jab hame pta ho ki loop kab khatam hoga tab for loop use krna chahiye
// jab hame loop ko atleat ek baar loop bina condition check kre chal jaye aur phir us ke baad condition check kre tab do whilw loop use krte hai
//

// functions =
// jab hum forcefully loop ko rok te hai tab break use hota hai
// codechef
// gfg

//
//

// break function
// for( let i = 0 ; i<= 10; i++){

//     if(i === 5 ){
//         break;
//     }
//     console.log(i);
// }

// continue function
// jab kisi value ko print nhi kr wana ho pr baki ka code print krana ho tab continue laga te hai


// for( let i= 0; i<=10; i++)
// {
//     if(i%2!== 0){
//         continue;
//     }
//     console.log(i);
// }

// procedual progrming paradigms

// let x = prompt(" enter your name ");
//  let y = prompt(" enter your email address");
//  console.log("Given  username is", x ," and the email is", y);

// // template srings
// console.log(`given username is ${x} and the email is ${y}`);

// if we add two string that called concat

// non-parameterised function

// function wish() {
//     console.log(" happy with yourself");
// }

// wish();
// wish();
// wish();
// wish();
// wish();

// function bna te time jo variable bnate hai unhe bol te hai perameter
// function ke  variable ko value dete hai jab agrument bol te hai

// parameterised function = jaha hum koi value pass krate hai we con put dynamic value in it it means


// function greet(var1 , var2 ){
//     console.log("hello " , var1 , var2 );
// }

//   greet(1, 2);  // arguments
// greet(13, 54);  //arguments

// pure function - always use value inside the function scope.
// impure function - use the value outside the finction scope .



// Return/ Print
// function firstname(f) {

//     return (f);
// }

// function lastname(l) {

//     return (l);
// }

// firstname("ronak");
// lastname("saraf");

// console.log(`Given name is ${firstname("Ronak")} ${lastname("Saraf")}`);

// console.log(firstname("hello"), lastname("hiii"));

// return should always be the last in the line
// we cannot use more than one return in a function



//   ques -> {write a program to return the sum of two number and print the message

// Sum of a and b is c
// using function }


// jab bhi function call hoga  vo us ki return value replace kr dega


//   function num1(a, b) {


//     return a + b;
// }

// let x = 12;
// let y = 34;
// let c = num1(x, y);

// let e = num1(23, 45);
// console.log(e)

// console.log(`sume of ${x} and ${y} is ${c}`);

// console.log(num1(2, 13));

// console.log(num1(80, 878));
// console.log(num1(89, 13787));

// sting = if we add any other thing then string it will also become stringt
// adding string concatination
//
// string is not updatable  string is replacable  but we can use saverel methods to update the string


// string create

// let s = "hello this is sheriyans"
// let r = "world "
// console.log(s + r);

// // string read
// // indexing
// console.log( s[4]);
// console.log(s.charAt(0));
// console.log(s.slice(0 , 5));


// // update

// console.log(s);
// console.log(s.toLoca/////leUpperCase ());
// console.log(s.toLocaleLowerCase());
//  console.log(s.trim());  //to trim space before and after the text
// console.log(s.trimEnd());
// console.log(s.trimStart());


// arrow = first variable then name of variable and then this() bracket and then arroe and then function

// const sum = (a,b) =>
// {  return a+b;}

// diff btwn normal and arrow function


// normal function


// function sum( a , b ){
//     return a+b;}


//     console.log( sum (1,13));
// // arrow function = is syntacticaly bydefault  anonymous function

// const hum = (a,b) => {
//     return a+b;
// };

// console.log( hum (1,13));

// anonymous fucntion
// we can make a function an anonymous fucntion by not giving the name to function  , either  we have to put that function in the variable .


// variable lenght of argument / parameter
// default variable = information which is not necessary to ask again but we ask it again and again .
//hoisting =  kisi bhi cheez ko bnane se phle us ka use krna .  in hositing when is compailing the value /declaration of function  goes on top in program .


// function comanly is an ex of hoisting
// (...) = rest operator //  if we use this operator it can contain one or more variable/ parameter/ arguments in one fuction


// function hobbies(name, ...h) {

//     console.log(name, h);
// }

// hobbies("hello world", 12, 343, 546, 5334, 34);
// hobbies("ajkfk", 34, 54, 68, 45, 45);


// function defau(name, batch = " mern9") {
//     console.log(name, batch);
// }

// defau(" sanvi");
// defau("devanshi", "mern8");

// named parameter arguments = we don't want to use secquence of the function we can use named parameter

// function dets( username , email , password){

//     console.log( username , email , password);

// }



// dets( "jhony" , "jhony-jhony-yes-papa@email.com" , "eating sugar no papa"
// )

// dets(( eamil = "jhony-jhony-yes-papa@email.com") , (password =  "eating sugar no papa" ) , (username = "jhony"));


// temporal deadzone = varible which has been declared but not intialized

// function = fully hoisted
// var = partialy hoisted '
// other = temporal deadzone

//




//   ques 1: var a = prompt("enter number");


//

// var a = prompt("first numb");
// var b = prompt("second  numb");


// if ( a > b ){
//     console.log(a);
// }else if ( a === b){
//     c
// }

// else(a < b) {console.log(b);}



// var f = prompt("give gender (m/f)");
// if ( f === f){
//     console.log("good morining ma'am");
// }else if ( f === m ){
//     console.log("good morning sir")}

// else{ console.log("wrong input");}


// var year = prompt("give year");

// if ( year % 4 === 0 && year % 100 != 0 || year % 400 == 0  );
// {console.log("leap year");}
// else{ console.log("not a leap year")};


// Array


//  array is a hetrogenous data type sparated by couma in a square box.
//  letx = [ "join" , true, 4 , [2,5,5.6],  null , undefined , null , function(), {} ];


// let arr = [23, 23,43,65,676,767,45,87,34,];
// console.log(arr);
// console.log( arr.length);//--> to find lenght of array.
// console.log( arr[5]);//--> to find any index/position in array & for positive index.
// console.log(arr.at(-2));//--> to find any index/position in array & for positive and negative index.
// console.log(arr.slice(2 , 7));//--> to slice the perticuler index in array.

// let x = arr.push( 1, 4, 55); //  adds data in the end and retuens the length

// let x = arr.unshift(DZ 1, 4, 55); //  adds data in the begining and retuens the length

// let x = arr.pop(); //  removes   the element a in the end and retuens the length
// let x = arr.shift( );//  removes   the element a in the beginng and retuens the length
// let x = arr.splice( 4 , 1); // removes the element according to the element and r


// console.log(arr);

// prime num
// var a = prompt("num");

// for (var i = 2; i < a; i++) {

//     if (a % i === 0) {
//         console.log('not a prime number');
//     }
// }

// console.log(`${a} is a prime number`);


// var n= +prompt('num');
// var s = 0;

// for( var i= 1; i<=n ; i++){
//     if( n % i === 0 ){

//         s = s+i;}}
//     if( s === n){
//         console.log('perfect number');
//     }else{
//         console.log('not perfect number');}


// write a program to reverse the given  digit   and check weather it is pallindorome

// let n = +prompt('give num');
// let temp = n ;
// let rev = 0;
// while( n > 0){
//     let  rem = n % 10;
//     // console.log(rem);
//     rev = rev * 10 + rem;

//      n= Math.floor(n/10);
// }
// // console.log(rev);
// if( rev === temp){
//     console.log('pallindoreme value');
// }
// console.log(rev);







// callbackfction  vo hfunction hote hai jo kisi function  ko call krne ke baad chal te hai

// array treversing --> array treversing  kisi bhi array ke ek ek element ki position dekh ne ke liye hota hai , isse jata tar array testing aur position finding ke liye use kr te hai

// let arr = [ 12, 43, 656, 75,23,47, 555, 76,];

// // for each loop

// arr.forEach(function( element , index ){
//     console.log( element ,index);
// });

// // for of loop

// for ( const i of arr ){
//     console.log( i)
// };

// // normal for loop

// for( let i = 0 ; i = arr.length; i++){
//     console.log( i , arr[i]);
// }


// write a program to find the given string is pallidrome or not without using mtehod






// let a = prompt(" give me a name");
// let b = "";
// for( let i = a.length-1 ;  i>=0 ; i-- ){
//     b += a[i];
//     // console.log(b);

// }
// console.log(b);
// if( a === b){
//     console.log("pallidrome");
// }

// else{
//     console.log("not a pallidrome");
// }





// MAP AND FILTER

// MAP =  update an exsiting array and save it to another variable without changing original vale --> mapping

// const arr = [ 12, 34, 24, 44, 76, 56, 86, 23, 3];
// const copyarr = arr.map((element , index)=> element * 2);
// console.log(arr);
// console.log(copyarr);

// this is a function to multiply 2 in every element of array in another array .

// cvx

//FILTERing ( delete any element) existing array and save it in to the new variable without changing the array -> Filtering
// const arr = [ 12, 34, 24, 44, 76, 56, 86, 23, 3];
// const copyarr = arr.filter((element , index)=> element %2 === 0);
// console.log(arr);
// console.log(copyarr);

// write a program to find total number of handshakes done in the room if there are n number of people.

// *rest perameter*
// write the program to print the sum of n-1 matual number

// var n = prompt('num');
// var sum = '';
// for( var i = 1 ; i<= n ; i++){
//     sum = n*(n-1)/2;
// }console.log(sum);

// destructuring and copying array ( spera operator ...)

// let arr =[23, 34, 4,76,26,28,59,90];
// let copyarr = [...arr];

// copyarr[0] = 132;
// console.log( arr);
// console.log( copyarr);

// destructuring this is use to pic elenemt in samll arrays  this mehtod is not good for long arrays , it is only useful for small arrays
// let [,,,d ] = arr;
// console.log( d);

// object = it is a colletion of data which  store data in the forms of key and in that key we put value /data/etc


// const obj = {

//     username :'ramu kaka',
//     age : 123,
//     address: 'rrekkdj'

// }
// console.log(obj.username  , obj.age);

// console.log(obj);








// outer loop = coloum  --> outer loop always work in the coloum in this ques for(i) is the outer loop
// inner loop = rows -->
// \n = for next line


// var n = prompt('num');
// let str = "";
// for(var i = 1; i<=n ; i++){

//     for( j= 1; j<=i; j++){
// str += j;

//     }
//     str += "\n";
// } console.log(i);


// undation and deletion of object


// let obj = {

//     username : 'Parth',
//     city : 'bhopal',
//     country:'India',
//     age:20,

// }
// console.log(obj);

// obj.city = 'indor';
// obj['age']= 21;

// console.log(obj);
// // delete obj.city;


// console.log(obj);


// desturctring and copying object

// spread operator is use to make copy of object
//

// let copyobj = {...obj};

// console.log(copyobj)
// copyobj.age = 123;

// console.log(copyobj);
// const { username, age, city } = obj;

// // const { username, age, city } = copyobj;

// console.log(username , age , city );




//  ¬ DOM
// DOCUMENT is the object which contain all tag of html
// js dom is use to create changes in html and css by javascript
// it is simply use to target / select the  html and csss elements
// how to select tages in html by js dom

// 1.  this is use to select one tyep of element of html at once and by there name

// const p = document.getElementById('head1');
// const p = document.getElementsByClassName('head2');
// const p = document.getElementsByTagName('h1');

// this is use to select any type of tages in html
// const head = document.querySelector("h1");
// const head = document.querySelectorAll("h1");
// const head = document.querySelectorAll(".head2");
// const head = document.querySelectorAll("#head1");

//2.2 .  changing the content / css style of  the tag
// it  can also change any css style of an css file for color to baground and many more


// console.log(head.innerHTML);
// console.log(head.textContent)
// console.log(head.innerText);
// head.innerHTML = "hii everyone";
// head.style.color = "plum";
// console.log(p)
// console.log(head);




// const heading = document.querySelector("h1");

// const heading = document.querySelector("h1");
// const button = document.querySelector("button");
// // console.log(heading[0].innerHTML);

// // heading[0].innerHTML = "HIII";
// // heading[0].style.color = "plum";
// // heading[1].style.color = "peru";

// //mouseenter && mouseleave && click

// button.addEventListener('mouseleave',()=> {
//     heading.innerHTML = 'value is changed';
//     heading.style.color = 'plum';
//     heading.style.backgroundColor =" black";
// });

// button.addEventListener('mouseenter',()=> {
//     heading.innerHTML = 'value is changed';
//     heading.style.color = 'black';
// heading.style.backgroundColor =" plum";


// });

// program of random color in js with html and css

// const container = document.querySelector(".container");
// const button = document.querySelector('button');
// button.addEventListener('click', function () {
//     container.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)} )`;
// });

//several interval 

//toggle 


// const heart = document.querySelector(".icon-heart");
// const audio = document.querySelector("audio");
// haert.addEventListener("click", function (){

//     if( heart.classList[0] === "ri-heart-3-line"){

//         heart.classList.remove("ri-heart-3-line");
//         heart.classList.add("ri-heart-3-fill");
//         console.log(heart.classList)

//     }else {
//         heart.classList.remove("ri-heart-3-fill");
//         heart.classList.add("ri-heart-3-line");

//     }
//     audio.play();
// });


const body = document.querySelector('body');
const pointer = document.querySelector('.pointer');


body.addEventListener('mousemove', function (e) {
    pointer.style.left = e.x + "px";
    pointer.style.top = e.y + "px";
})








































































