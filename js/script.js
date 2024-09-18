const menuBotao = document.querySelector("[data-menu-botao]");
const menuLista = document.querySelector("[data-menu-lista]");
function clickMenu() {
  menuLista.classList.toggle("ativo");
}
if (menuBotao) {
  menuBotao.addEventListener("click", clickMenu);
}

const formLogin = document.querySelector("[data-form-login]");

function logando(event) {
  event.preventDefault();
  window.location = "perfil.html";
}
if (formLogin) {
  formLogin.addEventListener("submit", logando);
}

$("#tabs").tabs();

$(".tab-ul li").on("click",function(e){

  $(".tab-ul li").removeClass("selected");
  $(this).removeClass("selected");
  $(this).addClass("selected");

});

$( function() {
  $( "#button_env_ami" ).on( "click", function(event) {
    event.preventDefault();
    $( "#dialog" ).dialog({
      height: 200,
      width: 400
    });
  });
} );
