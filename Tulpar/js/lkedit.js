'use strick'
const formEdit = document.getElementById('edit_form');
let editformfile = document.getElementById('edit_photo');
let edit_name = document.getElementById('edit_name');
let edit_tel = document.getElementById('edit_tel');
let edit_about = document.getElementById('edit_about');

let old_password = document.querySelector('._old');
let new_password = document.querySelector('._new');

let idPerson = localStorage.getItem('whoIn');
let personForm = JSON.parse(localStorage.getItem(idPerson));

document.addEventListener('DOMContentLoaded', function(){
    
    edit_name.placeholder = personForm.name;
    edit_tel.placeholder = personForm.tel;
    edit_about.placeholder = personForm.about;

    editformfile.addEventListener('change', function(e){
        let src = URL.createObjectURL(e.target.files[0]);

        document.querySelector('._img').src = src;
    });
    
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

    function passwordTest(pass)
    {
        return /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(pass.value);
    }

    function checkForm(personForm)
    {
        if (editformfile.value !== '')
        {
            personForm.img = editformfile.value;
        }
        if (edit_name.value !== '')
        {
            personForm.name = edit_name.value;
        }
        if (edit_tel.value !== '')
        {
            personForm.tel = edit_tel.value;
        }
        if (edit_about.value !== '')
        {
            personForm.about = edit_about.value;
        }
    }
    function checkPassword()
    {
        error = 0;

        if (new_password.value !== '')
        {
            if (old_password.value === personForm.password)
            {
                if (passwordTest(new_password))
                {
                    personForm.password = new_password.value;
                }
                else
                {
                    formAddError(new_password);
                    error++;
                }
            }
            else
            {
                formAddError(old_password);
                error++;
            }
            
        }
        return error;
    }


    async function editForm(e){
        e.preventDefault();
        formRemoveError(new_password);
        formRemoveError(old_password);
        let error = checkPassword();
        console.log(error);
        if (error === 0)
        {
            console.log("hey");
            checkForm(personForm);
            localStorage.setItem(idPerson, JSON.stringify(personForm));
            window.open("lk.html", "_self");
        }

    }


    formEdit.addEventListener('submit', editForm);
});