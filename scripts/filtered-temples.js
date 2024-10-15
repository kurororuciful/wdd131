// footer year output
const year = document.querySelector("#year");

// footer last modified output
const today = new Date();
year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;
document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();

// hamburger button
const mainnav = document.querySelector(".navigation")
const hambutton = document.querySelector('#menu');

hambutton.addEventListener("click", () => {
	mainnav.classList.toggle("show");
	hambutton.classList.toggle("show");
});

// Week04 Assignment
const temples = [
	{
	  templeName: "Aba Nigeria",
	  location: "Aba, Nigeria",
	  dedicated: "2005, August, 7",
	  area: 11500,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
	  templeName: "Manti Utah",
	  location: "Manti, Utah, United States",
	  dedicated: "1888, May, 21",
	  area: 74792,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
	  templeName: "Payson Utah",
	  location: "Payson, Utah, United States",
	  dedicated: "2015, June, 7",
	  area: 96630,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
	  templeName: "Yigo Guam",
	  location: "Yigo, Guam",
	  dedicated: "2020, May, 2",
	  area: 6861,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
	  templeName: "Washington D.C.",
	  location: "Kensington, Maryland, United States",
	  dedicated: "1974, November, 19",
	  area: 156558,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
	  templeName: "Lima Perú",
	  location: "Lima, Perú",
	  dedicated: "1986, January, 10",
	  area: 9600,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
	  templeName: "Mexico City Mexico",
	  location: "Mexico City, Mexico",
	  dedicated: "1983, December, 2",
	  area: 116642,
	  imageUrl:
	  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Hamilton New Zealand",
		location: "Hamilton, New Zealand",
		dedicated: "1955, December, 21",
		area: 45251,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"
	},
	{
		templeName: "Idaho Falls Idaho",
		location: "Idaho Falls, Idaho",
		dedicated: "1940, October, 19",
		area: 85624,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/idaho-falls-idaho-temple/idaho-falls-idaho-temple-31085-main.jpg"
	},
	{
		templeName: "Los Angeles California",
		location: "Los Angeles, California",
		dedicated: "1951, September, 22",
		area: 190614,
		imageUrl:
		"https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-38945-main.jpg"
	},
  ];


function refreshPage() {
	location.reload();
}

createTempleCard(temples);

// Filtering let ded = dedicated.split("");
const allAnchor = document.querySelector("#allA");
	allAnchor.addEventListener("click", refreshPage);

const newAnchor = document.querySelector("#newA");
newAnchor.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.split("")[0,4] > 2000));
})

const oldAnchor = document.querySelector("#oldA");
oldAnchor.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.dedicated.split("")[0,4] < 1900));
})

const largeAnchor = document.querySelector("#largeA");
largeAnchor.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area > 90000));
})

const smallAnchor = document.querySelector("#smallA");
smallAnchor.addEventListener("click", () => {
	createTempleCard(temples.filter(temple => temple.area < 10000));
})


// Create Temple Card Function and Loop
function createTempleCard(filteredTemples) {
	document.querySelector(".container").innerHTML = "";
	filteredTemples.forEach(temple => { 
		let card = document.createElement("section");
		let name = document.createElement("h3");
		let location = document.createElement("p");
		let dedicated = document.createElement("p");
		let area = document.createElement("p");
		let img = document.createElement("img");

		name.textContent = `${temple.templeName} Temple`;
		location.innerHTML = `<span class="label"><b>Location:</b></span> ${temple.location}`;
		dedicated.innerHTML = `<span class="label"><b>Dedication:</b></span> ${temple.dedicated}`;
		area.innerHTML = `<span class="label"><b>Area:</b></span> ${temple.area} sq ft`;
		img.setAttribute("src", temple.imageUrl);
		img.setAttribute("alt", `${temple.templeName} Temple`);
		img.setAttribute("loading", "lazy");

		card.appendChild(name);
		card.appendChild(location);
		card.appendChild(dedicated);
		card.appendChild(area);
		card.appendChild(img);

		document.querySelector(".container").appendChild(card);
		});
	}
