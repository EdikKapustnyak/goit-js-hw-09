const form = document.querySelector('.feedback-form');
const textArea = document.querySelector('textarea');
const input = document.querySelector('input[type="email"]');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
  formData = JSON.parse(savedData);
  input.value = formData.email || '';
  textArea.value = formData.message || '';
}

form.addEventListener('input', (event) => {
  if (event.target === input) {
    formData.email = input.value.trim();
  } else if (event.target === textArea) {
    formData.message = textArea.value.trim();
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    return alert('Please fill in all fields');
  }
  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();

  formData = {
    email: '',
    message: '',
  };
});