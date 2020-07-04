function getProgress() {
	return document.getElementById("progressbarDinheiro").getAttribute("aria-valuenow");
	return document.getElementById("progressbarDinheiro").getAttribute("style","width");
	return document.getElementById("progressbarDinheiro").innerHTML;
}

function setProgress(value) {
	document.getElementById("progressbarDinheiro").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarDinheiro").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarDinheiro").innerHTML = (value+ "%");
	localStorage.setItem("progressoPreguica", value);
}

function setProgressOnLoad () {
	let value = localStorage.getItem("progressoPreguica");
	document.getElementById("progressbarDinheiro").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarDinheiro").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarDinheiro").innerHTML = (value+ "%");
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
		window.location.replace("/pages/dinheiroLeveis/Dinheiro-2.html");
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