document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var mensagem = document.getElementById("mensagem").value;
    document.getElementById("mensagemEnviada").innerText = mensagem;
    document.getElementById("balaoMensagem").style.display = "block";
    document.getElementById("contatoForm").reset();
});
