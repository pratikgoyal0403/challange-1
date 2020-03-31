const emailFeild = document.querySelector(".email-feild");
const submitBtn = document.querySelector(".submit-btn");
const errorMsg = document.querySelector(".error-text");
const errorIcon = document.querySelector(".error-icon");

const reStylingElements = (msg, icon, email) => {
  errorMsg.style.display = msg;
  errorIcon.style.display = icon;
  emailFeild.style.border = email;
};

const submitFormHandler = () => {
  const emailValue = emailFeild.value;
  if (!emailFeild.validity.valid || emailValue.trim() === "") {
    reStylingElements("block", "block", "1px solid red");
  } else {
    reStylingElements("none", "none", "1px solid grey");
  }
};

submitBtn.addEventListener("click", submitFormHandler);
