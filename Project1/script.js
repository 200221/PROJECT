let formObj = document.getElementById('text-field');
document.getElementById('btnSend').onclick=function(){
	 createLine(formObj.value);
	 formObj.value = ''; 
}
	let xhttp =  new XMLHttpRequest();
	xhttp.open('POST',"http://77.120.115.215:5000/api/subscribe");
    xhttp.onreadystatechange = function(){
    	if(this.readyState == 4 && this.status == 200){
	 	    let data=JSON.parse(this.responseText);
	 	    alert(data);
		}
    }

    xhttp.send();
