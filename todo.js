let add = document.querySelector('input')

let copy;
let input = document.querySelector('input')

let list = document.querySelector('.LIST>ul')
let arrtode = new Array;
let storageitems;
if (localStorage.getItem(1) !== null) {
    arrtode = JSON.parse(localStorage.getItem(1))
    storageitems = JSON.parse(localStorage.getItem(1))
    storageitems.forEach(e => {
        additem(e)
    })
}
clear.addEventListener('click', () => {
    let result = confirm('Do You Want To Process?')
    if (result) {
        localStorage.clear()
        list.innerHTML = ''
    }
})

input.addEventListener('keypress',
    function (e) {
        if (e.key == 'Enter') {
            let inputtxt = add.value
            let presenttodo = JSON.parse(localStorage.getItem(1))
            console.log(presenttodo, presenttodo == null)
            if (presenttodo == null) {
                additem(inputtxt)
                arrtode.push(inputtxt)
                localStorage.setItem(1, JSON.stringify(arrtode))
            }
            else {
                if (!presenttodo.includes(inputtxt.trim())) {
                    additem(inputtxt)
                    arrtode.push(inputtxt)

                    localStorage.setItem(1, JSON.stringify(arrtode))
                }
                else {
                    alert('Item Alredy Exists!')

                }
            }
        }
    }

)
function additem(value) {

    let listitem = document.createElement('li')
    listitem.classList.add('todo')
    listitem.innerHTML = `<p>${value}</p><span class='todoinputs Cut' >&#10060; </span>`;
    listitem.querySelector('.Cut').addEventListener('click', (e) => {

        deleteitem(e)
    })
    list.appendChild(listitem)
    add.value = ''
}
let deleteitem = ((e) => {
    console.log(e, 'helo')
    let deltext = e.target.parentElement.querySelector('p').innerHTML;
    let newarr = new Array;
    let oldarr = JSON.parse(localStorage.getItem(1))
    newarr = oldarr.filter((v) => v !== deltext)
    localStorage.setItem(1, JSON.stringify(newarr))
    e.target.parentElement.remove();
})





