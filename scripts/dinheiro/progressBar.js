function getProgress() {
	return document.getElementById("progressbarDinheiro").getAttribute("aria-valuenow");
	return document.getElementById("progressbarDinheiro").getAttribute("style","width");
	return document.getElementById("progressbarDinheiro").innerHTML;
}

function setProgress(value) {
	document.getElementById("progressbarDinheiro").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarDinheiro").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarDinheiro").innerHTML = (value+ "%");
	localStorage.setItem("progressoDinheiro", value);
}

function setProgressOnLoad () {
	let value = localStorage.getItem("progressoDinheiro");
	document.getElementById("progressbarDinheiro").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarDinheiro").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarDinheiro").innerHTML = (value+ "%");
}
setProgressOnLoad ();

function increment() {
	var i = getProgress();
	setTimeout(function() {
		window.location.replace("/pages/dinheiroLeveis/Dinheiro-2.html");
	}, 500);
	localStorage.setItem("progressoDinheiro", 50);
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