const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener("click", function(){
	document.getElementById("navbar__div").classList.toggle("active");
})