let string = "";
let buttons = document.querySelectorAll('.btn');
let input = document.querySelector('.input');
let backspace = document.querySelector('.backspace')
input.addEventListener( 'input', (e)=>{
    string = e.target.value;
}
)
backspace.addEventListener( 'click' , ()=>{
    string = string.slice(0,string.length-1);
    document.querySelector('input').value= string;

})

Array.from(buttons).forEach( (button)=>{
    button.addEventListener( 'click', (e)=>{
        if( e.target.innerHTML == '='){
            string= eval(string);
            document.querySelector('input').value= string;
        }
       else if(e.target.innerHTML == 'C'){
            string= "";
            document.querySelector('input').value= string;
        }
        else {
            string= string+ e.target.innerHTML;
            document.querySelector('input').value= string;
        }
    }
    )
}
)

