const express = require('express');
const cors = require('cors'); // importe o cors
const dotenv = require('dotenv');
const countryRoutes = require('./routes/countryRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use('/api', countryRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
