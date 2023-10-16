//1. get all countries from Asia continent/region using filter function

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();
xhr.onload = function getCountriesFromAsia() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const asiaCountries = data.filter((country) => country.region === "Asia");
      console.log("Countries in Asia:");
      console.log(asiaCountries);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

getCountriesFromAsia();
