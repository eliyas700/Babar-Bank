document.getElementById('log-in-btn').addEventListener('click', function (){
    //Getting User Email
    const emailField = document.getElementById('user-email');
    const userEmail= emailField.value;
    // Getting user Password
    const passwordField = document.getElementById('user-pass');
    const userPassword = passwordField.value;
    if (userEmail == 'bekarpola@hotel.com' && userPassword == 'loveyoubaba') {
        window.location.href='babar-hotel.html';
    } else {
        document.body.style.background= 'red';
        
    }
})