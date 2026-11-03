const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


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
