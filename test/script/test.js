//declarations
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
    const myItem = input.value;
    input.value = '';

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
});