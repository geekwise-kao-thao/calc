var calc_number_buttons;
var calc_operator_buttons;
var calc_body;
var answer_container;
var numbers_container;
var operators_container;
var input_element;

calc_number_buttons = [
    
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
    
];

calc_operator_buttons = [
    
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

input_element = document.createElement('input');
input_element.setAttribute('id','answer_container');

numbers_container = document.createElement('div');
numbers_container.setAttribute('id','numbers_container');

operators_container = document.createElement('div');
operators_container.setAttribute('id','operators_container');

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
    clear_data_button.textContent = 'AC';
    
    calc_body.appendChild(numbers_container);
    calc_body.appendChild(operators_container);
    
    equal_button.addEventListener('click',function(event){
        
        answer_container.value = eval(answer_container.value);
        
    });
    
    clear_data_button.addEventListener('click',function(event){
        
        answer_container.value = '';
        
    });
    
});

