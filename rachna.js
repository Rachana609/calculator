let input = document.getElementById('inputBox');  // Fixed: getElementById
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {  // Fixed: e.target
            string = eval(string);  // Evaluates the string as a math expression
            input.value = string;
        } else if (e.target.innerHTML == "C") {  // Optional: Clear button to reset input
            string = "";
            input.value = string;

        } 
        else if (e.target.innerHTML== 'AC'){
            string = "";
            input.value=string;
        }
        else if(e.target.innerHTML =='DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
            else {
            string += e.target.innerHTML;  // Concatenate button's value to the string
            input.value = string;
        }
        
        
    });
});
