'use strick'
window.addEventListener('storage', (e) => {
    idNumber = localStorage.getItem('Ids');
    deletedID = JSON.parse(localStorage.getItem('deletedID'));
});
document.addEventListener('DOMContentLoaded', function(){
    let idNumber = parseInt(localStorage.getItem('Ids'));
    let deletedID = JSON.parse(localStorage.getItem('deletedID'));
    
    
    const loginForm = document.getElementById('login');
    loginForm.addEventListener('submit', loginFormSend);


    async function loginFormSend(e){
        e.preventDefault();
        let loginFormLogin = document.querySelector('._login');
        let loginFormPassword = document.querySelector('._password');

        for (let index = 0; index < idNumber; index++)
        {
            for (let j = 0; j < deletedID.length; j++)
            {
                if (index !== deletedID[j])
                {
                    let authForm = JSON.parse(localStorage.getItem(index));
                    formRemoveError(loginFormLogin);
                    formRemoveError(loginFormPassword);
                    if (loginFormLogin.value === authForm.login && loginFormPassword.value === authForm.password)
                    {
                        let id = index;
                        localStorage.setItem('whoIn', id);
                        localStorage.setItem('isAuth', 1);
                        window.open("index.html", "_self");
                        alert("Добро пожаловать, " + authForm.name);
                        break;
                    }
                    else
                    {
                        if (loginFormLogin.value === authForm.login && loginFormPassword.value !== authForm.password)
                        {
                            console.log("eto log");
                            localStorage.setItem('whoIn', null);
                            formAddError(loginFormPassword);
                            loginFormPassword.value = '';
                            break;
                        } 
                    }
                }
            }
        }
    }

    // function formValidate(form)
    // {

    //     let formReq = document.querySelectorAll('._req');
    //     for (let index = 0; index < formReq.length; index++)
    //     {
    //     const input = formReq[index];
    //     formRemoveError(input);

    //     if (input.classList.contains('_login'))
    //     {

    //     }
    //     else if (input.classList.contains('_password'))
    //     {

    //     }
    // }

    function formAddError(input)
    {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input)
    {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }
});
