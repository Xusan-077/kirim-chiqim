let elform = document.querySelector(".form");
let elemail = document.querySelector(".email");
let elpassword = document.querySelector(".password");

elemail.value = "xusan@gmail.com";
elpassword.value = "xusan";

elform.onsubmit = (evt) => {
  evt.preventDefault();

  render();

  elemail.value = "";
  elpassword.value = "";
};

async function render() {
  let res = await fetch("https://kirim-chiqim-new.onrender.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: elemail.value,
      password: elpassword.value,
    }),
  });

  let data = await res.json();
  let token = data.token;

  if (data.token) {
    localStorage.setItem("token", token);
    window.location.href = "index.html";
    alert("siz kirdingiz");
  } else {
    alert("bunday foydalanuvchi yo`q iltimos sign up qiling")
  }
}
