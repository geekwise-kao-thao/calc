var create_input_tag;
var read_input_tag;
var update_input_tag;
var delete_input_tag;

var create_element = function(elemnet_name){
    
    var element = document.createElement(element_name);
    
};

var attach_element = function(element_child){
    
    document.appendChild(element_child);
    
};


document.addEventListener('DOMContentLoaded',function(event){
    
    create_input_tag = create_element('input');
    read_input_tag = create_element('input');
    update_input_tag = create_element('input');
    delete_input_tag = create_element('input');
    
    create_input_tag.placeholder = 'create text goes here';
    read_input_tag.placeholder = 'read text goes here';
    update_input_tag.placeholder = 'update text goes here';
    delete_input_tag.placeholder = 'delete text goes here';
    
    attach_element(create_input_tag);
    attach_element(read_input_tag);
    attach_element(update_input_tag);
    attach_element(delete_input_tag);
    
    create_input_tag.addEventListener('keydown',function(event){
        
        if(event.keyCode === 13){
            
            var new_element = document.createElement(this.value);
            new_element.setAttribute('id', this.value);
            new_element.textContent = 'this.value';
            
            attach_element(new_element);
            
        };
        
    };)
        
    update_input_tag.addEventListener('keydown',function(event){
        
        if(event.keyCode === 13){
            
            var element_to_update = document.getElementById(this.value);
            element_to_update.textContent = Date
            
        };
        
        
    };)
    
    
};)

