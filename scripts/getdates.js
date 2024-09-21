// select the DOM elements for output
const year = document.querySelector("#year");

// use the date object
const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

document.getElementById("lastModified").textContent = new Date(document.lastModified).toLocaleString();