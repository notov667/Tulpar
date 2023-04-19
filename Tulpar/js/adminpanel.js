'use stick'

let getForm = document.getElementById('admin_form');
let formId = document.getElementById('admin_id');

let ids = parseInt(localStorage.getItem('Ids'));
let deletedID = JSON.parse(localStorage.getItem('deletedID'));

let person_login = document.getElementById('person_login');
let person_email = document.getElementById('person_email');
let person_password = document.getElementById('person_password');

let new_login = document.getElementById('new_login');
let new_email = document.getElementById('new_email');
let new_password = document.getElementById('new_password');

let delete_account = document.getElementById('delete_account');

//login validation
function loginTest(input)
{
  return /^[0-9a-zA-Z_-]{3,16}$/.test(input.value);
}
//email validation
function emailTest(input)
{
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
}
//password validation
function passwordTest(input)
{
  return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(input.value);
}

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

async function setInputForm(id)
{
    if (id < ids && id > -1)
    {
        for (let j = 0; j < deletedID.length; j++)
        {
            if (id !== deletedID[j])
            {
                let personForm = JSON.parse(localStorage.getItem(id));
                person_login.placeholder = personForm.login;
                person_email.placeholder = personForm.email;
                person_password.placeholder = personForm.password;
            }
            else
            {
                formId.parentElement.classList.add('_error');
                person_login.placeholder = "error(404)";
                person_email.placeholder = "error(404)";
                person_password.placeholder = "error(404)";
            }
        }
    }
    else
    {
        formId.parentElement.classList.add('_error');
        person_login.placeholder = "error(404)";
        person_email.placeholder = "error(404)";
        person_password.placeholder = "error(404)";
    }
}

function checkInfo(personForm)
{
    let error = 0;

    formRemoveError(new_login);
    formRemoveError(new_email);
    formRemoveError(new_password);
    if (new_login.value !== '')
    {
        if (loginTest(new_login))
        {
            personForm.login = new_login.value;
        }
        else
        {
            console.log("log");
            formAddError(new_login);
            error++;
        }
    }
    else if (new_email.value !== '')
    {
        console.log("email log");
        if (emailTest(new_email))
        {
            personForm.email = new_email.value;
        }
        else
        {
            console.log("log1");
            formAddError(new_email);
            error++;
        }
    }
    else if (new_password.value !== '')
    {
        if (passwordTest(new_password))
        {
            personForm.password = new_password.value;
        }
        else
        {
            console.log("log2");
            formAddError(new_password);
            error++;
        }
    }
        
    return error;
}

function changeInfo(e)
{
    e.preventDefault();
    const id = parseInt(formId.value);
    if (id < ids && id > -1)
    {
        let personForm = JSON.parse(localStorage.getItem(id));
        let error = checkInfo(personForm);
        if (error === 0)
        {
            localStorage.setItem(id, JSON.stringify(personForm));
            window.open("adminpanel.html", "_self");
        }
    }
}
function deleteAccount()
{
    const id = parseInt(formId.value);
    if (id < ids && id > 0)
    {
        localStorage.removeItem(id);
        let deletedID =JSON.parse(localStorage.getItem('deletedID'));
        deletedID.push(id);
        localStorage.setItem('deletedID', JSON.stringify(deletedID));
        window.open("adminpanel.html", "_self");
    }
}

document.addEventListener('DOMContentLoaded', function(){
    

    formId.addEventListener('input', () => {
        const id = parseInt(formId.value);
        formId.parentElement.classList.remove('_error');
        setInputForm(id);
    });
    getForm.addEventListener('submit', changeInfo);
    delete_account.addEventListener('click', deleteAccount);
});