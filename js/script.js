var http_request = new XMLHttpRequest;
http_request.open('GET','https://api.github.com/',false);
http_request.send(null);
http_request.response;
 
var github_data = JSON.parse(http_request.response);

github_data.emails_url

//for(x in github_data){
//    console.log(x);
//};

/*var person = {name:null};
person.name*/

http_request.open('GET', github_data.emojis, false);
http_request.send(null);

var github_emoji_data = JSON.parse(http_request.response);

github_emoji_data

for(image_url in github_emoji_data){
    
    var emoji = document.createElement('img');
    
    emoji.setAttribute('src', github_emoji_data[image_url])
    document.body.appendChild(emoji);
    
    console.log(github_emoji_data[image_url]);

};




//var github_response = http_request.response.slice(1,http_request)
//http_request.responseText.substring(1,this-1);


JSON.parse(http_request.responseText);

document.addEventListener('DOMContentLoaded',function(event){
    
    
});














