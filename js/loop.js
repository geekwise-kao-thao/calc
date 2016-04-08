var card_flip = function(){
      this.classList.toggle('on');
      this.classList.toggle('off');
}

var create_images = function(){

  

        for(var i=1;i<=68;i++){
               
               
                var image_container = document.createElement('section');
                
                image_container.setAttribute('id','img_container_'+i);
                document.body.appendChild(image_container);
                
                var image = document.createElement('img');
                image.setAttribute('src','images/profile_photo_'+i+'.jpg');
                image.setAttribute('id', 'img_'+i);
                image.classList.add('on');
                
                image.addEventListener('click',function(event){
                      
                      if(this.getAttribute('class') === 'on'){
                              this.setAttribute('class','off');
                              this.parentElement.children[1].setAttribute('class','on');
                              
                      }else{
                              this.setAttribute('class','on');
                              this.parentElement.children[1].setAttribute('class','off');
                      }
                      
                                            event.preventDefault();

                      console.log(this);
                        
                });
                
                image_container.appendChild(image);
                
                var image_info = document.createElement('span');
                
                image_info.setAttribute('id','img_info_container_'+i);
                image_info.classList.add('off');
                
                
                image_info.addEventListener('click',function(event){
                        
                     if(this.getAttribute('class') === 'on'){
                              this.setAttribute('class','off');
                              this.parentElement.children[0].setAttribute('class','on');
                              
                      }else{
                              this.setAttribute('class','on');
                              this.parentElement.children[0].setAttribute('class','off');
                              
                      }
                           event.preventDefault();
                           
                      console.log(this);
                        
                });
                
                var image_info_github_link = document.createElement('a');
                var image_info_twitter_link = document.createElement('a');
                
                image_info_github_link.setAttribute('id','img_info_github_link_'+i);
                image_info_github_link.setAttribute('href','http://www.github.com/geekwise');
                image_info_github_link.textContent = 'github link '+i;
                
                image_info_twitter_link.setAttribute('id','img_info_twitter_link_'+i);
                image_info_twitter_link.setAttribute('href','http://www.twitter.com/climateamante');
                image_info_twitter_link.textContent = 'twitter link'+i;
                
                image_container.appendChild(image_info);
                image_info.appendChild(image_info_github_link);
                image_info.appendChild(image_info_twitter_link);
                
        };
        
}

document.addEventListener('DOMContentLoaded',function(event){

        create_images();
        
});