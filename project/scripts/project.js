// FOOTER (YEAR COUNT)
const year = document.querySelector("#year");


// FOOTER (LAST MODIFIED)
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();


// HAMBURGER BUTTON
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector('#menu');

hambutton.addEventListener("click", () => {
	mainnav.classList.toggle("show");
	hambutton.classList.toggle("show");
});


// DATA SOURCE
const products = [
	{
	  id: "fc-1888",
	  name: "flux capacitor",
	  averagerating: 4.5
	},
	{
	  id: "fc-2050",
	  name: "power laces",
	  averagerating: 4.7
	},
	{
	  id: "fs-1987",
	  name: "time circuits",
	  averagerating: 3.5
	},
	{
	  id: "ac-2000",
	  name: "low voltage reactor",
	  averagerating: 3.9
	},
	{
	  id: "jj-1969",
	  name: "warp equalizer",
	  averagerating: 5.0
	}
];

