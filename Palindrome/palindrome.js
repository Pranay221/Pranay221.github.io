var input=document.getElementById("userInput");
var button=document.getElementById("clickme");

function getPalindrome()
{
	var x=input.value;
	if(x.length>0)
	{
	 var temp=x;
     var final,rem;
     final=0;
     while(temp>0)
     {
       rem=temp%10;
       final=final*10+rem;
       temp=parseInt(temp/10);
     }
     if(final==x)
     {
     	document.getElementById("ans").innerHTML=x+" "+"is a Palindrome";
     }
     else
     	document.getElementById("ans").innerHTML=x+" "+"is not a Palindrome";
    } 
    else
    {
    	alert("Enter the number in the given textBox first");
    }
     
}
button.addEventListener("click", getPalindrome);

