
var image_urls = new Array;
 
var add_images = function(number_of_images){
    
    var image;
    
    for(var i=0; i<number_of_images; i++){
    
    image = document.createElement('img');
    image_urls.push('images/profile_photo_' + (i+1) + '.jpg');
    image.setAttribute('src',image_urls[i]);
    image.setAttribute('id','img_'+i);
    image.style.transform = 'rotatey(0deg)';
    image.style.transition = '.5s';
    image.setAttribute('class','small');
    
    image.addEventListener('click',function(event){
        
        if(this.style.transform === 'rotateY(180deg)'){
            
            this.classList.toggle[68] = 'small';
            
            this.style.transform = 'rotatey(0deg)';
            image.style.transition = '.5s';
        }else{
            
            this.classList.toggle[68] = 'small';
            this.style.transform = 'rotatey(180deg)';
            image.style.transition = '.5s';
        };
        
        if(this.classList[0] === 'small'){
            this.setAttribute('class','large');
        }else{
            this.setAttribute('class','small');
        };
        
        
    });
    
    document.body.appendChild(image);
    
    };
};
 
document.addEventListener('DOMContentLoaded',function(event){
    
    add_images(68);
    
    console.log(Date.now());
    
});

