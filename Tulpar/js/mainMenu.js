'use strick'


let mainimg = ["jpeg/mainimg.jpg", "jpeg/mainimg1.webp","jpeg/mainimg2.jpg","jpeg/mainimg3.jpg"];
let idOfImg = 0;
let imgblock = document.getElementById('main_image');

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

function changeimg()
{
    if (idOfImg > mainimg.length - 1)
    {
        idOfImg = 0;
    }
    imgblock.src = mainimg[idOfImg];
    idOfImg++;
}

document.addEventListener('DOMContentLoaded', function(){

    
    setInterval(changeimg, 5000);

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


    let menuBtn = document.querySelector('.header_burger');
    let menu = document.querySelector('.header_menu');
    let body = document.querySelector('body');
    let scrollElements = document.querySelectorAll('._enav');
    menuBtn.addEventListener('click', function(){
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
        body.classList.toggle('lock');
        
        if (window.scrollY < 25)
        {
            for (let index = 0; index < scrollElements.length; index++)
            {
                console.log(scrollElements[index]);
                scrollElements[index].classList.toggle('_scroll');
            }
            if (menu.classList.contains('active'))
            {
                document.querySelector('._logo').src = "jpeg/Logo2.svg";
            }
            else
            {
                document.querySelector('._logo').src = "jpeg/logo1.svg";
            }
        }
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

