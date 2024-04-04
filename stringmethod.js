// String Methods.

// console.log('Hello,words');
// console.log("Hello");
// console.log(`hello,world`);

// Find the lenght of String;

// let str="Hello, World!";
// console.log(str.length);


//find the last charectors of the lenght.
// let str="Hello";
// console.log(str[4]);

// let str="hello world";
// let strlength=str.length;
// console.log(strlength);
// console.log(str[strlength-1]);

// let str="hello world";
// let strlength=str.length;
// console.log(str[str.length-1]);

// let str="hello world";
// console.log(str[0]);
// console.log(str.charAt(3));
// console.log(str.at(-3));

// let str="Hello";
// str[0]="h";
// console.log(str[0]); //carectors are immutable. it is not change the strings like this.

// let str ="Hello";
// str="hello";
// console.log(str);   //do not change the one latter but we are change the holl words.

//Changing the case of a string.

// let str="HELLO";
// console.log(str.toLocaleLowerCase());

// let str="hello";
// console.log(str.toLocaleUpperCase());

// first latter are cappitel and reamaning is small
// let str="hello";
// let firstchar=str[0].toUpperCase();
// let remaining=str.slice(1).toLowerCase();
// console.log(firstchar+remaining);

//indexof()==>return the index of (the position of)the first occurrence of the a specified text in a string.
// let str="Hello";
// console.log(str.indexOf("H"));
// console.log(str.indexOf("o"));


// let str="This is a string";
// console.log(str.indexOf("h"));
// console.log(str.indexOf("is"));

//lastindex()==>return the index of (the position of) the last  occurrence of the a specified text in a string.
// let str="this is a string";
// console.log(str.lastIndexOf("i"));

// let str="this is a string";
// console.log(str.indexOf("this"));

// let str="this is a string";
// if(str.indexOf("This") ==  0){  //-1 work as a false
//     console.log("Found");
// }

//  let str="this is a string";
// if(str.indexOf("it") !== -1){  //-1 work as a false
//     console.log("Found");
// }



//includes()==>if the word presents that sentance that time return true otherwise false.

let str ="This is a string"
console.log(str.includes("This"));
console.log(str.includes("this"));


console.log("Hello".includes("H"));
console.log("Hello".includes("l"));
console.log("Hello".includes("o",4));
console.log("Hello".includes("o",2));
console.log("Hello".includes("H",1));

//startWith()==>return true if a string starts  with a specified string ,otherwise false.

// console.log("Hello".startsWith("H"));
// console.log("Hello".startsWith("h"));
// console.log("Hello".startsWith("e"));
// console.log("Hello".startsWith("He"));
// console.log("Hello".startsWith("Hel"));


//endsWith() ==> return true if a string ends  with a specified string ,otherwise false.

// console.log("Hello".endsWith("ol"));
// console.log("Hello".endsWith("lo"));



//slice()==> extracts a part of a string and returns a new string.

 //let str ="this is a string";
//console.log(str.slice(1,3));
//console.log(str.slice(5,7));
// console.log(str.slice(0));
// console.log(str.slice(5));
//console.log(str.slice(5,-6));
//console.log(str.slice(3,0));



//substring()==>Extracts the characters from a string,between two specified indicas

// let str ="this is a string";
// console.log(str.substring(0,3));
// console.log(str.substring(3,0));


//substr()==>extract the charectors from a string,beginning at a specified start position ,and through the  specified number of charectors.


// let str="this is a string";
// console.log(str.substr(0,4));
// console.log(str.substr(2,5));
// console.log(str.substr(-4,3));


//concat()==>jont two or more strings,and return a new joint strings.

// let str1="Hello";
// let str2="World";
// console.log(str1.concat(" ",str2));
// console.log(str1+ " "+ str2);


//trim()==> removes whitespace form both ends of  a srtings.
// let str ="    hello wolrd";
// console.log(str.trim());


//trimstart()==> removes whitespace from the beginning of a strings.

// let str ="    hello wolrd";
// console.log(str.trimStart());


//trimend()==>remove the ends whitespace  form the ending of a string.

// let str ="hello     wolrd  ";
// console.log(str.trimEnd());


//padstart()==> pads a string with another string, until the resulting string reaches the  given lenght.

// let str ="5";
// console.log(str.padStart(4,"7"));
// console.log(str.padStart(4,"1"));
// console.log(str.padStart(4,"a"));
// console.log(str.padStart(5,"ab"));

// let str="Hello";
// console.log(str.padStart(6,"a"));

//padend()==> pads a string with another string, until the resulting string reaches the  given lenght.


// let str ="5";
// console.log(str.padEnd(4,"7"));
// console.log(str.padEnd(4,"1"));
// console.log(str.padEnd(4,"a"));
// console.log(str.padEnd(5,"ab"));

//repeat() ==>

// let str="hello";
// console.log();


//replace()==> searches a string for a specified value ,or a regular expression ,and returns a new string when the specified valued are replaced


// let str="hello world";
// console.log(str.replace("world","vishakha"));


// let str="hello world world";
// console.log(str.replace("world","vishakha"));
// console.log(str.replaceAll("world","vishakha"));



