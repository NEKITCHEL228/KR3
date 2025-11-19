const button = document.getElementById('diary-courses-button');

console.log(button);

function addRecord(){

    

    const record = document.createElement('p');
    let input = document.createElement('input');
    let acceptButton = document.createElement('button');
    acceptButton.classList.add('accept-button')
    const parentInput = document.getElementById('diary-courses-div-input');

    button.disabled = true;

    if (parentInput){
        parentInput.append(input);
        parentInput.append(acceptButton);
    }

    acceptButton.addEventListener('click', () => )
}

button.addEventListener('click', () => addRecord());