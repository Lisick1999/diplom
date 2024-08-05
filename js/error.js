const wrapperError = document.querySelector('.wrapper-error');
const popupError = document.getElementById('popup-error');
const closePopupError = document.querySelector('.popup-close-error');

closePopupError.addEventListener('click', (e) => {
	const textError = document.getElementById('txtError');
	popupError.classList.toggle('hidden');
	textError.remove(textError);
});

function renderError(data) {
	wrapperError.insertAdjacentHTML('beforeend',
    `<p class="text-error" id="txtError">${data.error}</p>`
  )

  const adminMain = document.querySelector('.admin-index');
  if (adminMain) {
    adminMain.classList.add('hidden');
  }

  popupError.classList.remove('hidden');
}
