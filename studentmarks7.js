let m1=76;
let m2=78;
let m3=65;
let m4=90;
let m5=85;
let total=(m1+m2+m3+m4+m5);
let per=(total/500)*100;
document.getElementById("demo").innerHTML="Total Marks Obtained:" +total;
document.getElementById("sub").innerHTML="Percentage:" +per;
//grade assign
//var per=prompt("enter percentage");

if(per>=85)
{
    document.writeln("GRADE S");
}
else if((per>=75)&&(per<85))
{
document.writeln("GRADE A");
}
else if((per>=65)&&(per<75))
{
document.writeln("GRADE B");
}
else if((per>=55)&&(per<65))
{
document.writeln("GRADE C");
}
else if((per>=50)&&(per<55))
{
document.writeln("GRADE D");
}
else
{
document.writeln("FAILED");
}

