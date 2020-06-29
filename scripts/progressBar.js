function getProgress() {
	return document.getElementById("progressbar").getAttribute("aria-valuenow");
	return document.getElementById("progressbar").getAttribute("style","width");
	return document.getElementById("progressbar").innerHTML;
	}

function setProgress(value) {
	document.getElementById("progressbar").setAttribute("aria-valuenow",value);
	document.getElementById("progressbar").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbar").innerHTML = (value+ "%"); 
}

function increment() {
	var i = getProgress();
	if(i < 100){
		i = parseInt(i)+20;
        setProgress(i);	
	}else{
        alert("Meta concluída! Resetando progresso...");
        setProgress(0);
	}
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