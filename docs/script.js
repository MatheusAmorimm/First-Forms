const form = document.querySelector(`#form`);
const username = document.querySelector(`#username`);
const email = document.querySelector(`#email`);
const password = document.querySelector(`#password`);
const confirmPassword = document.querySelector(`#confirm_password`);
const container = document.querySelector(`.container`);
const congratulations = document.querySelector(`.congratulations`);
const mensagem = document.querySelector(`.mensagem`);
const button = document.querySelector(`#voltar`);


form.addEventListener(`submit`, (evento) => {
    evento.preventDefault();
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;
    
    if( usernameValue === ``){
        setErrorFor(username, `O nome de usuário é obrigatório!`);
    } else{
        setSuccessFor(username);
    }

    if(emailValue === ``){
        setErrorFor(email, `O email é obrigatório!`);
    } else if(!checkEmail(emailValue)){
        setErrorFor(email, `Digite um email válido!`);
    } else{
        setSuccessFor(email);
    }

    if(passwordValue === ``){
        setErrorFor(password, `A senha é obrigatória!`);
    } else if(passwordValue.length < 7 ){
        setErrorFor(password, `A senha precisa ter no mínimo 7 caracteres.`)
    } else{
        setSuccessFor(password);
    }

    if(confirmPasswordValue === ``){
        setErrorFor(confirmPassword, `Por favor, confirme sua senha!`);
    } else if(confirmPasswordValue !== passwordValue){
        setErrorFor(confirmPassword, `As senhas não coincidem!`);
    } else{
        setSuccessFor(confirmPassword);
    }

    checkForm();
}


const setSuccessFor = (input) =>{
    const formControl = input.parentElement;
    formControl.className = 'formcontrol success';
}

const setErrorFor = (input, message) =>{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = 'formcontrol error';
}

const checkEmail = (email) =>{
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


const checkForm = ()=>{
    const formcontrols = document.querySelectorAll(`.formcontrol`);
    const emailValue = email.value;
    const formisValid = [...formcontrols].every((formcontrol)=>{
        return(formcontrol.className === `formcontrol success` );
    });

    if(formisValid){
        console.log('Deu certo');
        container.classList.add(`hiden`);
        congratulations.classList.remove(`hiden`);

        mensagem.innerText = `Foi enviado um email de verificação ao email ${emailValue}`
    }
    
}


voltar.addEventListener(`click`, (evento)=>{
    congratulations.classList.add(`hiden`);
    container.classList.remove(`hiden`);
})