var button=document.getElementById("enter");
var input=document.getElementById("userinput");
var ul=document.querySelector("ul");
var li=document.createElement("li");


function removeNode(){
	li.parentNode.removeChild(li);
	ul.removeChild(li);
	input.value="";
}


button.addEventListener("click", function(){


var butt=document.createElement("BUTTON");

var t=document.createTextNode("Delete!");

butt.appendChild(t);


li.appendChild(document.createTextNode(input.value));

if (input.value.length>0)
{
	ul.appendChild(li);

li.appendChild(butt);

input.value=" ";

butt.addEventListener("click",removeNode);
}




})



	