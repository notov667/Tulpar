'use stick'
document.addEventListener('DOMContentLoaded', function(){
    let idPerson = localStorage.getItem('whoIn');
    let person = JSON.parse(localStorage.getItem(idPerson));

    let adminPanelbtn = document.querySelector('._admin');
    adminPanelbtn.classList.add('_noneAdmin');

    let logoutbtn = document.getElementById('logout_btn');

    if (idPerson !== 'null')
    {
        document.getElementById('person_name').textContent = person.name;
        document.getElementById('person_login').textContent = person.login;
        document.getElementById('person_email').textContent = person.email;
        document.getElementById('person_tel').textContent = person.tel;
        document.getElementById('person_about').textContent = person.about;
        document.getElementById('person_img').src = person.img;
    }
    if (idPerson === '0')
    {
        adminPanelbtn.classList.remove('_noneAdmin');
    }
    logoutbtn.addEventListener('click', function(){
        window.open("index.html", "_self");
        localStorage.setItem('whoIn', null);
        localStorage.setItem('isAuth', 0);
    });
});