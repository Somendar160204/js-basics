const accountId = 25;

let accountEmail = "somu@1602";
/*Prefer not to use var,
because of issue in block scope and functional scope
,so use let*/
var accountPassword = "123"
accountState="AP";/*we can declare without keyword,but not recommended
 because here the variable will automatically
 be declared as global eventhough declared
inside a function, so it can cause accidental overwrites
 also, we cant declare this in strict mode it throws error*/
let accountCity;
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountState]);
