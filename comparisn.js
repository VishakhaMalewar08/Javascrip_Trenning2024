// console.log(Boolean("false"));
// console.log(Boolean(" "));
// console.log(Boolean("0"));
// console.log(Boolean([]));
// console.log(Boolean({}));


// Srting comparisn


// console.log("Z" > "A");
// console.log("A" > "B");
// console.log("Priyanka" > "Punam");
//  console.log("Mee">"Me");
// console.log("Priya">"Priyanka");
// console.log("a">"A");
// console.log("2">1);  //"2 "will convert to 2
// console.log("01"==1);  //"01" will convert to 1
// console.log(true>0);
// console.log(false>0);
// console.log(true==1);
// console.log(false==0);
// console.log("A">0);
// console.log("A"==65);
// console.log("0"==0);
// console.log(Boolean("0"));
// console.log(Boolean(0));
// console.log(typeof(false));
// console.log(0===false);

// console.log(null===undefined); 
// console.log(null==undefined);
// console.log(undefined==0);  // if we compare of null output will be true and otherwise false.
// console.log(undefined>0);  //becouse 
// console.log(undefined<0)


//math.floor ==>round down to the nearest inteegr.

// console.log(Math.floor(3.1));
// console.log(Math.floor(3.9));
// console.log(Math.floor(-3.1));
// console.log(Math.floor(-3.9));

//2)math.ceil --round up to the nearest integer

// console.log(Math.ceil(3.1));
// console.log(Math.ceil(3.9));
// console.log(Math.ceil(-3.1));
// console.log(Math.ceil(-3.9));


//math.round--round to the nearest integer

// .1 to .4 ==>round down to the nearest integer
// .5 to .9==>round up to the nearest integer

// console.log(Math.round(3.1));
// console.log(Math.round(3.9));
// console.log(Math.round(-3.1));
// console.log(Math.round(-3.9));
// console.log(Math.round(3.5));
// console.log(Math.round(-3.5));

// let num=3.14159265359;
// let a=num*100;
// console.log(a);
// let b=Math.round(a);
// console.log(b);
// console.log(b/100);

//toFixed()==>Round to the nearest integer and return a string.

// let num=3.14159865359;
// console.log(num.toFixed(5));

// let num=3.148;
// console.log(num.toFixed(3));

// let num=3.1;
// console.log(num.toFixed(5));

// let  num=3.1;
// num=3.5
// console.log(num.toFixed(0));
//console.log(num.toFixed(1));

// console.log(0.1===0.1);
// console.log(0.1 + 0.2 ==0.3);
// console.log(0.1+0.2);
// console.log(0.1.toFixed(3));

//console.log(9999999999999999);
// console.log(NaN);

//isNaN()==>check if the value is NaN.

// console.log(isNaN(NaN));
// console.log(isNaN(10));
// console.log(isNaN('10'));
// console.log(isNaN('Hello'));
// console.log(isNaN('10Hello'));

// isFinite() ==>check if the value is a finite number.
// console.log(isFinite(10));
// console.log(isFinite('10'));
// console.log(isFinite('hello'));
// console.log(isFinite('10hello'));
// console.log(isFinite(10.5468546));
// console.log(isFinite(Infinity));

//Math.random() ==> return a random number between 0  and 1.

// console.log(Math.random());

// let random=Math.random();
// console.log(random);
// console.log(random*10);
// console.log(parseInt(random*10));

//Math.max()==>return the largest of zero or more number.

// console.log(Math.max(1,2,3,4,5));
// console.log(Math.max(-1,-2,-3,-4,-5));

// Math.min()==>return the smallest of zero or more number.
// console.log(Math.min(1,2,3,4,5));
// console.log(Math.min(-1,-2,-3,-4,-5));

// Math.Pow==>return the base to the exponents power, that is ,base exponet.

// console.log(Math.pow(2,3)); 
// console.log(Math.pow(3,2));
// console.log(Math.pow(3,-1));
// console.log(Math.pow(2,1/2));
// console.log(Math.pow(3,-2));
// console.log(Math.pow(2,-2));
// console.log(Math.pow(3,0));
// console.log(Math.pow(3,0.5)); 

//Math.sqrt() --return the squre root of the number.
// console.log(Math.sqrt(4));
// console.log(Math.sqrt(9));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(25));

