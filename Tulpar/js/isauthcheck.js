'use strick'

document.addEventListener('DOMContentLoaded', function(){
    let isAuth = localStorage.getItem('isAuth');

    window.addEventListener('storage', function(e){
        isAuth = localStorage.getItem('isAuth');
        if (isAuth === '0')
        {
            window.open("auth.html", "_self");
        }
    });

    if (isAuth === '0')
    {
        console.log("u log");
        window.open("auth.html", "_self");
    } 
});