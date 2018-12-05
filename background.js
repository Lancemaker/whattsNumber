document.addEventListener("click", function(e){
    content=e.toElement.innerHTML;
    telefone = content.replace(/\D/g, '');
    if((telefone.length>=11)&&(telefone.length<=13)){        
        if(telefone.charAt(0)=='0'){
            telefone = telefone.substr(1);            
        }
        telefone = 'https://api.whatsapp.com/send?phone=55'+telefone; 
        console.log(telefone)
        window.location.href = telefone       
    }
    console.log(telefone)    
});