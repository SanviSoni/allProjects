// 1
// var x = prompt('enter your name');
// console.log(`hello ${x}`);

// // 2
// var y = prompt('enter you age');
// console.log(`your are ${y} years old `);

// 3
// var a = +prompt('num1');
// var b = +prompt('num2');
// let c = a + b;
// let d = a - b;
// let e = a * b;
// let f = a / b;
// console.log(c , d , e, f);

// 4

// var a = +prompt('give length');
// var b = +prompt('give width');

// var area = a * b;
// console.log(`area of rectangle is ${area}`);

// 5

// var a = +prompt('give celsius');
// var b = (a * 9/5)+32
// console.log(b);

// 6

// var a = +prompt('give number');
// if( a % 2 === 0){
//     console.log(`${a} is even`)

// }else { console.log(`${a} is odd`)}

// 7
// var a = prompt('give name');
// var b = prompt('give surname');
// console.log( a + b);

// 8

//if-esle questions 
//1
// var num = +prompt('give a number ');

// if(num === 0 ){
//     console.log(`${num} is zero`)
// }else if ( num > 0){
//     console.log(`${num} is positive`)
// }else if( num < 0){ console.log(`${num} is negative`)} 

//2
// var num = +prompt('give num');
// if(num%2 === 0){console.log(' number is even')}
// else{console.log('number is odd')};

//3
// var a = +prompt('give num..'); 

// if( a % 4 === 0 && a %100 !== 0 && a%400 === 0){
//     console.log('leap year')
// }else { console.log('not a leap year')};


//4 
// var v = +prompt('give marks ')

// if (v > 90) { console.log('+A') }
// else if (v > 70 && v < 90) {
//     console.log('B+')
// } else if (v > 50 && v < 70) {
//     console.log('C+')
// } else if (v > 33 && v < 50) { console.log('D+') }

// else if (v < 33 && v > 0) { console.log(' you are fail') }

//5
// var v = prompt('give an alphabet')

// if (v === "a" || v === 'e' || v === "i" || v === 'o' || v === "u") {
//     console.log('vowel');
// } else {console.log('consonant')}

//6
// var n = 100;
// for( let i = 1; i <= n ; i++){

//     if( i % 3 === 0 && i % 5 === 0){
//         console.log( 'FizzBuzz')
//     }else if ( i % 3 === 0 )
//     {console.log('Fizz');}
//     else if ( i % 5 === 0 ){
//         console.log('Buzz')
//     }else { console.log(i)};
// }


//7 *

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



//8 
// var n1 = prompt('give num 1 ');
// var n2 = prompt('give num 2 ');
// var n3 = prompt('give num 3 ');

// if (n1 > n2 && n1 > n3 && n2 > n3) {
//     console.log(n1, n2, n3)

// } else if (n2 > n1 && n2 > n3 && n1 > n3) {
//     console.log(n2, n1, n3)

// } else if (n3 > n2 && n3 > n1 && n2 > n1) {
//     console.log(n3, n2, n1)
// }



//LOOP QUESTIONS

//1
// var n = 10;
// for ( var i = 1 ; i <= n ; i++){
//     console.log(i);
// }

//2

// var a = 10 
// let sum = '';
// for( let i = 1 ; i <= a ; i++ ){

//     sum = a * i;

// console.log( `${a} * ${i} = ${sum}`);}

//3

// var a = +prompt('num')
// let sum = 0;
// for( let i = 1 ; i<= a ; i++){

//     sum = sum + i;
// } console.log( sum);

//4

// var a = +prompt('num');
//  fact = 1;

//  for( let i = a ; i > 0 ; i--){

//     fact = i * fact;}

//     console.log(fact);


//5

// var a = 50;
// for( let i= 1 ; i <= a; i++){
//     if(i % 2 === 0 ){
//         console.log(i);
//     }
// }

//while loop question

//6 & 8

// var num = +prompt( 'number');
// var temp = num;
// var rev = 0;

// while( num > 0){
// let rem = num % 10 ;
// // console.log( rem);

// rev = rev * 10 + rem;

// num = Math.floor(num/10);

// } console.log(rev);

// if( temp === rev){
//     console.log( 'palindrome ')

// }else { console.log( 'not palindrome')};



//7 

// var n = +prompt( 'Number');

//9

//perfct numbet 
// var a = prompt('number ');
// for (var i = 2; i < a; i++) {
//     if (a % i === 0) {
//         console.log('not a perfect number');
//     } else (console.log(`${a} is a perfect number`));

// }

//10

// var n = prompt('give a number');
// for( var i = 2 ; i < n; i++){
//     if( n % i === 0){ 
//         console.log( i);
//     }
// }


//11

// var a = prompt('num');
// var b =  "";

// for( let i = 1 ; i<= 10 ; i++){

// b = a* i;

// console.log(`${a} * ${i} = ${b}`);
// }


//12 

// var a = prompt('give a number to test');
// if(  a % 2 === 0){
//     console.log(a, "is even number ");

// }else( console.log(a , "is odd number"));

//13 

// 
//







// factorial of real number 
// var a =  BigInt(prompt('nub'));
// var b = BigInt(1);
// for( var i = a; i>1 ; i--){

//     b= b* BigInt(i);
//     console.log(b);
// }


//sum of cdmf series;

// 

// var a = +prompt('number');
// var sum = 0;
// for(var i = 1; i <= a; i++){
//     sum = sum + 1/i;
// } console.log(sum);


//prime  factarization 

// var num = +prompt('give a number');
// for(let i = 2 ; i <= num ; i++){
//     while( num > 0 && num %i === 0){
//         console.log(i)
//         num = num /i;

//     }
// }

// sum of digit in range 

// var start = +prompt('give a num to start');
// var end = +prompt('give a num to end');

// for ( var i = start ; i< end; i++){
//     let num = i;
//     let sum = 0;
//     while( num > 0 ){ 
//         sum = sum + num % 10;
//         num = Math.floor(num / 10);

//     }
//     console.log(sum);

// }

// let rows = +prompt('enter number')

// let space = rows - 1;

// let star = 1;

// let str = "";

// for (let r = 1; r <= rows; r++) {

//     for (let c = 1; c <= space; c++) {

//         str += "";

//     }

//     for (let c = 1; c <= star; c++) {
//         str += "*";
//     }

//     str += "\n";

//     if (r < rows / 2) {
//         space--;
//         star = star + 2;
//     }
//     else {
//         space++;
//         star = star - 2;
//     }

// }
// console.log(str);



const form = document.querySelector('form');


const image = document.querySelector('img');

form.addEventListener('sumbit',function(e){
    e.preventDefault();
    const profile = {
        avatar 
    }
})



























