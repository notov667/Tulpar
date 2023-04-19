'use strick'
let scrollElements = document.querySelectorAll('._enav');
document.querySelector('._logo').src = "jpeg/logo1.svg";

function addScroll(element)
{
    element.classList.add('_scroll');
}
function removeScroll(element)
{
    element.classList.remove('_scroll');
}

document.addEventListener('DOMContentLoaded', function(){
    if (window.scrollY > 25)
    {
        document.querySelector('._logo').src = "jpeg/Logo2.svg";
        for (let index = 0; index < scrollElements.length; index++)
        {
            removeScroll(scrollElements[index]);
        }
    }
    else
    {
        document.querySelector('._logo').src = "jpeg/logo1.svg";
        for (let index = 0; index < scrollElements.length; index++)
        {
            addScroll(scrollElements[index]);
        }
    }
    window.addEventListener('scroll', function(e){
        if (window.scrollY > 25)
        {
            document.querySelector('._logo').src = "jpeg/Logo2.svg";
            for (let index = 0; index < scrollElements.length; index++)
            {
                removeScroll(scrollElements[index]);
            }
        }
        else
        {
            document.querySelector('._logo').src = "jpeg/logo1.svg";
            for (let index = 0; index < scrollElements.length; index++)
            {
                addScroll(scrollElements[index]);
            }
        }
    });

});

