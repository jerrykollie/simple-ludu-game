

// global variable
// const output = document.getElementById('result');

// const num = 1;
// if(num === 1){
//     console.log("You got one");
//     output.innerHTML = "You got 🎲";
// }else if(num === 2){
//     console.log("You got two")
//     output.innerHTML = "You got 🎲🎲";
// }else if(num === 3){
//     console.log("You got Three")
//     output.innerHTML = "You got 🎲🎲🎲";
// }else{
//     console.log("You did not roll the dice")
//     output.innerHTML = "You did not roll the dice";
// }


















const form = document.getElementById('form');
const input = document.getElementById('input');
const result = document.getElementById('result');

// const input = 3;
form.addEventListener('submit', e => {
    // stop form from submiting
    e.preventDefault();

    // convert input value to number
const inputValue = parseInt(input.value)

    if(isNaN(inputValue)){
        alert("Please Enter a valid number between 1 & 6")
    }else{
        if(inputValue == 1){
            result.innerHTML = 'You got one'+ '🎲';
            console.log(inputValue, 'You got one');
              result.style.color = 'blue'
            }else if(inputValue == 2){
                result.innerHTML = 'You got two' + '🎲🎲';
                result.style.color = 'blue'
                console.log(inputValue,'You got two');
            }else if(inputValue == 3){
                result.innerHTML = 'You got three'+ '🎲🎲🎲';
                result.style.color = 'blue'
                console.log(inputValue,'You got three');
            }else if(inputValue == 4){
                result.innerHTML = 'You got four' + '🎲🎲🎲🎲';
                result.style.color = 'blue'
                console.log(inputValue,'You got four');
            }else if(inputValue ==5){
                result.innerHTML = 'You got five'+ '🎲🎲🎲🎲🎲';
                result.style.color = 'blue'
                console.log(inputValue,'You got five');
            }else if(inputValue == 6){
                result.innerHTML = 'You got six' + '🎲🎲🎲🎲🎲🎲';
                result.style.color = 'blue'
            console.log(inputValue,'You got six');
        }else{
            console.log(inputValue,'You did not roll the dice');
            result.innerHTML = 'You did not roll the dice' + '❌😛😜😝';
            result.style.color = 'red'
        }
        input.value = ''
    }
})









