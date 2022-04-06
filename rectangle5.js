let len=20;
let bred=35;
let area=len*bred;
let perimeter=2*(len+bred);
console.log(area);
console.log(perimeter);
document.getElementById("demo").innerHTML="Area is:"+area;
document.getElementById("sub").innerHTML="Perimeter is:"+perimeter;
// document.write("area is " +area+"<br>");
// document.write("perimeter is " +perimeter+"<br>");
if(area>perimeter)
{
    document.writeln("area is higher");
}
else
{
 document.writeln("perimeter");
}

