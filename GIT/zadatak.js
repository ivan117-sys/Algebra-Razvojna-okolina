"use strict";
// Varijable /////////////////////////
const searchButton = document.querySelector(".search");
const tbody = document.querySelector("#results tbody");

// Funkcije //////////////////////////
const renderData = function (data) {
  tbody.innerHTML = "";
  data.reverse();
  data.forEach((element) => {
    const html = `
      <tr>
      <td>${element.id}</td>
      <td>${element.name}</td>
      <td>${element.description}</td>
      </tr>
    `;
    tbody.insertAdjacentHTML("afterbegin", html);

    const row = document.createElement("tr");
    const idElement = document.createElement("td");
    idElement.innerText = element.id;
    const nameElement = document.createElement("td");
    nameElement.innerText = element.name;
    const descriptionElement = document.createElement("td");
    descriptionElement.innerText = element.description;
    row.appendChild(idElement);
    row.appendChild(nameElement);
    row.appendChild(descriptionElement);
    tbody.appendChild(row);
  });
};

// Eventi //////////////////////////////
searchButton.addEventListener("click", async () => {
  try {
    const apiURL = "https://api.punkapi.com/v2/beers";
    const res = await fetch(apiURL);
    const data = await res.json();
    console.log(data);
    renderData(data);
  } catch (error) {
    console.log(error);
  }
});
