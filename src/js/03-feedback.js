import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
form.addEventListener("input", throttle(onFormData, 500));
form.addEventListener("submit", onSubmitForm);

let formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();

  const email = document.querySelector(".feedback-form input");
  const message = document.querySelector(".feedback-form textarea");
  if (message.value === "" || email.value === "") {
    alert(`Все поля должны быть заполнены`);
  } else {
    e.currentTarget.reset();
    localStorage.removeItem("feedback-form-state");
  }
}

(function updateDataFromLocalStorage() {
  let data = JSON.parse(localStorage.getItem("feedback-form-state"));

  if (data) {
    Object.entries(data).forEach(([key, value]) => {
      formData[key] = value;
      form.elements[key].value = value;
    });
  }
})();
