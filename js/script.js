/*var button;
var input_box;

var change_font_size = function(font_size_amount){
    
    if(button.style.fontSize === '100px'){
        
        button.style.fontSize = '10px';
        button.style.backgroundColor = 'yellow';
        document.body.backgroundColor = 'pink';
        
    }else{
        
        button.style.fontSize = '100px';
        button.style.backgroundColor = 'coral';
        document.body.backgroundColor = 'pink';
    };
    
};

var create_body_element = function(element_name){
    
    var element = document.createElement('p');
    element.textContent = 'what';
    element.style.backgroundColor = 'white';
    
    document.body.appendChild(element);
    
    element.addEventListener('mouseover',function(event){
        
        if(element.style.backgroundColor === 'white'){
            
            element.style.backgroundColor = 'black';
            
        }else if(element.style.backgroundColor === "black"){
            
            element.style.backgroundColor = 'red';
            
        }else{
            element.style.backgroundColor = 'white';
        };
        
    });
    
};
*/


/*

document.addEventListener('DOMContentLoaded',function(event){
    
    button = document.getElementById('big_button');
    button.style.fontSize = '100px';
    
    button.addEventListener('click',function(event){
        
        change_font_size();
    });
    
    input_box = document.createElement('input');
    input_box.placeholder = 'input data then press enter';
    input_box.style.fontSize = '15px';
    
    
    document.body.appendChild(input_box);
    
    input_box.addEventListener('keydown',function(event){
        
        
    if(event.keyCode === 13){
        
        this.value = null;
        
        create_body_element();
        
        };
        
    });
    
    
    
    
});

*/


//// below is new exercise for yearbook
// 



var photo_container;

var image_urls = [
    
    
//urls goes here
//url1,
//url2,
//url3
    
    
];


var add_images = function(amount_of_images){
    
    /*var image = document.createElement('img');
    image.setAttribute('src',image_urls[0]);
    return image;*/
    
    for(var i=0; i<image_urls.length; i++){
        
        var image = document.createElement('img');
    image.setAttribute('src',image_urls[0]);
    image.style.width = 'calc(100%/' + image_urls.length')';
    image.style.display = 'inline';
    image.setAttribute('id','image_'+i); //this id's each image
    
    image.addEventListener('mouseover',function(event){
        
        this.style.opacity = Math.random();
        this.style.transition = '.3';
        if(this.style.opacity < .5){
            this.style.opacity = '.03';
        };
        
    });
    
    
    document.body.appendChild(image);
    return image;
        
    };
    
};

var fresno_high = School;



document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild( add_images());
    
    
    
    
    
});