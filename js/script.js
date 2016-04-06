
 
var image_urls = new Array;
 
var add_images = function(number_of_images,image_width){
    
    var image;
    
    for(var i=0; i<number_of_images; i++){
    
    image = document.createElement('img');
    image_urls.push('images/profile_photo_' + (i+1) + '.jpg');
    image.setAttribute('src',image_urls[i]);
    image.style.width = image_width;
    
    image.addEventListener('mouseover',function(){
        
        this.style.width = '50%';
        
    });
    
    image.addEventListener('mouseout',function(){
        
        this.style.width = image_width;
        
    });
    
    document.body.appendChild(image);
    
    };
};
 
document.addEventListener('DOMContentLoaded',function(event){
    
    add_images(68, ((100/68) + '%'));
    
    console.log(Date.now());
    
});

