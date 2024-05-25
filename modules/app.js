const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () =>{
        faq.classList.toggle("active");
    });
});

function mostrarMenu() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "src/Img/menu_white_36dp.svg";
    }else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "src/Img/close_white_36dp.svg";
    }
}
/*  codigo caso haja input de tel
document.getElementById('email').addEventListener('input', function (e) {
    let input = e.target.value;
    input = input.replace(/\D/g, '');
    if (input.length > 0) {
        input = '(' + input;
    }
    if (input.length > 3) {
        input = input.slice(0, 3) + ') ' + input.slice(3);
    }
    if (input.length > 10) {
        input = input.slice(0, 10) + '-' + input.slice(10, 14);
    }
    e.target.value = input.slice(0, 15);
});
*/

function enviarWhats() {
    var messageUsuario = document.getElementById("message").value;
    var nome = document.getElementById("name").value;
    var mensagem = `Olá, meu nome é ${nome}, gostaria de solicitar um serviço. A mensagem é a seguinte: "${messageUsuario}". Agradeço desde já pela atenção.`
    mensagem = encodeURIComponent(mensagem);
    var link = "https://wa.me/"
             + "/" + 5561995997277
             + "?text=" + mensagem;
    if (nome == "" || messageUsuario == "" || nome == null || messageUsuario == null){
        alert("Preencha todos os campos devidamente, obrigado.")
    }else {
        window.location.href = link;
    }
    
}
