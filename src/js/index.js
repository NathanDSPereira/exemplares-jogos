let imagemFundo = document.getElementById('background-fundo');
const imgTituloJogo = document.getElementById('img-title');
const perfis = document.querySelectorAll('.perfil');
const descricaoJogoSelecionado = document.getElementById('descricao-jogo-selecionado');
const video = document.getElementById('video');
let src;

perfis.forEach(perfil => {
    perfil.addEventListener('mouseenter', () => {
        if(window.innerWidth > 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDoPerfil();

        perfil.classList.add('selecionado');

        const idPerfil = perfil.attributes.id.value;

        imagemFundo.src = `./src/imagens/${idPerfil}.jpg`

        imgTituloJogo.src = `./src/imagens/${idPerfil}.png`

        descricaoJogoSelecionado.innerText = perfil.getAttribute('data-description');
        
        src = `./src/videos/${idPerfil}.mp4`;
    })
})


function removerSelecaoDoPerfil() {
    let perfilSelecionado = document.querySelector('.selecionado');
    perfilSelecionado.classList.remove('selecionado');
}
