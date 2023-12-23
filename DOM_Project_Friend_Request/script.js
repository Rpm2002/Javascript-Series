let isStatus=document.querySelector('h5')
let add=document.querySelector('#add')
let remove=document.querySelector('#remove')


    add.addEventListener('click',()=>{
        isStatus.style.color='green';
        isStatus.innerHTML='Friend'
    
    })    
    remove.addEventListener('click',()=>{
        
        isStatus.style.color='red';
        isStatus.innerHTML='Stranger'
        
})