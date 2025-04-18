# Travel Ease - Travel Planning Application

A modern web application for planning and managing your trips, built with Next.js and React.

## Project Structure

```
travel-ease/
├── app/                    # Next.js app directory
│   ├── trips/             # Trips related pages
│   │   ├── [id]/          # Dynamic trip detail pages
│   │   └── page.js        # Trips listing page
│   ├── layout.js          # Root layout
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── TripCard/         # Trip card component
│   ├── Navbar/           # Navigation component
│   └── Footer/           # Footer component
├── context/              # React context
│   └── TripContext.js    # Trip state management
└── public/               # Static assets
    └── images/           # Image assets
```

## Components

### TripCard
A reusable card component for displaying trip information in a grid layout.

### Navbar
Navigation component with links to different sections of the application.

### Footer
Footer component with additional links and information.

## State Management

The application uses React Context for state management:

- `TripContext`: Manages trip-related state including:
  - List of trips
  - Adding new trips
  - Updating existing trips
  - Deleting trips
  - Getting trip details

## Routing

The application uses Next.js file-based routing:

- `/trips`: Displays a list of all trips
- `/trips/[id]`: Shows details for a specific trip

## Styling

The application uses CSS Modules for component-specific styles and CSS variables for theming:

- Color scheme
- Spacing
- Typography
- Responsive design

## Features

- View list of trips
- View trip details
- Add new trips
- Edit existing trips
- Delete trips
- View trip itinerary
- Track trip budget

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser



