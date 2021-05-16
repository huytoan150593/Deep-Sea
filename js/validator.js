function Validator(options){
    var formElement = document.querySelector(options.form)
    
    if (formElement){
        options.rules.forEach(function(a){
            var inputElement = formElement.querySelector(a.selector)
        
            if(inputElement){

                inputElement.onblur = function(){
                    var errorMessage = a.test(inputElement.value);
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    if(errorMessage){
                        errorElement.innerText = errorMessage;
                        inputElement.parentElement.classList.add("invalid");
                    }else{
                        errorElement.innerText = " ";
                        inputElement.parentElement.classList.remove("invalid");
                    }
                }

                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                    errorElement.innerText = " ";
                    inputElement.parentElement.classList.remove("invalid");
                }

            }
        })
    }
};

Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: function(value){
            return value ? undefined : "Please fill this form";
        }
    };
};

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: function(value){
            var e = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            return e.test(value) ? undefined : "Please fill this form"
        }
    };
};

Validator.minLength = function(selector, min){
    return {
        selector: selector,
        test: function(value){
            return value.length >= min ? undefined : "not enough strong"
        }
    }
}