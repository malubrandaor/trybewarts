const email = document.getElementById('email');
const senha = document.getElementById('password');
const botao = document.getElementById('buttonlogin')



function validation (){
    if(email.value === 'tryber@tester.com' && senha.value === '123456') {
        alert('Olá, Tryber')
    } else {
        alert('Email ou senha inválidos')
    }
}
botao.addEventListener('click', validation)