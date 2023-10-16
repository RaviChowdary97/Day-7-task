//4. print the total population of countries using reduce function

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();
xhr.onload = function calculateTotalPopulation() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const totalPopulation = data.reduce((accumulator, country) => {
        return accumulator + (country.population || 0);
      }, 0);
      console.log("Total Population of All Countries:", totalPopulation);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
calculateTotalPopulation();
