var card_flip = function(){
      this.classList.toggle('on');
      this.classList.toggle('off');
}

var main_container;
var main_container_h1_tag;
var main_container_div;

                main_container = document.createElement('div');
                main_container.setAttribute('id','the_main_container');
                main_container.style.display = 'inline-block';
                
                main_container_h1_tag = document.createElement('h1');
                main_container_h1_tag.setAttribute('id','image_title');
                main_container_h1_tag.textContent = 'Meet our mentor community.';
                
                main_container_div = document.createElement('div');
                main_container_div.setAttribute('id','the_main_container_div');
                main_container_div.style.display = 'inline-block'; 

var create_images = function(){

        for(var i=1;i<=68;i++){
               
                var image_container = document.createElement('section');
                image_container.setAttribute('id','img_container_'+i);
                image_container.style.transform = 'rotateY(0deg)';
                image_container.style.transition = '1s';
                
                image_container.addEventListener('click',function(event) {
                    if(this.style.transform === 'rotateY(180deg)'){
                        this.style.transform = 'rotateY(0deg)';
                        this.style.transition = '1s';
                    }else{
                        this.style.transform = 'rotateY(180deg)';
                        this.style.transition = '1s';
                    };
                })
                
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
                
                var image_info_name = document.createElement('p');
                image_info_name.setAttribute('id','name_'+i);
                image_info_name.textContent = 'Name_'+i;
                
                var image_info_title = document.createElement('p');
                image_info_title.setAttribute('id','title_'+i);
                image_info_title.textContent = 'Web Developer_'+i;
                
                var image_info_github_link = document.createElement('a');
                var image_info_twitter_link = document.createElement('a');
                
                image_info_github_link.setAttribute('id','img_info_github_link_'+i);
                image_info_github_link.setAttribute('href','http://www.github.com/geekwise');
                
                var twitter_icon = document.createElement('i');
                twitter_icon.setAttribute('id','twitter_'+i);
                twitter_icon.setAttribute('class','fa fa-twitter');
                
                image_info_twitter_link.setAttribute('id','img_info_twitter_link_'+i);
                image_info_twitter_link.setAttribute('href','http://www.twitter.com/climateamante');
                
                var github_icon = document.createElement('i');
                github_icon.setAttribute('id','github_'+i);
                github_icon.setAttribute('class','fa fa-link');
                
                document.body.appendChild(main_container);
                main_container.appendChild(main_container_h1_tag);
                main_container.appendChild(main_container_div);
                main_container_div.appendChild(image_container);
                image_container.appendChild(image_info);
                image_info.appendChild(image_info_name);
                image_info.appendChild(image_info_title);
                image_info.appendChild(image_info_github_link);
                image_info.appendChild(image_info_twitter_link);
                image_info_twitter_link.appendChild(twitter_icon);
                image_info_github_link.appendChild(github_icon);

                
        };
        
}

document.addEventListener('DOMContentLoaded',function(event){

        create_images();
        
});