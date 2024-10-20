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

