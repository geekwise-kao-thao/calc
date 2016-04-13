var github_emojis;

var http_request = new XMLHttpRequest();

http_request.open('GET','https://api.github.com/emojis',false);

http_request.onreadystatechange = function(){
    
    if(this.readyState === this.DONE && this.status === 200){
        
        github_emojis = JSON.parse(http_request.response);
        
    };
    
};

var get_random_emoji = function(){
    
    var total_number_of_emojis = Object.keys(github_emojis).length;
    var random_number = Math.round(Math.random()*total_number_of_emojis);
    var emoji_name = Object.keys(github_emojis)[random_number];
    var emoji_urls = github_emojis[emoji_name];
    
};

var get_emoji_urls = function (amount_of_urls){
    
    for(var i=0; i<amount_of_urls; i++){
        
        var emoji_name = Object.keys(github_emojis)[i];
        var emoji_url = github_emojis[emoji_name];
        
        var image = document.createElement('img');
        document.body.appendChild(image);
        image.addEventListener('click',function(event){
            
            this.setAttribute('src',get_emoji_urls());
            this.style.opacity = '.6';
        });
        
        
    };
    
};


document.addEventListener('DOMContentLoaded',function(event){
    
    http_request.send(null);
    get_emoji_urls(10);
    
});