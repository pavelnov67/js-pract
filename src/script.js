

let checkForm = (event) => {
  event.preventDefault();
  let el = document.getElementById('main-form');
  let name = el.name.value;
  let pass = el.pass.value;
  let repass = el.repass.value;
  let state = el.state.value;

  let fail = "";

  if (name.length < 3)
    fail = "Слишком короткое имя";

  else if (name.length > 25)
    fail = "Слишком длинное имя";

  else if (pass.length < 3)
    fail = "Слишком короткий пароль";

  else if (pass != repass)
    fail = "Пароли не совпадают";

  else if (name == "" || pass == "" || repass == "" || state == "")
    fail = "Все поля должны быть заполнены";

  else if (pass.split('&').length > 1)
    fail = 'Не используйте &';

  if (fail != "") {
    document.getElementById('error').innerHTML = fail;
  }
  else {
    //      alert("Данные отправлены на сервер");
    //      window.location = 'https://gymkhana-cup.ru/'
  }
  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:9000/auth/register');
  var json = JSON.stringify({
    "email": "user@example.com",
    "password": pass,
    "is_active": true,
    "is_superuser": false,
    "is_verified": false,
    "login": name
  });
  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  xhr.send(json);
  xhr.onload = function () {
    alert(`Загружено: ${xhr.status} ${xhr.response}`);
  };

  xhr.onerror = function () {
    alert(`Ошибка: ${xhr.status} ${xhr.response}`);
  }
}
document.getElementById('main-form').addEventListener("submit", checkForm);
/* let id = setInterval (my_func, 1000);
 let counter = null;
 function my_func() {
  counter ++;
  console.log('counter: ' + counter);

  if(counter >= 10)
    clearInterval(id);
 }

 setTimeout(function(){
  console.log("U spent 3 sec");
 }, 3000);
*/
