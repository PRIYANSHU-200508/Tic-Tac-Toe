let input = document.getElementById("#inputuBox");
let button = document.querySelectorAll("button")

let string = "";
let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventlistener("click",(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(String);
            input.value = string;
        }
        string += e.target.innerHTML;
        input.value = string;
    })
})