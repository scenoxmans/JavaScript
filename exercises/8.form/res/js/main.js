
let form = document.getElementById("myform");
let name = document.getElementById('name');
let lastname = document.getElementById('lastname');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');
let confirmpassword = document.getElementById('confirmpassword');
let adress = document.getElementById('adress');
let city = document.getElementById('city');
let zip = document.getElementById('zip');
let submitbtn = document.getElementById('submitbtn');
let error = document.getElementById('error');

form.addEventListener('submit', (e) =>{
    let messages = []
    if (name.value === '' || name.value == null){
        messages.push('Name is required')
    }
    if (password.value.length <= 6){
    messages.push ('Password must be longer than 6 characters')
    }
    if (password.value != confirmpassword.value){
        messages.push ('Passwords do not match')
    }
    if (messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join(', ')
    }
})


