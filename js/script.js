var calc_number_buttons;
var calc_operator_buttons;
var calc_body;
var answer_container;
var numbers_container;
var operators_container;
var input_element;
var image;

calc_number_buttons = [
    
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    0
    
];

calc_operator_buttons = [
    
    '*',
    '-',
    '+',
    '/'
    
];

calc_body = document.createElement('div');
calc_body.style.backgroundColor = '#ECEAEA';
calc_body.style.width = '400px';
calc_body.style.height = '500px';
calc_body.style.borderRadius = '10px';
calc_body.style.display = 'inline-block';
calc_body.style.boxShadow = '2px 2px 2px grey';

input_element = document.createElement('input');
input_element.setAttribute('id','answer_container');
// input max is not working
// input_element.setAttribute('max','10');
// input_element.setAttribute('type','number');

numbers_container = document.createElement('div');
numbers_container.setAttribute('id','numbers_container');

operators_container = document.createElement('div');
operators_container.setAttribute('id','operators_container');

image = document.createElement('img');
image.setAttribute('src','http://i.imgur.com/l72MAu7.png');
image.setAttribute('id','calc_image');

var create_numbers_element = function(element_type, element_id){
    
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    
    numbers_container.appendChild(element);
    
};

var create_operators_element = function(operator_element_type,operator_element_id){
    
    var operator_element = document.createElement(operator_element_type);
    operator_element.setAttribute('id',operator_element_id);
    
    operators_container.appendChild(operator_element);
    
};

document.addEventListener('DOMContentLoaded',function(event){
    
    document.body.appendChild(calc_body);
    calc_body.appendChild(input_element);
    calc_body.appendChild(numbers_container);
    calc_body.appendChild(operators_container);
    calc_body.appendChild(image);
    
    answer_container = document.getElementById('answer_container');
    
    for(var i=0; i<calc_number_buttons.length; i++){
        
        create_numbers_element('button','calc_number_button_'+i);
        
        var current_number_element = document.getElementById('calc_number_button_'+i);
        
        current_number_element.addEventListener('click',function(event){
            
            answer_container.value =  answer_container.value += this.textContent;
            
        });
        
        current_number_element.textContent = calc_number_buttons[i];
        
        numbers_container.appendChild(current_number_element);
        
    };
    
    for(var i=0; i<calc_operator_buttons.length; i++){
        
        create_operators_element('button','calc_operator_button_'+i);
        var current_operator_element = document.getElementById('calc_operator_button_'+i);
        
        current_operator_element.addEventListener('click',function(event){
            
            answer_container.value = answer_container.value += this.textContent;
            
        });
        
        current_operator_element.textContent = calc_operator_buttons[i];
        
        operators_container.appendChild(current_operator_element);
    };
   
    create_numbers_element('button','equal_button');
    create_numbers_element('button','clear_data_button');
    
    var equal_button = document.getElementById('equal_button');
    var clear_data_button = document.getElementById('clear_data_button');
    
    equal_button.textContent = '=';
    equal_button.style.backgroundColor = 'grey';
    clear_data_button.textContent = 'AC';
    clear_data_button.style.backgroundColor = 'orangered';
    
    calc_body.appendChild(numbers_container);
    calc_body.appendChild(operators_container);
    
    equal_button.addEventListener('click',function(event){
        
        answer_container.value = eval(answer_container.value);
        
    });
    
    clear_data_button.addEventListener('click',function(event){
        
        answer_container.value = '';
        
    });
    
});

