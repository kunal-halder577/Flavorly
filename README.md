# Flavorly

Flavorly is a recipe search and discovery web application built with React. It allows users to explore recipes based on specific criteria like cuisine, diet, meal type, preparation time, and ingredients. The app includes a robust serverless proxy backend to securely interact with the Spoonacular API, featuring automatic API key rotation to handle quota limits and email notifications for exhausted keys.

## Features

- **Advanced Recipe Search & Filtering**: Find recipes by name, cuisine, dietary restrictions, meal type, max prep time, and specific included/excluded ingredients.
- **Detailed Recipe Views**: View comprehensive recipe information, including nutritional data.
- **Serverless API Proxy**: Secures Spoonacular API keys by proxying requests through Vercel serverless functions.
- **Automatic API Key Rotation**: Gracefully handles API rate limits (402, 429) by automatically switching between multiple fallback API keys.
- **Admin Quota Notifications**: Automatically sends an email alert to the admin (via Brevo) when all API keys have exhausted their daily quotas.
- **Modern UI**: Fully responsive and animated user interface using Tailwind CSS and Framer Motion.

## Tech Stack

- **Frontend Framework**: React 19, Vite
- **Routing**: React Router DOM (v7)
- **Styling**: Tailwind CSS (v4), PostCSS
- **Animations & Components**: Framer Motion, Swiper, Lucide React, FontAwesome
- **Backend Proxy**: Vercel Serverless Functions
- **Email Service**: Brevo (`@getbrevo/brevo`)

## Prerequisites

- Node.js (v22.x recommended, per `package.json` engines)
- npm or yarn

## Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to the project directory
cd flavorly

# Install dependencies
npm install
```

## Environment Variables

Create a `.env.local` file in the root directory and add the following variables. *Note: Since there is no `.env.example` in the repository, you must create the `.env.local` file manually.*

| Variable Name | Required | Description |
| :--- | :--- | :--- |
| `API_KEY_1` | Yes | Primary Spoonacular API key. |
| `API_KEY_2` | Optional | First fallback Spoonacular API key for rotation. |
| `API_KEY_3` | Optional | Second fallback Spoonacular API key for rotation. |
| `API_KEY_4` | Optional | Third fallback Spoonacular API key for rotation. |
| `BREVO_API_KEY` | Yes | Brevo API key for sending admin quota exhaustion emails. |

## Usage

### Development

To start the development server:
```bash
npm run dev
```

### Production Build

To build the app for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

### Linting

To run the ESLint linter:
```bash
npm run lint
```

## Project Structure

```text
flavorly/
├── api/
│   └── proxy/                  # Vercel Serverless Functions
│       ├── proxyApi.js         # Core proxy logic, API key rotation, & Brevo notifications
│       └── recipes/            # Spoonacular proxy endpoints (complexSearch, random, [id])
├── src/
│   ├── api.js                  # Frontend API client logic
│   ├── components/             # Reusable React components (Header, Footer, Filter, etc.)
│   ├── context/                # React Context providers (FilterProvider)
│   ├── pages/                  # Route components (Home, SearchPage, NotAvailable)
│   ├── App.jsx                 # Main layout and routing outlet
│   └── main.jsx                # Application entry point and router configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite configuration
└── vercel.json                 # Vercel deployment configuration
```

## Notable Implementation Details

- **Key Rotation Middleware (`api/proxy/proxyApi.js`)**: The Vercel proxy iterates through an array of API keys. If Spoonacular returns a 401, 402, or 429 status code, it immediately retries the request using the next key in the rotation.
- **Admin Alert Cooldown**: To prevent email spam, the Brevo notification system in the proxy includes a 10-minute cooldown mechanism for quota exhaustion alerts.
- **Global Filter State**: The `FilterProvider` context wraps the main application layout, enabling deep integration of search parameters across the header search bar, sidebar filters, and API fetching logic.
