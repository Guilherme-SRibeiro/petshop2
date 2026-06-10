const dataInput = document.getElementById("data");

const hoje = new Date().toISOString().split("T")[0];
dataInput.min = hoje;

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", () => {

    let valor = telefone.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    telefone.value = valor;
});

document
.getElementById("formulario")
.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Agendamento realizado com sucesso!");

    this.reset();
});