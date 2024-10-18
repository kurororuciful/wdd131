// Initial Declarations
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

// Declaring Array
let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
  });

// Change Button Click Functionality
button.addEventListener("click", () => {
  if (input.value != "") {  // make sure the input is not empty
    displayList(input.value); // call the function that outputs the submitted chapter
    chaptersArray.push(input.value);  // add the chapter to the array
    setChapterList(); // update the localStorage with the new array
    input.value = ""; // clear the input
    input.focus(); // set the focus back to the input
  }
});

let li = document.createElement("li");
let deleteButton = document.createElement("button");
li.textContent = item; // note the use of the displayList parameter 'item'
deleteButton.textContent = "❌";
deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
li.appendChild(deleteButton);
list.appendChild(li);

deleteButton.addEventListener("click", () {
    list.removeChild(li);
    deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
    input.focus(); // set the focus back to the input
});

// JSON Stringify
function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

// JASON Parse
function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

chapter = chapter.slice(0, chapter.length - 1); // this slices off the last character

chaptersArray = chaptersArray.filter((item) => item !== chapter);

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

//populate
li.appendChild(listText);








/*
//    trim
//     if (input.value.trim() !== "") {// 
//    **EACH TIME I ADD THE 'TRIM', THE PROGRAM IS NOT WORKING
            
    //create
    const li = document.createElement("li");
    const listText = document.createElement("span");
    const deleteButton = document.createElement("button");

    //populate
    li.appendChild(listText);
    listText.textContent = myItem;
    li.appendChild(deleteButton);
    deleteButton.textContent = "❌";
    list.appendChild(li);

    deleteButton.addEventListener("click", () => {
        list.removeChild(li);
    
    });

    input.focus();
//    }
*/
