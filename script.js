function getFormvalue(event) {
	event.preventDefault();
	
	let x= document.getElementById("form1");
	let name="";
	for(let i=0;i<x.length;i++){
		if(x.element[i].value!='Submit'){
			name+=x.element[i].value+" ";
		}
	}

	alert(name.substring(0,name.length-1));	
}

