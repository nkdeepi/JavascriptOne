let i;
let even="";
let sum=0;
for(i=15;i<=85;i++)
{
    if(i%2==0)
    {
        even+=i+"<br>"
        sum+=i;
        //console.log(i)
        //console.log(sum);
        
    }
}
document.getElementById("demo").innerHTML= "Even Numbers are:"+even;
document.writeln("the sum is "+sum);
