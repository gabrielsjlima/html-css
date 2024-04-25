const btn = document.querySelector(".btn")
const imagem = document.querySelector(".imagem")
const respostas = document.querySelector(".respostas")
const container = document.getElementById("container")

btn.addEventListener("click", function(){
    
    if(imagem.getAttribute("src") == "assets/icon-plus.jpg"){
        imagem.setAttribute("src", "assets/icon-minus.jpg")
    } else if(imagem.getAttribute("src") == "assets/icon-minus.jpg"){
                imagem.setAttribute("src", "assets/icon-plus.jpg")
    }

    respostas.classList.toggle("mostrar")
    container.classList.toggle("mod-container")
})