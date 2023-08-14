let form =document.getElementById('addform');
let itemList =document.getElementById('items');

//form submit event
form.addEventListener('submit',addItem);

//add item
function addItem(e){
    e.preventDefault();

//get input value
let newItem=document.getElementById('item').value

//create new li element
let li =document.createElement('li');
//add a class
li.className='list-group-item';

//add text node with inputvalue
li.appendChild(document.createTextNode(newItem))

//add delete btn
let del =document.createElement('button')
//add class to the btn
del.className='btn2'
//append text node
del.appendChild(document.createTextNode('X'))

//appending to the list
li.appendChild(del)

//append li to list
itemList.appendChild(li)
}


//removing items
itemList.addEventListener('click',removeItem);

function removeItem(e){
    if(e.target.classList.contains('btn2')){
    let li =e.target.parentElement;
    itemList.removeChild(li);  
    }
}