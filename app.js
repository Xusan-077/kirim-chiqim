let token = localStorage.getItem("token");
let allincomesamount = 0;
let allexpensesamount = 0;
let id = "";
let typeid = "";

if (token) {
  document.body.innerHTML = private;

  lightdark();
  renderDashboard();
  sidebarbtns();
  burger();
  getcolor();
  windowclick();
  addIncomes();
  addExpenses();
  preventDefault();
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

async function renderDashboard() {
  let elmain = document.querySelector(".hero__main");
  elmain.innerHTML = dashboard;

  allincomesamount = 0;
  allexpensesamount = 0;

  await getincomesfordashbord();
  await getexpensesfordashbord();

  let alltotla = allincomesamount - allexpensesamount;

  if (alltotla > 0) {
    document
      .querySelector(".dashboard__item--active")
      .classList.add("green-total");
    document.querySelector(".all-title").innerHTML = "+" + alltotla;
  } else {
    document
      .querySelector(".dashboard__item--active")
      .classList.add("red-total");
    document.querySelector(".all-title").innerHTML = alltotla;
  }

  console.log(alltotla);
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

  if (
    document.querySelector(".total-incomes") &&
    document.querySelector(".order-incomes")
  ) {
    let elincometotal = document.querySelector(".total-incomes");
    let elincomeorder = document.querySelector(".order-incomes");

    elincometotal.innerHTML = allincomesamount;
    elincomeorder.innerHTML = data.length;

    elincometotal.classList.add("green-color");
    elincomeorder.classList.add("green-color");
  }
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

  if (
    document.querySelector(".total-expenses") &&
    document.querySelector(".order-expenses")
  ) {
    let elexpensetotal = document.querySelector(".total-expenses");
    let elexpenseorder = document.querySelector(".order-expenses");

    elexpensetotal.innerHTML = "-" + allexpensesamount;
    elexpenseorder.innerHTML = "-" + data.length;

    elexpensetotal.classList.add("red-color");
    elexpenseorder.classList.add("red-color");
  }
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

  let data = await res.json();
  console.log(data);
  console.log(res);
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

        document.querySelector(".incomes-modal").classList.remove("flex");
        document.querySelector(".rozilik-modal-2").classList.add("flex");
        document
          .querySelector(".rozilik-modal-content-2")
          .classList.add("block");

        const title = document.querySelector(".rozilik-title");

        title.innerHTML = "Muvaffaqiyatli qo‘shildi";
        title.style.color = "green";
        document.querySelector(".malumot-div-red-2").classList.remove("red");

        if (res.ok) {
          document.querySelector(".rozilik-close-2").onclick = () => {
            document.querySelector(".rozilik-modal-2").classList.remove("flex");
            document
              .querySelector(".rozilik-modal-content-2")
              .classList.remove("block");
            getincomes("incomes");
          };
        } else {
          title.innerHTML = "Xatolik yuz berdi";
          title.style.color = "red";
          document.querySelector(".malumot-div-red-2").classList.add("red");

          document.querySelector(".rozilik-close-2").onclick = () => {
            document.querySelector(".rozilik-modal-2").classList.remove("flex");
            document
              .querySelector(".rozilik-modal-content-2")
              .classList.remove("block");
          };
        }
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
      };
    }

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

      let rozilik = document.querySelector(".rozilik-title");
      let elclass = document.querySelector(".malumot-div-red");
      rozilik.innerHTML = "malumot qo`shildi";
      rozilik.style.color = "green";
      elclass.classList.remove("red");

      if (res.ok) {
        document.querySelector(".expenses-modal").classList.remove("flex");

        document.querySelector(".rozilik-modal").classList.add("flex");
        document.querySelector(".rozilik-modal-content").classList.add("block");

        document.querySelector(".rozilik-close").onclick = () => {
          document.querySelector(".rozilik-modal").classList.remove("flex");
          document
            .querySelector(".rozilik-modal-content")
            .classList.remove("block");

          getincomes("expenses");
        };
      }

      if (!res.ok) {
        document.querySelector(".expenses-modal").classList.remove("flex");
        document.querySelector(".rozilik-modal").classList.add("flex");
        document.querySelector(".rozilik-modal-content").classList.add("block");

        rozilik.innerHTML = "Xatolik yuz berdi";
        rozilik.style.color = "red";
        elclass.classList.add("red");

        document.querySelector(".rozilik-close").onclick = () => {
          document.querySelector(".rozilik-modal").classList.remove("flex");
          document
            .querySelector(".rozilik-modal-content")
            .classList.remove("block");
        };
      }
    }
  }, 500);
}

function windowclick() {
  window.onclick = async (evt) => {
    // ===delete===
    if (
      evt.target.classList.contains("delete") ||
      evt.target.classList.contains("delete-icon")
    ) {
      const deleteBtn = evt.target.closest(".delete");
      id = deleteBtn.dataset.id;
      typeid = deleteBtn.dataset.type;

      document.querySelector(".modal").classList.add("flex");
      document.querySelector(".modal-content").classList.add("block");
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
             <span class="delete-icon close-btn">✕</span>
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
      const page = evt.target.innerHTML.trim().toLowerCase();
      const elsidebar = document.querySelector(".sidebar");

      // Hammasidan classni olib tashla
      elbtns.forEach((b) => b.classList.remove("btncolor"));
      // Faoliga class qo‘sh
      btn.classList.add("btncolor");

      switch (page) {
        case "incomes":
          elmain.innerHTML = incomes;
          getincomes("incomes");
          break;

        case "expenses":
          elmain.innerHTML = expenses;
          getincomes("expenses");
          break;

        case "dashboard":
          elmain.innerHTML = dashboard;
          getincomesfordashbord();
          getexpensesfordashbord();
          break;

        case "all":
          elmain.innerHTML = all;
          getall();
          break;
      }

      elsidebar.classList.toggle("block");
    };
  });

  // === Boshida dashboard tugmasiga class berish ===
  elbtns.forEach((btn) => {
    if (btn.innerHTML.trim().toLowerCase() === "dashboard") {
      btn.classList.add("btncolor");
    }
  });
}

function logout() {
  localStorage.removeItem("token");
  localStorage.removeItem("mode");
  window.location.reload();
}

function lightdark() {
  const elbtn = document.querySelector(".light-dark");

  const savedMode = localStorage.getItem("mode");
  if (savedMode === "dark") {
    document.body.classList.add("dark-mode");
    elbtn.innerHTML = "light";
  } else {
    elbtn.innerHTML = "dark";
  }

  elbtn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      localStorage.setItem("mode", "dark");
      elbtn.innerHTML = "light";
    } else {
      localStorage.setItem("mode", "light");
      elbtn.innerHTML = "dark";
    }
  };
}

function preventDefault() {
  document.onkeydown = function (e) {
    if (e.key === "F12") {
      return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key === "I") {
      return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key === "J") {
      return false;
    }

    if (e.ctrlKey && e.key === "u") {
      return false;
    }

    if (e.ctrlKey && e.shiftKey && e.key === "C") {
      return false;
    }
  };

  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  });
}
