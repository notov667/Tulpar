
$(document).ready(function(){

    console.log("start");
    setInterval(changeimg, 5000);

});


let sbimg = ["jpeg/sbimg1.png","jpeg/sbimg2.jpg","jpeg/sbimg3.webp","jpeg/sbimg4.jpeg"];
let idofimg = 0;
let imgblock = document.getElementById('sb_image');
let points = $(".point");

function pointAddIn(input)
{
    $(input).addClass('_in');
}
function pointremoveIn(input)
{
    $(input).removeClass('_in');
    $(input).removeClass('_click');
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