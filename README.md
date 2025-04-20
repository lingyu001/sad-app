# StockInsight App

A simple web application for stock analysis and insights built with Next.js App Router and TypeScript.

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

The project follows a modern Next.js App Router structure with TypeScript:

```
sad-app/
├── app/                   # App Router directory
│   ├── api/               # API routes
│   │   ├── stocks/        # Stock data API
│   │   └── analysis/      # Analysis API
│   ├── components/        # Server components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions
│   ├── error.tsx          # Error handling
│   ├── layout.tsx         # Root layout
│   ├── loading.tsx        # Loading state
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── components/
│   ├── layout/            # Layout components (Header, Footer)
│   ├── ui/                # Reusable UI components (Button, etc.)
│   └── features/          # Feature-specific components
│       ├── stocks/        # Stock-related components
│       └── market/        # Market-related components
├── contexts/              # React Context for state management
│   └── StockContext.tsx   # Stock data context
├── public/                # Static assets
│   ├── images/            # Image files
│   └── fonts/             # Font files
├── styles/                # CSS styles
│   └── globals.css        # Global styles
└── package.json           # Dependencies and scripts
```

## Tech Stack

- **Frontend Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: React Context & Hooks
- **Data Fetching**: SWR with Next.js data fetching
- **Charts**: Chart.js with react-chartjs-2
- **Animations**: Framer Motion
- **Drag and Drop**: react-dnd

## Benefits of App Router Migration

The migration to Next.js App Router provides several benefits:

1. **Built-in Data Fetching**: Leverages React Server Components for efficient data loading
2. **Improved Caching**: Automatic caching of fetch requests with fine-grained control
3. **Simplified API Routes**: Enhanced API route handlers
4. **Streaming & Suspense**: Gradual rendering of UI with React Suspense
5. **Layout System**: Persistent layouts across page navigations
6. **Error Handling**: Improved error boundaries and recovery
7. **Loading States**: Built-in loading UI