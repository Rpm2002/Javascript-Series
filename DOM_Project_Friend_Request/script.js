let isStatus=document.querySelector('h5')
let btn=document.querySelector('#add')

let check=0

btn.addEventListener('click',()=>{
    if(check==0)
    {
        isStatus.style.color='green';
        isStatus.innerHTML='Friend'
        check=1;
    }
    else
    {
        isStatus.style.color='red';
        isStatus.innerHTML='Stranger'
        check=0;
    }
    
})