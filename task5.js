//5. // Function to fetch countries from the given API and filter countries using US dollar as currency
function getCountriesWithUSDollarCurrency() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Filter countries using US dollar as currency
      const countriesWithUSDollarCurrency = data.filter((country) => {
        return country.currencies && country.currencies.USD;
      });

      // Print the list of countries using US dollar as currency
      console.log("Countries Using US Dollar (USD) as Currency:");
      countriesWithUSDollarCurrency.forEach((country) => {
        console.log(country.name.common);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

// Call the function to fetch and print countries using US dollar as currency
getCountriesWithUSDollarCurrency();

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://restcountries.com/v3.1/all", true);

xhr.send();
xhr.onload = function getCountriesWithUSDollarCurrency() {
  const apiUrl = "https://restcountries.com/v3.1/all";

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const countriesWithUSDollarCurrency = data.filter((country) => {
        return country.currencies && country.currencies.USD;
      });
      console.log("Countries Using US Dollar (USD) as Currency:");
      countriesWithUSDollarCurrency.forEach((country) => {
        console.log(country.name.common);
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
getCountriesWithUSDollarCurrency();
