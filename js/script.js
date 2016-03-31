var div_tag;
var ul_tag;
var li_tag;

    
    div_tag = document.createElement('div');
    ul_tag = document.createElement('ul');
    ul_tag.style.backgroundColor = 'blue';
    li_tag = document.createElement('li');
    
    


document.addEventListener('DOMContentLoaded',function(event){
    
    console.log(event);
    
    document.body.appendChild(div_tag);
    div_tag.appendChild(ul_tag);
    
    for(var i = 0; i < 3; i++){
        var li_tag = document.createElement('li');
        li_tag.innerHTML = i;
        ul_tag.appendChild(li_tag);
        li_tag.textContent = 'time well wasted';
        
        
        
    };
    
   
    
});
