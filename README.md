# Flight Tracker

This project is a flight tracking application built with React, TypeScript, and Vite. It allows users to manage airlines
and airports, view live airport locations, and perform CRUD operations on airlines and airports.

## Technologies Used

- React
- React Router dom
- Redux Toolkit
- TypeScript
- Vite
- Ant Design
- Google Maps JavaScript API
- Tailwind CSS
- I18next
- Dayjs

## Project Structure

```plaintext
├── src
│   ├── assets - Contains project images and icons
│   ├── components - Contains reusable components
│   ├── constants - Contains constants used in the project
│   ├── helpers - Contains helper functions
│   ├── hooks - Contains custom hooks
│   ├── interfaces - Contains TypeScript interfaces that use typescript utility types
│   ├── pages - Contains pages of the application
│   ├── services - Contains API and store services
```

## Getting Started

### Prerequisites

- Node.js (>= 20.x)
- Yarn or npm

### Installation

1. Clone the repository:

```sh
   git clone https://github.com/DominikHanzevacki/flight-tracker-frontend.git
   cd flight-tracker-frontend
```

2. Install dependencies:

```sh
   yarn install
```

3. Start the development server:

```sh
   yarn dev
```

### Running Locally

Make sure you have the backend running locally on port 8000.
You can do this by cloning the backend repository and running it.
All the instructions for running the backend can be found in the backend repositories README.md file.

```sh
   git clone https://github.com/DominikHanzevacki/flight-tracker-backend.git
   cd flight-tracker-backend
```

Check existing .env file in the root directory if it contains the following environment variables:

- VITE_BACKEND_URL=http://localhost:8000/api

- VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

### Build and Deploy

Check existing .env.production file in the root directory if it contains the following environment variables:

- VITE_BACKEND_URL=https://flight-tracker-be-production.up.railway.app/api

- VITE_GOOGLE_MAPS_API_KEY=your-google-maps-api-key

This project is deployed on Railway (https://flight-tracker-frontend-production.up.railway.app).
Any change to the master branch will automatically trigger a deploy to production.
Before making changes to main branch, please make sure that `yarn lint` and `yarn build` commands are successful.
