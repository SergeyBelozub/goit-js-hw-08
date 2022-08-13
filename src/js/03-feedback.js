import throttle from "lodash.throttle";

const HISTORY_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(onFormData, 500));
form.addEventListener("submit", onSubmitForm);

let formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(HISTORY_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();

  const email = document.querySelector(".feedback-form input");
  const message = document.querySelector(".feedback-form textarea");
  if (message.value === "" || email.value === "") {
    alert(`Все поля должны быть заполнены`);
  } else {
    e.currentTarget.reset();
    localStorage.removeItem(HISTORY_KEY);

    console.log(formData);
  }
}

(function updateDataFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem(HISTORY_KEY));

  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      formData[key] = value;
      form.elements[key].value = value;
    });
  }
})();
