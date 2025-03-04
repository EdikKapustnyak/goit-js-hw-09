const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');
const input = document.querySelector('input[type="email"]');
const STORAGE_KEY = 'feedback-form-state'; // ключ для хранения данных

form.addEventListener('input', saveFormData);
form.addEventListener('submit', submitForm);

function saveFormData() {
  const dataForm = {
    email: input.value.trim(),
    message: textArea.value.trim(),
  };
  //   console.log(dataForm);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataForm));
}

const checkForm = localStorage.getItem(STORAGE_KEY);
if (checkForm) {
  const parsedData = JSON.parse(checkForm);
  input.value = parsedData.email || '';
  textArea.value = parsedData.message || '';
}

function submitForm(event) {
  event.preventDefault();
  const sendFormData = {
    email: input.value.trim(),
    message: textArea.value.trim(),
  };
  if (sendFormData.email === '' || sendFormData.message === '') {
    return alert('Fill please all fields');
  }
  console.log(sendFormData);
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
}