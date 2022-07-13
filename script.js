const email = document.getElementById('email');
const senha = document.getElementById('password');
const botao = document.getElementById('buttonlogin');
const enviar = document.getElementById('submit-btn');
const checkBox = document.getElementById('agreement');


function validation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
botao.addEventListener('click', validation);


function confirmation(){
    if (enviar.hasAttribute('disabled') === true ){
        enviar.removeAttribute ('disabled');
    } else {
        enviar.setAttribute('disabled', 'disabled');
    }
}
checkBox.addEventListener('click', confirmation);
