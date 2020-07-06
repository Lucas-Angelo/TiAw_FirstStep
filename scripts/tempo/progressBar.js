function getProgress() {
	return document.getElementById("progressbarTempo").getAttribute("aria-valuenow");
	return document.getElementById("progressbarTempo").getAttribute("style","width");
	return document.getElementById("progressbarTempo").innerHTML;
}

function setProgress(value) {
	document.getElementById("progressbarTempo").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarTempo").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarTempo").innerHTML = (value+ "%");
	localStorage.setItem("progressbarTempo", value);
}

function setProgressOnLoad () {
	let value = localStorage.getItem("progressbarTempo");
	if(value==null)
	value = 0;
	document.getElementById("progressbarTempo").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarTempo").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarTempo").innerHTML = (value+ "%");
}
setProgressOnLoad ();

function increment() {
	var i = getProgress();
	setTimeout(function() {
		window.location.replace("/pages/tempoLeveis/tempo-2.html");
	}, 500);
	localStorage.setItem("progressbarTempo", 50);
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