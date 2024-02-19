const $form= document.querySelector('#form');
const $buttonMailTo= document.querySelector('#mailto');
$form.addEventListener('submit', handleSubmit);

function handleSubmit(event){
    event.preventDefault();
    const form= new FormData(this);
    $buttonMailTo.setAttribute('href', `mailto:kevinmarquez2301@gmail.com?subject=Nombre: ${form.get('name')} Correo: ${form.get('email')}&body=${form.get('message')}`);
    $buttonMailTo.click();
}
