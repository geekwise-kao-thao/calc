
 
var image_urls = new Array;
 
var add_images = function(number_of_images){
    
    var image;
    
    for(var i=0; i<number_of_images; i++){
    
    image = document.createElement('img');
    image_urls.push('../images/profile_photo_' + (i+1) + '.jpg');
    image.setAttribute('src',image_urls[i]);
    
    document.body.appendChild(image);
    
    };
};
 
document.addEventListener('DOMContentLoaded',function(event){
    
    add_images(68);
    
});

