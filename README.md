```markdown
# Energy Saving Portal

The **Energy Saving Portal** is a dynamic, responsive dashboard application built using **React**, **Next.js**, **TypeScript**, and **Bootstrap** for responsive design. The dashboard displays data like voltage, current, power, and energy savings, and visualizes savings using a half-doughnut gauge chart.

## Features

- Displays voltage, current, and power metrics
- Gauge chart to represent energy savings rate
- Responsive design using Bootstrap
- Real-time data fetching using Axios
- Built with TypeScript for type safety

## Project Structure

The project follows a standard **Next.js** file structure:

```bash
energy-saving-portal/
├── components/          # Reusable UI components
│   ├── Dashboard.tsx    # Main dashboard component displaying metrics
│   ├── GaugeChart.tsx   # Custom gauge chart component (half-doughnut chart)
│
├── pages/               # Next.js pages folder
│   ├── index.tsx        # Entry point of the application (renders the dashboard)
│   ├── api/             # API routes for data fetching
│       ├── data.ts      # Mock API for providing dashboard data
│
├── public/              # Static files (e.g., images, icons)
│
├── styles/              # Global styles
│   ├── globals.css      # Global styles (including Bootstrap overrides)
│
├── package.json         # Project dependencies and scripts
├── tsconfig.json        # TypeScript configuration
├── next.config.js       # Next.js configuration
├── README.md            # Project documentation (you are here)
```

## Prerequisites

Make sure you have the following installed:

- **Node.js** (>= v18.17.0)
- **npm** (comes with Node.js)

To check your Node.js version, run:
```bash
node -v
```

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-repo/energy-saving-portal.git
```

2. Navigate to the project folder:

```bash
cd energy-saving-portal
```

3. Install dependencies:

```bash
npm install
```

4. Run the development server:

```bash
npm run dev
```

Your app should now be running at [http://localhost:3000](http://localhost:3000).

## How to Use

- **Dashboard**: Visit the root page of the application at [http://localhost:3000](http://localhost:3000) to see the main dashboard.
- **Gauge Chart**: The dashboard includes a dynamic gauge chart representing the energy savings percentage, and this value is displayed at the center of the chart.

## Key Components

### `Dashboard.tsx`

This is the main component that renders various cards displaying voltage, current, and power data. It also integrates the `GaugeChart` component for displaying energy savings.

### `GaugeChart.tsx`

A custom chart component built using **Chart.js** and **react-chartjs-2**. It displays a half-doughnut gauge chart showing the rate of energy savings.

### `data.ts`

This file contains a mock API (`/api/data`) that simulates data fetching using Next.js API routes.

## Project Structure Explained

- **components/**: Contains all reusable UI components. Here, the `Dashboard.tsx` component is the main layout for the dashboard, while `GaugeChart.tsx` handles the display of energy savings in a gauge chart.

- **pages/**: This is where Next.js serves the app's pages. The main entry point is `index.tsx`, which renders the dashboard. The `api/data.ts` file acts as an API route to serve mock data for the dashboard.

- **styles/**: Contains the global styles, including any custom Bootstrap overrides or additional styling needed for the app.

- **public/**: Holds static assets such as images, icons, etc.

## Running the Project

To run the project in development mode:

```bash
npm run dev
```

For production build:

```bash
npm run build
npm start
```

### Available Scripts

- **`npm run dev`**: Runs the app in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm start`**: Starts the production server.
- **`npm run lint`**: Lints the project using ESLint.

## Tech Stack

- **Next.js**: Framework for server-rendered React applications.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Bootstrap**: For responsive design and styling.
- **Axios**: For data fetching.
- **Chart.js**: For building the gauge chart.

## License

This project is licensed under the MIT License. Feel free to use it and contribute!

```

---

### Key Points in the `README.md`

- **Project Structure**: It describes the folder hierarchy clearly and gives a brief explanation of each key folder and file.
- **Prerequisites**: Ensures the correct Node.js version is installed, avoiding errors.
- **Installation and Setup**: Step-by-step guide to cloning the repository, installing dependencies, and running the project.
- **Usage**: Instructions on how to navigate the dashboard and understand the components like `GaugeChart.tsx`.
- **Running the Project**: Instructions for running in both development and production modes.
- **Tech Stack**: Clarifies which technologies are used in the project, helping future developers understand the context.

This README file should help others quickly set up and understand the structure of your energy-saving portal project.
