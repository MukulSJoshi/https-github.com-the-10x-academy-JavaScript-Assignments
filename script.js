let addtb = document.getElementById('addto');
let todoc = document.getElementById('tdcont');
let inp = document.getElementById('intodo');
addtb.addEventListener('click', function(){

    var para = document.createElement('p')
    para.innerText = inp.value;
    todoc.appendChild(para);
    inp.value = "";
    para.addEventListener('click', function(){
    })
    para.addEventListener('click', function(){
        todoc.removeChild(para);
    })
    
    
})