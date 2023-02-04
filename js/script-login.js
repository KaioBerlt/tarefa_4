let btnadd = document.querySelector("#addBotao");

btnadd.addEventListener("click", function () {
  let inputLogin = document.querySelector("#meuInput").value;
  let inputPass = document.querySelector("#meuInput1").value;
  if (inputLogin === "") {
    alert("Usuario Inválido");
  }
  if (inputPass === "") {
    alert("Campo Senha Obrigatório");
  }
  if (inputLogin != "" && inputPass != "") {
    //alert("Login Realizado")
    document.querySelector("#mensagemOk").insertAdjacentHTML(
      "afterend",
      ` <div class="card-teste">
            <span>Login Efetuado com Sucesso!</span>
            </div>
            `
    );

    let mensagem = document.querySelector(".card-teste");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }

  document.querySelector("#meuInput").value = "";
  document.querySelector("#meuInput1").value = "";
});
