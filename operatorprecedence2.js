let x=15;
let y=10;
let z=20;
let res1=x+y/5*z-10;
let res2=x+y/5*(z-10);
let cal=x<y||x<z&&z>y ||!z<10;
document.getElementById("demo").innerHTML="Value Of Expression 1:"+res1;
document.getElementById("sub").innerHTML="Value Of Expression 2:"+res2;
document.getElementById("mul").innerHTML="Value Of Expression 3:"+cal;
// //first
// 15+10/5*20-10
// 15+2*20-10
// 15+40-10
// 55-10
// 45
//second
// 15+10/5*(20-10)
// 15+10/5*10
// 15+2*10
// 15+20
// 35
//
// x<y||x<z&&z>y ||!z<10
// order of precedence NOT AND OR
// 15<10||15<20&&20>15||20<10
// F||T&&T||T
// F||T&&T
// T||T
// T