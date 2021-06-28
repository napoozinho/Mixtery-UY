const close_modal_btn = document.getElementById('closeModal');
const modal = document.getElementsByClassName('modal_container')[0];

close_modal_btn.addEventListener('click', closeModal);

function closeModal() {
  modal.classList.toggle('active');
}