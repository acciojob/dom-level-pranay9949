//your JS code here. If required.
let level=document.getElementById("level");
let i=0;
while(level.parentNode){
	 level=level.parentNode;
	i++;
}

alert("The level of the element is: "+i);
