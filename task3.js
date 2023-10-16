//3. print the following details name, capital, flag using forEach function

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();
xhr.onload = function printCountryDetails() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const name = country.name.common;
        const capital = country.capital;
        const flag = country.flags[0] || "N/A";

        console.log(`Name: ${name}`);
        console.log(`Capital: ${capital}`);
        console.log(`Flag: ${flag}`);
        console.log("--------------------");
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
printCountryDetails();
