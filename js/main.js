let email = document.getElementById("email");
let messageUser = document.getElementById("message").text;
const submitButton = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    
    if(email.value === "" || messageUser.value === "") { // Check if inputfields are empty
        alert("Input required");
    
    }
})
    




