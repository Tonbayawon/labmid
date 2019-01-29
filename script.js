    	function loadjsondata(){

       let xhttp = new XMLHttpRequest();
       let list = document.getElementById('list');
       	let html = "";


 xhttp.onreadystatechange = ret(){
 	if (xhttp.readystate == 4 && xhttp.resopnse = 200){
	console.log(http.response);


	
	for(let i = 0; i < data.length; i++  ){
		html += "li>"+ data[i].userId.Id+"</li>"
	}

	list.innerHTML = html;

}

xhttp.open(GET, https://jsonplaceholder.typicode.com/todos )
xhttp.send();

{
