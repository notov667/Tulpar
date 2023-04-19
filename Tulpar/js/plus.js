'use strick'
let addForm = document.getElementById('add_ad');
let personId = localStorage.getItem('whoIn');
document.addEventListener('DOMContentLoaded', function(){
    addForm.addEventListener('submit', addSend);

    async function addSend(e)
    {
        e.preventDefault();
        console.log(addForm);

    }
});