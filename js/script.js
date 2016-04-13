/*var http_request = new XMLHttpRequest;
http_request.open('GET','https://api.github.com',false);

http_request.send(null);

var github_data = JSON.parse(http_request.response);

var http_request = new XMLHttpRequest;
http_request.open('GET',github_data.emojis_url, false);
http_request.send(null);
console.log(http_request.responseText);

var github_emojis = JSON.parse(http_request.response);
 console.log(github_emojis);
 
var create_emojis = function(){
    keya=Object.keys(github_emojis);
    
    for(var i=0; i<Object.keys(github_emojis).length; i++){
    
    var image_container = document.createElement('img');
    image_container.setAttribute('id','emojis_'+i)
        console.log(github_emojis[keya[i]]);
    image_container.setAttribute('src',github_emojis[keya[i]]);
    document.body.appendChild(image_container);
    
    };
    
};




document.addEventListener('DOMContentLoaded',function(event){
    
    create_emojis();
    
});*/

var github_emojis;

var http_request = new XMLHttpRequest;
http_request.open('GET','https://api.gitub.com/emojis',false);
http_request.onreadystatechange = function(event){
    
    if(this.readyState === this.DONE && this.status === 200){
        
        //console.log(this.response);
        github_emojis = JSON.parse(this.response);
        console.log(github_emojis);
    };
    
};


var get_random_emoji = function(){
    
    var total_number_of_emojis = Object.keys(github_emojis).length;
    var randon_number = Math.round(Math.random()*total_number_of_emojis);
    
    var emoji_name = Object.keys(github_emojis)[randon_number];
    emoji_name = emoji_name.toString();
    
    var emoji_url = github_emojis[emoji_name];
    
    console.log(randon_number);
    
};


vaar get_emoji_urls = function(amount_to_get){
    
    //Object.keys(github_emojis).length;
    var total_number_of_emojis = Object.keys(github_emojis).length;
    for(var i=0; i<amount_to_get; i++);
    
    var emoji_name = Object.keys(github_emojis)[i];
    var emoji_url = github_emojis[emoji_name];
    
    emoji_name = emoji_name.toString();
    
    
    console.log(github_emojis[emoji_name);
    
    var image = document.createElement('img');
    var image_name = document.createElement('span');
    image_name.textContent = emoji_name;
    image.setAttribute('src',emoji_url);
    image.appendChild(image_name);
    
    document.body.appendChild(image);
    //document.body.appendChild(image_name);
    
    
    
};




var count = 0;

for(var keys in github_emojis);
if(github_emojis.hasOwnProperty(keys)) ++count;


document.addEventListener('DOMContentLoaded',function(event){
    
    http_request.send(null);
    get_emoji_urls(10);
    
});