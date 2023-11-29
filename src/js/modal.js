const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");

function alternarModal() {
    modal.classList.toggle('aberto');
}

botaoTrailer.addEventListener('click', () => {
    video.setAttribute("src", src);
    alternarModal();
})

fecharModal.addEventListener("click", () => {
    video.setAttribute("src", "")
    alternarModal();
})