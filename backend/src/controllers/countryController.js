const countryService = require('../services/countryService');

async function getAvailableCountries(req, res) {
  try {
    const countries = await countryService.getAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getCountryInfo(req, res) {
  const { code } = req.params;
  try {
    const countryInfo = await countryService.getCountryInfo(code);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};
