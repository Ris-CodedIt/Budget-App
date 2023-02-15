const budForm = document.querySelector("#bud-form");
const inputBub = document.querySelector("#budget");
const bud = document.querySelector("#bud");
const bal = document.querySelector("#bal");
const expForm = document.querySelector("#exp-form");
const inputExp = document.querySelector("#expense");
const inputAmnt = document.querySelector("#amount");
const expDiv = document.querySelector(".expense-display");

let balance = 0;

budForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let inp = inputBub.value;
  bud.innerText = `$${inp}`;
});

expForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let div = document.createElement("div");
  div.classList.add("expense-item");
  div.innerHTML = `<p id="expense-name">${inputExp.value}   <span class="exp-amount">${inputAmnt.value}<span></p>
        <div class="expense-buttons">
          <button class="btn-edit"><i class="fas fa-pen"></i></button>
          <button class="btn-delete"><i class="fas fa-trash"></i></button>
        </div>`;
  expDiv.appendChild(div);
  addExp();
  addDelete();
  addEdit();
  inputAmnt.value = "";
  inputExp.value = "";
});

function addExp() {
  let expArr = document.querySelectorAll(".exp-amount");
  let total = 0;
  expArr.forEach((arr) => {
    total += parseInt(arr.innerText);
  });

  balance = parseInt(inputBub.value) - total;

  bal.innerText = `$${balance}`;
}

function addDelete() {
  let deleteButtons = document.querySelectorAll(".btn-delete");

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      btn.parentElement.parentElement.remove();
      addExp();
    });
  });
}

function addEdit() {
  let editButtons = document.querySelectorAll(".btn-edit");
  editButtons.forEach((btn) => {
    btn.addEventListener("click", () => alert("still in development"));
  });
}
