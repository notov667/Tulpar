'use stick'
let sbimg = ["jpeg/sbimg1.png","jpeg/sbimg2.jpg","jpeg/sbimg3.webp","jpeg/sbimg4.jpeg"];
let idofimg = 0;
let imgblock = document.getElementById('sb_image');
let points = document.querySelectorAll('.point');

function pointAddIn(input)
{
    input.classList.add('_in');
}
function pointremoveIn(input)
{
    input.classList.remove('_in');
    input.classList.remove('_click');
}

function changeimg()
{
    if (idofimg > sbimg.length - 1)
    {
        idofimg = 0;
    }
    imgblock.src = sbimg[idofimg];
    for (index = 0; index < points.length; index++)
    {
        pointremoveIn(points[index]);
    }
    pointAddIn(points[idofimg]);
    idofimg++;
}
document.addEventListener('DOMContentLoaded', function(){

    setInterval(changeimg, 5000);

});