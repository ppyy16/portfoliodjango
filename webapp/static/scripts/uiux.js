

window.onload = function () {
    document.querySelector('.bg-modal').style.display = "none";
	// document.querySelector('.resumecontent').style.display = "none";
	// document.querySelector('.csclass').style.display = "none";
	// document.querySelector('.samsung').style.display = "none";
	// document.querySelector('.spotify').style.display = "none";
	// document.querySelector('.aboutcontent').style.display = "none";
	// document.querySelector('.contactcontent').style.display = "none";

}

document.getElementById('resume').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.resumecontent').style.display = "flex";
});



document.getElementById('contact').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.contactcontent').style.display = "flex";
});


document.getElementById('GH').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.csclass').style.display = "flex";

});

document.getElementById('samsung').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.samsung').style.display = "flex";

});


document.getElementById('spotify').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.spotify').style.display = "flex";

});

document.getElementById('about').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.aboutcontent').style.display = "flex";

});


document.getElementById('hackmobbtn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.hackmob').style.display = "flex";


});

document.getElementById('hackwebbtn').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.hackweb').style.display = "flex";


});





document.querySelector('.close').addEventListener("click", function() {
	document.querySelector('.aboutcontent').style.display = "none";

	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.resumecontent').style.display = "none";
	document.querySelector('.contactcontent').style.display = "none";
	document.querySelector('.csclass').style.display = "none";
	document.querySelector('.samsung').style.display = "none";
	document.querySelector('.spotify').style.display = "none";
	document.querySelector('.hackmob').style.display = "none";
	document.querySelector('.hackweb').style.display = "none";



});