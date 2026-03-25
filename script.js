function adicionarTarefa() {
  let input = document.getElementById("tarefa");
  let texto = input.value;

  if (texto === "") return;

  let li = document.createElement("li");
  li.textContent = texto;

  li.onclick = function() {
    this.style.textDecoration = "line-through";
  };

  document.getElementById("lista").appendChild(li);

  input.value = "";
}
