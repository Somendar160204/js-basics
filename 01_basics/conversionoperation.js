let score = "33";
console.log(typeof score);//string
let valueInNumber = Number(score)//string converted to number
console.log(typeof valueInNumber);//Number
console.log(valueInNumber);//33


let score2 = "33abc";
console.log(typeof score2);//string
let convert =  Number(score2);//string is converted to number but it is not a Number(Nan)
console.log(typeof convert);//Number
console.log(convert);//NaN


let score3 = null;
console.log(typeof score3);//object
let convert2 =  Number(score3);//null is converted to number 
console.log(typeof convert2);//number
console.log(convert2);//0



let score4 = undefined;
console.log(typeof score4);//undefined
let convert3 =  Number(score4);//undefined is converted to number 
console.log(typeof convert3);//number
console.log(convert3);//NaN



let score5 = true;
console.log(typeof score5);//boolean
let convert4 =  Number(score5);//true is converted to number 
console.log(typeof convert4);//number
console.log(convert4);//1


let isLoggedIn = undefined;
let booleanIsLoggedIn = Boolean(isLoggedIn)/*
(any number other than 0 is true,
any string other than the empty string is true,
null and undefined are considered false
)*/
console.log(typeof isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);


let someNumber = 33;
let string1 = String(someNumber)
console.log(typeof someNumber);//number
console.log(typeof string1);//string
console.log(string1);//33


