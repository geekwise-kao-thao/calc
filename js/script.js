

var create_images = function(){
    
    for(var i=1; i<=68; i++){
        
        var image_container = document.createElement('section');
        image_container.setAttribute('id','img_container_'+i);
        image_container.style.backgroundColor = 'yellow';
        image_container.style.width = '600px';
        image_container.style.height = 'auto';
        image_container.style.transform = 'rotateY(0deg)';
        image_container.style.transition = '1';
        
        image_container.addEventListener('click',function(){
            
            if(this.style.transform === 'rotateY(180deg)'){
                
                this.style.transform = 'rotateY(0deg)';
                this.style.transition = '1s';
                this.style.display = 'none';
                //this.div_tag.display = 'inline-block';
                
            }else{
                
                this.style.transform = 'rotateY(180deg)';
                this.style.transition = '1s';
                this.style.display = 'inline-block';
                //this.div_tag.style.display = 'none';
                
            };
            
        });
        
        
        var image = document.createElement('img');
        image.setAttribute('src','images/profile_photo_' + i + '.jpg');
        image.setAttribute('id','img_'+i);
        image.style.display = 'inline';
        
        var div_tag = document.createElement('div');
        div_tag.setAttribute('id','div_'+i);
        div_tag.style.width = '100%';
        div_tag.style.height = 'auto';
        div_tag.style.display = 'none';
        
        div_tag.addEventListener('click',function(){
            
            if(this.style.display === 'none'){
                
                this.style.display = 'inline-block';
                
            }else{
                this.style.display = 'none';
            };
            
        });
        
        var span_tag = document.createElement('span');
        span_tag.setAttribute('id','span_'+i);
        span_tag.textContent = 'Name'+i;
        span_tag.style.display = 'inline-block';
        span_tag.style.width = '100%';
        
        var github_link = document.createElement('a');
        github_link.setAttribute('href','github.com/geekwise'+i);
        github_link.setAttribute('id','github_link_'+i);
        github_link.textContent = 'github link'+i;
        
        var twitter_link = document.createElement('a');
        twitter_link.setAttribute('href','twitter.com/kausthoj'+i);
        twitter_link.setAttribute('id','twitter_link_'+i);
        twitter_link.textContent = 'twitter link'+i;
        
        document.body.appendChild(image_container);
        image_container.appendChild(image);
        image_container.appendChild(div_tag);
        div_tag.appendChild(span_tag);
        div_tag.appendChild(github_link);
        div_tag.appendChild(twitter_link);
        
    };
    
};



 
document.addEventListener('DOMContentLoaded',function(event){
    
    create_images(68);
    
    console.log(Date.now());
    
});














