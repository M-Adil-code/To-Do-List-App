var add=document.querySelector('input')

var copy;

var input=document.querySelector('input')

var list=document.querySelector('.LIST')
var arrtode=new Array;
var storageitems;
if(localStorage.getItem(1)!==null){
   arrtode=JSON.parse(localStorage.getItem(1))
   storageitems=JSON.parse(localStorage.getItem(1))
   storageitems.forEach(e=>{
    additem(e)
})
}



input.addEventListener('keypress',
    function(e){
        

       if(e.key=='Enter'){
          let inputtxt=add.value
          additem(inputtxt)
          arrtode.push(inputtxt)
         
          console.log(arrtode,JSON.stringify(arrtode))
          localStorage.setItem(1,JSON.stringify(arrtode))
         
    
         
       }
        
    }
  
)
function additem(value){
   
    let listitem=document.createElement('div')
    listitem.innerHTML=`<div class="todo"><p>${value}</p><input type="checkbox" name="" class="todoinputs"></div>`;
    list.appendChild(listitem)
    add.value=''  
}


function deleteitem(){
    let txt;
    let newarr=new Array;
    if(list)
        
    document.querySelectorAll('.todo>input').forEach( (e)=>{
         if(e.checked){ 
             console.log(arrtode)  
             txt=e.previousElementSibling.innerHTML
            
             console.log(txt)
             newarr=arrtode.filter((t)=>{
                return t!==txt;
                
             })
             arrtode=newarr
             localStorage.setItem(1,JSON.stringify(arrtode))
             console.log(newarr)
            
             e.parentElement.remove()
            
        }
        else{
            
        }
    }
)
}
list.addEventListener("click",deleteitem)





