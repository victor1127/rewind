function GetValue(){
    let userInput = document.getElementById("stringInput").value;
    let reversed = document.getElementById("reversedInput");
    
    let output = ReverseString(userInput);
    reversed.textContent = output;
}

function ReverseString(userInput){
    let output = "";
    for(let i = userInput.length - 1; i >= 0; i--)
    {
        output+= userInput[i];
    }

    return output;
}