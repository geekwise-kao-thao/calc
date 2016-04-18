var calc_buttons;
var answer_container;
var calc_body;

calc_buttons = [
    
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0,
    '+',
    '-',
    '*',
    '/'
    
];

calc_body = document.createElement('div');
calc_body.style.backgroundColor = 'coral';
calc_body.style.width = '500px';
calc_body.style.height = '600px';
calc_body.style.borderRadius = '10px';

var create_element = function(element_type, element_id){
    
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    
    calc_body.appendChild(element);
    
};

document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(calc_body);
    
    create_element('input','answer_container');
    answer_container = document.getElementById('answer_container');
    
    for(var i=0; i<calc_buttons.length; i++){
        
        create_element('button','calc_button_'+i);
        
        var current_element = document.getElementById('calc_button_'+i);
        
        
        current_element.addEventListener('click',function(event){
            
            answer_container.value =  answer_container.value += this.textContent;
            
        });
        
        current_element.textContent = calc_buttons[i];
        current_element.style.backgroundColor = 'yellow';
        current_element.style.width = '60px';
        current_element.style.height = '60px';
        current_element.style.fontSize = '3rem';
        current_element.style.color = 'purple';
        current_element.style.display ='inline-block';
        current_element.style.margin = '2px';
        
    };
   
    create_element('button','equal_button');
    create_element('button','clear_data_button');
    
    var equal_button = document.getElementById('equal_button');
    var clear_data_button = document.getElementById('clear_data_button');
    
    equal_button.textContent = '=';
    clear_data_button.textContent = 'AC';
    
    equal_button.addEventListener('click',function(event){
        
        answer_container.value = eval(answer_container.value);
        
    });
    
    clear_data_button.addEventListener('click',function(event){
        
        answer_container.value = '';
        
    });
    
});

