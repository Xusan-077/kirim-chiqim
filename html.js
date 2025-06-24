let private = `
<!-- 1 - Income o'chirish modali -->
<div class="modal">
  <div class="modal-content">
    <h2 class="modal-title">malumotni ochirishni hohlaysizmi</h2>
    <div class="modal__btn-group">
      <button class="close-modal">close</button>
      <button class="delete-modal">delete</button>
    </div>
  </div>
</div>

<!-- 2 - Ma'lumot o'chirildi modali -->
<div class="modal-2 modal">
  <div class="modal-content-2 modal-content">
    <h2 class="modal-title-2 modal-title">malumot ochirildi</h2>
    <div class="modal__btn-group">
      <button class="close-modal-2 close-modal">close</button>
    </div>
  </div>
</div>

<!-- 3 - Logout modali -->
<div class="modal-logout modal">
  <div class="modal-content-logout modal-content">
    <h2 class="modal-title-logout modal-title">logout qilishni hohlaysizmi</h2>
    <div class="modal__btn-group">
      <button class="close-modal-logout btn-modal">close</button>
      <button class="logout-modal btn-modal">log out</button>
    </div>
  </div>
</div>



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
                <button class="sidebar-btn">dashboard</button>
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
              <img class="burger-icon" src="./img/menu.svg" alt="">
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

let incomes = `
<div class="list-top">
  <h1 class="hero__subtitle">incomes page</h1>
  <button class="add-income add-item">add incomes</button>
</div>

<ul class="incomes__list"></ul>

<div class="incomes-modal add-incomes">
  <div class="incomes-modal-content add-incomes-content">
    <div class="add-incomes-main">
      <div class="modal-top">
        <h2 class="incomes-modal-title add-incomes-title">creat income</h2>
        <button class="incomes-close-btn">
          <img class="incomes-close-btn-icon" src="./img/images.png" alt="" />
        </button>
      </div>
      <form action="" class="incomes-form">
        <input type="text" class="title form-input" placeholder="title" />
        <input type="number" class="amount form-input" placeholder="amount" />
        <input type="text" class="catigory form-input" placeholder="catigory" />
        <input
          type="text"
          class="description form-input"
          placeholder="description"
        />
        <button class="submit">submit</button>
      </form>
    </div>
  </div>
</div>

`;
let expenses = `
  <div class="list-top">

  <h1 class="hero__subtitle">
    expenses page
  </h1>
  <button class="add-expenses add-item">add expenses</button>

  </div>

 <ul class="incomes__list"></ul>

   <div class="expenses-modal incomes-modal add-incomes">
  <div class="expenses-modal-content add-incomes-content">
  <div class="modal-top">
  <h2 class="incomes-modal-title add-incomes-title">creat expenses</h2>
  <button class="incomes-close-btn">
  <img class="incomes-close-btn-icon" src="./img/images.png" alt="">
  </button>
  </div>
    <form action="" class="expenses-form">
      <input type="text" class="expenses-title form-input" placeholder="title" />
      <input type="number" class="expenses-amount form-input" placeholder="amount" />
      <input type="text" class="expenses-catigory form-input" placeholder="catigory" />
      <input type="text" class="expenses-description form-input" placeholder="description" />
      <button class="submit-expenses submit">submit</button>
    </form>
  </div>
</div>
`;
let all = `
  <h1 class="hero__subtitle">
    all page
  </h1>

 <ul class="incomes__list"></ul>
`;

let dashboard = `
<h2 class="dashboard-title">Dashboard</h2>
<div class="dashboard__list">
  <div class="dashboard__item dashboard__item--expense">
    <h4 class="dashboard__label">Total Expenses</h4>
    <h3 class="dashboard__value total-expenses">loading...</h3>
  </div>

  <div class="dashboard__item dashboard__item--expense">
    <h4 class="dashboard__label">Expenses Count</h4>
    <h3 class="dashboard__value order-expenses">loading...</h3>
  </div>

  <div class="dashboard__item dashboard__item--income">
    <h4 class="dashboard__label">Total Incomes</h4>
    <h3 class="dashboard__value total-incomes">loading...</h3>
  </div>

  <div class="dashboard__item dashboard__item--income">
    <h4 class="dashboard__label">Incomes Count</h4>
    <h3 class="dashboard__value order-incomes">loading...</h3>
  </div>
</div>


`;
