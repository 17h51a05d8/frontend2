function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    return document.getElementById("history-value").innerText=num;
}
function getoutput()
{
    return document.getElementById("output-value").innerText;
}
function printoutput(num)
{
    if(num=="")
        {
         document.getElementById("output-value").innerText=num;   
        }
    else{
    document.getElementById("output-value").innerText=getformattednumber(num);
    }
}
function getformattednumber(num)
{
    if(num=='-')
        return "";
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}
function reversenumber(num)
{
    return Number(num.replace(/,/g,' '));
}
var operator=document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++)
    {
        operator[i].addEventListener('click',function(){
            if(this.id=="clear")
                {
                    printHistory("");
                    printoutput("");
                }
          else  if(this.id=="backspace")
                {
                    var output=reversenumber(getoutput()).toString();
                    if(output)
                        {
                            output=output.substr(0,output.length-1);
                            printoutput(output);
                        }
                }
            else {
                var output=getoutput();
                var history=getHistory();
                if(output==""&&history!="")
                    {
                        if(isNan(history[history.length-1])){
                            history=history.substr(0,history,length-1);
                        }
                    }
                if(output!=""||history!="")
                    {
                        output=output==""?output:reversenumber(output);
                        history=history+output;
                        if(this.id=="=")
                            {
                                var result=eval(history);
                                printoutput(result);
                                printHistory("");
                            }
                        else
                            {
                                history=history+this.id;
                                printHistory(history);
                                printoutput("");
                            }
                    }
            }
            
            
        });
    }
var number=document.getElementsByClassName("number");
for(var i=0;i<number.length;i++)
    {
        number[i].addEventListener('click',function(){
            var output=reversenumber(getoutput());
            if(output!=NaN)
                {
                    output=output+this.id;
                    printoutput(output);
                }
        });
    }