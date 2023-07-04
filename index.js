const myMessage = document.querySelector('.myMessage');
//console.log(myMessage);
const inputBox = document.querySelector('.theInputValue');
const fruitList = document.querySelector(".fruits");



//myMessage.innerText = 'This is a message in the DOM!'



const theMessageButton = document.querySelector('.theMessageButton');
theMessageButton.addEventListener('click', function() {
    if (inputBox.value.trim().length > 0) {
        myMessage.innerText = inputBox.value;
     }
});
myMessage.addEventListener('click', function() {
    myMessage.classList.toggle('myMessage')
})

function theFruit(){
    const fruits = ['Apples', 'Pears', 'Oranges', 'Grapes', 'Bananas'];

    for(let i=0;i<fruits.length;i++){
        // get fruits from the list
        const fruit = fruits[i];
        
        // create a new li element
        const li = document.createElement('li');
        li.innerText = fruit;
        fruitList.appendChild(li);
     }
}
