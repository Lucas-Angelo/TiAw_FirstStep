function getNameOnLoad() {
    let value = localStorage.getItem("username");
    console.log("username")
	document.getElementById("progressbarDinheiro").setAttribute("aria-valuenow",value);
	document.getElementById("progressbarDinheiro").setAttribute("style","width: " +value+ "%");	
	document.getElementById("progressbarDinheiro").innerHTML = (value+ "%");
}
getNameOnLoad ();