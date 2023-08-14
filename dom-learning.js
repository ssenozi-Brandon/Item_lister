//console.log(document.all[10])
//console.dir(document);
//console.log(document.getElementById('header-title'))

//GETTING ELEMENT BY ID

//const headerTitle= document.getElementById('header-title');
//console.log(headerTitle);
//-code-headerTitle.textContent='Changes';

//i over wrote the text.content above with inner.text
//-code-headerTitle.innerText='Back to Item List'

//the inner.html creates an html element nested in the other
//-code-headerTitle.innerHTML="<h2> come one come all</h2>"

//while adding styles at a particular element
//for example this below ; we already have got it by id
//headerTitle.style, the ".style" calls the styling of the element
//then we put style.borderBottom 
// some one may think its wrong because in css we use border-bottom
//well in java script we use camelCase for those properties
//-code-headerTitle.style.borderBottom='3px solid black';

//let's checkout another example
//const header=document.getElementById('main-header')
//header.style.borderBottom='3px solid black'

//GET ELEMENTSBYCLASSNAME
//note:its writen in plural
//two examples below 
//const items =document.getElementsByClassName('list-group-item')
// first example 
//-code-console.log(items)
 //the above code will bring all the 5 items that have the class name
 
 //second example
 //-code-console.log(items[3]);
 //the above code will display only the item that has index 3

 // but also we can change the text and style
 //-code-items[1].textContent='good';
 //-code-items[1].style.fontWeight='bold';

//if we want to apply a grey background color to all
 //this below gives an error
 //-code-items.style.backgroundColor='grey'

// to fix the error we need a loop that loops through items
//   for(let i=0;i<items.length;i++){
//   items[i].style.backgroundColor='grey'
//   }

//we can aslo GET ELEMENTBY TAG NAME
//    const list =document.getElementsByTagName('li')
//    console.log(list)
//    console.log(list[2])
//    list[2].style.backgroundColor='grey'
//    for(let i=0; i<list.length;i++){
 //   list[i].style.backgroundColor='grey'
//     }

//QUER SELECTOR
//const  header =document.querySelector('#main-header')
//header.innerText="yoo"


//the code below works when we to change the value of our input
//-code-const submit =document.querySelector('input[type="submit"]')
//       submit.value="send"
 
// while using query selector is pics the first chld with the class name only
//-code- const item =document.querySelector('.list-group-item')
//       item.style.color="red"

//geting last item
//-code-  const lastchild =document.querySelector('.list-group-item:last-child')
//        lastchild.style.backgroundColor="red"

// geting items btn the first and last
//-code-   const seconditem=document.querySelector('.list-group-item:nth-child(3)')
//         seconditem.style.color="green"

//QUERY SELECTOR ALL//
//const titles=document.querySelectorAll('.title')
//console.log(titles)

// we can get the even and odd children
//-code-   const odd=document.querySelectorAll('li:nth-child(odd)')
//         const even=document.querySelectorAll('li:nth-child(even)')
//         const prime=document.querySelectorAll('li:nth-child(prime)')
//         for(let i=0;i<odd.length;i++){
//         odd[i].style.backgroundColor="grey"
//         even[i].style.backgroundColor="blue"
//         }


//travesing the node//

//const itemList= document.querySelector('#items')
//parent node
//console.log(itemList.parentNode)
//itemList.parentNode.style.backgroundColor = "blue"
//console.log(itemList.parentNode.parentNode)

//parent element
//console.log(itemList.parentElement)
//itemList.parentElement.style.backgroundColor = "blue"
//console.log(itemList.parentElement.parentElement)

//child nodes
//console.log(itemList.childNodes)

//console.log(itemList.children)
//console.log(itemList.children[2])

//firstChild
//console.log(itemList.firstChild)
//console.log(itemList.firstElementChild)


//last child
//console.log(itemList.lastChild)
//console.log(itemList.lastElementChild)

//nextSibling
//console.log(itemList.nextSibling)
//console.log(itemList.nextElementSibling)

//previousSibling
///console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling)

//Creating Elements 
//const newDiv =document.createElement('div')
//adding className
//newDiv.className="Container 2"
//adding Id
//newDiv.id="container flex"


//adding text 
//const newDivContent=document.createTextNode("Hello user")
//adding the text to the div
//newDiv.appendChild(newDivContent)
//adding it to the page
//const container =document.querySelector('header .container')
//const h1 =document.querySelector('header h1')
//console.log(newDiv)
//container.insertBefore(newDiv, h1)

//eventListener
// let button = document.getElementById('button').addEventListener('click',function(e){
//     document.getElementById('header-title').style.backgroundColor="blue"
//     document.getElementById("main").style.backgroundColor ="cyan"
//     console.log("clicked")
//     console.log(e)
//     console.log(e.target)
//     console.log(e.target.id)
//     console.log(e.clientX)
// })

// let button =document.getElementById('button');
// button.addEventListener('mouseup',function(e){
//     console.log('event type:' +e.type)
// })

// let button =document.getElementById('button');
// let box =document.getElementById('box')

// //button.addEventListener('click',runEvent);
// //button.addEventListener('mousedown',runEvent);
// //button.addEventListener('dblclick',runEvent);

// box.addEventListener('mouseenter',runEvent)
// box.addEventListener('mouseover',runEvent)
// box.addEventListener('mouseout',runEvent)
// box.addEventListener('mouseleave',runEvent)
// box.addEventListener('mousemove',runEvent)

// function runEvent(e){
//     console.log('event type:'+e.type)
// //document.getElementById('main').style.backgroundColor ="blue"
//  box.style.backgroundColor="rgb("+e.offsetX+","+e.offsetY+",40)"
// }

//let itemInput =document.querySelector('input[type="text"]');
//let form =document.querySelector('form')

//itemInput.addEventListener('keydown',runEvent)
//itemInput.addEventListener('keyup',runEvent)
//itemInput.addEventListener('keypress',runEvent)
//itemInput.addEventListener('focus',runEvent)
//itemInput.addEventListener('blur',runEvent)
//form.addEventListener('submit',runEvent)

//function runEvent(e){
//  e.preventDefault();
  //  console.log(" event type:" +e.type)
//}
