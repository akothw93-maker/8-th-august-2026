const module=document.getElementById("prayer module");
const form=document.getElementById("prayer form");
function ppenModal(){
if(!modal)return;
modal.style.display="flex";
document.body.classList.add(modal-open);
const firstField=document.getElementById("name");
if(firstField){
    setTimeout(()=>firstField.focus(),50{
},timeout);
}
}
function closeModal(){
if(!modal)return
modal.style.display="none"
document.body.classList.remove(modal-open)
}
if(modal){
window.onclick =(event){
    if(event.target === modal){
    closeModal();
    }
}
}