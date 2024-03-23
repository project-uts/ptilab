document.addEventListener('DOMContentLoaded', function() {
    const inputName = document.querySelector('.input-name input');
    const submitBtn = document.querySelector('.input-name button');

    submitBtn.addEventListener('click', function(event) {
        event.preventDefault(); 
        const enteredName = inputName.value.trim(); 

        if (enteredName !== '') {
            localStorage.setItem('userName', enteredName);
            window.location.href = './pages/main.html';
        } else {
            alert('Please enter your name.'); 
        }
    });
});
