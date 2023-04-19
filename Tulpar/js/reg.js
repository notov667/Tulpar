'use strick'
document.addEventListener('DOMContentLoaded', function(){

  let numId = localStorage.getItem('Ids');
  let deletedID = JSON.parse(localStorage.getItem('deletedID'));

  let formData = {};
  let formReq = document.querySelectorAll('._req');
  let formLogin;
  let formEmail;
  let formPassword;
  let personImg = "jpeg/personimg.png";
  const form = document.getElementById('reg');
  form.addEventListener('submit', formSend);

  async function formSend(e)
  {
    e.preventDefault();

    let error = formValidate(form);
    

    if (error === 0)
    {
      formData = {
        login: formLogin,
        email: formEmail,
        name: formLogin,
        tel: "unknown",
        about: "Новый пользователь платформы Tulpar предназначеной для публикации и поиска продажы автомобилей в казахстане.",
        img: personImg,
        password: formPassword
      }
      for (let j = 0; j < formReq.length; j++)
      {
        const formInput = formReq[j];
        formInput.value = '';
      }
      localStorage.setItem(numId, JSON.stringify(formData));
      localStorage.setItem('whoIn', numId);
      numId++;
      localStorage.setItem('Ids', numId);

      
      localStorage.setItem('isAuth', 1);
      alert("Добро пожаловать, " + formData.name);
      window.open("index.html", "_self");
    }
    else
    {

    }
  }


    
  function formValidate(form)
  {
    let error = 0;

    //let formReq = document.querySelectorAll('._req');
    for (let index = 0; index < formReq.length; index++)
    {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_login'))
      {
        if (loginTest(input))
        {
          formAddError(input);
          input.value = '';
          error++;
        }
        else if (repeatTest(input))
        {
          formAddRepeating(input);
          input.value = '';
          error++;
        }
        else
        {
          formLogin = input.value;
        }
      }
      else if (input.classList.contains('_email'))
      {
        if (emailTest(input))
        {
          formAddError(input);
          input.value = '';
          error++;
        }
        else if (repeatTest(input))
        {
          formAddRepeating(input);
          input.value = '';
          error++;
        }
        else
        {
          formEmail = input.value;
        }
      }
      else if (input.classList.contains('_password'))
      {
        if (passwordTest(input))
        {
          formAddError(input);
          input.value = '';
          error++;
        }
        else
        {
          formPassword = input.value;
        }
      }
      else
      {
        if (input.value === "")
        {
          formAddError(input);
          error++;
        }
      }

    }

    return error;
  }


  function formAddError(input)
  {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
  }
  function formAddRepeating(input)
  {
    input.parentElement.classList.add('_repeating');
    input.classList.add('_repeating');
  }
  function formRemoveError(input)
  {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
    input.parentElement.classList.remove('_repeating');
    input.classList.remove('_repeating');
  }


  //login and email repeating test
  function repeatTest(input)
  {
    for (let index = 0; index < numId; index++)
    {
      for (let j = 0; j < deletedID.length; j++)
      {
        if (index !== deletedID[j])
        {
          let objForm = JSON.parse(localStorage.getItem(index));
          if (input.value === objForm.login || input.value === objForm.email)
          {
            return true
          }
        }
      }
    }
    return false;
  }


  //login validation
  function loginTest(input)
  {
    return !/^[0-9a-zA-Z_-]{3,16}$/.test(input.value);
  }
  //email validation
  function emailTest(input)
  {
    return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
  }
  //password validation
  function passwordTest(input)
  {
    return !/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/.test(input.value);
  }
});



