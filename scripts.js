function enviarEndereco() {
    const numeroTelefone = "5586981185663"

    const inputAdress = document.getElementById("input-adress").value.trim()

    if (inputAdress === "") {
        alert("Por favor, insira um endereço para que possamos verificar se fazemos entrega nessa região.")

        return
    }

    const mensagemText = `Olá, fazem entrega nesse endereço: ${inputAdress}`

    const mensagemCodificada = encodeURIComponent(mensagemText)

    const urlWhatsapp = `https://wa.me/${numeroTelefone}?text=${mensagemCodificada}`

    window.open(urlWhatsapp, "_blank")
    
}