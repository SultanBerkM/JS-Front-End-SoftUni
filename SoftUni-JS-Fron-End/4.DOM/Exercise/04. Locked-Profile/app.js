function lockedProfile() {  
    let buttons = Array.from(document.querySelectorAll(".profile button"));
    let extraInf = Array.from(document.querySelectorAll(".profile div"));
    btnObj={};
    for (let index = 0; index < buttons.length; index++) {
        btnObj[index] = buttons[index];
    }
   
    let keys = Object.keys(btnObj);
    buttons.forEach((b) => b.addEventListener('click', () => {
       let result = keys.find(key => btnObj[key] === b);
       
       if(extraInf[result].style.display !== 'block'){
        extraInf[result].style.display = 'block';
       }
       else{
        extraInf[result].style.display = 'none';
       }
        
        
    }))
    
    
    
}