let token = localStorage.getItem("token");
let allincomesamount = 0;
let allexpensesamount = 0;
let id = "";
let typeid = "";

if (token) {
  document.body.innerHTML = private;

  renderDashboard();
  sidebarbtns();
  burger();
  getcolor();
  windowclick();
  addIncomes();
  addExpenses();
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
  renderincomesorexpenses(data, ellist);
}

async function getincomesfordashbord() {
  let res = await fetch(`https://kirim-chiqim-new.onrender.com/get-incomes`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      token: token,
    },
  });
  let data = await res.json();

  data.forEach((el) => {
    allincomesamount += el.amount;
  });

  document.querySelector(".total-incomes").innerHTML = allincomesamount;
  document.querySelector(".order-incomes").innerHTML = data.length;
}

async function getexpensesfordashbord() {
  let res = await fetch(`https://kirim-chiqim-new.onrender.com/get-expenses`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      token: token,
    },
  });
  let data = await res.json();

  data.forEach((el) => {
    allexpensesamount += el.amount;
  });

  document.querySelector(".total-expenses").innerHTML = allexpensesamount;
  document.querySelector(".order-expenses").innerHTML = data.length;
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

  data.forEach((el) => {
    allitems.push(el);
  });
  data2.forEach((el) => {
    allitems.push(el);
  });

  renderincomesorexpenses(allitems, ellist);
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

  return await res.json();
}

function addIncomes() {
  const checkIncomesForm = setInterval(() => {
    const elform = document.querySelector(".incomes-form");

    if (elform) {
      clearInterval(checkIncomesForm);

      let eltitle = document.querySelector(".title");
      let elamount = document.querySelector(".amount");
      let elcatigory = document.querySelector(".catigory");
      let eldescription = document.querySelector(".description");

      elform.onsubmit = (evt) => {
        evt.preventDefault();
        addincome("income");
        document.querySelector(".incomes-modal").classList.remove("flex");
      };

      async function addincome(type) {
        let today = new Date();
        let formattedDate = `${today.getFullYear()}-${String(
          today.getMonth() + 1
        ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

        let res = await fetch(
          `https://kirim-chiqim-new.onrender.com/add-${type}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
            body: JSON.stringify({
              title: eltitle.value,
              amount: +elamount.value,
              type: "income",
              category: elcatigory.value,
              description: eldescription.value,
              date: formattedDate,
            }),
          }
        );

        let data = await res.json();
        if (res.ok) {
          eltitle.value = "";
          elamount.value = "";
          elcatigory.value = "";
          eldescription.value = "";
        }

        console.log(data);

        getincomes("incomes");
      }
    }
  }, 500);
}

function addExpenses() {
  const checkExpenseForm = setInterval(() => {
    if (document.querySelector(".expenses-form")) {
      clearInterval(checkExpenseForm);
      let elformexpense = document.querySelector(".expenses-form");

      elformexpense.onsubmit = (evt) => {
        evt.preventDefault();
        addexpense("expense");
        document.querySelector(".expenses-modal").classList.remove("flex");
      };

      async function addexpense(type) {
        let elexpensestitle = document.querySelector(".expenses-title");
        let elexpensesamount = document.querySelector(".expenses-amount");
        let elexpensescatigory = document.querySelector(".expenses-catigory");
        let elexpensesdescription = document.querySelector(
          ".expenses-description"
        );

        let today = new Date();
        let formattedDate = `${today.getFullYear()}-${String(
          today.getMonth() + 1
        ).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

        let res = await fetch(
          `https://kirim-chiqim-new.onrender.com/add-${type}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              token: token,
            },
            body: JSON.stringify({
              title: elexpensestitle.value,
              amount: +elexpensesamount.value,
              type: "expense",
              category: elexpensescatigory.value,
              description: elexpensesdescription.value,
              date: formattedDate,
            }),
          }
        );

        let data = await res.json();
        if (res.ok) {
          elexpensestitle.value = "";
          elexpensesamount.value = "";
          elexpensescatigory.value = "";
          elexpensesdescription.value = "";
        }
        console.log(data);
        getincomes("expenses");
      }
    }
  }, 500);
}

function renderDashboard() {
  let elmain = document.querySelector(".hero__main");
  elmain.innerHTML = dashboard;

  getincomesfordashbord();
  getexpensesfordashbord();
}

function windowclick() {
  window.onclick = async (evt) => {
    // ===delete===
    if (
      evt.target.classList.contains("delete") ||
      evt.target.classList.contains("delete-icon")
    ) {
      document.querySelector(".modal").classList.add("flex");
      document.querySelector(".modal-content").classList.add("block");
      id = evt.target.dataset.id;
      typeid = evt.target.dataset.type;
    }

    if (
      evt.target.classList.contains("modal") ||
      evt.target.classList.contains("close-modal")
    ) {
      document.querySelector(".modal").classList.remove("flex");
      document.querySelector(".modal-content").classList.remove("block");
    }

    if (evt.target.classList.contains("delete-modal")) {
      if (evt.target.classList.contains("delete-modal")) {
        if (typeid === "income") {
          await deleteitem("income", id);
        }
        if (typeid === "expense") {
          await deleteitem("expense", id);
        }

        let elmain = document.querySelector(".hero__main");

        if (elmain.innerHTML.includes("incomes page")) {
          getincomes("incomes");
        } else if (elmain.innerHTML.includes("expenses page")) {
          getincomes("expenses");
        } else if (elmain.innerHTML.includes("all page")) {
          getall();
        }

        document.querySelector(".modal").classList.remove("flex");
        document.querySelector(".modal-content").classList.remove("block");

        document.querySelector(".modal-2").classList.add("flex");
        document.querySelector(".modal-content-2").classList.add("block");
      }
    }

    if (
      evt.target.classList.contains("close-modal-2") ||
      evt.target.classList.contains("modal-2")
    ) {
      document.querySelector(".modal-2").classList.remove("flex");
      document.querySelector(".modal-content-2").classList.remove("block");
    }

    //=== log out===
    if (evt.target.classList.contains("log-out")) {
      document.querySelector(".modal-logout").classList.add("flex");
      document.querySelector(".modal-content-logout").classList.add("block");
    }

    if (
      evt.target.classList.contains("close-modal-logout") ||
      evt.target.classList.contains("modal-logout")
    ) {
      document.querySelector(".modal-logout").classList.remove("flex");
      document.querySelector(".modal-content-logout").classList.remove("block");
    }
    if (evt.target.classList.contains("logout-modal")) {
      document.querySelector(".modal-logout").classList.remove("flex");
      document.querySelector(".modal-content-logout").classList.remove("block");
      logout();
    }


    // === add income ===

    if (evt.target.classList.contains("add-income")) {
      document.querySelector(".incomes-modal").classList.add("flex");
    }
    if (
      evt.target.classList.contains("incomes-close-btn") ||
      evt.target.classList.contains("incomes-close-btn-icon") ||
      evt.target.classList.contains("incomes-modal")
    ) {
      document.querySelector(".incomes-modal").classList.remove("flex");
    }

    // === add expenses ===

    if (evt.target.classList.contains("add-expenses")) {
      document.querySelector(".expenses-modal").classList.add("flex");
    }
  };
}

function renderincomesorexpenses(array, list) {
  list.innerHTML = `
        <div class="item item-top">
          <span class="id item__span item__span-top">№</span>
          <span class="title item__span item__span-top">title</span>
          <span class="category item__span item__span-top">category</span>
          <span class="amount item__span item__span-top">amount</span>
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
            <button data-type=${el.type} data-id=${el._id} class="delete">
              <img data-type=${el.type} data-id=${
      el._id
    }  class="icon delete-icon" src="./img/Group.svg" alt="">
            </button>
            <button data-id=${el._id} class="edit">
              <img data-id=${
                el._id
              } class="icon edit-icon" src="./img/edit.jpg" alt="">
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
  let elbtns = document.querySelectorAll(".sidebar-btn");

  let elmain = document.querySelector(".hero__main");

  elbtns.forEach((btn) => {
    btn.onclick = (evt) => {
      if (evt.target.innerHTML == "incomes") {
        elmain.innerHTML = incomes;
        getincomes(evt.target.innerHTML);
      }
      if (evt.target.innerHTML == "expenses") {
        elmain.innerHTML = expenses;
        getincomes(evt.target.innerHTML);
      }
      if (evt.target.innerHTML == "dashboard") {
        elmain.innerHTML = dashboard;

        getincomesfordashbord();
        getexpensesfordashbord();
      }
      if (evt.target.innerHTML == "all") {
        elmain.innerHTML = all;
        getall();
      }
      let elsidebar = document.querySelector(".sidebar");

      elsidebar.classList.toggle("block");
    };
  });
}

function logout() {
  localStorage.removeItem("token");
  window.location.reload();
}