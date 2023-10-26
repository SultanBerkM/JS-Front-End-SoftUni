function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    let ext = document.getElementById('extra');

    if(ext.style.display !== 'block'){
        ext.style.display = 'block';
        btn.textContent = 'Less';
    }
    else{
        ext.style.display = 'none';
        btn.textContent = 'More';
    }
    
   

 
}