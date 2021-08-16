document.getElementById('login').addEventListener('click', function () {
    const email = document.getElementById('user_email').value;
    const password = document.getElementById('user_password').value;
    if (email == 'nannu22@gmail.com' && password == 'getin') {
        window.location.href = 'banking.html';
    }
});