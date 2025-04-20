# StockInsight App

A simple web application for stock analysis and insights built with Next.js and TypeScript.

## Prerequisites

- Node.js 14.x or later
- npm or yarn

## Getting Started

Follow these steps to build and run the application locally:

1. Clone the repository
2. Install dependencies
3. Run the development server
4. Build for production (optional)

### 1. Install Dependencies

```bash
npm install
# or
yarn install
```

### 2. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 3. Build for Production (Optional)

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Features

- Market overview
- Stock search
- Fundamental data display
- Analysis tools with drag and drop functionality
- Interactive charts

## Project Structure

The project follows a modern Next.js structure with TypeScript:

```
sad-app/
├── components/
│   ├── layout/              # Layout components (Header, Footer)
│   ├── ui/                  # Reusable UI components (Button, etc.)
│   └── features/            # Feature-specific components
│       ├── stocks/          # Stock-related components
│       └── market/          # Market-related components
├── pages/
│   ├── _app.tsx             # Custom App component
│   ├── index.tsx            # Homepage
│   └── api/                 # API routes
│       └── stocks.ts        # Stock data API
├── hooks/                   # Custom React hooks
│   └── useStockData.ts      # Hook for fetching stock data
├── utils/                   # Utility functions
│   └── formatters.ts        # Formatting utilities
├── styles/                  # CSS styles
│   └── globals.css          # Global styles
├── contexts/                # React Context for state management
│   └── StockContext.tsx     # Stock data context
├── public/                  # Static assets
│   ├── images/              # Image files
│   └── fonts/               # Font files
└── package.json             # Dependencies and scripts
```

## Tech Stack

- **Frontend Framework**: Next.js
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context & Hooks
- **Charts**: Chart.js with react-chartjs-2
- **Animations**: Framer Motion
- **Drag and Drop**: react-dnd