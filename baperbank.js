document.getElementById('btn-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-id');
    const email = emailField.value;
    console.log(email);

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    if(email == 'user' && password == 'password'){
        window.location.href = 'bank.html'
    }
    else alert("put {  email = user} and {password = password} to log in")
})