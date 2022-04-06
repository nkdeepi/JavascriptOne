let options=""
for(let i=2;i<20;i++)
{
    options+="<option>"+i+"</option>";
}
document.getElementById("num").innerHTML=options;

        function table()
        {
            // //let num="";
            // let result;
            // let a=document.querySelector('#number');
            // let b=a.options[a.selectedIndex].value;
           // var select = document.getElementById('language');
            //var value = select.options[select.selectedIndex].value;
            let a=document.getElementById("num");
            let b=a.options[a.selectedIndex].value;
        
            console.log(b);
            for(let i=1;i<=10;i++)
            {
                result=i*b;
                //document.getElementById("num1").value=result;
                document.writeln(result+"<br>");
                console.log(result);
            }
           // document.getElementById("demo").innerHTML=num;
        }
