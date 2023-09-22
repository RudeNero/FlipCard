flip = () => {
    document.getElementById('cartao').classList.toggle('flip')
    document.querySelector('#front .reflection').classList.toggle('mover')
    document.querySelector('#tras .reflection').classList.toggle('mover')
}
document.getElementById('btn-ativo').addEventListener('click', flip)
document.getElementById('btn-oculto').addEventListener('click', flip)