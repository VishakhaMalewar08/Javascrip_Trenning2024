//syntax:

// function functionname(parameter1,paramiter2,...){
//     //code block;
// }


// function great(){
//     console.log('hello');
// }
// great();
// console.log("---------------");
// great();


// function great(){
//     let fname="john";
//     console.log('Hello'+" "+fname);
// }
// great();
// console.log(fname);


// let fname="john";
// function great(){
//      fname="susmita";
//     console.log("hello" +" "+ fname);
// }
// console.log(fname);
// great();
// console.log(fname);


// let fname="john";
// function great(){                        
//     console.log("hello" +" "+ fname);
// }
// great();
// console.log(fname);

// let fname="john";
// function great(){
//     fname="susmita";
//     console.log("hello"+" " +fname);
// }
// console.log(fname);
// great();
// console.log(fname);

// let fname="john";
// function great(){
//      let fname="susmita";
//     console.log("hello" +" "+ fname);
// }
// console.log(fname);
// great();
// console.log(fname);

//using var,we can reassign and redecleare the variable.
//using let ,we can reassign the variable but can not redeclare the variable.
//using const,we can not reassign and redeclare the variable.

//print the number form 1 to 10 using for loop and breack statments.

// for (let i = 1; i <= 10; i++) {
//     console.log(i);
//     if (i === 10) {
//         break;
//     }
// }


// For Loop: Used when the number of iterations is known before the loop starts, with three parts: initialization, condition, and increment/decrement.
// While Loop: Used when the number of iterations is not known before the loop starts, continues as long as the specified condition evaluates to true.
// Do-While Loop: Similar to the while loop but always executes at least once, as it checks the condition after each iteration.


// let fname="shrutika";
// function sayhello(){
//     fname ="vishakha";
//     let massage ="hello"+" "+fname;
//     console.log(massage);
// }
// console.log(fname);
// sayhello();
// console.log(fname);


//how can you pass parameter and aurguments.

// function great(name){
//     console.log("hello "+name);
// }
// great("alka");
// great("vish");


// function great(city){
//     console.log("i belongs to"+" "+city);
// }
// great();
// great("mumbai","pune","nagpur");


// function great(city,country){
//     console.log("i belongs to"+" "+city+ " "+"in"+" "+country);
// }
// great("pune","India");
// great("delhi")
// great();


// function great(city,country){
//     console.log("i belongs to"+" "+city+ " "+"in"+" "+country);
// }
// great("undified","India");
//great("delhi")
//great();


// function age(name,age){
//     console.log(name+" is "+age+ " year old");
// }
// age("vish",23);


// function age(name,age){
//     console.log(name + " is a good boy");
// }
// age("vish",23);


// function great(fname,age){
//     fname="hay"+" "+ fname;
//     console.log(fname+" "+ age);
// }
// let fname="gayatri";
// //great(fname,20);
// console.log(fname);


// function great(fname,age=22){
//     console.log("hello "+fname + " you are "+ age+" "+"years old ");
// }
// great("nikita");
// great("nikita",20);


// function great(fname,age=22){
//     console.log("hello "+fname + " you are "+ age+" "+"years old ");
// }
// great("eram",undefined);
// great("eram",false);
// great("eram",NaN);
// great("eram",null);


//homework
//null vs undified.
//undified vs not defied.


// function place(city,country ){
//     if(country===undefined){
//         country="chaina";
//     }
//     console.log("i belongs to "+city + " "+"in "+ country);
// }
// place("mumbai","india");
// place(" delhi");


// function place(city,country ){
//     // if(country===undefined){
//     //     country="chaina";
//     // }

//     console.log("i belongs to "+city + " "+"in "+ country);
// }
// place("mumbai","india");
// place(" delhi");



function place