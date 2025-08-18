let copy;
let input = document.querySelector('input')

let list = document.querySelector('.LIST>ul')
let arrtode = new Array;
let storageitems;


// Showing localStorage Todoes
if (localStorage.getItem(1) !== null || localStorage.getItem(1)==[]) {
    arrtode = JSON.parse(localStorage.getItem(1))
    storageitems = JSON.parse(localStorage.getItem(1))
    storageitems.forEach(e => {
        additem(e)
    })
}
// clear all item logic
clear.addEventListener('click', () => {
    let result = confirm('Do You Want To Process?')
    if (result) {
        localStorage.clear()
        list.innerHTML = ''
        arrtode=[]
    }
})

// Send item to additem() function and filter also

input.addEventListener('keypress',
    function (e) {
        if (e.key == 'Enter') {
            filterItem(input.value)
            input.value=''
            
        }
    }

)

let filterItem=((prompt)=>{
    console.log("At Filter Function : ",prompt)

    // Already Stored item in localStorage
    let presenttodo = JSON.parse(localStorage.getItem(1))
    // dublicatechecker(prompt)

    if(dublicatechecker(prompt) ){
        console.log(dublicatechecker(prompt))
    }else{
        alert('item Already exists')
    }
    if(prompt.trim()==''){
        alert('Please Enter any Task')
    }

    //item addition
    if(dublicatechecker(prompt)&& prompt.trim()!==''){
        itemsendtolocalstorage(prompt)
        additem(prompt)
    }

    


})
let dublicatechecker=((prompt)=>{
    let  presenttodo = JSON.parse(localStorage.getItem(1))
    console.log('Already Stored item in localStorage',presenttodo)
    
    if (presenttodo !== null) {
         if(presenttodo.includes(prompt.trim())){
            return false;
         }else{
            return true
         }
            
    }else{
        return true;
    }       
})

let itemsendtolocalstorage=((item)=>{
    arrtode.push(item)
    localStorage.setItem(1, JSON.stringify(arrtode))
})

function additem(value) {

    let listitem = document.createElement('li')
    listitem.classList.add('todo')
    listitem.innerHTML = `<p>${value}</p><span>  <span class="check">&check;</span>&nbsp;<span class='Cut' >&#10060;</span></span>`;
    listitem.querySelector('.Cut').addEventListener('click', (e) => {

        deleteitem(e)
    })
     listitem.addEventListener('click', (e) => {

        doneitem(e)
    })

    list.appendChild(listitem)
    add.value = ''
}
let deleteitem = ((e) => {
    e.stopPropagation()
    console.log(e, 'helo')
    console.log(e.target.parentElement.parentElement)
    let deltext = e.target.parentElement.parentElement.querySelector('p').innerHTML;
    let newarr = new Array;
    let oldarr = JSON.parse(localStorage.getItem(1))
    newarr = oldarr.filter((v) => v !== deltext)
    localStorage.setItem(1, JSON.stringify(newarr))
    e.target.parentElement.parentElement.remove();
})
let doneitem=((e)=>{
    console.log(e.target)
    e.target.querySelector('.check').classList.toggle('check-show')
    e.target.querySelector('p').classList.toggle('done-task')
   
})





