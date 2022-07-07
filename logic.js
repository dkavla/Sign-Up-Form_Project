
let checkPassword = () => {
    let password = document.getElementById('user_password').value;
    let confirmPswd = document.getElementById('confirm_password').value;
    if (password === confirmPswd)
    {
        return true;
    }
    return false;
}

let phoneIsValid = (number) => {
    const re = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/i;
    if (number.match(re))
    {
        return true;
    }
    return false;
}

const submitBtn = document.querySelector('.create-account');
const errorMsg = document.querySelector('.error-msg');

submitBtn.addEventListener('click', () => {
    let validPasswords = checkPassword();

    if (!validPasswords) {
        errorMsg.innerHTML = "*Passwords Don't Match";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "15px";
        document.getElementById('user_password').style.border = "2px solid red";
        document.getElementById('confirm_password').style.border = "2px solid red";
    } else {
        errorMsg.innerHTML = "";
        document.getElementById('user_password').style.border = "2px solid green";
        document.getElementById('confirm_password').style.border = "2px solid green";
    }
})

document.getElementById('confirm_password').addEventListener("input", () => {
    let validPasswords = checkPassword();

    if (!validPasswords) {
        errorMsg.innerHTML = "*Passwords Don't Match";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "15px";
        document.getElementById('user_password').style.border = "2px solid red";
        document.getElementById('confirm_password').style.border = "2px solid red";
    } else {
        errorMsg.innerHTML = "";
        document.getElementById('user_password').style.border = "2px solid green";
        document.getElementById('confirm_password').style.border = "2px solid green";
    }
})


const phone = document.getElementById('phone_number');
phone.addEventListener("input", () => {
    let result = phoneIsValid(phone.value);

    if(!result)
    {
        phone.style.border = "2px solid red";
    } else {
        phone.style.border = "2px solid green";
    }
})




















