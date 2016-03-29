var ul_container;
var current_element;




var createTags = function(){
    
    ul_container = document.getElementsByTagName('ul')[0];
    ul_container.textContent = 'nav - updated';
    
    ul_container.addEventListener('mouseover',function(event) {
        this.classList.toggle('menu_off');
        console.log(this);
    ul_container.classList.toggle('menu_off');
        
        
        
    })
    
    for(var i=0; i<5; i++){
        
        current_element = document.createElement('i');
        current_element.textContent = i;
        current_element.style.fontSize = '30px';
        current_element.style.backgroundColor = 'black';
        current_element.addEventListener('mouseover', function(event){
            this.style.backgroundColor = 'lightSeaGreen'    
            
            
        })
        
    };
    
    
    
    
};






document.addEventListener('DOMContentLoaded',function(event){
    
    console.log('dom browser loaded');
    
});