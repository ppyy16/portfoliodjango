

$(document).ready(function () {
  window.onload = function () {
    document.querySelector('.bg-modal').style.display = "none";
	// document.querySelector('.resumecontent').style.display = "none";
	// document.querySelector('.pdf').style.display = "none";

	// document.querySelector('.contactcontent').style.display = "none";
}



document.getElementById('resume').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.pdf').style.display = "flex";

	document.querySelector('.resumecontent').style.display = "flex";
});




document.getElementById('introbutton').addEventListener("click", function() {
	if (confirm('Under construction! In the meanwhile, would you like to be redirected to my older porfolio to view art works?')) {
  // Save it!
window.location.href = "https://psahbai.tumblr.com/";

} else {
  // Do nothing!
  alert('No problem! You can still look at my work in the CompSci section!');
}
});


document.getElementById('about').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.aboutcontent').style.display = "flex";
	//$('#aboutcontentid').css('display','inline-block');
	 $('#resumecontent').hide();	// document.querySelector('.spotify').style.display = "none";



});



document.getElementById('contact').addEventListener("click", function() {
	document.querySelector('.bg-modal').style.display = "flex";
	document.querySelector('.contactcontent').style.display = "flex";
	 $('#resumecontent').hide();	// document.querySelector('.spotify').style.display = "none";

});



document.querySelector('.close').addEventListener("click", function() {
		document.querySelector('.aboutcontent').style.display = "none";

	document.querySelector('.bg-modal').style.display = "none";
	document.querySelector('.resumecontent').style.display = "none";
	document.querySelector('.contactcontent').style.display = "none";
	document.querySelector('.pdf').style.display = "none";
	 $('#resumecontent').hide();	// document.querySelector('.spotify').style.display = "none";


});
});

