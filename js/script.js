var section_tag;
var display_box;
var number_buttons_div;
var plus_minus_div;
var plus_button;
var minus_button;
var equal_button;


    section_tag = document.createElement('section')
    section_tag.style.backgroundColor = 'grey';
    section_tag.style.width = '300px';
    section_tag.style.height = '400px';
    section_tag.style.borderRadius = '5px';
    section_tag.style.display = 'inline-block';
    section_tag.style.marginTop = '5rem';
    
    display_box = document.createElement('div');
    display_box.setAttribute('id','display_box');
    
    number_buttons_div = document.createElement('div');
    number_buttons_div.setAttribute('id','numbers_div');
    
    plus_minus_div = document.createElement('div');
    plus_minus_div.setAttribute('id', 'plus_and_minus_div');
    
    plus_button = document.createElement('button');
    plus_button = document.createElement('button');
    plus_button.style.width = '90%';
    plus_button.style.height = '40%';
    plus_button.textContent = '+';
    plus_button.style.fontSize = '2.5rem';
    plus_button.style.borderRadius = '5px';
    
    minus_button = document.createElement('button');
    minus_button = document.createElement('button');
    minus_button.style.width = '90%';
    minus_button.style.height = '40%';
    minus_button.textContent = '-';
    minus_button.style.fontSize = '2.5rem';
    minus_button.style.borderRadius = '5px';
    
    equal_button = document.createElement('button');
    equal_button = document.createElement('button');
    equal_button.style.width = '80%';
    equal_button.style.height = '50px';
    equal_button.textContent = '=';
    equal_button.style.fontSize = '2.5rem';
    equal_button.style.borderRadius = '5px';
    
    plus_button.addEventListener('click',function(event){
                
                var plus_sign = document.createElement('span');
                plus_sign.textContent = '+';
                display_box.appendChild(plus_sign);
                
    });
    
    minus_button.addEventListener('click',function(event){
                
                var minus_sign = document.createElement('span');
                minus_sign.textContent = '-';
                display_box.appendChild(minus_sign);
                
    });
    
    // equal_button.addEventListener('click',function(event){
                
    //             var equal_sign = document.createElement('span');
    //             equal_sign.textContent = '=';
    //             display_box.appendChild(equal_sign);
                
    // });

    var create_number_buttons = function(amount_of_number_buttons){
        
        var number_buttons;
        
        for(var i=1; i<=amount_of_number_buttons; i++){
            number_buttons = document.createElement('button');
            number_buttons.setAttribute('id','number_'+i)
            number_buttons.textContent = i;
            number_buttons.style.width = '45%';
            number_buttons.style.height = '40%';
            number_buttons.style.fontSize = '2.5rem';
            number_buttons.style.borderRadius = '5px';
            
            number_buttons.addEventListener('click',function(event){
                
                var numbers = document.createElement('span');
                numbers.textContent = this.innerHTML;
                display_box.appendChild(numbers);
                
            });
            
            number_buttons_div.appendChild(number_buttons);
        };
        
        equal_button.addEventListener('click',function(event){
                
                var equal_sign = document.createElement('span');
                equal_sign.textContent = '=';
                display_box.appendChild(equal_sign);
                
    });
        
    };
    
document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(section_tag);
    section_tag.appendChild(display_box);
    section_tag.appendChild(number_buttons_div);
    section_tag.appendChild(plus_minus_div);
    section_tag.appendChild(equal_button);
    plus_minus_div.appendChild(plus_button);
    plus_minus_div.appendChild(minus_button);
    
    create_number_buttons(4);
    
});