let btnAdd = document.getElementById('btn');
btnAdd.addEventListener('click',loadFunction);
let display = document.getElementById('display');
let number1 = document.getElementById('number1');

let y = 0; 


function loadFunction(){
    let x = prompt("enter some text");
    if(x.length>=1){
        y = y+1;
    list.innerHTML += `<option value="${y}"> ${x}</option>` ;
    
    number1.innerHTML = y;
   

    }

}


// display content 
let content =  document.getElementById('btn1');
content.addEventListener('click',displayContent);

function displayContent(){
    display.style.visibility='visible';
}


// remove functionality

let remove = document.getElementById('btn2');
remove.addEventListener('click',removeList);

function removeList(){

    let getList = document.getElementById('list');
    if(getList.options.length>0){
   
    let value =getList.remove(getList.selectedIndex);
    alert('we are removing select dropdown list');
    y = y - 1;
    number1.innerHTML = y;
    console.log(getList.options.length);
    // console.log(value);
    }
    }


