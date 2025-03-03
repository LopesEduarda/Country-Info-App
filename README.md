# 🌍 Country Info API - Backend

This is the backend of the **Country Info App**, an application that provides information about countries, including a list of available countries, demographics, borders, and flags. The project is built with **Node.js** and **Express** and follows an organized structure with **controllers**, **services**, and **routes** .



## 📑 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Running the Server](#running-the-server)
4. [Environment Variables](#environment-variables)
5. [Endpoints](#endpoints)
    - [Get Available Countries](#1-get-available-countries)
    - [Get Country Info](#2-get-country-info)
6. [Error Handling](#error-handling)

---

## ⚙️ Requirements

- **Node.js** v14+ (Node.js v21.6.1 recommended)
- **NPM** v6+

## 📥 Installation

1. **Clone the repository**:
   git clone git@github.com:LopesEduarda/Country-Info-App.git
   cd Country-Info-App/backend



## 📥 Install dependencies:

    npm install


## Set up environment variables:
Create a .env file in the backend folder and specify the desired port:

    PORT=5000
    NAGER_BASE_URL=https://date.nager.at/api/v3
    COUNTRIESNOW_POPULATION_URL=https://countriesnow.space/api/v0.1/countries/population
    COUNTRIESNOW_FLAG_URL=https://countriesnow.space/api/v0.1/countries/flag/images


##  Running the Server
To start the server in development mode with Nodemon:

    npm run dev

The backend will be available at http://localhost:5000.





## Endpoints

1. Get Available Countries
Description: Returns a list of available countries.
Endpoint: /api/available-countries
Method: GET
Success Response:
Status Code: 200 OK

GET http://localhost:5000/api/available-countries


2. Get Country Info
Description: Returns detailed information about a specific country, including its name, borders, population data, and flag URL.
Endpoint: /api/country-info/:code
is the country code (e.g., UA for Ukraine).
Method: GET
Success Response:
Status Code: 200 OK

GET GET http://localhost:5000/api/country-info/UA



## 🚨 Error Handling
Each endpoint provides clear error messages in case of failures, whether due to network issues, invalid country codes, or errors from external APIs.

General Error:

Status Code: 500 Internal Server Error


Invalid Country Code:

Status Code: 404 Not Found






-----







# 🌍 Country Info API - Frontend

This is the frontend of the Country Info App, a web application that provides information about countries, including a list of available countries, demographics, borders, and flags. The project is built with React and Next.js and follows an organized structure with pages, components, and services.

## 📑 Table of Contents
Requirements
Installation
Running the Application
Environment Variables
Pages and Functionality
---

## ⚙️ Requirements

- **Node.js** v14+ (Node.js v21.6.1 recommended)
- **NPM** v6+

## 📥 Installation

1. **Clone the repository**:
   git clone git@github.com:LopesEduarda/Country-Info-App.git
   cd Country-Info-App/backend



## 📥 Install dependencies:

    npm install


## Set up environment variables:
Create a .env.local file in the frontend folder to specify the backend API URL:

    NEXT_PUBLIC_API_URL=http://localhost:5000/api



##   Running the Application
To start the application in development mode with Nodemon:

    npm run dev

The frontend will be available at http://localhost:3000.





## 📄 Pages and Functionality
The frontend consists of the following main pages and components:

Home Page (List of Countries):

Path: /
Description: Displays a list of all available countries, fetched from the backend API.
Functionality: Each country name is clickable, leading to the country’s detail page.
Country Detail Page:

Path: /country?code=COUNTRY_CODE
Description: Shows detailed information about a specific country, including:
Country Name: Displayed prominently at the top.
Country Flag: Displayed next to the country name.
Border Countries: A list of neighboring countries, each clickable to view that country’s details.
Population Data: A list of historical population data.
Back Button: Returns to the list of all countries.


Error Handling
The application gracefully handles errors by displaying appropriate messages when:

Data cannot be fetched due to network issues.
Invalid country codes are provided in the URL.
The backend API returns an error.


