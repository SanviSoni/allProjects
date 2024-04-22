
/// fuction , array and ojbects for node js 
// error handling for synchronous code 

// try and catch are like for loop but in try we put code that might give us error and in catch if detacts if that code have any error or not , it the code have error it give the error , we can get error in two form my message and name .

// try {
//     let a = 22;
//     let b = 24;
//     let c = a + b;
//     console.log(c);

// } catch (error) {
//     console.log("ERROR -->", error);
//     console.log("ERROR -->", error.name);
//     console.log("ERROR -->", error.message);
// }

// console.log('hello world');

//coustom errors  == its only allowed under try and execute in catch , if we want to made coustom error we need to use throw only in try .


// try {
//     let a = +prompt("a");
//     let b = +prompt('b');
//     let c = a + b;
//     console.log(c);

//     if ( c % 2 !== 0 ){

//         throw TypeError('Odd values are not allowed! please add another values');
//     }

// } catch (error) {
//     console.log("ERROR -->", error);
//     console.log("ERROR -->", error.name);
//     console.log("ERROR -->", error.message);
// }

// console.log('hello world');

/// promises 
// promise is use to handle error handling in async code .

/// API = application programing interface 

// api is a link that provide url from back-end
// to move data form api we need to use ajax 


// ajax asychoronus javascriot   = to implement we need to use fetch( is given by js) and exeous (third party application) 

//JASON = data ek jagha se dusri jagha jo travel kr rha hai vo jason ke form me kr rha hai  jo ajax ke karan hi hoti 



//web api iss the thing that run js async code bcus js is not capabel of runing async 

//event loop saut diff between sync and async 

// dom is also async language 

//async is handeled by web api 


//to stop setinterval we use clearInterval its is the only function that can stop the setinterval 





// let count = 1;
// let stopinterval = setInterval(() => {

//     console.log(count);
//     if (count === 10) {
//         clearInterval(stopinterval)
//     }
//     count++;

// }, 1000);


// setTimeout(() => {
//     console.log("timeout !");

// }, 10000);



/// PROMISES 

// how to create promise 
// fetch axeours are only take api  (url)
//ajex is a cocept to implement it we use fetch axeuce














// how to create promise 


// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res) => res.json())
//     .then(res => console.log(res))
//     .catch(err => console.log(err))



// function getdata(n) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {

//             if (n % 2 === 0) {
//                 resolve("even")
//             } else {
//                 reject("odd")
//             }
//         }, 1000);
//     })
// }


// console.log(getdata(12));

// getdata(+prompt('number'))
//     .then((result) => {
//         console.log(result);
//     })

//     .catch((err) => {
//         console.log(err);
//     })


//  coverting async to syncs function 

// await is javascript tool which is used to convert asyn to sync code 





// async function getUserAndPost() {
    

//     try {

//         const userstr = await (fetch('https://jsonplaceholder.typicode.com/users'));


//         const userjson = await userstr.json();



//         const postsstr = await (fetch('https://jsonplaceholder.typicode.com/posts?_limit=20'));


//         const postsjson = await postsstr.json();


//         console.log(userjson);
//         console.log(postsjson);

//         console.log(' user and posts fetched ')

//     } catch (error) {
//         console.log(error);
//     }


// }
// getUserAndPost();




//basic vanilla javacript projects 

// var 
// data types
// operators
// conditons
// loops
// strings
// fucntion  = arrow func 
// arrys
// objects
// dom
// events 
// promises 
// try catch 
// ajax 
// async await 










 














