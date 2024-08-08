const accountId=144553
let accountEmail="shaif@gmail.com"
var accountPassword="12345"
accountCity="ernakulam"

/*
Preferred not to use var
because of issue in block scope and functional scope
*/

accountEmail="khan@gmail.com"
accountPassword="2121"
accountCity="kochi"

console.table([accountId,accountEmail,accountPassword,accountCity])

//accountId=2 //Not allowed
console.log(accountId);
