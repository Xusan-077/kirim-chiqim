let token = localStorage.getItem("token");

if (token) {
  document.body.innerHTML = private;

  logout();
  getincomes("incomes");
  sidebarbtns();
  burger();
  getcolor();
  windowclick();

} else {
  document.body.innerHTML = public;
}

async function getincomes(type) {
  let ellist = document.querySelector(".incomes__list");

  ellist.innerHTML = `
  <div class="dark">
    <span class="loader"></span>
  </div>`;
  let res = await fetch(`https://kirim-chiqim-new.onrender.com/get-${type}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      token: token,
    },
  });
  ellist.innerHTML = "";

  let data = await res.json();

  renderincomes(data, ellist);
}
async function getall() {
  let ellist = document.querySelector(".incomes__list");
  ellist.innerHTML = `
    <div class="dark">
    <span class="loader"></span>
    </div>`;

  let res = await fetch(`https://kirim-chiqim-new.onrender.com/get-incomes`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      token: token,
    },
  });

  ellist.innerHTML = "";

  let data = await res.json();

  let res2 = await fetch(`https://kirim-chiqim-new.onrender.com/get-expenses`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      token: token,
    },
  });

  let data2 = await res2.json();

  let allitems = [];
  allitems = [];

  data.forEach((el) => {
    allitems.push(el);
  });
  data2.forEach((el) => {
    allitems.push(el);
  });

  renderincomes(allitems, ellist);
}

async function deleteitem(type, id) {
  let res = await fetch(
    `https://kirim-chiqim-new.onrender.com/delete-${type}/${id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        token: token,
      },
    }
  );
  let data = await res.json();
  console.log(data);
}

function windowclick() {
  window.onclick = (evt) => {
    if (
      evt.target.classList.contains("delete") ||
      evt.target.classList.contains("delete-icon")
    ) {
      let id = evt.target.dataset.id;
      deleteitem("income", id);
      deleteitem("expense", id);
    }
  };
}
function renderincomes(array, list) {
  list.innerHTML = `
        <div class="item item-top">
          <span class="id item__span item__span-top">№</span>
          <span class="amount item__span item__span-top">amount</span>
          <span class="title item__span item__span-top">title</span>
          <span class="category item__span item__span-top">category</span>
          <span class=" item__span item__span-top">type</span>
          <span class=" item__span item__span-top">change</span>
        </div>
  `;

  array.forEach((el, index) => {
    list.innerHTML += `
            <li class="item item-bottom">
    

            <span class="id item__span"><span class="span-activty">id </span>${
              index + 1
            }</span>
                    <span class="title item__span"><span class="span-activty">title </span>${
              el.title
            }
            </span>
            <span class="category item__span"><span class="span-activty">category </span>${
              el.category
            }</span>
            <span class="amount item__span"><span class="span-activty">amount </span>${
              el.amount
            }</span>

            
            <p class="item__span item__p">
             <span class="type">${el.type}</span>
            </p>


            <div class="btn-group">
            <button data-id=${el._id} class="delete">
              <img data-id=${
                el._id
              } class="icon delete-icon" src="./img/Group.svg" alt="">
            </button>
            <button class="edit">
              <img class="icon edit-icon" src="./img/edit.jpg" alt="">
            </button>
            </div>
            </li>
        `;
  });

  getcolor();
}

function getcolor() {
  document.querySelectorAll(".type").forEach((el) => {
    const type = el.textContent.trim().toLowerCase();
    el.classList.remove("green", "red");

    if (type === "income") {
      el.classList.add("green");
    } else if (type === "expense") {
      el.classList.add("red");
    }
  });
}

function burger() {
  let elburger = document.querySelector(".burger-btn");
  let elsidebar = document.querySelector(".sidebar");

  elburger.onclick = () => {
    elsidebar.classList.toggle("block");
  };
}

function sidebarbtns() {
  let elherotitle = document.querySelector(".hero__subtitle");
  let elbtns = document.querySelectorAll(".sidebar-btn");

  elbtns.forEach((btn) => {
    btn.onclick = (evt) => {
      if (
        evt.target.innerHTML == "incomes" ||
        evt.target.innerHTML == "expenses"
      ) {
        getincomes(evt.target.innerHTML);
        elherotitle.innerHTML = `${evt.target.innerHTML} page`;
      }
      if (evt.target.innerHTML == "all") {
        elherotitle.innerHTML = `${evt.target.innerHTML} page`;
        getall();
      }
      let elsidebar = document.querySelector(".sidebar");

      elsidebar.classList.toggle("block");
    };
  });
}

function logout() {
  let ellogout = document.querySelector(".log-out");
  ellogout.onclick = () => {
    alert("siz log out qildingiz");
    localStorage.removeItem("token");
    window.location.reload();
  };
}
