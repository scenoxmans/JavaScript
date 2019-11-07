
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
        name.classList.add('error')
        messages.push('First name  field can not be empty*')
    }
    if (lastname.value === '' || lastname.value == null){
        lastname.classList.add('error')
        messages.push("Lastname field can not be empty*")
    }
    if (username.value === '' || username.value == null){
        username.classList.add('error')
        messages.push('Enter your username*')
    }
    if(email.value === '' || email.value == null){
        email.classList.add('error')
        messages.push('Enter your email*')
    }
    if (password.value.length <= 5){
        password.classList.add('error')
    messages.push ('Password must be longer than 6 characters*')
    }
    if (password.value != confirmpassword.value){
        confirmpassword.classList.add('error')
        messages.push ('Passwords do not match*')
    }
    if (adress.value == ""){
        adress.classList.add("error");
        messages.push ("Fill in your adress*"); 
    }
    if (city.value == "") {
        city.classList.add("error");
        messages.push ("Fill in your city*"); 
    }
    if (zip.value == "") {
        zip.classList.add("error");
        messages.push ("Fill in your zip*"); 
    }
    if (messages.length > 0){
        e.preventDefault()
        error.innerText = messages.join('\n')
    }
    let user = {
        Firstname : name.value,
        Lastname : lastname.value,
        Username : username.value,
        Email : email.value,
        Password : password.value,
        City : city.value,
        Zip : zip.value
    }
    console.log(user)
})
