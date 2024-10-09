import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const getAvailableCountries = async () => {
  const response = await api.get('/available-countries');
  return response.data;
};

export const getCountryInfo = async (countryCode) => {
  const response = await api.get(`/country-info/${countryCode}`);
  return response.data;
};

export default api;
