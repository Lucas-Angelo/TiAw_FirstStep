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
	document.getElementById("progressbarPreguica").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarPreguica").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarPreguica").innerHTML = (value+ "%");
}
setProgressOnLoad ();

function increment() {
	var i = getProgress();
	if(i < 100){
		i = parseInt(i)+50;
		setProgress(i);	
		
	}else{
        alert("Meta concluída! Resetando progresso...");
        setProgress(0);
	}
	setTimeout(function() {
		window.location.replace("/pages/dinheiroLeveis/certficado.html");
	}, 500);
}

function decrement() {
    if(i=getProgress() > 0)
    {
        var d = getProgress();
        setProgress(d - 20);
    }
    else
    {
        alert("Efetue algum progresso primeiramente.");
    }
}

function resetButton() {
	var r = getProgress();
	setProgress(r = 0);
}
