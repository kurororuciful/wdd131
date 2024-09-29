//declarations
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

//add button
button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

//    trim
//    if (input.value.trim() !== '') {// 
//    **EACH TIME I ADD THE 'TRIM', THE PROGRAM IS NOT WORKING
            
        //create
        const li = document.createElement('li');
        const listText = document.createElement('span');
        const deleteButton = document.createElement('button');

        //populate
        li.appendChild(listText);
        listText.textContent = myItem;
        li.appendChild(deleteButton);
        deleteButton.textContent = '❌';
        list.appendChild(li);
    
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    
    });

    input.focus();
//    }
});