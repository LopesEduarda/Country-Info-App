const express = require('express');
const countryController = require('../controllers/countryController');

const router = express.Router();

router.get('/available-countries', countryController.getAvailableCountries);
router.get('/country-info/:code', countryController.getCountryInfo);

module.exports = router;
