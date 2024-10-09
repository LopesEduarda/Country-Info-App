const axios = require('axios');

async function getAvailableCountries() {
  try {
    const response = await axios.get('https://date.nager.at/api/v3/AvailableCountries');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching available countries');
  }
}

async function getCountryInfo(countryCode) {
  try {
    const countryInfo = await axios.get(`https://date.nager.at/api/v3/CountryInfo/${countryCode}`);

    const populationData = await axios.post('https://countriesnow.space/api/v0.1/countries/population', {
      country: countryInfo.data.commonName
    });

    const flagData = await axios.post('https://countriesnow.space/api/v0.1/countries/flag/images', {
      country: countryInfo.data.commonName
    });

    return {
      name: countryInfo.data.commonName,
      borders: countryInfo.data.borders,
      population: populationData.data.data,
      flagUrl: flagData.data.data.flag
    };
  } catch (error) {
    throw new Error('Error fetching country information');
  }
}

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
