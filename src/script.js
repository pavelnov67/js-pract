document.getElementById('main-form').addEventListener("submit", checkForm);

function checkForm(event) {
  event.preventDefault();
  let el = document.getElementById('main-form');
  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;

  let fail = "";

  if(name.length <3)
    fail = "Слишком короткое имя";

  else if(name.length >25)
    fail = "Слишком длинное имя";

  else if(pass.length <3)
    fail = "Слишком короткий пароль";

  else if(pass != repass)
    fail = "Пароли не совпадают";

  else  if(name == "" || pass == "" || repass == "" || state == "")
    fail = "Все поля должны быть заполнены";

  else if(pass.split('&').length > 1)
    fail = 'Не используйте &';

  if(fail != "") {
    document.getElementById('error').innerHTML = fail;
  }
    else {
      alert("Данные отправлены на сервер");
      window.location = 'https://gymkhana-cup.ru/'
    }
}
