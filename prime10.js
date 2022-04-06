
const lower = parseInt(prompt('Enter the lower limit '));
const upper = parseInt(prompt('Enter the highest limit'));
document.writeln(`The prime numbers between ${lower} and ${upper} are:`);
let num=""
for (let i=lower; i <=upper; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        num+=i+"<br>";
    }
}
document.getElementById("demo").innerHTML=num;
