const age = parseInt(prompt('Enter the  age '));
if(age>=17)
{   
    document.getElementById("demo").innerHTML="person is eligible for voting";
    //document.writeln("person is eligible for voting");
    console.log("person is eligible for voting");


}
else{
    document.getElementById("sub").innerHTML="person is not eligible for voting"
    //document.writeln("person is not eligible for voting");
    console.log("person is not eligible for voting");
}