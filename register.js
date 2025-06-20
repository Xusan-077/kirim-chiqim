const elFirstName = document.querySelector(".firsname");
const elLastName = document.querySelector(".lastname");
const elAge = document.querySelector(".age");
const elEmail = document.querySelector(".email");
const elPassword = document.querySelector(".password");
const elform = document.querySelector(".form");

elform.onsubmit = (evt) => {
  evt.preventDefault();
  renderUser();
};

elFirstName.value = "xusan";
elLastName.value = "Yarashov";
elAge.value = 14;
elEmail.value = "x@gmail.com";
elPassword.value = "xusan";

async function renderUser() {
  const res = await fetch("https://kirim-chiqim-new.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: elFirstName.value,
      last_name: elLastName.value,
      age: elAge.value,
      email: elEmail.value,
      password: elPassword.value,
    }),
  });

  const data = await res.json();

  if (res.ok) {
    localStorage.setItem("token", data.token);
    window.location.href = "index.html";

    elFirstName.value = "";
    elLastName.value = "";
    elAge.value = "";
    elEmail.value = "";
    elPassword.value = "";
  } else if (data.message) {
    alert("Bunday akkaunt allaqachon mavjud: ");
  } else {
    alert("sign up xatolik yuz berdi");
  }
}