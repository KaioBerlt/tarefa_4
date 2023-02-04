let coracao = document.querySelector(".bi-arrow-through-heart-fill");
coracao.addEventListener("click", function (event) {
  if (event.target.nodeName === "I") {
    event.target.classList.toggle("red");
  }
});

//função quantidade

let decrementar = document.querySelector(".bi-cart-dash-fill");
let incrementar = document.querySelector(".bi-cart-plus-fill");
let quantproduto = document.querySelector(".quantproduto");
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
