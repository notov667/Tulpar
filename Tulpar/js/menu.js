'use strick'


let isAuth = localStorage.getItem('isAuth');
let isAuthNoneActive = document.querySelectorAll('._noneAuth');
let isAuthActive = document.querySelectorAll('._auth');
function addIsAuth(link)
{
    link.classList.add('_isAuth');
    return link;
}
function removeIsAuth(link)
{
    link.classList.remove('_isAuth');
    return link;
}
function addScroll(element)
{
    element.classList.add('_scroll');
}
function removeScroll(element)
{
    element.classList.remove('_scroll');
}

if (isAuth === "1")
{
    for (let index = 0; index < 2; index++)
    {
        addIsAuth(isAuthNoneActive[index]);
        removeIsAuth(isAuthActive[index]);
    }
}
else
{
    for (let index = 0; index < 2; index++)
    {
        addIsAuth(isAuthActive[index]);
        removeIsAuth(isAuthNoneActive[index]);
    }
}

document.addEventListener('DOMContentLoaded', function(){

    let menuBtn = document.querySelector('.header_burger');
    let menu = document.querySelector('.header_menu');
    let body = document.querySelector('body');
    menuBtn.addEventListener('click', function(){
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
    });


});

window.addEventListener('storage', (e) => {
    isAuth = localStorage.getItem('isAuth');
    if (isAuth === "1")
    {
        for (let index = 0; index < 2; index++)
        {
            addIsAuth(isAuthNoneActive[index]);
            removeIsAuth(isAuthActive[index]);
        }
    }
    else
    {
        for (let index = 0; index < 2; index++)
        {
            addIsAuth(isAuthActive[index]);
            removeIsAuth(isAuthNoneActive[index]);
        }
    }
});

