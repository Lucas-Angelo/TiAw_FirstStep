function getProgress() {
	return document.getElementById("progressbarPreguica").getAttribute("aria-valuenow");
	return document.getElementById("progressbarPreguica").getAttribute("style","width");
	return document.getElementById("progressbarPreguica").innerHTML;
}

function setProgress(value) {
	document.getElementById("progressbarPreguica").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarPreguica").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarPreguica").innerHTML = (value+ "%");
	localStorage.setItem("progressoPreguica", value);
}

function setProgressOnLoad () {
	let value = localStorage.getItem("progressoPreguica");
	if(value==null)
	value = 0;
	document.getElementById("progressbarPreguica").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarPreguica").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarPreguica").innerHTML = (value+ "%");
}
setProgressOnLoad ();

function increment() {
	var i = getProgress();
	setTimeout(function() {
		window.location.replace("/pages/preguicaLeveis/preguica-2.html");
	}, 500);
	localStorage.setItem("progressoPreguica", 50);
}
