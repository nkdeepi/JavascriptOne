let m=parseInt(prompt("enter lower limit"));
let n=parseInt(prompt("enter upper limit"));
let num="";
for(let i=m;i<=n;i++)
{
    if((i%2==0)&&(i%5==0))
    {
       // document.write("the number is divisible by 2 and 5");
        num+=+i+"<br>"
    }
}
document.getElementById("demo").innerHTML="The NUmbers Divisible By 5 andd 2 are:"+"<br>"+num;