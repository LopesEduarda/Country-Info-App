const axios = require('axios');
const dotenv = require('dotenv');

// Carregar variáveis de ambiente
dotenv.config();

async function getAvailableCountries() {
  try {
    const response = await axios.get(`${process.env.NAGER_BASE_URL}/AvailableCountries`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching available countries');
  }
}

async function getCountryInfo(countryCode) {
  try {
    const countryInfo = await axios.get(`${process.env.NAGER_BASE_URL}/CountryInfo/${countryCode}`);

    const populationData = await axios.post(process.env.COUNTRIESNOW_POPULATION_URL, {
      country: countryInfo.data.commonName
    });

    const flagData = await axios.post(process.env.COUNTRIESNOW_FLAG_URL, {
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
