let private = `
    <header class="header">
      <div class="container"></div>
    </header>

    <section class="hero">
      <div class="hero__inner">
        <nav class="sidebar">
          <h3 class="siderbar-title">navbar</h3>

          <ul class="sidebar__list">
            <li class="sidebar__item">
              <div class="sidebar__item-div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                  ></path>
                  <path
                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                  ></path>
                </svg>
                <button class="sidebar-btn">incomes</button>
              </div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__item-div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                  ></path>
                  <path
                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                  ></path>
                </svg>
                <button class="sidebar-btn">expenses</button>
              </div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__item-div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                  ></path>
                  <path
                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                  ></path>
                </svg>
                <button class="sidebar-btn">all</button>
              </div>
            </li>
            <li class="sidebar__item">
              <div class="sidebar__item-div">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                  ></path>
                  <path
                    d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8m0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"
                  ></path>
                </svg>
                <button class="sidebar-btn">history</button>
              </div>
            </li>
          </ul>
        </nav>

        <div class="hero__sidebar-div">
          <div class="sidebar__inner">
            <h2 class="public-title">private</h2>
            <div class="hero-top-div">
            <button class="log-out public-link">log out</button>
            <button class="burger-btn">
              <img class="burger-icon" src="./menu.svg" alt="">
            </button>   
            </div>
          </div>
          <div class="hero__main">
          <h1 class="hero__subtitle">
              incomes page
          </h1>


          <div class="list-div">
          
          <ul class="incomes__list">

          </ul>
          </div>
          </div>
        </div>
      </div>
    </section>

 `;
let public = `
       <header class="header">
        <div class="header__inner">
          <h2 class="public-title">public</h2>
          <div class="public-div">
          <a href="./register.html" class="public-link">sign up</a>
          <a href="./login.html" class="public-link">login</a>
          </div>
      </div>
    </header>
`;

let token = localStorage.getItem("token");

if (token) {
  let allitems = [];
  document.body.innerHTML = private;

  // let ellist = document.querySelector(".incomes__list");

  let ellogout = document.querySelector(".log-out");
  ellogout.onclick = () => {
    alert("siz log out qildingiz");
    localStorage.removeItem("token");
    window.location.reload();
  };

  getincomes("incomes");

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

  async function getall() {
    let ellist = document.querySelector(".incomes__list");
    let elnavber = document.querySelector(".sidebar");
    ellist.innerHTML = `
    <div class="dark">
    <span class="loader"></span>
    </div>`;

    // elnavber.classList.add('h')
    let res = await fetch(`https://kirim-chiqim-new.onrender.com/get-incomes`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        token: token,
      },
    });

    // elnavber.classList.add('h')
    ellist.innerHTML = "";

    let data = await res.json();

    let res2 = await fetch(
      `https://kirim-chiqim-new.onrender.com/get-expenses`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          token: token,
        },
      }
    );

    let data2 = await res2.json();

    allitems = [];

    data.forEach((el) => {
      allitems.push(el);
    });
    data2.forEach((el) => {
      allitems.push(el);
    });

    renderincomes(allitems, ellist);
  }

  burger();

  // let elbtngroup = document.querySelector(".btn-group");

  // window.onclick = (evt) => {
  //   if (
  //     evt.target.classList.contains("delete") ||
  //     evt.target.classList.contains("delete-icon")
  //   ) {
  //     deleteitem(evt.target.dataset.id);
  //     console.log("click");
  //   }
  // };
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

// async function deleteitem(id) {
//   let res = await fetch(
//     `https://kirim-chiqim-new.onrender.com/delete-incomes/${id}`,
//     {
//       method: "DELETE",
//       headers: {
//         "Content-type": "application/json",
//         token: token,
//       },
//     }
//   );

//   console.log(res);
// }

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
            <span class="amount item__span"><span class="span-activty">amount </span>${
              el.amount
            }</span>
            <span class="title item__span"><span class="span-activty">title </span>${
              el.title
            }</span>
            <span class="category item__span"><span class="span-activty">category </span>${
              el.category
            }</span>
            <span class="type item__span"><span class="span-activty">type </span>${
              el.type
            }</span>

            <div class="btn-group">
            <button data-id="${index + 1}" class="delete">
              <img data-id="${
                index + 1
              }" class="icon delete-icon" src="./Group.svg" alt="">
            </button>
            <button class="edit">
              <img class="icon edit-icon" src="./edit.jpg" alt="">
            </button>
            </div>
            </li>
        `;
  });

  getcolor();
}

function getcolor() {
  document.querySelectorAll(".type").forEach((el) => {
    let type = el.textContent.trim().toLowerCase();
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
