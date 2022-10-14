function number(){
    let num1 = prompt('Please enter 1st number','');
    let num2 = prompt('Please enter 2nd number', '');
    
    if (num1>num2){
        alert (`Value ${num1} is greater than value ${num2}`);
    }
    else if (num1<num2){
        alert (`Value ${num2} is greater than value ${num1}`);
    }
    else if (num1==num2){
        alert (`${num1} equal ${num2}`);
    }
    else {
        alert ('Please enter numeric values only');
    }
}

