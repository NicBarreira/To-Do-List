
document.addEventListener("DOMContentLoaded", function() {
    const email = document.getElementById('email');
    const gender = document.getElementById('gender');
    const errorMessage = document.getElementById('error-message');

    document.getElementById('Button').addEventListener('click', function(event) {
        event.preventDefault(); 

        const selectgender = gender.value;
        const emailValue = email.value;


        if (!emailValue) {
            errorMessage.textContent = 'Por favor, insira seu e-mail.'; 
            errorMessage.style.display = 'block'; // Exibe a mensagem
        } else if (selectgender === "null" || selectgender === "") {
            errorMessage.textContent = 'Por favor, escolha seu gênero.'; 
            errorMessage.style.display = 'block'; // Exibe a mensagem
        } else {
            window.location.href = "#"; 
        }
    });
});
