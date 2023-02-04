//favoritar
let coracao = document.querySelector(".bi-arrow-through-heart-fill");
coracao.addEventListener("click", function (event) {
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("red");
  }
});

/*quantidade*/
//função quantidade

let decrementar = document.querySelector(".bi-cart-dash-fill");
let incrementar = document.querySelector(".bi-cart-plus-fill");
let quantproduto = document.querySelector(".quantFinal");
let quantidadeProduto = parseInt(quantproduto.textContent);

//incrementar
incrementar.addEventListener("click", function () {
  quantidadeProduto++;
  quantproduto.innerHTML = quantidadeProduto;
});

console.log(incrementar);
console.log(decrementar);
console.log(quantproduto);

//decrementar
decrementar.addEventListener("click", function () {
  if (quantidadeProduto <= 1) {
    alert("A quantidade não pode ser menor que 1.");
  } else {
    quantidadeProduto--;
    quantproduto.innerHTML = quantidadeProduto;
  }
});

/*excluir produto*/

let modal = document.querySelectorAll(".prod-carrinho");

let excluir = document.querySelectorAll("#excluir");

for (let i = 0; i < excluir.length; i++) {
  for (let i = 0; i < modal.length; i++) {
    excluir[i].addEventListener("click", function (event) {
      if (!event.target.classList.contains("#excluir")) {
        modal[i].remove();
      }
    });
  }
}

//Cupom

let btnCupom = document.querySelector("#btnCupom");

btnCupom.addEventListener("click", function () {
  let inputCupom = document.querySelector("#cupomId").value;
  if (inputCupom === "") {
    alert("Cupom Inválido");
  } else {
    document.querySelector(".cupom").insertAdjacentHTML(
      "afterend",
      ` <div class="card-cupom">
            <span>Cupom Inserido com Sucesso!</span>
            </div>
            `
    );

    let mensagem = document.querySelector(".card-cupom");
    setTimeout(() => {
      mensagem.style.display = "none";
    }, 3000);
  }

  document.querySelector("#cupomId").value = "";
});
