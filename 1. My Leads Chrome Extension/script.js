const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const urlList = document.getElementById("urlList");
const deleteBtn = document.getElementById("delete-btn");

let myLeads = localStorage.getItem("myLeads")
  ? JSON.parse(localStorage.getItem("myLeads"))
  : [];

//Save url
const save = () => {
  myLeads.push(inputEl.value);
  urlList.innerHTML = myLeads
    .map((lead) => `<div><a target="_blank" href="${lead}">${lead}</a></div>`)
    .join("");
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
};

inputBtn.addEventListener("click", save);

//Delete
const del = () => {
  localStorage.removeItem("myLeads");
  myLeads = [];
  urlList.innerHTML = "";
};

deleteBtn.addEventListener("click", del);
