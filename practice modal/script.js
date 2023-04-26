const btnopenModal = document.querySelector('.open-modal')
const btncloseModal = document.getElementsByClassName('.close-modal')
const hidden = document.getElementsByClassName('.hidden')
const overlay = document.getElementsByClassName('.overlay')
const openModal = function () {
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const closeModal = function () {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for (let i = 0; i<btnopenModal.length; i++) {
    btnopenModal.addEventListener("click",openModal)
    console.log("btn clicked")
}

btncloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)
//KEYPRESS EVENT
document.addEventListener('keydown',function (e) {
    if (e.key === 'Escape') {
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})