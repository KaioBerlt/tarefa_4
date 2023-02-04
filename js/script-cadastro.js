let btncad = document.querySelector("#btncad");

btncad.addEventListener("click", function () {
  let nome = document.querySelector("#nome").value;
  let email = document.querySelector("#email").value;
  let senha = document.querySelector("#senha").value;
  let tel = document.querySelector("#tel").value;
  let cep = document.querySelector("#cep").value;
  if (nome === "") {
    alert("Nome Inválido");
  }
  if (email === "") {
    alert("E-mail Inválido");
  }
  if (senha === "") {
    alert("Campo Senha Obrigatório");
  }
  if (tel === "") {
    alert("Telefone Inválido");
  }
  if (cep === "") {
    alert("Endereço Inválido");
  }
  if (numero === "") {
    alert("Numero da Residência Inválido");
  } else {
    document.querySelector("#mensagemOk").insertAdjacentHTML(
      "afterend",
      ` <div class="card-teste">
            <span>Cadastro Realizado Com Sucesso!</span>
            </div>
            `
    );
    let mensagem = document.querySelector(".card-teste");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }

  document.querySelector("#nome").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#senha").value = "";
  document.querySelector("#tel").value = "";
  document.querySelector("#endereco").value = "";
});

function consultacep() {
  let cep = document.querySelector("#cep").value;
   if (cep.length != 8){
        alert("CEP inválido, Digite os 8 digitos.");
        return;
    }
  let url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url).then(function (response) {
    response.json().then(function (data) {
      // console.log(data);
      mostrarEndereco(data);
    });
  });
}

function mostrarEndereco(dados) {
  let ruax = document.querySelector(".rua");
  ruax.innerHTML = dados.logradouro;

  let cidadex = document.querySelector(".cidade");
  cidadex.innerHTML = dados.localidade;

  let ufx = document.querySelector(".uf");
  ufx.innerHTML = dados.uf;

  let bairrox = document.querySelector(".bairro");
  bairrox.innerHTML = dados.bairro;

  if(dados.erro){
    alert("CEP Não Encontrado")
  }
}
