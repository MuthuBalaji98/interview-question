// sum of digit number
var num=prompt("enter number: ");
var sum = 0,m = 0;

while (num>0) {
    m = num % 10;
    sum = sum + m;
    num = (num - m) / 10;
}

console.log(sum);

//asending order in array
var ascending = [10,45,65,89,64,42,23,63,90,40];
ascending.sort(function(a, b) {
return a-b;
})

console.log(ascending);

// validate email

var email=prompt("enter your email address");
function validate(){
    if (email.includes("@")){
        console.log("result is valid");}
        else{
            console.log("result is not valid");
        }
}
validate();